import styles from "../styles/InTheaters.module.css";
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function InTheaters() {
  const [Theater, setTheater] = useState([]);
  const [hover, sethover] = useState({ display: "none" });
  const imgurl = "http://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0"
    )
      .then((response) => response.json())
      .then((data) => {
        setTheater(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function download(name) {
    const newName = name.split(" ").join("+");
    window.open(`https://themoviesverse.co/?s=${newName}`);
  }
  if (Theater.length > 0) {
    return (
      <div className={styles.Theater} data-aos="fade-up">
        <h1 className={styles.title} data-aos="fade-up">
          Trending
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Theater[0].image} className="card-img-top" alt="..." /> */}
          {Theater.map((item, i) => (
            <div
              key={i}
              className={`card ${styles.card}`}
              id="cards"
              onClick={() => download(item.name)}
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
              <div className={styles.description} style={hover} id="desc">
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
