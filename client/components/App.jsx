import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dropdown from './Dropdown.jsx';
import About from './About.jsx';

import '../styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: {},
    };

    this.getArtistState = this.getArtistState.bind(this);
    this.handleOverviewClick = this.handleOverviewClick.bind(this);
    this.handleRelatedClick = this.handleRelatedClick.bind(this);
  }

  componentDidMount() {
    this.getArtistState(1);
  }

  getArtistState(artistId) {
    fetch(`/data/artist?artistId=${artistId}`)
      .then((results) => (results).json())
      .then(({ artist }) => {
        this.setState({
          artist: artist[0],
        });
      })
      .catch(console.log);
  }

  handleOverviewClick() {
    window.location.hash = '#overview';
  }

  handleRelatedClick() {
    window.location.hash = '#related';
  }

  render() {
    const { artist } = this.state;
    const { handleOverviewClick, handleRelatedClick } = this;

    const routing = (
      <Router>
        <div className="btn-container-bottom">
          <Link to="/#overview">
            <button type="button" className="btn-overview" onClick={handleOverviewClick}>overview</button>
          </Link>
          <Link to="/#related">
            <button type="button" className="btn-related-artists" onClick={handleRelatedClick}>related artists</button>
          </Link>
          <Link to="/about">
            <button type="button" className="btn-about">about</button>
          </Link>
        </div>
        <div className="body-component">
          <Route path="/about" component={About} />
        </div>
      </Router>
    );

    if (artist) {
      const divStyle = {
        backgroundImage: `url(${artist ? artist.artist_img_url : 'empty'})`,
      };

      return (
        <div className="img-header" style={divStyle}>
          <div className="listeners-container">2,475,356 monthly listeners</div>
          <h1 className="title">{artist.artist_name}</h1>
          <div className="btn-container-top">
            <button type="button" className="btn-play">play</button>
            <button type="button" className="btn-save">save to your library</button>
            <Dropdown />
          </div>
          <div>{routing}</div>
        </div>
      );
    }
    return (<div />);
  }
}

export default App;
