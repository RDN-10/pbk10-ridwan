<template>
  <div class="login-wrapper">
    <div class="animated-bg"></div>
    <div class="glow-overlay"></div>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label>Username:</label>
          <input v-model="username" type="text" required />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        localStorage.setItem('userLoggedIn', 'true');
        alert(`Login berhasil dengan username: ${this.username}`);
        this.$router.push('/dashboard');
      } else {
        alert('Username dan password harus diisi!');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Rajdhani:wght@500&display=swap');

.login-wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Rajdhani', sans-serif;
  padding: 0 20px;
  box-sizing: border-box;
}

.animated-bg::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: radial-gradient(circle, rgba(0,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: moveBG 30s linear infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes moveBG {
  0% { transform: rotate(0deg) translateX(0); }
  100% { transform: rotate(360deg) translateX(0); }
}

.glow-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.05), transparent 70%);
  animation: pulseGlow 5s ease-in-out infinite alternate;
  z-index: 1;
}

@keyframes pulseGlow {
  0% {
    background: radial-gradient(circle at center, rgba(0, 255, 255, 0.08), transparent 70%);
  }
  100% {
    background: radial-gradient(circle at center, rgba(255, 0, 255, 0.08), transparent 70%);
  }
}

.login-container {
  position: relative;
  z-index: 2;
  max-width: 400px;
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(14px);
  color: #fff;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px #00ffff;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #ccc;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0,255,255,0.2);
}

input:focus {
  box-shadow: 0 0 8px #00ffff;
}

button {
  margin-top: 10px;
  padding: 12px;
  background-color: #00c853;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #00a643;
  transform: scale(1.05);
}
</style>
