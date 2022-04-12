import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css'

function Movie({id,coverImg,title,summary,genres,year}) {
    return (
        <div className={styles.movie}>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3>
                {year}
            </h3>
            <img alt = {title} className={styles.movie__img} src={coverImg} />
            <p>{summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((genre, index) => <li key={index} >{genre}</li>)}
            </ul>
        </div>)
}

Movie.propTypes={
    coverImg: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    year:PropTypes.number.isRequired
};

export default Movie;