import React, { Component } from 'react';
import { CardStatistics, ChartStat } from '../Materialize_UI/statistics/index';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cards = [
      {
        col_class: 's12 m6 l3',
        card_panel_class: 'teal lighten-1 white-text center',
        icon_class: 'fa fa-user-graduate medium',
        criterion: 'New Students',
        count: 283,
        progress_bar_class: 'grey lighten-1',
        determinate_class: 'white',
        progress_rate: '40%',
      },
      {
        col_class: 's12 m6 l3',
        card_panel_class: 'grey lighten-4 teal-text center',
        icon_class: 'fa fa-chalkboard-teacher medium',
        criterion: 'New Teachers',
        count: 12,
        progress_bar_class: 'grey lighten-1',
        determinate_class: 'teal',
        progress_rate: '30%',
      },
      {
        col_class: 's12 m6 l3',
        card_panel_class: 'teal lighten-1 white-text center',
        icon_class: 'fa fa-id-badge medium',
        criterion: 'New Staff Members',
        count: 4,
        progress_bar_class: 'grey lighten-1',
        determinate_class: 'white',
        progress_rate: '40%',
      },
      {
        col_class: 's12 m6 l3',
        card_panel_class: 'grey lighten-4 teal-text center',
        icon_class: 'fa fa-users medium',
        criterion: 'Total New Members',
        count: 299,
        progress_bar_class: 'grey lighten-1',
        determinate_class: 'teal',
        progress_rate: '30%',
      },
    ];
  }
  render() {
    return (
      <div className="section">
        <div className="row">
          <h4
            className="col s4 teal-text text-lighten-2 left"
            style={{ marginTop: '0' }}
          >
            Dashboard
          </h4>
        </div>
        <div className="card">
          <div className="card-content">
            <h3 className="card-title center teal-text text-lighten-2">
              New Members
            </h3>
            <CardStatistics cards={this.cards} />
          </div>
        </div>

        <div className="card">
          <div className="card-content row center">
            <span className="card-title center teal-text text-lighten-2">
              Members Statistics
            </span>
            <ChartStat
              cardPanelClass="hoverable col offset-l1 l5 m6 s12"
              id="myChart"
              width="300"
              height="200"
              type="pie"
              dataLabels={['students', 'teachers', 'staff']}
              chartLabel="New Members"
              data={[200, 10, 12]}
              dataBgColors={['LightSalmon', 'Cornsilk', 'LightSkyBlue']}
              dataBorderColors={['Coral', 'BurlyWood', 'CornflowerBlue']}
              dataBorderWidth={2}
            />
            <ChartStat
              cardPanelClass="hoverable col l5 m6 s12"
              id="chart"
              width="300"
              height="200"
              type="bar"
              dataLabels={['students', 'teachers', 'staff']}
              chartLabel="New Members"
              data={[200, 10, 12]}
              dataBgColors={['LightSalmon', 'Cornsilk', 'LightSkyBlue']}
              dataBorderColors={['Coral', 'BurlyWood', 'CornflowerBlue']}
              dataBorderWidth={2}
            />
          </div>
        </div>
      </div>
    );
  }
}
