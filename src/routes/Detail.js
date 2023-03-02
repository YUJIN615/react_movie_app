import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"


function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
  <div className={styles.container}>
    {
        loading ? 
        <strong className={styles.loading}>loading...</strong> : 
        <div className={styles.detail}>
            <img src={detail.medium_cover_image} alt={detail.title} />
            <h2 className={styles.title}>{detail.title_long}</h2>
            <ul className={styles.genres}>
              {detail.genres.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div>{detail.description_full}</div>
        </div>
    }
  </div>
  );
}
export default Detail;
