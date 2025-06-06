import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import FilmsCard from "../components/Filmscard"

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

import './FilmsGrid.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apikey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL)

    }, [query])

  return (        
  <div className="conteiner">
    <h2 className="title">
      Resultados para: <span className="query-text">{query}</span>
    </h2>
    <div className="movies-conteiner">
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && 
        movies.map((movie) => <FilmsCard key={movie.id}  movie={movie} />)}
    </div>
  </div>
  )
}
export default Search
