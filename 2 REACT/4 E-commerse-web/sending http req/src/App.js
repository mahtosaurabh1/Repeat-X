import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const  fetchMoviesHandler = useCallback(async ()=>{
    setIsLoading(true)
    try {
      let responce=await fetch('https://swapi.dev/api/films/');
      let  data=await responce.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
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
        <AddMovie/>
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
