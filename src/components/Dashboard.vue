<template>
  <div class="dashboard-wrapper">
    <div class="glow-overlay"></div>

    <div class="background-animation">
      <div class="spaceship"></div>
      <div class="laser"></div>
      <div class="stars"></div>
    </div>

    <div class="floating-icons">
      <span class="icon">🎮</span>
      <span class="icon">🖥️</span>
      <span class="icon">⚡</span>
    </div>

    <div class="dashboard-content">
      <h1>Gaming Store</h1>
      <p>
        Selamat datang di Gaming Store kami! Kami menyediakan berbagai perlengkapan gaming mulai dari konsol,
        aksesoris, hingga komponen PC berkualitas tinggi. Temukan pilihan terbaik untuk meningkatkan pengalaman
        bermainmu – hanya di sini tempat para gamer sejati berkumpul!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Rajdhani:wght@600&display=swap');

.dashboard-wrapper {
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  font-family: 'Rajdhani', sans-serif;
}

.glow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,255,255,0.1), transparent 70%);
  animation: pulseGlow 6s infinite alternate;
  z-index: 0;
}

@keyframes pulseGlow {
  0% { background: radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%); }
  100% { background: radial-gradient(circle, rgba(255,0,255,0.15), transparent 70%); }
}

.background-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.spaceship {
  position: absolute;
  top: 100%;
  left: -10%;
  width: 60px;
  height: 30px;
  background: linear-gradient(to right, #ff00cc, #3333ff);
  border-radius: 10px;
  animation: flySpaceship 10s linear infinite;
  box-shadow: 0 0 10px #ff00cc, 0 0 20px #3333ff;
}

@keyframes flySpaceship {
  0% { transform: translate(0, 0); }
  100% { transform: translate(120vw, -120vh); }
}

.laser {
  position: absolute;
  width: 2px;
  height: 100vh;
  background: linear-gradient(to top, transparent, #00ffff, transparent);
  left: 50%;
  top: 0;
  animation: laserPulse 2s ease-in-out infinite;
}

@keyframes laserPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
}

.stars::before {
  content: '';
  position: absolute;
  width: 300%;
  height: 300%;
  background: radial-gradient(white 1px, transparent 1px);
  background-size: 10px 10px;
  animation: moveStars 60s linear infinite;
  opacity: 0.1;
}

@keyframes moveStars {
  from { transform: translate(0, 0); }
  to { transform: translate(-500px, -500px); }
}

.floating-icons {
  position: absolute;
  top: 20px;
  left: 20px;
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

.dashboard-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 50px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), 0 0 80px rgba(255, 0, 255, 0.1);
  transform: rotateX(10deg) rotateY(-10deg) scale(1);
  transition: transform 0.5s ease;
  text-align: center;
  z-index: 2;
  max-width: 800px;
}

.dashboard-content:hover {
  transform: rotateX(0deg) rotateY(0deg) scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.3), 0 0 100px rgba(255, 0, 255, 0.2);
}

.dashboard-content h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
  margin-bottom: 20px;
}

.dashboard-content p {
  font-size: 1.3rem;
  color: #ffffff;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  line-height: 2;
}
</style>
