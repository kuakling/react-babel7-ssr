export default {
  appContainerId: 'react-root',
  baseUrl: process.env.REACT_APP_BASE_URL ? `/${process.env.REACT_APP_BASE_URL}` : '',
  jwt: {
    secretKey: 'react-babel7-ssr'
  },
  restfulApi: {
    host: process.env.NODE_ENV == 'development' ? 'http://localhost:4001' : ''
  }
}