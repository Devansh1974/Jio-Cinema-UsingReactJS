import styles from './featured-show.module.css'

import PropTypes from 'prop-types';

const FeaturedShow = ({ movie }) => {
  return (
    <>
        <div className={styles.featuredShow}>
            <img src={movie.imageUrl} alt="poster" />
            <div className={styles.movieTitle}>
             {movie.name}
            </div>
        </div>
    </>
  )
}

FeaturedShow.propTypes = {
    movie: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeaturedShow;
