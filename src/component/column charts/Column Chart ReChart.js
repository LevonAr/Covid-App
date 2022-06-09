import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class ColumnChartReChart extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }

  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/update1_time_series/update1_fetch.json")
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
        <br>
        </br>
        <br>
        </br>
        <BarChart
          width={1000}
          height={600}
          data={this.state.data_array}
          margin={{
            top: 5, right: 60, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" minTickGap={20}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cases" fill="#8884d8" />
        </BarChart>
      </div> 
    );
  }
}

export default ColumnChartReChart;