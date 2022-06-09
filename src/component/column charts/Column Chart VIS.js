import React from 'react';
import ReactDOM from 'react-dom';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
  LineSeries,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';



const anime1 = {
  duration: 2000,
  onLoad: { duration: 1000 }
}

class ColumnChartVIS extends React.Component {

	constructor(props){
        super(props)
        this.state = {
			data_array: []
        }

	}
	
	componentDidMount() {
		fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/time_series/new_json.json")
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

			console.log(Array.isArray(state_object))

			const data2012 = state_object

			
			this.setState({
				data_array: data2012
			})
			
        })
	}


  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (<XYPlot>
        <AreaSeries
          data={[
            {
              x: 0,
              y: 10
            },
            {
              x: 1,
              y: 9.87790819574381
            },
            {
              x: 2,
              y: 9.208472895054797
            },
            {
              x: 3,
              y: 8.911477714489399
            },
            {
              x: 4,
              y: 8.933098863723796
            },
            {
              x: 5,
              y: 9.126268343027554
            },
            {
              x: 6,
              y: 9.611240085730627
            },
            {
              x: 7,
              y: 9.303885448196299
            },
            {
              x: 8,
              y: 9.599978941378701
            },
            {
              x: 9,
              y: 9.904582534448163
            },
            {
              x: 10,
              y: 9.086973709978631
            },
            {
              x: 11,
              y: 9.044237729461772
            },
            {
              x: 12,
              y: 8.886457235759043
            },
            {
              x: 13,
              y: 8.854236248457863
            },
            {
              x: 14,
              y: 9.384979507891078
            },
            {
              x: 15,
              y: 8.880899109395006
            },
            {
              x: 16,
              y: 9.172940252322554
            },
            {
              x: 17,
              y: 9.735441533493272
            },
            {
              x: 18,
              y: 9.677534443809902
            },
            {
              x: 19,
              y: 9.546197638071343
            },
            {
              x: 20,
              y: 8.840186680782551
            }
          ]}
          opacity={0.25}
          stroke="transparent"
          style={{}}
        />
        <LineSeries
          curve={null}
          data={[
            {
              x: 0,
              y: 10
            },
            {
              x: 1,
              y: 9.87790819574381
            },
            {
              x: 2,
              y: 9.208472895054797
            },
            {
              x: 3,
              y: 8.911477714489399
            },
            {
              x: 4,
              y: 8.933098863723796
            },
            {
              x: 5,
              y: 9.126268343027554
            },
            {
              x: 6,
              y: 9.611240085730627
            },
            {
              x: 7,
              y: 9.303885448196299
            },
            {
              x: 8,
              y: 9.599978941378701
            },
            {
              x: 9,
              y: 9.904582534448163
            },
            {
              x: 10,
              y: 9.086973709978631
            },
            {
              x: 11,
              y: 9.044237729461772
            },
            {
              x: 12,
              y: 8.886457235759043
            },
            {
              x: 13,
              y: 8.854236248457863
            },
            {
              x: 14,
              y: 9.384979507891078
            },
            {
              x: 15,
              y: 8.880899109395006
            },
            {
              x: 16,
              y: 9.172940252322554
            },
            {
              x: 17,
              y: 9.735441533493272
            },
            {
              x: 18,
              y: 9.677534443809902
            },
            {
              x: 19,
              y: 9.546197638071343
            },
            {
              x: 20,
              y: 8.840186680782551
            }
          ]}
          opacity={1}
          stroke="#12939a"
          strokeStyle="solid"
          style={{}}
        />
      </XYPlot>

    );
  }
}

export default ColumnChartVIS;