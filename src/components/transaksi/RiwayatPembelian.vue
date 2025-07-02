<template>
  <div class="riwayat-wrapper">
    <div class="glow-overlay"></div>
    <div class="riwayat-container">
      <h2>Riwayat Pembelian</h2>

      <table class="riwayat-table" v-if="riwayat?.length > 0">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in riwayat" :key="item.id || index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ formatRupiah(item.harga) }}</td>
            <td>{{ item.jumlah }}</td>
            <td>{{ item.tanggal }}</td>
            <td>
              <button @click="hapusRiwayat(item.id)" class="hapus-btn" aria-label="Hapus riwayat">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else>Tidak ada riwayat pembelian tersedia.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePenjualanStore } from '@/store/penjualan'

const penjualanStore = usePenjualanStore()

onMounted(() => {
  penjualanStore.fetchPenjualan()
})

const riwayat = computed(() => penjualanStore.daftarPenjualan)

function hapusRiwayat(id) {
  if (confirm('Yakin ingin menghapus riwayat ini?')) {
    penjualanStore.hapusPenjualan(id)
  }
}

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.riwayat-wrapper {
  position: relative;
  min-height: 100vh;
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

.riwayat-container {
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

.riwayat-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.3);
}

.riwayat-table th {
  background: #2575fc;
  color: white;
  padding: 12px;
}

.riwayat-table td {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #eee;
}

.riwayat-table tbody tr:hover {
  background-color: rgba(0, 255, 255, 0.05);
  transition: background-color 0.2s ease-in-out;
}

p {
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
}

.hapus-btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.hapus-btn:hover {
  background-color: #ff1a1a;
}

</style>