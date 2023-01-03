import './App.css';
import {useEffect, useState} from "react";
import styled from "styled-components";
import {Film} from './components/Flim';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=15c7966a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchFilm = async (title) => {
    const request = await fetch(`${API_URL}&s=${title}`);
    const response = await request.json();
    setMovies(response.Search);
  }
  // useEffect(() => {
  //   searchFilm("Batman");
  // }, [])
  return(
    <AppWrapper className='App'>
      <h1>Hello There</h1>
      <div className='searchInput'>
        <input
          placeholder='Search for a film'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchFilm(searchTerm)}>Search</button>
      </div>
      {movies.length > 0 
        ? (
            movies?.map((movie, i) => {
              return(
                <Film key={i} movie={movie}/>
              )
            })
        ) : (
          <p>no movies</p>
        )
      }
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

`

export default App;