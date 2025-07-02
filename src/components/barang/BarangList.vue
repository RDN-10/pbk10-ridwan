<template>
  <div class="barang-wrapper">
    <div class="glow-overlay"></div>
    <div class="floating-icons">
      <span class="icon">🛒</span>
      <span class="icon">💻</span>
      <span class="icon">🕹️</span>
    </div>
    <div class="barang-list-container">
      <h2>Daftar Barang</h2>
      <p>Menampilkan list semua barang inventaris.</p>

      <table class="barang-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in barang" :key="item.id">
            <td><img :src="item.foto" :alt="item.nama" class="foto-barang" /></td>
            <td>{{ item.nama }}</td>
            <td>{{ item.kategori }}</td>
            <td>{{ item.stok }}</td>
            <td v-if="item.harga">{{ formatRupiah(item.harga) }}</td>
            <td v-else>Rp 0</td>

            <td>
              <button class="beli-btn" @click="beliBarang(item)">Beli</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useBarangStore } from '@/store/barang'; // sesuaikan path

const barangStore = useBarangStore();
const router = useRouter();

// Fetch data saat komponen dimount
onMounted(() => {
  barangStore.fetchBarang();
});

// Ambil data dari store
const barang = computed(() => barangStore.daftarBarang);

// Format harga ke rupiah
const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
};

// Aksi beli barang
const beliBarang = (item) => {
  const jumlah = parseInt(prompt('Masukkan jumlah yang ingin dibeli:'), 10);
  if (isNaN(jumlah) || jumlah <= 0) return alert('Jumlah tidak valid');
  if (jumlah > item.stok) return alert('Stok tidak mencukupi');

  const cartData = localStorage.getItem('cart');
  let cart = cartData ? JSON.parse(cartData) : [];

  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += jumlah;
  } else {
    cart.push({
      id: item.id,
      nama: item.nama,
      kategori: item.kategori,
      harga: item.harga,
      stok: item.stok,
      foto: item.foto,
      quantity: jumlah
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Barang dimasukkan ke keranjang!');
  router.push('/keranjang');
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.barang-wrapper {
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  padding: 60px 20px;
  overflow: hidden;
  font-family: 'Rajdhani', sans-serif;
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

.floating-icons {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 15px;
  z-index: 2;
}

.icon {
  font-size: 28px;
  animation: floatIcon 4s ease-in-out infinite;
  color: #00ffff;
  filter: drop-shadow(0 0 6px #00ffff);
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.barang-list-container {
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
}

h2 {
  text-align: center;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  text-align: center;
  margin-bottom: 25px;
  color: #ccc;
  font-size: 1.1rem;
}

.barang-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.barang-table thead {
  background: #2575fc;
  color: white;
}

.barang-table th,
.barang-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
}

.foto-barang {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(37, 117, 252, 0.2);
}

.barang-table tbody tr:hover {
  background-color: rgba(0, 255, 255, 0.05);
  cursor: pointer;
}

.beli-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.beli-btn:hover {
  background-color: #388e3c;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .barang-list-container {
    padding: 15px;
  }

  .barang-table th,
  .barang-table td {
    padding: 8px 10px;
  }

  .foto-barang {
    width: 60px;
    height: 45px;
  }

  .beli-btn {
    padding: 5px 10px;
    font-size: 0.85rem;
  }
}
</style>
