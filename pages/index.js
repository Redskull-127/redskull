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
    }, 7000);
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
              <span>In Theaters</span>
            </Link>
          </div>
        </div>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5854213705609546"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></Script>
        <Head>
          <title>REDSKULL</title>
          <meta name="description" content="By Meer Tarbani" />
          <link rel="icon" href="cursor.png" />
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

        <Header />
        <div id="popularscroll">
          <Popular />
        </div>
        <div id="coming">
          <Coming />
        </div>
        <div id="intheater">
          <InTheaters />
        </div>
        <div id="TopRated">
          <TopRated />
        </div>
        {/* <main className={styles.main}>
        </main> */}
      </div>
    </>
  );
}
