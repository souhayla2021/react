import React, { Component } from 'react';
import Chart from 'chart.js';

export class ChartStat extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.initChart = this.initChart.bind(this);
  }

  componentDidMount = () => {
    this.initChart(
      this.props.id,
      this.props.type,
      this.props.dataLabels,
      this.props.chartLabel,
      this.props.data,
      this.props.dataBgColors,
      this.props.dataBorderColors,
      this.props.dataBorderWidth
    );
  };
  initChart = (
    id,
    type,
    dataLabels,
    chartLabel,
    data,
    dataBgColors,
    dataBorderColors,
    dataBorderWidth
  ) => {
    var ctx = document.getElementById(`${id}`);
    new Chart(ctx, {
      type: type,
      data: {
        labels: dataLabels,
        datasets: [
          {
            label: chartLabel,
            data: data,
            backgroundColor: dataBgColors,
            borderColor: dataBorderColors,
            borderWidth: dataBorderWidth,
            hoverBackgroundColor: 'WhiteSmoke',
            hoverBorderColor: 'grey darken-2',
            hoverBorderWidth: '3',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  render() {
    return (
      // <div className={`section ${this.props.chartSectionClass}`}>
      <div
        className={`card-panel container ${this.props.cardPanelClass}`}
        style={{ margin: '4%' }}
      >
        <canvas
          id={this.props.id}
          className={this.props.className}
          width={`${this.props.width}`}
          height={`${this.props.height}`}
        ></canvas>
      </div>
      // </div>
    );
  }
}

export default ChartStat;
