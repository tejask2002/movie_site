import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  let {query,setquery,error} = useGlobalContext();
  return (
    <>
    <section className='search-section'>
     <h2>Search your favorite movie</h2>
     <form action='#' onSubmit={(e)=>{e.preventDefault();}}>
      <div>
        <input 
         type='text'
         placeholder='search here'
         value={query}
         onChange={(e)=>{ setquery(e.target.value) }}

        />
        
      </div>
     </form>
     <div className='card-error'>
       <p>{error.show && error.msg}</p>
     </div>
    </section>
    </>
    
  )
}

export default Search
