import React, { Component } from 'react';
import img from '../../images/male-user.png';
import M from 'materialize-css';
import Modal from '../Materialize_UI/small/Modal';
import { Link } from 'react-router-dom';

export class StudentExtracurricularDetails extends Component {
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
      var elems = [document.querySelectorAll('.materialboxed')];
      M.Materialbox.init(elems[0], { classes: '' });
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
    const ressource = (
      <div className="col s12">
        <div className="card grey-text text-darken-3">
          <div className="card-content">
            {/* LIKE DISLIKE SECTION */}
            <div className="col s12 center">
              <Link href="/uploads/docker.docx">
                <i className="fa fa-thumbs-up small grey-text text-darken-2 right"></i>
              </Link>
              <Link to="">
                <i className="fa fa-thumbs-down small grey-text text-darken-2 right"></i>
              </Link>
            </div>
            {/* /LIKE DISLIKE SECTION */}
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
            <div class="row">{ressource}</div>
          </div>
        </div>
      </div>
    );
  }
}
