import styles from "../styles/Coming.module.css";
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Coming() {
  const [Coming, setComing] = useState([]);
  const imgurl = "http://image.tmdb.org/t/p/w500";
  const [hover, sethover] = useState({ display: "none" });
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c55c2c9c27a37d0350e9d0a7dd8a54c0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setComing(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function download(name) {
    console.log(name.split(" ").join("+"));
  }
  if (Coming.length > 0) {
    return (
      <div className={styles.Coming} data-aos="fade-up">
        <h1 className={styles.title} data-aos="fade-up">
          Coming Soon
        </h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Coming[0].image} className="card-img-top" alt="..." /> */}
          {Coming.map((item, id, hope) => (
            <div
              key={id}
              className={`card ${styles.card}`}
              id="cards"
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
              <div
                className={styles.description}
                id="desc"
                style={hover}
                key={hope}
              >
                <p>{item.overview}</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
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
