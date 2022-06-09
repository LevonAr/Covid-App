import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'


class FatalityChartStates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


      total: 0 ,
      series: [],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        colors:["#55BCC9","#3FEEE6","#97CAEF","#FC4445"],
        dataLabels: {
          enabled: true
        },
        fill: {
          type: 'gradient',
        },
        labels:["Non-Hospitalized Cases","Recovered","Hospitalized Cases","Deaths"],
        //labels:["Deaths","Active Cases"],
        legend: {
          inverseOrder: true,
          fontSize: '18px',
          fontFamily: 'Avenir Next',
          position: 'top',
          formatter: function(val, opts) {
            return val + ": " + opts.w.globals.series[opts.seriesIndex]
          }
        },

        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {},
                value: {}
              }
            }
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }



  componentDidMount() {

    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/utility/pie_chart_data_generator/state/state_data.json")
      .then((response) => {
        return response.text();
      })
      .then((data) => {

        let step_a = JSON.parse(data)

        let step_b = step_a[this.props.info]

        console.log(step_b)

        let state_total = +step_b[0]

        let deaths = +step_b[1]

        let recovered = +step_b[2]

        let hosp = +step_b[3]

        let state_series = []

        let active_cases = state_total - (deaths+recovered+hosp)

        state_series.push(active_cases)

        state_series.push(recovered)

        state_series.push(hosp)

        state_series.push(deaths)


        this.setState({
          total: state_total,

          series: state_series
        })
        
      })
  }






  render() {
    return (

      <div id="main">

      <br>
      </br>
   

      <center>
      <div id="font" class="shadow p-3 mb-0 rounded bg-white border ">
        Total Confirmed Cases in {this.props.info}: {this.state.total}
      </div>
      <br></br>
      </center>
        <div  class="shadow p-3 rounded bg-white border" style={{display: 'flex',  justifyContent:'center', alignContent:"stretch"}}>

        <Chart options={this.state.options} series={this.state.series} type="donut" height= {515} width={515} />
        </div>

        <br></br>
        <a href="https://github.com/CSSEGISandData/COVID-19"><center>Source: Johns Hopkins University CSSE</center></a>

      </div>  


);
}
}

export default FatalityChartStates
