import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({ id, title, mediumCoverImage, genres, summary }) {
  return (
    <li className={styles.movie}>
      <h2>
        <Link className={styles.title} to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <img src={mediumCoverImage} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;
