import Head from "next/head";
import { useEffect, useState } from "react";
import ButtonStack from "../components/buttonStack/ButtonStack";
import Heading from "../components/heading/Heading";
import Movie from "../components/movies";
import MovieCarousel from "../components/movies/MovieCarousel";
import { movieApi } from "../services/movieApi";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [activeGenre, setActiveGenre] = useState(35);
  const [activeTvGenre, setActiveTvGenre] = useState(10759);
  // const [leatestMovie, setLatestMovie] = useState([]);
  const genres = [
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },

    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ];

  const tvGenres = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
  ];

  // useEffect(() => {
  //   getLatestMovie();
  // }, []);

  // const getLatestMovie = async () => {
  //   let type = "movies";
  //   const data = await movieApi(type, { main: "latest" });
  //   setLatestMovie([data]);
  // };

  return (
    <div>
      <Head>
        <title>Movie Psyches</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <div className={styles.homeContainer}>
          {/* <Heading heading="Latest" />
          <div className={styles.indexCarouselContainer}>
            <Movie movie={leatestMovie} />
          </div> */}
          <div className={styles.homeCarouselSection}>
            <Heading heading="Top Rated" />
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel
                other={true}
                activeGenre="top_rated"
                type="movies"
              />
            </div>
          </div>
          <div className={styles.homeCarouselSection}>
            <Heading heading="Popular Movies" />
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel other={true} activeGenre="popular" type="movies" />
            </div>
          </div>
          <div className={styles.homeCarouselSection}>
            <Heading heading="Popular Series" />
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel
                other={true}
                activeGenre="popular"
                type="tvSeries"
              />
            </div>
          </div>
          <div className={styles.btnStack}>
            <Heading heading="Movies" />
            <div className={styles.btnContainer}>
              {genres &&
                genres.map((genre, i) => (
                  <div key={i}>
                    <ButtonStack
                      genre={genre}
                      setActiveGenre={setActiveGenre}
                      activeGenre={activeGenre}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.indexCarouselContainer}>
            <MovieCarousel activeGenre={activeGenre} type="movies" />
          </div>
          <div className={styles.btnStack}>
            <Heading heading="Series" />
            <div className={styles.btnContainer}>
              {tvGenres &&
                tvGenres.map((genre, i) => (
                  <div key={i}>
                    <ButtonStack
                      genre={genre}
                      setActiveGenre={setActiveTvGenre}
                      activeGenre={activeTvGenre}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.indexCarouselContainer}>
            <MovieCarousel activeGenre={activeTvGenre} type="tvSeries" />
          </div>
        </div>
      </main>
    </div>
  );
}
