import styles from '../styles/Header.module.css';

// MostPopularMovie = https://imdb-api.com/en/API/MostPopularMovies/k_14badqbb
// MostPopularTV = https://imdb-api.com/en/API/MostPopularTV/k_14badqbb
// ComingSoon = https://imdb-api.com/en/API/ComingSoon/k_14badqbb
// Top250Movies = https://imdb-api.com/en/API/Top250Movies/k_14badqbb
// Top250TVs = https://imdb-api.com/en/API/Top250TVs/k_14badqbb
// InTheaters = https://imdb-api.com/en/API/InTheaters/k_14badqbb

export default function Header() {
    return (
        <><div className={styles.Header}>
            <div className={styles.navItems}>
                <span>Popular</span>
            </div>
            <div className={styles.navItems}>
                <span>Coming Soon</span>
            </div>
            <div className={styles.navHead}>
                <span className={styles.navHeading}>REDSKULL</span>
            </div>
            <div className={styles.navItems}>
                <span>Top Rated</span>
            </div>
            <div className={styles.navItems}>
                <span>In Theaters</span>
            </div>
        </div>
        <div className={styles.content}>
            <span>BINGE everything ...</span>
            <img src='lottlemovie.gif'/>
        </div>
        </>
    );
}