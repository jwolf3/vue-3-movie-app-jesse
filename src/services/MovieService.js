import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
  getPopularMoviePage(pageNum) {
    return apiClient.get('movie/popular?api_key=04c35731a5ee918f014970082a0088b1&page=' + pageNum)
  },

  getMovie(id) {
    return apiClient.get('movie/' + id + '?api_key=04c35731a5ee918f014970082a0088b1')
  },
  
  searchMovie(input) {
    return apiClient.get('search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=' + input)
  }
}

// api_key: '04c35731a5ee918f014970082a0088b1',
// base_url:'https://api.themoviedb.org/',

//1 specific movie
// https://api.themoviedb.org/3/movie/637534?api_key=04c35731a5ee918f014970082a0088b1

//popular movies page 1
// https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&page=1

//search url
// https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=the+avengers