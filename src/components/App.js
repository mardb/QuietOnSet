import React, {Component} from 'react';
import Nav from './Nav';
import Search from './Search';
import AllMovies from './AllMovies';
import Pagination from './Pagination';

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
        <Search 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        />
        <AllMovies movies={this.state.movies}/>
        {this.state.totalResults > 20 ? <Pagination pages = {numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      </div>
    );
  }
}

export default App;
