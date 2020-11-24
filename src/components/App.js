import React, {Component} from 'react';
import Nav from './Nav';
import Search from './Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies:[],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm} `)
    // 
    
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(this.apiKey)
        this.setState({ data: [...data.results]})
    })
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <Nav/>
        <Search 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
