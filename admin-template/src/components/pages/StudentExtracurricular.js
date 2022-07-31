import React, { Component } from 'react';
import Modal from '../Materialize_UI/small/Modal';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export class StudentExtracurricular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      likeCount: '',
      dislikeCount: '',
      comment: '',
    };
  }

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = [
        document.querySelectorAll('select'),
        document.querySelectorAll('.modal'),
      ];
      M.FormSelect.init(elems[0], { classes: '' });
      M.Modal.init(elems[1], {});
    });
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    /**
     * THIS IS WHERE YOU CONSUME DATA
     */
    const ressource = (
      <div class="col s12 m6 l4">
        <div class="card-panel center grey lighten-3 teal-text">
          {/* Resource / Extracurricular Link */}
          <a href="/extracurricularDetails">
            <i class="fa fa-file-audio large"></i>
          </a>
          <h4 className="grey-text text-darken-2">Ressource A1</h4>
          <h5 class="grey-text text-darken-2">Mrs. Sarah Hattab</h5>
        </div>
      </div>
    );
    return (
      <div className="section">
        <div className="row">
          <h4
            className="col s4 teal-text text-lighten-2 left"
            style={{ marginTop: '0' }}
          >
            Extracurriculars
          </h4>
        </div>

        <div className="card">
          <div className="card-content">
            <div class="row">{ressource}</div>
          </div>
        </div>
      </div>
    );
  }
}
