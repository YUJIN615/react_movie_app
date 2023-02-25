import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie({ title, mediumCoverImage, genres, summary }) {
  return (
    <li>
      <h2><Link to="/detail">{title}</Link></h2>
      <img src={mediumCoverImage} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </li>
  );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}
export default Movie;
