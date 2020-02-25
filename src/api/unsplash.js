import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID bgFMVFjXO2NcALXLENKlZJ6K_oVz9Q6TNCLwq3lX2mg'
  }
})
