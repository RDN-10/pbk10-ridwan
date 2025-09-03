<template>
  <div class="profil-wrapper">
    <div class="glow-overlay"></div>
    <div class="profil-container">
      <h2>Profil Pengguna</h2>
      <img src="https://tse4.mm.bing.net/th/id/OIP.MA5uadKMfxRz90ZZaojkpwHaEo?pid=Api&P=0&h=220" alt="Foto Profil" class="avatar" />

      <div class="info">
        <p><strong>Nama:</strong> RIDWAN ABRILLA</p>
        <p><strong>Email:</strong> ridwan@gmail.com</p>
        <p><strong>Username:</strong>RDN</p>
        <p><strong>No. Telepon:</strong> 081234567890</p>
        <p><strong>Alamat:</strong> Jl. Merdeka No. 123, Jakarta</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profil',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.profil-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  overflow: hidden;
  padding: 40px 20px;
}

.glow-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0,255,255,0.08), transparent 70%);
  animation: glowPulse 6s ease-in-out infinite alternate;
  z-index: 0;
}

@keyframes glowPulse {
  0% {
    background: radial-gradient(circle at center, rgba(0,255,255,0.08), transparent 70%);
  }
  100% {
    background: radial-gradient(circle at center, rgba(255,0,255,0.08), transparent 70%);
  }
}

.profil-container {
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 100%;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  color: white;
  text-align: center;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 4px solid #00ffff;
  box-shadow: 0 0 12px #00ffff;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
}

.info {
  text-align: left;
  margin-top: 20px;
}

.info p {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #e0f7fa;
}

.info strong {
  color: #00e5ff;
}
</style>
