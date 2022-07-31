import React, { Component } from 'react';
import './style.css';

import { Login } from './login';
import { Signup } from './signup';
import { Overlay } from './overlay';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateActive: false,
    };
    this.containerRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isCreateActive: !prevState.isCreateActive,
    }));
  };

  render() {
    return (
      <div
        className={
          this.state.isCreateActive
            ? 'center auth-container right-panel-active'
            : 'center auth-container'
        }
        style={{ margin: 'auto', width: '50%', top: '20px' }}
        ref={this.containerRef}
      >
        <Signup />
        <Login />
        <Overlay onClick={this.handleClick} />
      </div>
    );
  }
}

export default Index;
