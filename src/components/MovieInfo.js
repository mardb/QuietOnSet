import React from 'react';

const MovieInfo = (props) =>{

  return(
    <div>
    <div className='container' style={{paddingBottom: 40}}>
      <div className='row' onClick={props.goBackToMovies} style={{cursor: "pointer", paddingTop: 100}}>
        <i className="white-text text-white fas fa-arrow-left"></i>
        <span className="white-text text-white" style={{marginLeft: 10}}> Go Back</span>
      </div>

      <div className="row" >
        <div className="col s12 m4">
        { props.currentMovie.poster_path  === null ? <img src={`https://in.bmscdn.com/iedb/movies/images/website/poster/large/sucker--english--et00017404-24-03-2017-18-45-37.jpg`} alt="Card Image" style={{width: "100%", height:360 }} /> : 
        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card Image" style={{width: "100%", height:360 }} />}
        </div>

          <div className="col s12 m8">
            <div className="white-text text-white info-container" >
              <p style={{fontSize: 25, fontWeight: 5 }}>{props.currentMovie.title}</p>
              <p>Release Date: {props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
              <p>Directed By: {props.currentMovie.director}</p>
                            <p>{props.currentMovie.overview}</p>
              <p>{props.currentMovie.overview}</p>
             <p>Rating:</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default MovieInfo;