import React, { Component } from 'react';
import M from 'materialize-css';
import Modal from '../small/Modal';
import 'materialize-css/dist/css/materialize.min.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons/js/buttons.flash.min.js';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import jszip from 'jszip';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import { Link } from 'react-router-dom';
import data from '../../../models/students.json';

//JQuery and Datatable initialization
const $ = require('jquery');
$.DataTable = require('datatables.net');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jszip;

export class TeacherDatatable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      {
        title: 'FirstName',
        width: 120,
        data: 'firstname',
      },
      {
        title: 'Lastname',
        width: 180,
        data: 'lastname',
      },
      {
        title: 'Languages',
        width: 180,
        data: 'languages',
      },
      {
        title: 'Actions',
        width: 180,
        data: function (data, type, dataToSet) {
          return `
              <ul class="row">
                <li class="col offset-l2 l4 m4 s12">
                  <a
                    data-target="editModal/${data.id}"
                    class="btn-floating
                      btn-small
                      waves-effect
                      waves-light
                      purple lighten-2
                      modal-trigger"
                  >
                    <i class="material-icons small">edit</i>
                  </a>
                </li>
                <li class="col l4 m4 s12">
                  <a
                    data-target="deleteModal/${data.id}"
                    class="btn-floating
                      btn-small
                      waves-effect
                      waves-light
                      red lighten-1
                      modal-trigger"
                  >
                    <i class="material-icons small">delete</i>
                  </a>
                </li>
              </ul>
              <div id="editModal/${data.id}" class="modal">
                <div class="modal-content">
                  <h4 class="center">Edit User</h4>
                    <form
                      id="editUser/${data.id}"
                      class="row"
                    >
                      <div class="input-field col s12">
                        <label for="insNum">Inscription Number</label>
                        <input
                          id="insNum${data.id}"
                          type="number"
                          value="${data.insNum}"
                          class="validate"
                        />
                      </div>
                      <div class="input-field col s12">
                        <label for="firstname">Firstname</label>
                        <input
                          key="fn${data.id}"
                          id="firstname${data.id}"
                          type="text"
                          value="${data.firstname}"
                          class="validate"
                        />
                      </div>
                      <div class="input-field col s12">
                        <label for="lastname">LastName</label>
                        <input
                          key="ln${data.id}"
                          id="lastname${data.id}"
                          type="text"
                          value="${data.lastname}"
                          class="validate"
                        />
                      </div>
                      <div class="col s12 center">
                        <a
                          href="editUser/${data.id}"
                          class="right modal-close btn-flat blue lighten-1 white-text"
                        >
                          Edit
                        </a>
                        <a class="left modal-close btn-flat red lighten-1 white-text">
                          Cancel
                        </a>
                      </div>
                    </form>
                </div>
              </div>
              <div id="deleteModal/${data.id}" class="modal">
                <div class="modal-content row">
                  <h4 class="center">Delete User</h4>
                  <div class="col s12 center">
                    <p> Are you sure you want to delete this user? </p>
                  </div>
                  <div class="col s12 center">
                    <a
                      href="deleteUser/${data.id}"
                      class="center modal-close btn-flat red lighten-1 white-text"
                    >
                      Delete
                    </a>
                    <a class="center modal-close btn-flat grey darken-2 white-text">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            `;
        },
      },
    ];
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  /**
   * The table initialization itself needs to happen only once when our component is mounted,
   * because we want to leave all internal DOM manipulation to Datatables.
   */
  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = [
        document.querySelectorAll('select'),
        document.querySelectorAll('.modal'),
      ];
      //M.FormSelect.init(elems[0], { classes: '' });
      M.Modal.init(elems[1], {});
    });
    var columns = this.columns;
    $('#datatable').DataTable({
      dom: 'Bfrtip',
      data: data,
      columns,
      columnDefs: [
        {
          targets: ['_all'],
          className: 'datatable__cell',
        },
        { orderData: [1, 'asc'] },
      ],
      ordering: true,
      paging: true,
      searching: true,
      smart: true,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
      ],
      pageLength: 10,

      buttons: [
        'pageLength',
        {
          extend: 'pdfHtml5',
          text: 'PDF',
          attr: {
            class: 'btn blue lighten-2 modal-trigger',
            id: 'pdf',
          },
        },
        {
          extend: 'csvHtml5',
          text: 'CSV',
          attr: {
            class: 'btn blue lighten-2 modal-trigger',
            id: 'csv',
          },
        },
        {
          extend: 'copy',
          text: 'Copy',
          attr: {
            class: 'btn blue lighten-2 modal-trigger',
            id: 'copy',
          },
        },
        {
          text: 'Add Student',
          // action: function () {},
          attr: {
            class: 'btn blue waves-effect lighten-2 modal-trigger',
            id: 'addButton',
            'data-target': 'addModal',
          },
          init: function (node) {
            $(node).removeClass('dt-button');
            // $(node).attr({
            //   'data-target': 'addModal',
            // });
          },
        },
      ],
    });
  };

  /**
   * Finally, we need to destroy the table when the component is about to be unmounted.
   * This is done in the componentWillUnmount method with the appropriate Datatables API call.
   */
  componentWillUnmount() {
    $('.data-table-wrapper').find('table').DataTable().destroy(true);
  }

  render() {
    const addModal = (
      <Modal id="addModal" className="modal" title="Add Student">
        <form id="addUser" className="row" style={{ zIndex: '1' }}>
          <div className="input-field col s12">
            <label htmlFor="insNum">Inscription Number</label>
            <input id="insNum" type="number" className="validate" />
          </div>
          <div className="input-field col s12">
            <label htmlFor="firstname">Firstname</label>
            <input id="firstname" type="text" className="validate" />
          </div>
          <div className="input-field col s12">
            <label htmlFor="firstname">Lastname</label>
            <input id="lastname" type="text" className="validate" />
          </div>
          <div className="col s12 center">
            <Link
              to="/addUser"
              className="right modal-close btn-flat blue lighten-1 white-text"
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
    return (
      <div className="section">
        <table
          id="datatable"
          className="display teal lighten-2 grey-text text-darken-3"
          style={{}}
        />
        {/* ADD MODAL */}
        {addModal}
      </div>
    );
  }
}
