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
        const res = await axios.get('http://localhost:3000/penjualan')
        this.daftarPenjualan = res.data
      } catch (err) {
        console.error('Gagal fetch penjualan:', err.message)
      }
    }
  }
})
