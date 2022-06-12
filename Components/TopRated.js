import styles from "../styles/TopRated.module.css";
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [topShows, setTopShows] = useState([]);
  const [hover, sethover] = useState({ display: "none" });
  const [hoverr, sethoverr] = useState({ display: "none" });
  const imgurl = "http://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((dataa) => {
        console.log(dataa);
        setTopShows(dataa.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function download(name) {
    const newName = name.split(" ").join("+");
    window.open(`https://themoviesverse.co/?s=${newName}`);
  }
  if (topRated.length > 0) {
    return (
      <div className={styles.TopRated} data-aos="fade-up">
        <h1 className={styles.title} data-aos="fade-up">
          Top Rated Movies
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topRated.map((item) => (
            <div
              key={item}
              className={`card ${styles.card}`}
              onClick={() => download(item.title)}
              onPointerEnter={(e) => {
                sethover({ display: "block" });
              }}
              onPointerLeave={(e) => {
                sethover({ display: "none" });
              }}
            >
              <img
                src={imgurl + item.poster_path}
                loading="lazy"
                className="card-img-top"
                alt="..."
              />
              <div className={styles.description} id="desc" style={hover}>
                <p>{item.overview}</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className={styles.title} data-aos="fade-up">
          Top Rated TV Shows
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topShows.map((item) => (
            <div
              key={item}
              className={`card ${styles.card}`}
              onClick={() => download(item.name)}
              onPointerEnter={(e) => {
                sethoverr({ display: "block" });
              }}
              onPointerLeave={(e) => {
                sethoverr({ display: "none" });
              }}
            >
              <img
                src={imgurl + item.poster_path}
                loading="lazy"
                className="card-img-top"
                alt="..."
              />
              <div className={styles.description} id="desc" style={hoverr}>
                <p>{item.overview}</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div className={styles.load}>Loading...</div>;
  }
}
