import React, { Component } from 'react';
import img from '../../images/male-user.png';
import M from 'materialize-css';
import Modal from '../Materialize_UI/small/Modal';
import { Link } from 'react-router-dom';

export class ExtracurricularDetails extends Component {
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
        document.querySelectorAll('.materialboxed'),
        document.querySelectorAll('.modal'),
        document.querySelectorAll('select'),
      ];
      M.Materialbox.init(elems[0], { classes: '' });
      M.Modal.init(elems[1], { classes: '' });
      M.FormSelect.init(elems[2], { classes: '' });
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
        '\nLevel: ' +
        this.state.level +
        '\nDescription: ' +
        this.state.content
    );
  };

  render() {
    const editModal = (
      <Modal id="editModal" className="modal" title="Edit Extracurricular">
        <form id="editExtracurricular" className="row" style={{ zIndex: '1' }}>
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
          {/* CONTENT */}
          <div className="input-field col s12">
            <label htmlFor="content">Description</label>
            <textarea
              onChange={this.handleInputChange}
              name="content"
              className="materialize-textarea validate"
            />
          </div>
          {/* ACTIONS */}
          <div className="col s12 center">
            <Link
              to="/editUser"
              className="right modal-close btn-flat blue lighten-1 white-text"
              onClick={this.handleSubmit}
            >
              Edit
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
    const ressource = (
      <div className="col s12">
        <div className="card grey-text text-darken-3">
          <div className="card-content">
            {/* FILE */}
            <div className="col s12 center">
              <Link to="/uploads/docker.docx" target="_blank" download>
                <i className="fa fa-file large center"></i>
                <br />
                <span className="center">Download File</span>
              </Link>
            </div>
            {/* /FILE */}

            {/* VIDEO FILE */}
            <div class="row">
              <div className="col s6 offset-s3">
                <div className="video-container">
                  <iframe
                    width="200"
                    height="200"
                    src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/* /VIDEO FILE */}

              {/* PHOTO */}
              <div className="col s4 offset-s5">
                <img
                  className="responsive-img materialboxed"
                  width="50%"
                  src={img}
                ></img>
              </div>
              {/* /PHOTO */}

              {/* EXTRACURRICULAR DATA */}
              <h5 className="col offset-s4 s3 grey-text text-darken-4">
                Title
              </h5>
              <h5 className="col s3 grey-text text-darken-4">Description</h5>

              <p className="col offset-s4 s3  grey-text text-darken-2">
                course video
              </p>
              <p className="col s3 grey-text text-darken-2">
                This is a video ressource
              </p>

              <h5 className="col offset-s4 s3  grey-text text-darken-4">
                Level
              </h5>
              <h5 className="col s3 grey-text text-darken-4">Subject</h5>

              <p className="col offset-s4 s3  grey-text text-darken-2">2</p>
              <p className="col s3 grey-text text-darken-2">maths</p>

              <h5 className="col offset-s4 s3  grey-text text-darken-4">
                Likes
              </h5>
              <h5 className="col s3 grey-text text-darken-4">Dislikes</h5>

              <p className="col offset-s4 s3  grey-text text-darken-2">266</p>
              <p className="col s3 grey-text text-darken-2">1</p>
              {/* /EXTRACURRICULAR DATA */}
              {/* COMMENTS SECTION */}
              <div className="col s12">
                <div className="card teal lighten-1">
                  <div className="card-content white-text">
                    <h5
                      className="card-title"
                      style={{ fontSize: 30, fontWeight: 'bold' }}
                    >
                      Comments
                    </h5>
                    <div className="section">
                      {/* USER COMMENT */}
                      <span
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        Username
                      </span>
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                      {/* /USER COMMENT */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /COMMENTS SECTION */}
            </div>
          </div>
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
            Extracurricular Details
          </h4>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="row">
              <a
                className="col s3 waves-effect waves-light btn right modal-trigger"
                data-target="editModal"
              >
                <i class="material-icons left medium">edit</i>
                Edit Extracurricular
              </a>
            </div>
            <div class="row">{ressource}</div>
            {editModal}
          </div>
        </div>
      </div>
    );
  }
}
