import { useState, useEffect } from "react";
import api from "../../services/api";
import styles from "./style.module.scss";

import CustomIcon from "../../components/CustomIcon";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import GetImages from "../../utils/getImage";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
}

const Home: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  const getMovie = async () => {
    const {
      data: { results },
    } = await api.get("/movie/popular");

    setMovie(results[0]);
  };

  const getPopularMovie = async () => {
    const {
      data: { results },
    } = await api.get("/movie/top_rated");

    setTopMovies(results);
  };

  const getPopularSerie = async () => {
    const {
      data: { results },
    } = await api.get("/tv/popular");

    setTopSeries(results);
    console.log(results);
  };

  const getPopularPeople = async () => {
    const {
      data: { results },
    } = await api.get("/person/popular");

    setTopPeople(results);
  };

  useEffect(() => {
    getMovie();
    getPopularMovie();
    getPopularSerie();
    getPopularPeople();
  }, []);

  return (
    <>
      {movie && (
        <section
          className={styles.background}
          style={{
            background: `url(${GetImages(
              movie.backdrop_path
            )}) no-repeat center center fixed`,
            backgroundSize: "cover",
            width: "100%",
            height: "90vh",
          }}
        >
          <div className={styles.container}>
            <div className={styles.infoMovie}>
              <h1 className={styles.title}>{movie.title}</h1>

              <div className={styles.realeaseContainer}>
                <span className={styles.boxRealease}>
                  <CustomIcon icon="calendar" size="24px" color="#fff" />
                  <p className={styles.realease}>{movie.release_date}</p>
                </span>

                <span className={styles.boxRealease}>
                  <CustomIcon icon="star" size="24px" color="#fff" />
                  <p className={styles.realease}>{movie.vote_average}</p>
                </span>
              </div>

              <h2 className={styles.overview}>{movie.overview}</h2>

              <Button />
            </div>

            <figure className={styles.posterBox}>
              <img
                className={styles.poster}
                src={`${GetImages(movie.poster_path)}`}
                alt={movie.title}
              />
            </figure>
          </div>
        </section>
      )}

      {topMovies && <Slider title="Top Filmes" info={topMovies} />}

      {topSeries && <Slider title="Top Séries" info={topSeries} />}

      {topPeople && <Slider title="Top Pessoas" info={topPeople} />}
    </>
  );
};

export default Home;
