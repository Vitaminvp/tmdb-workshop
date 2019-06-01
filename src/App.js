import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { getMovies } from './redux/movies';

const mapStateToProps = state => ({
  movies: state.movies.list,
  isLoading: state.movies.isLoading,
});

const mapDispatchToProps = {
  getMovies,
};

class App extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
