import React from 'react';


const Movie = (props) => {
return (
  < div className="col s12 m6 l3 ">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {
          //default image
          props.image == null ? 
          <img src={`https://in.bmscdn.com/iedb/movies/images/website/poster/large/sucker--english--et00017404-24-03-2017-18-45-37.jpg`} alt="" 
          style={{ width: "100%", height: 360}}/> : 
          <img className="" 
          src={`http://image.tmdb.org/t/p/w185${props.image}`} 
          alt="card" style={{ width: "100%",
          height: 360}} />}
      </div>
      <div>
        <p><a href="#" onClick={()=> props.viewMovieInfo(props.movieId)} >View Details</a></p>
      </div>
    </div>
  </div>

  )
}

export default Movie;