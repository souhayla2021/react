import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export class MenuCollapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount = () => {
    const options = {
      onOpenStart: () => {},
      onOpenEnd: () => {},
      onCloseStart: () => {},
      onCloseEnd: () => {},
      inDuration: 300,
      outDuration: 200,
    };
    M.Collapsible.init(this.Collapsible, options);
  };

  handleClick = () => {
    this.setState((prevState) => ({
      itemOpen: !prevState.itemOpen,
    }));
  };

  render() {
    return (
      <ul
        ref={(Collapsible) => {
          this.Collapsible = Collapsible;
        }}
        className={`collapsible ${this.props.className}`}
      >
        <li key={this.props.key}>
          <a
            href="#link"
            className={`collapsible-header ${this.props.headerClassName}`}
            onClick={this.handleClick}
          >
            <i className={this.props.iconClass}>{this.props.icon}</i>
            {this.props.label}
            <i className="material-icons right" style={{ marginRight: '0' }}>
              {this.state.itemOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
            </i>
          </a>
          <div className="collapsible-body">
            <ul key={`children${this.props.key}`}>{this.props.elems}</ul>
          </div>
        </li>
      </ul>
    );
  }
}

export default MenuCollapsible;
