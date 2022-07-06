const API_KEY="34b6da7187eb3a43ccce08b0c6a485fa";

const request={
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default request;