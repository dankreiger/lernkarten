import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import classNames from 'classnames';

import './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { hoverLeft: false, hoverRight: false }
    this.onMouseLeftEnter = this.onMouseLeftEnter.bind(this);
    this.onMouseLeftLeave = this.onMouseLeftLeave.bind(this);
    this.onMouseRightEnter = this.onMouseRightEnter.bind(this);
    this.onMouseRightLeave = this.onMouseRightLeave.bind(this);
  }

  // hover effects
  onMouseLeftEnter() { this.setState({hoverLeft: true}) }
  onMouseRightEnter() { this.setState({hoverRight: true}) }
  onMouseLeftLeave() { this.setState({hoverLeft: false}) }
  onMouseRightLeave() { this.setState({hoverRight: false}) }

  render() {
    const { history } = this.props;
    return (
      <Grid className={classNames('Home', {'hover-left': this.state.hoverLeft, 'hover-right': this.state.hoverRight})}>
          <div
            className="flex flex-justify-center flex-align-items-center one-half left"
            onMouseEnter={this.onMouseLeftEnter}
            onMouseLeave={this.onMouseLeftLeave}
            onClick={() => { history.push('/russian') }}>
          <div className="headline">los</div>
          </div>
          <div
            className="flex flex-justify-center flex-align-items-center one-half right"
            onMouseEnter={this.onMouseRightEnter}
            onMouseLeave={this.onMouseRightLeave}
            onClick={() => { history.push('/russian') }}>
          <div className="headline">пошли</div>
          </div>
      </Grid>
    )
  }
}



export default Home;
