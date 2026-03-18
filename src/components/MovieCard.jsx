import React from 'react';
import useSound from 'use-sound';


const MovieCard = ({movie :
   {title, vote_average, poster_path, release_date, original_language}}) => {
   const [playHover] = useSound('/hover.mp3', { volume: 0.15 });

  return (
  <div className="group relative perspective-1000 transition-all duration-500 hover:rotate-x-2 hover:rotate-y-2 hover:-translate-y-3" onMouseEnter={() => playHover()}>
    <div className="movie-card bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(255,215,0,0.2)] group-hover:border-yellow-500/30">
     <div className="movie-card overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:translate-z-10">
      <img
        className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        src = {poster_path ?
          `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
          alt = {title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className = "content">
          <div className = "rating">
            <img src="star.svg" alt = "Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A" }</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
export default MovieCard
