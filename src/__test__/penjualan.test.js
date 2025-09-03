// src/__tests__/penjualan.test.js
import { setActivePinia, createPinia } from 'pinia'
import { usePenjualanStore } from '../store/penjualan'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('Penjualan Store', () => {
  setActivePinia(createPinia())

  it('fetchPenjualan mengambil data dengan benar', async () => {
    const dummyData = [{ id: 1, nama: 'Motor A' }]
    axios.get.mockResolvedValue({ data: dummyData })

    const store = usePenjualanStore()
    await store.fetchPenjualan()

    expect(store.daftarPenjualan).toEqual(dummyData)
  })
})
