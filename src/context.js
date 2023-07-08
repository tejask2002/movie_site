import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const API_URL =  `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;
//provider fun




const AppProvider = ({children})=>{

    const [isloading,setisloading] = useState(true);
    const [movie,setmovie] = useState([]);
    const [error,seterror] = useState({ show:false ,msg:""});
    const [query,setquery] = useState("titanic");
    const getMovies = async (url)=>{
   
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response==='True')
            {  setmovie(data.Search);
               setisloading(false);
               seterror({
                show:false,msg:""
              })
               
            }
            else
            {  setisloading(true);
              seterror({
                show:true,msg:data.Error
              })
            }
    
    
        }catch(err)
        {
           console.log('error');
        }
    }

    useEffect(()=>{
        const timeout = setTimeout(() => {
            getMovies(`${API_URL}${query}`);
        }, 1000);

        return ()=> clearTimeout(timeout);
        
    },[query]);
    return  <AppContext.Provider value={{isloading,movie,error,query,setquery}}>{children}</AppContext.Provider>

}


const useGlobalContext = ()=> {
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext}
