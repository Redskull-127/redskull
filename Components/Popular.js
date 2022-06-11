import styles from "../styles/Popular.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import react, { useEffect, useState } from "react";


export default function Popular() {
  
  const [Popular, setPopular] = useState([]);
  const [topPopular, setTopPopular] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://imdb-api.com/en/API/MostPopularMovies/k_14badqbb")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items[0].title);
        setPopular(data.items);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://imdb-api.com/en/API/MostPopularTVs/k_14badqbb")
      .then((response) => response.json())
      .then((dataa) => {
          console.log(dataa);
        setTopPopular(dataa.items);
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
        <h1 className={styles.title} data-aos="fade-up">Most Popular Movies</h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Popular[0].image} className="card-img-top" alt="..." /> */}
          {Popular.map((item, i) => (
            <div key={i} className={`card ${styles.card}`} onClick={() => download(item.title)}>
              <img src={item.image} loading="lazy" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className={styles.title} data-aos="fade-up">Most Popular TV Shows</h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Popular[0].image} className="card-img-top" alt="..." /> */}
          {topPopular.map((item, i) => (
            <div key={item} className={`card ${styles.card}`} onClick={() => download(item.title)}>
              <img src={item.image} loading="lazy" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  else{
    return <div className={styles.load}>Loading...</div>
  }
}

