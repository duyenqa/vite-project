// setupTests.js
import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Dọn dẹp DOM sau mỗi test để tránh rò rỉ
afterEach(() => {
  cleanup()
})

// Nếu cần mock fetch hoặc API khác
global.fetch = async () => ({
  json: async () => ({ message: 'mocked response' }),
})