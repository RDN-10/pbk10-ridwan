import { createRouter, createWebHistory } from 'vue-router'

// Import komponen halaman
import Dashboard from '../components/Dashboard.vue'
import BarangList from '../components/barang/BarangList.vue'
import LaporanStok from '../components/barang/LaporanStok.vue' // pastikan path ini benar
import RiwayatPembelian from '../components/transaksi/RiwayatPembelian.vue'
import Keranjang from '../components/transaksi/Keranjang.vue'
import PenggunaList from '../components/pengguna/PenggunaList.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Profil from '../components/Profil.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard' // Redirect root ke dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/barang',
    name: 'BarangList',
    component: BarangList
  },
  {
    path: '/laporan-stok',
    name: 'LaporanStok',
    component: LaporanStok // diperbaiki di sini
  },
  {
    path: '/riwayat',
    name: 'RiwayatPembelian',
    component: RiwayatPembelian
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/pengguna',
    name: 'PenggunaList',
    component: PenggunaList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
