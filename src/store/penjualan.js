import { defineStore } from 'pinia'
import axios from 'axios'

export const usePenjualanStore = defineStore('penjualan', {
  state: () => ({
    daftarPenjualan: []
  }),
  actions: {
    async fetchPenjualan() {
      try {
        const res = await axios.get('/api/riwayat') 
        this.daftarPenjualan = res.data
      } catch (err) {
        console.error('Gagal fetch penjualan:', err.message)
      }
    },

    async hapusPenjualan(id) {
      try {
        await axios.delete(`/api/riwayat/${id}`)
        this.daftarPenjualan = this.daftarPenjualan.filter(item => item.id !== id)
      } catch (err) {
        console.error('Gagal menghapus penjualan:', err.message)
      }
    }
  }
})