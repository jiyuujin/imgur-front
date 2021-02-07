import axios from 'axios'

const http = axios.create({
  timeout: 120000
})

let getRequestCounter = 0

export function handleGetRequestLoading($progress: { (): never; (): void }) {
  http.interceptors.request.use(
    (config) => {
      getRequestCounter++
      $progress()
      return config
    },
    (error) => Promise.reject(error)
  )
}

export function handleGetResponseLoading($progress: { (): never; (): void }) {
  http.interceptors.response.use(
    (response) => {
      getRequestCounter--
      if (getRequestCounter <= 0) {
        $progress()
      }
      return response
    },
    (error) => {
      getRequestCounter--
      if (getRequestCounter <= 0) {
        $progress()
      }
      return Promise.reject(error)
    }
  )
}

export default http
