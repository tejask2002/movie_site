import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'

const API_URL =  `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const SingleMovie = () => {

  const {id} = useParams();

  const [isloading,setisloading] = useState(true);
  const [movie,setmovie] = useState({});
 
  const getMovies = async (url)=>{
 
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          setmovie(data);
          setisloading(false);
             
          
      }catch(err)
      {
         console.log('error');
      }
  }

  useEffect(()=>{
      const timeout = setTimeout(() => {
          getMovies(`${API_URL}&i=${id}`);
      }, 1000);

      return ()=> clearTimeout(timeout);
      
  },[id]);

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
     <section className='movie-section'>
      <div className='movie-card'>
          
          <figure>
            <img  src={movie.Poster } alt=""/>
          </figure>
          <div className='card-content'>
             
             <p className='title'>{movie.Title} </p>
             <p className='card-text'> {movie.Released}</p>
             <p className='card-text'>{movie.Genre} </p>
             <p className='card-text'> {movie.imdbRating}</p>
             <p className='card-text'>{movie.Country} </p>
             <NavLink to='/' className="back-btn">Go Back</NavLink>

          </div>
      </div>

     </section>

    </>
  )
}

export default SingleMovie
