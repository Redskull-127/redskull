import styles from "../styles/TopRated.module.css";
import react, { useEffect, useState } from "react";
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
      <div className={styles.TopRated}>
        <h1 className={styles.title}>Top Rated Movies</h1>
        <div className={styles.container}>
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topRated.map((item) => (
            <div key={item} className={`card ${styles.card}`}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className={styles.title}>Top Rated TV Shows</h1>
        <div className={styles.container}>
          {/* <img src={topRated[0].image} className="card-img-top" alt="..." /> */}
          {topShows.map((item) => (
            <div key={item} className={`card ${styles.card}`}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className={`card-text ${styles.cardtext}`}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
