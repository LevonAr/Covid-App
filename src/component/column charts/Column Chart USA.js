import React, { PureComponent } from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

import Button from 'react-bootstrap/Button'
import {
    Route,
    NavLink,
    BrowserRouter,
    Switch
  } from "react-router-dom";


class ColumnChartStates extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }

  }

  componentDidMount() {

    //scroll page up after clicking on state
    window.scrollTo(0, 0)
    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/utility/pie_chart_data_generator/state/state_data.json")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let step_a = JSON.parse(data)

      let step_b = step_a[this.props.info]

      console.log(step_b)

      let state_total = +step_b[0]

      this.setState({
        total: state_total
      })
    })

    

    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/update1_time_series/USA_update1.json")
      .then((response) => {
        return response.text();
      })
      .then((data) => {

        let step_a = JSON.parse(data)

        let step_b = step_a[this.props.info]

        let result = Object.entries(step_b); 

        let state_object = []

        for(let i = 0; i < result.length; i++) { 
          let state_obj = {}
          state_obj["date"] = result[i][0]
          state_obj["cases"] = result[i][1]

          state_object.push(state_obj)
        }

        console.log(state_object)

        const data2012 = state_object

        
        this.setState({
          data_array: data2012
        })
        
      })
  }

  render() {
    return (
      <div>

        <br>
        </br>
 

        <center>
      <div id="font" class="shadow p-3 mb-0 rounded bg-white border ">
        Total Confirmed Cases in {this.props.info}: {this.state.total}
      </div>
      <br></br>
      </center>

        <div class="shadow-lg p-3 mb-0 rounded bg-white border" >

    
        <BarChart
          width={1070}
          height={400}
          data={this.state.data_array}
          margin={{
            top: 5, right: 60, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" minTickGap={20}/>
          <YAxis />
          <Tooltip />
          <Legend height={30} verticalAlign="top" payload = {[{ value: "Daily new cases in "+this.props.info, type: 'line' }]}/>
          <Bar dataKey="cases" fill="#8884d8" />
        </BarChart>

        </div>



        <br></br>

        <a href="https://github.com/CSSEGISandData/COVID-19"><center>Source: Johns Hopkins University CSSE</center></a>

    
      </div> 
    );
  }
}

export default ColumnChartStates;