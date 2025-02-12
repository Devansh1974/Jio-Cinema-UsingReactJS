import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [japaneseMovies, setJapaneseMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movieResponse = await fetch("http://localhost:3000/movies");
        let moviesData = await movieResponse.json();

        setMovies(moviesData);
        setFeaturedMovies(moviesData.filter((movie) => movie.featured).slice(0, 4));
        setDramaMovies(moviesData.filter((movie) => movie.genre.includes("Drama")).slice(0, 6));
        setHindiMovies(moviesData.filter((movie) => movie.language === "Hindi").slice(0, 6));
        setTopMovies(moviesData.filter((movie) => movie.imdb >= 8.5).slice(0, 6));
        setJapaneseMovies(moviesData.filter((movie) => movie.country === "Japan").slice(0, 6));
        
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousel />
      <Channels />
      <Featured movies={featuredMovies} />
      <Shows title="Drama Movies" movies={dramaMovies} />
      <Shows title="Hindi Language Movies" movies={hindiMovies} />
      <Shows title="Highly Rated Movies" movies={topMovies} />
      <Footer/>
      
    </>
  );
}
