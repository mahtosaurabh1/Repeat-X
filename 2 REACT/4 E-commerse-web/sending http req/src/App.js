import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false);


  let addMovieHandler=(async (movie)=>{
    const response = await fetch('https://practice-9d840-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchMoviesHandler();
  })


  const  fetchMoviesHandler = useCallback(async ()=>{
    setIsLoading(true)
    try {
      let responce=await fetch('https://practice-9d840-default-rtdb.firebaseio.com/movies.json');
      let  data=await responce.json();
      console.log(data);
      let loadMovie=[];
      for(let key in data){
          loadMovie.push({
            id:key,
            title:data[key].title,
            openingText:data[key].openingText,
            releaseDate:data[key].RelDate
          });
      }
      // console.log("loadmov",loadMovie);
      setMovies(loadMovie);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  },[])

  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler])



  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
