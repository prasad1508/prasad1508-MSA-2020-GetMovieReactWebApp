import React, { useState, useEffect } from "react";

import axios from "axios";
import MovieCard from "../../components/Card/Card";
import SearchBar from "../SearchBar/SearchBar";

import "./Home.css";


export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Home = () => {
  // usestate example  https://www.youtube.com/watch?v=q0Lmgrf61SY
  // use effect https://www.youtube.com/watch?v=jK6nuBPfVIk

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [year, setYear] = useState<string>("2018");
  const [query, setQuery] = useState<string>("air");

  useEffect(() => {
    async function getMoives() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=cfa46e04&&i=${year}&&s=${query}`
        );
        setMovies(res.data.Search);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    }

    getMoives();
  }, [year, query]);
  // use effect ekata 2nd parameter ekata [] blanck array ekak dunnama ekaparak run wela nawathinawa
  // https://www.youtube.com/watch?v=Smmpwo_TFoU&feature=youtu.be&fbclid=IwAR0liz8pelP4z6tJjMERwvxM2Fq3stPlaK20yg7zuYazxzLwt02i_gEnYfk
  return (
    <div className="container">
      <SearchBar setYear={setYear} setQuery={setQuery}/>
      {isLoading ? (
        <div>Loading </div>
      ) : movies.length === 0 ? (
        <div>No Movies</div>
      ) : (
        movies.map((movie) => {
          // return ( <React.Fragment> <SearchBar></SearchBar> <MovieCard key={movie.imdbID} movieData={movie}/> </React.Fragment>) ;
          return <MovieCard key={movie.imdbID} movieData={movie} />;
        })
      )}
    </div>
  );
};

export default Home;
