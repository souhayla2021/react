import React, { Component } from 'react';
import user_icon from '../../images/male-user.png';
import M from 'materialize-css';
import Modal from '../Materialize_UI/small/Modal';
import { Link } from 'react-router-dom';
import { AdminProfile } from '../UserInterfaces/Admin/index';
import { ParentProfile } from '../UserInterfaces/Parent/index';
import { StudentProfile } from '../UserInterfaces/Student/index';
import { FinanceManagerProfile } from '../UserInterfaces/FinanceManager/index';
import { SchoolManagerProfile } from '../UserInterfaces/SchoolManager/index';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      name: '',
      email: '',
      password: '',
      address: '',
    };
  }

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = [
        document.querySelectorAll('.materialboxed'),
        document.querySelectorAll('.modal'),
        document.querySelectorAll('select'),
        document.querySelectorAll('.datepicker'),
      ];
      M.Materialbox.init(elems[0], { classes: '' });
      M.Modal.init(elems[1], { classes: '' });
      M.FormSelect.init(elems[2], { classes: '' });
      M.Datepicker.init(elems[3], { format: 'mmm dd, yyyy' });
    });
  };

  //INPUT CHANGE HANDLER
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  //SUBMIT HANDLER
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
    //EDIT MODAL
    const editAdminModal = (
      <Modal id="editModal" className="modal" title="Edit Profile">
        <form id="editProfile" className="row" style={{ zIndex: '1' }}>
          {/* PHOTO */}
          <div className="input-field col s12">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input
                  name="file"
                  type="file"
                  accept="image/*"
                  single
                  onChange={this.handleInputChange}
                />
              </div>

              <div class="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Update photo"
                />
              </div>
            </div>
          </div>
          {/* NAME */}
          <div className="input-field col s12">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" className="validate" />
          </div>

          {/* EMAIL */}
          <div className="input-field col s12">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
            />
          </div>

          {/* REGISTRATION NUMBER */}
          <div className="input-field col s12">
            <label htmlFor="registrationNumber">Registration Number</label>
            <input
              name="registrationNumber"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
            />
          </div>

          {/* NIC */}
          <div className="input-field col s12">
            <label htmlFor="nic">NIC</label>
            <input
              name="nic"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
            />
          </div>

          {/* CONTRACT TYPE */}
          <div class="input-field col s12">
            <select name="contractType" onChange={this.handleInputChange}>
              <option value="" disabled selected>
                --Choose Contract Type--
              </option>
              <option value="cdd">CDD</option>
              <option value="cdi">CDI</option>
            </select>
            <label className="black-text">Contract Type</label>
          </div>
          {/* /CONTRACT TYPE */}

          {/* CONTRACT DUE DATE */}
          <div className="input-field col s12">
            <label htmlFor="contractDueDate">Contract Due Date</label>
            <input
              name="contractDueDate"
              type="text"
              className="datepicker"
              onChange={this.handleInputChange}
            />
          </div>

          {/* BIRTHDATE */}
          <div className="input-field col s12">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              name="birthdate"
              type="text"
              className="datepicker"
              onChange={this.handleInputChange}
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="input-field col s12">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              name="phoneNumber"
              type="number"
              className="validate"
              maxLength="8"
              onChange={this.handleInputChange}
            />
          </div>
          {/* PHONE NUMBER */}
          <div className="input-field col s12">
            <textarea
              name="address"
              type="number"
              className="materialize-textarea"
              data-length="120"
              onChange={this.handleInputChange}
            />
            <label htmlFor="address">Address</label>
          </div>

          {/* Password */}
          <div className="input-field col s12">
            <label htmlFor="password">Reset Password</label>
            <input
              name="password"
              type="password"
              className="validate"
              onChange={this.handleInputChange}
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
    return (
      <section className="section section-recent container">
        <div className="row">
          <h4
            className="col s12 pull-s2 teal-text text-lighten-2 left"
            style={{ marginTop: '0', marginBottom: '0', marginLeft: '-30px' }}
          >
            Account Settings
          </h4>
        </div>

        {/* PROFILE SETTINGS */}
        <div class="row">
          <div class="col s12">
            <div class="card grey-text text-darken-3">
              <div class="card-content">
                <div class="row">
                  {/* EDIT SETTINGS BUTTON */}
                  <div className="col s3 right">
                    <a
                      className="waves-effect waves-light btn right modal-trigger"
                      data-target="editModal"
                    >
                      <i class="material-icons left medium">edit</i>
                      Edit Profile
                    </a>
                  </div>
                  {/* /EDIT SETTINGS BUTTON */}
                  {/* USER PROFILES */}
                  <AdminProfile />
                  {/* /USER PROFILES */}
                  {/* MODAL */}
                  {editAdminModal}
                  {/* /MODAL */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
