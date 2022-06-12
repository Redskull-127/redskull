import styles from "../styles/Popular.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import react, { useEffect, useState } from "react";

export default function Popular() {
  const [Popular, setPopular] = useState([]);
  const [topPopular, setTopPopular] = useState([]);
  const [hover, sethover] = useState({ display: "none" });
  const [hoverr, sethoverr] = useState({ display: "none" });
  const imgurl = "http://image.tmdb.org/t/p/w500";
  const imgurltv = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0].title);
        setPopular(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((dataa) => {
        console.log(dataa.results);
        setTopPopular(dataa.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function download(name) {
    const newName = name.split(" ").join("+");
    window.open(`https://themoviesverse.co/?s=${newName}`);
  }

  if (Popular.length > 0) {
    return (
      <div className={styles.Popular} data-aos="fade-up">
        <h1 className={styles.title} data-aos="fade-up">
          Most Popular Movies
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Popular[0].image} className="card-img-top" alt="..." /> */}
          {Popular.map((item, i) => (
            <div
              key={i}
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
          Most Popular TV Shows
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Popular[0].image} className="card-img-top" alt="..." /> */}
          {topPopular.map((item, i) => (
            <div
              key={i}
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
                src={imgurltv + item.poster_path}
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
