import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
  getPopularMoviePage(pageNum) {
    return apiClient.get('/popular?api_key=04c35731a5ee918f014970082a0088b1&page=' + pageNum)
  },

  getMovie(id) {
    return apiClient.get('/' + id + '?api_key=04c35731a5ee918f014970082a0088b1')
  }
}

// api_key: '04c35731a5ee918f014970082a0088b1',
// base_url:'https://api.themoviedb.org/',
// https://api.themoviedb.org/3/movie/637534?api_key=04c35731a5ee918f014970082a0088b1
// https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&page=1