import React, { Component } from 'react';
import { EmployeeDatatable } from '../Materialize_UI/tables/index';
import students from '../../models/students.json';

export class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
    this.students = JSON.parse(JSON.stringify(students));
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log(typeof students);
  }

  render() {
    return (
      <section className="section section-recent container">
        <div className="row">
          <h4
            className="col s12 pull-s2 teal-text text-lighten-2 left"
            style={{ marginTop: '0', marginBottom: '0', marginLeft: '-30px' }}
          >
            Employees
          </h4>
        </div>
        <EmployeeDatatable />
      </section>
    );
  }
}
