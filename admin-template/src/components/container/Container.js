import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Navbar from '../Materialize_UI/layout/Navbar';
import Footer from '../Materialize_UI/layout/Footer';
import {
  Statistics,
  Students,
  Extracurricular,
  ExtracurricularDetails,
  StudentExtracurricular,
  StudentExtracurricularDetails,
  Teachers,
  Parents,
  Employees,
  Absences,
} from '../pages/index';
import { Profile } from '../pages/Profile';

function Container() {
  return [
    <Router>
      <header key="header">
        <Navbar key="navbar" />
      </header>
      ,
      <main key="main">
        <Switch>
          <Route path="/home" exact component={Statistics} />
          <Route path="/home/students" component={Students} />
          <Route path="/home/teachers" component={Teachers} />
          <Route path="/home/parents" component={Parents} />
          <Route path="/home/employees" component={Employees} />
          <Route path="/home/absences" component={Absences} />
          <Route path="/home/extracurricular" component={Extracurricular} />
          <Route
            path="/home/extracurricularDetails"
            component={ExtracurricularDetails}
          />
          <Route
            path="/home/studentExtracurricular"
            component={StudentExtracurricular}
          />
          <Route
            path="/home/studentExtracurricularDetails"
            component={StudentExtracurricularDetails}
          />
          <Route path="/home/profile" component={Profile} />
        </Switch>
      </main>
      ,
      <footer key="footer">
        <Footer />
      </footer>
    </Router>,
  ];
}
export default Container;
