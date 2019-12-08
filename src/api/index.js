import axios from 'axios'

const config = {
  baseUrl: 'http://106.10.42.175:3002/api/irgo/'
}

async function getAPIData (payload) {
  return axios.post(`${config.baseUrl}${payload.url}`, payload.data)
}

export { getAPIData }
