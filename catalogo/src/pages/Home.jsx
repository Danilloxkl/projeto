import React, { useState, useEffect } from 'react';
import Filmscard from '../components/Filmscard';

import './FilmsGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}&language=pt-BR&page=${page}`;
    getTopRatedMovies(topRatedUrl);
  }, [page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="conteiner">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-conteiner">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <Filmscard key={movie.id} movie={movie} />
          ))}
      </div>

      {/* Paginação */}
      <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
};

export default Home;
