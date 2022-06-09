import React from 'react';
import FatalityChartStates from './fatality pie charts/Fatality Pie Chart States';
import ColumnChartStates from './column charts/Column Chart States';


class ChartSelectorStates extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      fatality_chart:  FatalityChartStates,
      new_cases_chart: ColumnChartStates
		};
    this.selectChart = this.selectChart.bind(this);
	}

	selectChart(props) {
    if(props.chart_type == "FatalityChart"){
      const SpecificChart = this.state.fatality_chart
      return <SpecificChart info={props.info}/>;
    }
    if (props.chart_type == "NewCasesChart"){
      const SpecificChart = this.state.new_cases_chart
      return <SpecificChart info={props.info}/>;
    }
  }
  render() {
    return (
      <div>
          {this.selectChart(this.props)}
      </div>
    )
  }




}

export default ChartSelectorStates;