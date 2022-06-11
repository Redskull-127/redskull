import styles from '../styles/InTheaters.module.css';
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function InTheaters() {
    const [Theater, setTheater] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch("https://imdb-api.com/en/API/InTheaters/k_14badqbb")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items[0].title);
        setTheater(data.items);
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
        <h1 className={styles.title} data-aos="fade-up">In Theater Movies</h1>
        <div className={styles.container} data-aos="fade-up">
          {/* <img src={Theater[0].image} className="card-img-top" alt="..." /> */}
          {Theater.map((item) => (
            <div key={item}  className={`card ${styles.card}`} onClick={() => download(item.title)}>
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