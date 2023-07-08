import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movie = () => {

  const {movie,isloading} = useGlobalContext();
  
  if(isloading)
  {
     return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
     )
  }
  return (
    <>
    
      <section className='movie-page'> 
      
      <div className='grid grid-4-col'>
        
     { movie.map((cur)=>{
            const {imdbID,Title,Poster} = cur;
            const movieName = Title.substring(0,16);
            return (
              
              <NavLink to={`movie/${imdbID}`} key={imdbID}> 
                <div className='card'>
                  <div className='card-info'>
                    <h2>{ movieName.length>15 ? `${movieName}..` : `${movieName}` }</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            )
      })  }

      </div>

      </section>
      
    
    </>
  )
}

export default Movie
