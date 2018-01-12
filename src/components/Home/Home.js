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

  render() {
    const { hoverLeft, hoverRight } = this.state;
    return (
      <Grid className={classNames('Home', {'hover-left': hoverLeft, 'hover-right': hoverRight})}>
        <Link
          className="headline one-half left"
          onMouseOver={() => this.setState({hoverLeft: true})}
          onMouseOut={() => this.setState({hoverLeft: false})}
          to="/german">
        </Link>
        <Link
          className="headline one-half right"
          onMouseOver={() => this.setState({hoverRight: true})}
          onMouseOut={() => this.setState({hoverRight: false})}
          to="/russian">
        </Link>
      </Grid>
    )
  }
}

export default Home;
