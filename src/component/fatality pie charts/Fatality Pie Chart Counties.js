import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'



class FatalityChart extends React.Component {
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
        colors:["#FC4445", "#55BCC9"],
        dataLabels: {
          enabled: true
        },
        fill: {
          type: 'gradient',
        },
        labels:["Deaths","Active Cases"],
        legend: {
          inverseOrder: true,
          fontSize: '30px',
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

    //scroll page up after clicking on state
    window.scrollTo(0, 0)

    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/utility/county_data.json")
      .then((response) => {
        return response.text();
      })
      .then((data) => {

        let step_a = JSON.parse(data)

        let step_b = step_a[this.props.info]

        console.log(step_b)

        let county_total = +step_b[0] + +step_b[1]

        let test_series = []

        test_series.push(+step_b[0])

        test_series.push(+step_b[1])




        this.setState({
          total: county_total,

          series: test_series
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

        <Chart options={this.state.options} series={this.state.series} type="donut" height= {500} width={500} />
        </div>

        <br></br>
        <a href="https://github.com/CSSEGISandData/COVID-19"><center>Source: Johns Hopkins University CSSE</center></a>

      </div>  


);
}
}

export default FatalityChart
