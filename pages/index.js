import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import TopRated from "../Components/TopRated.js";
import Script from "next/script";
import Popular from "../Components/Popular.js";
import InTheaters from "../Components/InTheaters";
import Coming from "../Components/Coming";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, Component } from "react";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import { CustomCursor } from "react-svg-cursor";

export default function Home() {
  const [Loader, setLoader] = useState(true);
  const [device, setDevice] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
    setInterval(() => {
      setLoader(false);
    }, 5000);
    var userAgent = navigator.userAgent.toLowerCase();
    var Android = userAgent.indexOf("android") > -1;
    if (Android) {
      setDevice(true);
    }
  }, []);

  if (Loader == false) {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }

  return (
    <>
      <CustomCursor
        component={"cursor.png"}
        isDisabled={true}
        width={50}
        height={50}
        zIndex={420}
        transform="translate(-28%, -10%) rotateZ(0deg)"
      />
      <div className={styles.preloader} id="preloader">
        <img src="lottlemovie.gif" />
        <h1>Waiting for Data...</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.Header}>
          <div className={styles.navItems}>
            <span>
              <Link
                activeClass="active"
                to="popularscroll"
                smooth={true}
                duration={500}
              >
                Popular
              </Link>
            </span>
          </div>
          <div className={styles.navItems}>
            <Link activeClass="active" to="coming" smooth={true} duration={500}>
              <span>Coming Soon</span>
            </Link>
          </div>
          <div className={styles.navHead}>
            <span className={styles.navHeading}>REDSKULL</span>
          </div>
          <div className={styles.navItems}>
            <Link
              activeClass="active"
              to="TopRated"
              smooth={true}
              duration={500}
            >
              <span>Top Rated</span>
            </Link>
          </div>
          <div className={styles.navItems}>
            <Link
              activeClass="active"
              to="intheater"
              smooth={true}
              duration={500}
            >
              <span>Trending</span>
            </Link>
          </div>
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></Script>
        <Head>
          <title>REDSKULL</title>
          <meta name="description" content="By Meer Tarbani" />
          <link rel="shortcut icon" href="cursor.png" />
          <meta
            name="keywords"
            content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, Redskull, redskull, Redskull.me, redskull.me, redskull me, Redskull me, redskull meer tarbani, redskull,meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className={styles.grids}>
        <Header />
        <div id="intheater">
          <InTheaters />
        </div>
        <div id="popularscroll">
          <Popular />
        </div>
        <div id="coming">
          <Coming />
        </div>
        <div id="TopRated">
          <TopRated />
        </div>
        </div>
      </div>
    </>
  );
}
{/* <main className={styles.main}>
</main> */}
