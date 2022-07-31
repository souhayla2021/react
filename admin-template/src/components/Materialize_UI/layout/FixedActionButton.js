import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export class FixedActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fab = props.fab;
    this.actions = props.actions;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.fixed-action-btn');
      M.FloatingActionButton.init(elems, {});
    });
  };
  render() {
    return (
      <div className="fixed-action-btn">
        <a
          href="#fixed_action_button"
          className={`btn-floating btn-large ${this.fab.color}`}
        >
          <i className={this.fab.IconClass}>{this.fab.icon}</i>
        </a>
        <ul>
          {this.actions.map((action) => {
            return (
              <li>
                <a
                  href={action.modalID}
                  className={`modal-trigger btn-floating ${action.color}`}
                >
                  <i className={action.iconClass}>{action.icon}</i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FixedActionButton;
