// src/store/penjualan.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePenjualanStore = defineStore('penjualan', {
  state: () => ({
    daftarPenjualan: []
  }),
  actions: {
    async fetchPenjualan() {
      try {
        // Pakai proxy route ke Netlify
        const res = await axios.get('/api/riwayat')
        this.daftarPenjualan = res.data
      } catch (err) {
        console.error('Gagal fetch penjualan:', err.message)
      }
    }
  }
})
