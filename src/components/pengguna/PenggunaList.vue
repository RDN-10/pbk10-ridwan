<template>
  <div class="pengguna-wrapper">
    <div class="glow-overlay"></div>
    <div class="pengguna-list">
      <div class="header">
        <h2>Daftar Pengguna</h2>
        <p>Menampilkan semua pengguna sistem.</p>
      </div>

      <table class="tabel-pengguna">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lengkap</th>
            <th>Email</th>
            <th>Peran</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pengguna, index) in penggunaList" :key="pengguna.id">
            <td>{{ index + 1 }}</td>
            <td>{{ pengguna.nama }}</td>
            <td>{{ pengguna.email }}</td>
            <td>{{ pengguna.peran }}</td>
            <td>
              <span :class="{'status-aktif': pengguna.status === 'Aktif', 'status-nonaktif': pengguna.status === 'Nonaktif'}">
                {{ pengguna.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PenggunaList',
  data() {
    return {
      penggunaList: [
        { id: 1, nama: 'Andi Setiawan', email: 'andi@example.com', peran: 'Admin', status: 'Aktif' },
        { id: 2, nama: 'Rina Marlina', email: 'rina@example.com', peran: 'User', status: 'Aktif' },
        { id: 3, nama: 'Budi Santoso', email: 'budi@example.com', peran: 'Moderator', status: 'Nonaktif' },
        { id: 4, nama: 'Siti Rahmawati', email: 'siti@example.com', peran: 'User', status: 'Aktif' }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.pengguna-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 60px 20px;
  font-family: 'Rajdhani', sans-serif;
  overflow: hidden;
}

.glow-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,255,255,0.06), transparent 70%);
  animation: pulseGlow 6s infinite alternate;
  z-index: 0;
}

@keyframes pulseGlow {
  0% {
    background: radial-gradient(circle, rgba(0,255,255,0.09), transparent 70%);
  }
  100% {
    background: radial-gradient(circle, rgba(255,0,255,0.09), transparent 70%);
  }
}

.pengguna-list {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(12px);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  font-size: 2.2rem;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px #00ffff;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  color: #ddd;
}

.tabel-pengguna {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.tabel-pengguna thead {
  background-color: #00c3ff;
  color: white;
}

.tabel-pengguna th,
.tabel-pengguna td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tabel-pengguna tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

.tabel-pengguna tbody tr:hover {
  background-color: rgba(0, 255, 255, 0.05);
  cursor: pointer;
}

.status-aktif {
  color: #00e676;
  font-weight: bold;
  text-shadow: 0 0 6px #00e676;
}

.status-nonaktif {
  color: #ff3d00;
  font-weight: bold;
  text-shadow: 0 0 6px #ff3d00;
}

@media (max-width: 768px) {
  .tabel-pengguna th,
  .tabel-pengguna td {
    padding: 10px;
    font-size: 0.9rem;
  }

  .header h2 {
    font-size: 1.8rem;
  }

  .header p {
    font-size: 0.95rem;
  }
}
</style>
