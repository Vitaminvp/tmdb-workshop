import React from "react";
import { connect } from "react-redux";

import "./App.css";

import { getMovies } from "./redux/movies";
import { changeRole, ROLES } from "./redux/roles";

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.movies.isLoading,
  role: state.roles.current
});

const mapDispatchToProps = {
  getMovies,
  changeRole
};

class App extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const {
      movies: { movies },
      role,
      changeRole
    } = this.props;
    console.log(role);
    return (
      <div className="App">
        <p>
          <div id="header"></div>

          <h1 id="logo">{role}</h1>

          <select onChange={e => changeRole(e.target.value)} className="select-css" >
            <option value={ROLES.ANONYMOUS}>Anonymous</option>
            <option value={ROLES.USER}>User</option>
            <option value={ROLES.ADMIN}>Admin</option>
          </select>
        </p>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                {(ROLES.USER !== role.toLowerCase() &&
                  ROLES.ANONYMOUS !== role.toLowerCase()) && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    width="200"
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
