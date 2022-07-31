import React, { Component } from 'react';
import Modal from '../Materialize_UI/small/Modal';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export class Extracurricular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      libelle: '',
      content: '',
      file: '',
      photo: '',
      video: '',
      subject: '',
      level: '',
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
    alert(
      'Check Account Infos:\nLabel: ' +
        this.state.libelle +
        '\nFile: ' +
        this.state.file +
        '\nPhoto: ' +
        this.state.photo +
        '\nVideo: ' +
        this.state.video +
        '\nLevel: ' +
        this.state.level +
        '\nDescription: ' +
        this.state.content
    );
  };

  render() {
    const addModal = (
      <Modal id="addModal" className="modal" title="Add Extracurricular">
        <form id="addExtracurricular" className="row" style={{ zIndex: '1' }}>
          {/* LABEL */}
          <div className="input-field col s12">
            <label htmlFor="libelle">Label</label>
            <input
              name="libelle"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
            />
          </div>
          {/* /LABEL */}
          {/* Vidoe */}
          <div className="input-field col s12">
            <div class="file-field input-field">
              <div class="btn">
                <span>Vidoe</span>
                <input
                  name="video"
                  type="file"
                  accept="video/*"
                  single
                  onChange={this.handleInputChange}
                />
              </div>

              <div class="file-path-wrapper">
                <input
                  class="file-path validate"
                  type="text"
                  placeholder="Upload a video"
                />
              </div>
            </div>
          </div>
          {/* /Video */}
          {/* Photo */}
          <div className="input-field col s12">
            <div class="file-field input-field">
              <div class="btn">
                <span>Photo</span>
                <input
                  name="photo"
                  type="file"
                  accept="image/*"
                  single
                  onChange={this.handleInputChange}
                />
              </div>

              <div class="file-path-wrapper">
                <input
                  class="file-path validate"
                  type="text"
                  placeholder="Upload a photo"
                />
              </div>
            </div>
          </div>
          {/* /Photo */}
          {/* File */}
          <div className="input-field col s12">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input
                  name="file"
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  single
                  onChange={this.handleInputChange}
                />
              </div>

              <div class="file-path-wrapper">
                <input
                  class="file-path validate"
                  type="text"
                  placeholder="Upload a file"
                />
              </div>
            </div>
          </div>
          {/* /File */}
          {/* LEVEL */}
          <div class="input-field col s12">
            <select name="level" onChange={this.handleInputChange}>
              <option value="" disabled selected>
                --Choose Level--
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label className="black-text">Level</label>
          </div>
          {/* /LEVEL */}
          {/* CONTENT */}
          <div className="input-field col s12">
            <label htmlFor="content">Description</label>
            <textarea
              onChange={this.handleInputChange}
              name="content"
              className="materialize-textarea validate"
            />
          </div>
          {/* /CONTENT */}
          {/* ACTIONS */}
          <div className="col s12 center">
            <Link
              to="/addUser"
              className="right modal-close btn-flat blue lighten-1 white-text"
              onClick={this.handleSubmit}
            >
              Add
            </Link>
            <a
              href="#Cancel"
              className="left modal-close btn-flat red lighten-1 white-text"
            >
              Cancel
            </a>
          </div>
        </form>
      </Modal>
    );

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
            <div className="row">
              <a
                href="/#"
                className="col s3 waves-effect waves-light btn right modal-trigger"
                data-target="addModal"
              >
                <i class="material-icons left medium">add</i>
                Add Extracurricular
              </a>
            </div>
            <div class="row">{ressource}</div>
          </div>
        </div>

        {addModal}
      </div>
    );
  }
}
