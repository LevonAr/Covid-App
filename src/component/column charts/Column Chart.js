import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import $ from 'jquery';
import Button from 'react-bootstrap/Button'


var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Country {
	constructor(name, dates){
		this.name = name;
		this.dates = dates; 
	}
}

function Date_Bar(label, y, color){
	this.label = label
	this.y = y
	this.color = color
}


class ColumnChart extends Component {
        
    constructor(props){
        super(props)
        this.state = {
            name: "" ,
            dates: []
        }

    }
    

    componentDidMount() {

        let ex_object = {}
		//fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/covid19_data.json")


		//this is one that works
        //fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/perDay2.json")
		
		// this one has China, Aus and Canada
		//fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/goddamnthis1.json")
		
		//this one is great updated to 3/31
		//fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/3-31-daily.json")

		// this file is basically the final form for countries up til 3/31
		//fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/3-31-concat-daily.json")

		// latest one
		//fetch("https://raw.githubusercontent.com/DevLev95/Covid-19-data-JSON/master/3-31-concat-daily.json")
        
        // latest one
		//fetch("https://raw.githubusercontent.com/DevLev95/Covid-19-data-JSON/master/3-31-concat-daily1.json")
        
        fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/countries_update1.json")
        .then((response) => {
            return response.text();
        })
        .then((data) => {

            let a = JSON.parse(data)

            for(let i = 0; i<259; i++){

                let country_object = a[i] 

                let country_name = country_object["Country/Region"]
                
                // getting date string which is the key

                let dates_array = []

				// creates date bar objects
				// update this by adding 1 everyday hehehehhahahhheheh 
				// javascript is my nemisis
                for(let j = 4; j < 75; j++){
                    let date_label = Object.keys(country_object)[j]
                    let date_cases = country_object[date_label]
                    
                    let date_color = "#66B2FF"

                    let append_object = new Date_Bar(date_label, date_cases, date_color)
                    dates_array.push(append_object)
                }

                let country_output = new Country(country_name, dates_array)

                ex_object[country_name] = country_output

                //ex_object.push(country_output)          

                //console.log(country_output.name)
            }
            this.setState({

                name: ex_object[this.props.info].name,

                dates: ex_object[this.props.info].dates

            })
            
        })

    }
    
        render() {

		    const options = {
			    title: {
				    text: this.props.title
			    },
			    animationEnabled: true,
			    data: [
	            {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: this.state.dates
			    }
			    ]
		    }
		
		    return (
		    <div>
				<p>
                </p>
    
                <p>
                    <br>
                    </br>
                    <h1>
                        <center>New Confirmed Cases (Daily) </center>
                    </h1>
                </p>
			    
                <CanvasJSChart options = {options} 
            
				    /* onRef={ref => this.chart = ref} */
			    />
				<p>

				</p>
				<a href="https://github.com/CSSEGISandData/COVID-19"><center>Source (Johns Hopkins University CSSE)</center></a>
			    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

		    </div>
		    );
	    }
}

export default ColumnChart;