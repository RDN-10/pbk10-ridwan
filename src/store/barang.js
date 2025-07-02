import { defineStore } from 'pinia'
import axios from 'axios'

export const useBarangStore = defineStore('barang', {
  state: () => ({
    daftarBarang: []
  }),
  actions: {
    async fetchBarang() {
      try {
        const res = await axios.get('/api/barang') // ✅ gunakan proxy
        this.daftarBarang = res.data
      } catch (err) {
        console.error('Gagal mengambil data barang:', err.message)
      }
    }
  }
})
