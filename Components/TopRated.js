import styles from "../styles/TopRated.module.css";
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [topShows, setTopShows] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_14badqbb")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items[0].title);
        setTopRated(data.items);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://imdb-api.com/en/API/Top250TVs/k_14badqbb")
      .then((response) => response.json())
      .then((dataa) => {
          console.log(dataa);
        setTopShows(dataa.items);
      })
      .catch((error) => {
          console.log(error);
      });
  }
  if (topRated.length > 0) {
    return (
      <div className={styles.TopRated} data-aos="fade-up">
        <h1 className={styles.title} data-aos="fade-up">Top Rated Movies</h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topRated.map((item) => (
            <div key={item} data-aos="fade-up" className={`card ${styles.card}`}>
              <img src={item.image} loading="lazy" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className={styles.title} data-aos="fade-up">Top Rated TV Shows</h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topShows.map((item) => (
            <div key={item} data-aos="fade-up" className={`card ${styles.card}`}>
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
