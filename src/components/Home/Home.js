import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      hoverLeft: false,
      hoverRight: false
    }
  }

  componentWillMount(){
    localStorage.setItem('currentLanguage', null);
    localStorage.setItem('visibleRows', 1);
  }

  render() {
    const { hoverLeft, hoverRight } = this.state;
    return (
      <Grid className={classNames('Home', {'hover-left': hoverLeft, 'hover-right': hoverRight})}>
        <Link
          className="one-half left"
          onMouseOver={() => this.setState({hoverLeft: true})}
          onMouseOut={() => this.setState({hoverLeft: false})}
          to="/german">
          <span className="headline">Deutsch</span>
        </Link>
        <Link
          className="one-half right"
          onMouseOver={() => this.setState({hoverRight: true})}
          onMouseOut={() => this.setState({hoverRight: false})}
          to="/russian">
          <span className="headline">Русский</span>
        </Link>
      </Grid>
    )
  }
}

export default Home;
