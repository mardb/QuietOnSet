import React, {Component} from 'react';
import Nav from './Nav';
import Search from './Search';
import AllMovies from './AllMovies';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies:[],
      searchTerm: '',
      apiKey: 
        process.env.REACT_APP_API,
      totalResults:0,
      currentPage: 1,
      currentMovie: null,
      
    }
    // this.apiKey = process.env.REACT_APP_API
  }
  
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchTerm} `)
      .then(data=> data.json())
      .then(data => {
        console.log(data)
        // console.log(this.apiKey)
        this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({ currentMovie: newCurrentMovie})
  }

  goBackToMovies = () => {
    this.setState({ currentMovie: null })
  }

  nextPage = (pageNumber) =>{
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchTerm}&page=${pageNumber} `)
  .then(data=> data.json())
  .then(data => {
  //       console.log(data)
        this.setState({ movies: [...data.results], currentPage: pageNumber})
        })
  }

  render(){
    const numberOfPages = Math.floor(this.state.totalResults / 20); 
    return (
      <div className="App grey darken-4" id="all">
        <Nav/>
        { this.state.currentMovie === null ?
        <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <AllMovies viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo goBackToMovies={this.goBackToMovies} currentMovie={this.state.currentMovie}/> }
        {this.state.totalResults > 20 && this.state.currentMovie === null ? <Pagination pages = {numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
        
        
      </div>
    );
  }
}

export default App;
