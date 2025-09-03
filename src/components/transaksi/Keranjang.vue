<template>
  <div class="keranjang-wrapper">
    <div class="glow-overlay"></div>
    <div class="keranjang-container">
      <h2>Keranjang Belanja</h2>
      <table v-if="cart.length > 0" class="keranjang-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Total</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td><img :src="item.foto" alt="" class="foto" /></td>
            <td>{{ item.nama }}</td>
            <td>{{ item.kategori }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ formatRupiah(item.harga) }}</td>
            <td>{{ formatRupiah(item.harga * item.quantity) }}</td>
            <td>
              <button class="hapus-btn" @click="hapusItem(item.id)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else class="kosong">Keranjang masih kosong.</p>

      <div v-if="cart.length > 0" class="checkout">
        <p><strong>Total Bayar: {{ formatRupiah(totalBayar) }}</strong></p>
        <button class="checkout-btn" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Keranjang',
  data() {
    return {
      cart: []
    }
  },
  computed: {
    totalBayar() {
      return this.cart.reduce((sum, item) => sum + (item.harga * item.quantity), 0)
    }
  },
  mounted() {
    this.loadCart()
  },
  methods: {
    loadCart() {
      const data = localStorage.getItem('cart')
      this.cart = data ? JSON.parse(data) : []
    },
    formatRupiah(n) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(n)
    },
    hapusItem(id) {
      this.cart = this.cart.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    async checkout() {
      const namaPembeli = "Guest"
      const tanggal = new Date().toISOString().split("T")[0]
      const API_URL = 'https://gamingstores.glitch.me'

      try {
        for (let item of this.cart) {
          // Mengambil data stok terbaru
          const res = await axios.get(`${API_URL}/barang/${item.id}`)
          const currentStock = res.data.stok

          if (item.quantity > currentStock) {
            alert(`Stok ${item.nama} tidak cukup!`)
            return // Menghentikan proses checkout jika stok tidak cukup
          }

          // ********************************************************************
          // Bagian ini adalah penyebab error 404. Endpoint POST /riwayat
          // di server backend (Glitch) kemungkinan tidak ada atau salah.
          // Frontend sudah benar dalam mencoba mengirim data,
          // tapi backend tidak siap menerimanya.
          // ********************************************************************
          await axios.post(`${API_URL}/riwayat`, {
            tanggal,
            pembeli: namaPembeli,
            nama: item.nama,
            harga: item.harga,
            jumlah: item.quantity,
            total: item.harga * item.quantity
          })

          // Mengurangi stok setelah transaksi berhasil dicatat
          await axios.patch(`${API_URL}/barang/${item.id}`, {
            stok: currentStock - item.quantity
          })
        }

        alert("Checkout berhasil!")

        // Mengosongkan keranjang dan menghapus dari localStorage
        localStorage.removeItem('cart')
        this.cart = []
        // Mengarahkan pengguna ke halaman riwayat
        this.$router.push('/riwayat')

      } catch (err) {
        // Logging error yang lebih spesifik untuk debugging
        console.error("Checkout gagal:", err.message, err.response ? err.response.data : '');
        alert("Checkout gagal, coba lagi. Pastikan server backend berjalan dan endpoint '/riwayat' tersedia.");
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.keranjang-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  padding: 60px 20px;
  font-family: 'Rajdhani', sans-serif;
  overflow-x: hidden;
}

.glow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,255,255,0.08), transparent 70%);
  animation: pulseGlow 6s infinite alternate;
  z-index: 0;
}

@keyframes pulseGlow {
  0% {
    background: radial-gradient(circle, rgba(0,255,255,0.12), transparent 70%);
  }
  100% {
    background: radial-gradient(circle, rgba(255,0,255,0.12), transparent 70%);
  }
}

.keranjang-container {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: auto;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  padding: 30px;
  color: #fff;
}

h2 {
  text-align: center;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.keranjang-table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(0, 0, 0, 0.3);
}

.keranjang-table th,
.keranjang-table td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.foto {
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 255, 255, 0.3);
}

.hapus-btn {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.hapus-btn:hover {
  background-color: #c62828;
}

.checkout {
  margin-top: 20px;
  text-align: right;
}

.checkout-btn {
  background-color: #00bcd4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #0097a7;
}

.kosong {
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  margin-top: 20px;
}
</style>
