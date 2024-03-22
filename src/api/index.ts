// utils/apiClient.js 또는 utils/axios.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint.com', // API의 기본 URL
  timeout: 10000, // 10000ms = 10초 타임아웃
  headers: {
    'Content-Type': 'application/json' // 기본 컨텐츠 타입
    // 필요한 경우 추가적인 헤더를 설정할 수 있습니다.
  }
})

export default apiClient
