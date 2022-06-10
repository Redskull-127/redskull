import styles from '../styles/Coming.module.css';
import react, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Coming() {
    const [Coming, setComing] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    function fetchData() {
      fetch("https://imdb-api.com/en/API/ComingSoon/k_aqil82o5")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.items[0].title);
          setComing(data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (Coming.length > 0) {
      return (
        <div className={styles.Coming} data-aos="fade-up">
          <h1 className={styles.title} data-aos="fade-up">Coming Soon</h1>
          <div className={styles.container} data-aos="fade-up">
            {/* <img src={Coming[0].image} className="card-img-top" alt="..." /> */}
            {Coming.map((item) => (
              <div key={item} className={`card ${styles.card}`}>
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