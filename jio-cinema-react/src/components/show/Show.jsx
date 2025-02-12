import styles from './show.module.css';
import { FaStar, FaLanguage, FaGlobeAsia } from "react-icons/fa"; // Import icons

const Show = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className={styles.show}>
      <img src={movie.imageUrl} alt={movie.name || "Movie Poster"} />

      {/* Icons Section */}
      <div className={styles.movieIcons}>
        {movie.imdb && (
          <span>
            <FaStar /> {movie.imdb}
          </span>
        )}
        {movie.language && (
          <span>
            <FaLanguage /> {movie.language}
          </span>
        )}
        {movie.country && (
          <span>
            <FaGlobeAsia /> {movie.country}
          </span>
        )}
      </div>

      <div className={styles.movieTitle}>{movie.name}</div>
    </div>
  );
};

export default Show;
