import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import TopRated from '../Components/TopRated.js'
import Script from 'next/script'
import Popular from '../Components/Popular.js'
import InTheaters from '../Components/InTheaters'
import Coming from '../Components/Coming'
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, Component } from "react";

export default function Home(){
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1500 });
    setInterval(() => {setLoader(false)}, 7000);
  }, []);

  if(Loader == false){
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }

    return (
      <><div className={styles.preloader} id="preloader">
        <img src='lottlemovie.gif'/>
        <h1>Waiting for Data...</h1>
      </div>
      <div className={styles.container}>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
        <Head>
          <title>REDSKULL</title>
          <meta name="description" content="By Meer Tarbani" />
          <link rel="icon" href="lottlemovie.png" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
        </Head>

        <Header />
        <Popular />
        <Coming />
        <InTheaters />
        <TopRated />
        {/* <main className={styles.main}>
        </main> */}
      </div></>
    )
   }

