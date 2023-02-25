import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(detail);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
  <div>
    {
        loading ? 
        <strong>loading...</strong> : 
        <div>
            <div>{detail.title}</div>
            <img src={detail.background_image} />
            <div></div>
        </div>
    }
  </div>
  );
}
export default Detail;
