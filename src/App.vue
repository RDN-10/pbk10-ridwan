<template>
  <div>
    <!-- Full-width Navbar -->
    <nav v-if="showNavbar" class="navbar">
      <router-link to="/dashboard">Home</router-link>
      <router-link to="/barang">Barang</router-link>
      <router-link to="/keranjang">Keranjang</router-link>
      <router-link to="/riwayat">Riwayat Pembeli</router-link>
      <router-link to="/pengguna">Pengguna</router-link>
      <router-link to="/profil">Profil</router-link>

      <button @click="logout" class="logout-button">Logout</button>
    </nav>

    <!-- Line separator -->
    <hr />

    <!-- Router outlet for page content -->
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'AppLayout',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const showNavbar = computed(() => route.name !== 'Login')

    function logout() {
      localStorage.removeItem('userLoggedIn')
      router.push({ name: 'Login' })
    }

    return { showNavbar, logout }
  }
}
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  width: 100vw;
  background: radial-gradient(circle at top left, #1a1a2e, #16213e);
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 0;
  margin: 0;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.6),
    inset 0 1px 4px rgba(255, 255, 255, 0.05),
    inset 0 -1px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  flex-wrap: nowrap;
  position: relative;
  z-index: 1000;
}

/* Navbar Links */
.navbar a {
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 transparent;
}

.navbar a:hover {
  background-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
  transform: translateY(-3px) scale(1.05);
}

.navbar a.router-link-exact-active {
  background-color: rgba(0, 255, 255, 0.3);
  color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

/* Logout Button */
.logout-button {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
  box-shadow: 0 2px 6px rgba(255, 50, 50, 0.2);
}

.logout-button:hover {
  background-color: rgba(255, 50, 50, 0.25);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 50, 50, 0.4);
}

/* Separator */
hr {
  margin: 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #00b4db, #0083b0);
}

/* Responsive Navbar */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    gap: 16px;
    padding: 12px 20px;
  }

  .navbar a,
  .logout-button {
    font-size: 0.95rem;
    padding: 8px 12px;
  }
}
</style>
