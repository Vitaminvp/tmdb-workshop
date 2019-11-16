import React, { useEffect } from "react";
import "./App.css";
import { getMovies } from "./redux/movies";
import { changeRole, ROLES } from "./redux/roles";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies())
  }, []);

  const movies = useSelector(state => state.movies.movies);
  //const isLoading = useSelector(state => state.movies.isLoading);
  const role = useSelector(state => state.roles.current);
  console.log(movies);
  return (
    <div className="App">

        <div id="header"></div>

        <h1 id="logo">{role}</h1>

        <select
          onChange={(e) => dispatch(changeRole(e.target.value))}
          className="select-css"
        >
          <option value={ROLES.ANONYMOUS}>Anonymous</option>
          <option value={ROLES.USER}>User</option>
          <option value={ROLES.ADMIN}>Admin</option>
        </select>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              {ROLES.USER !== role.toLowerCase() &&
                ROLES.ANONYMOUS !== role.toLowerCase() && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    width="200"
                    alt=""
                  />
                )}
              {ROLES.ANONYMOUS !== role.toLowerCase() && (
                <p>{movie.overview}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
