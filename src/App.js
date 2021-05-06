import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function Enum(list) {
  for (let i in list) {
    list[i].key = Number(i);
  }
  return list;
}

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    let {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit: 50,
        sort_by: "rating",
      },
    });

    movies = Enum(movies);
    this.setState({ isLoading: false, movies: movies });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.key}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
