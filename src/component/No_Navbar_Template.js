
import React, { Component } from 'react';

import './header.css'
import './template.css';
import logo from './logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import { Layout } from 'antd';


import ColumnChartStates from './column charts/Column Chart States';
import ColumnChartUSA from './column charts/Column Chart USA.js';
import Dropdown from './Dropdown.js'


import FatalityChart from './fatality pie charts/Fatality Pie Chart Counties';
import ChartSelector from './Chart Selector';
import ChartSelectorStates from './Chart Selector States';
import ChartSelectorUSA from './Chart Selector USA';


const { Header, Footer, Sider, Content } = Layout;


let test1 = "/Hawaii"

class No_Navbar_Template extends Component {



	constructor(props){
		super(props)
		this.state = {
			selected_chart_type: "FatalityChart"
		}
		this.handleClick = this.handleClick.bind(this);
		this.myfunction = this.myfunction.bind(this);

	}

	componentDidMount() {

	}
	
	
	//handleClick(specificChart) {

	handleClick(event) {
		this.setState({
			selected_chart_type: event.target.value
		})
	}

	myfunction() {
		window.location.href = "https://proven-entropy-270101.appspot.com/"
  	}
  
  render() {    
    return (

		<div>

			{/*<Navbar bg="dark" variant="dark">
				
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="Covid19 Logo"
					/>	

				</Navbar.Brand>
			
				<Navbar.Brand href="/">

				</Navbar.Brand>
				
				<a href="https://github.com/LevonAr"><span className="hidden-xs text-muted">DevLev</span></a>
			</Navbar>*/}		  


					<Layout>
      					<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
						  	<div class="flex-container">
								  
								<button><img src={logo} alt="Covid-19 HomePage Link" onClick={this.myfunction}/></button>

								<div class="inner-flex-container">
									<>
									<ToggleButtonGroup type="radio" name="options" defaultValue={"FatalityChart"}>
										<ToggleButton variant="secondary" value={"FatalityChart"} onChange={this.handleClick} >Fatality Rate</ToggleButton>
										<ToggleButton variant="secondary" value={"NewCasesChart"} onChange={this.handleClick} >Daily New Cases</ToggleButton>
									</ToggleButtonGroup>
									</>
								</div>
								<div>

								</div>
							</div>	
						</Header>
					</Layout>

				<br></br>
				<br></br>


			  <BrowserRouter>		  

					<Row>
						
						<Col>
							<Container>
							
							<Dropdown></Dropdown>
							
								<div className="content">

									<Route exact path="/" render={(props) => <ChartSelectorUSA info="USA" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/--Select State First--"render={(props) => <FatalityChart info="Select State First--" isAuthed={true} />}/>
									<Route path="/--Select Country First--"render={(props) => <FatalityChart info="Select Country First--" isAuthed={true} />}/>
				
									<Route path="/USA"render={(props) => <ChartSelectorUSA info="USA" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
					
				

									<Route path="/Alabama"render={(props) => <ChartSelectorStates info="Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>

									<Route path="/Alaska"render={(props) => <ChartSelectorStates info="Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/American Samoa"render={(props) => <ChartSelectorStates info="American Samoa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona"render={(props) => <ChartSelectorStates info="Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas"render={(props) => <ChartSelectorStates info="Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California"render={(props) => <ChartSelectorStates info="California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado"render={(props) => <ChartSelectorStates info="Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut"render={(props) => <ChartSelectorStates info="Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Delaware"render={(props) => <ChartSelectorStates info="Delaware" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/District of Colombia"render={(props) => <ChartSelectorStates info="District of Colombia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida"render={(props) => <ChartSelectorStates info="Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia"render={(props) => <ChartSelectorStates info="Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Guam"render={(props) => <ChartSelectorStates info="Guam" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii"render={(props) => <ChartSelectorStates info="Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho"render={(props) => <ChartSelectorStates info="Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois"render={(props) => <ChartSelectorStates info="Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana"render={(props) => <ChartSelectorStates info="Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa"render={(props) => <ChartSelectorStates info="Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas"render={(props) => <ChartSelectorStates info="Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky"render={(props) => <ChartSelectorStates info="Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana"render={(props) => <ChartSelectorStates info="Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine"render={(props) => <ChartSelectorStates info="Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland"render={(props) => <ChartSelectorStates info="Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts"render={(props) => <ChartSelectorStates info="Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan"render={(props) => <ChartSelectorStates info="Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota"render={(props) => <ChartSelectorStates info="Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi"render={(props) => <ChartSelectorStates info="Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri"render={(props) => <ChartSelectorStates info="Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana"render={(props) => <ChartSelectorStates info="Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska"render={(props) => <ChartSelectorStates info="Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada"render={(props) => <ChartSelectorStates info="Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire"render={(props) => <ChartSelectorStates info="New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey"render={(props) => <ChartSelectorStates info="New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico"render={(props) => <ChartSelectorStates info="New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York"render={(props) => <ChartSelectorStates info="New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina"render={(props) => <ChartSelectorStates info="North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota"render={(props) => <ChartSelectorStates info="North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Northern Mariana Islands"render={(props) => <ChartSelectorStates info="Northern Mariana Islands" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio"render={(props) => <ChartSelectorStates info="Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma"render={(props) => <ChartSelectorStates info="Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon"render={(props) => <ChartSelectorStates info="Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania"render={(props) => <ChartSelectorStates info="Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Puerto Rico"render={(props) => <ChartSelectorStates info="Puerto Rico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island"render={(props) => <ChartSelectorStates info="Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina"render={(props) => <ChartSelectorStates info="South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota"render={(props) => <ChartSelectorStates info="South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee"render={(props) => <ChartSelectorStates info="Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas"render={(props) => <ChartSelectorStates info="Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah"render={(props) => <ChartSelectorStates info="Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virgin Islands"render={(props) => <ChartSelectorStates info="Virgin Islands" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont"render={(props) => <ChartSelectorStates info="Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia"render={(props) => <ChartSelectorStates info="Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington"render={(props) => <ChartSelectorStates info="Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia"render={(props) => <ChartSelectorStates info="West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin"render={(props) => <ChartSelectorStates info="Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming"render={(props) => <ChartSelectorStates info="Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>


									<Route path="/South Carolina, Abbeville"render={(props) => <ChartSelector info="Abbeville, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>

									<Route path="/Louisiana, Acadia"render={(props) => <ChartSelector info="Acadia, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Accomack"render={(props) => <ChartSelector info="Accomack, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Ada"render={(props) => <ChartSelector info="Ada, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Adair"render={(props) => <ChartSelector info="Adair, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Adair"render={(props) => <ChartSelector info="Adair, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Adair"render={(props) => <ChartSelector info="Adair, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Adair"render={(props) => <ChartSelector info="Adair, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Adams"render={(props) => <ChartSelector info="Adams, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Adams"render={(props) => <ChartSelector info="Adams, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Adams"render={(props) => <ChartSelector info="Adams, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Adams"render={(props) => <ChartSelector info="Adams, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Adams"render={(props) => <ChartSelector info="Adams, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Adams"render={(props) => <ChartSelector info="Adams, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Adams"render={(props) => <ChartSelector info="Adams, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Adams"render={(props) => <ChartSelector info="Adams, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Adams"render={(props) => <ChartSelector info="Adams, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Adams"render={(props) => <ChartSelector info="Adams, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Addison"render={(props) => <ChartSelector info="Addison, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Aiken"render={(props) => <ChartSelector info="Aiken, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Aitkin"render={(props) => <ChartSelector info="Aitkin, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Alachua"render={(props) => <ChartSelector info="Alachua, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Alamance"render={(props) => <ChartSelector info="Alamance, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Alameda"render={(props) => <ChartSelector info="Alameda, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Alamosa"render={(props) => <ChartSelector info="Alamosa, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Albany"render={(props) => <ChartSelector info="Albany, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Albany"render={(props) => <ChartSelector info="Albany, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Albemarle"render={(props) => <ChartSelector info="Albemarle, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Alcona"render={(props) => <ChartSelector info="Alcona, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Alcorn"render={(props) => <ChartSelector info="Alcorn, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Alexander"render={(props) => <ChartSelector info="Alexander, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Alexander"render={(props) => <ChartSelector info="Alexander, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Alexandria"render={(props) => <ChartSelector info="Alexandria, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Alfalfa"render={(props) => <ChartSelector info="Alfalfa, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Allamakee"render={(props) => <ChartSelector info="Allamakee, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Allegan"render={(props) => <ChartSelector info="Allegan, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Allegany"render={(props) => <ChartSelector info="Allegany, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Allegany"render={(props) => <ChartSelector info="Allegany, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Alleghany"render={(props) => <ChartSelector info="Alleghany, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Alleghany"render={(props) => <ChartSelector info="Alleghany, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Allegheny"render={(props) => <ChartSelector info="Allegheny, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Allen"render={(props) => <ChartSelector info="Allen, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Allen"render={(props) => <ChartSelector info="Allen, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Allen"render={(props) => <ChartSelector info="Allen, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Allen"render={(props) => <ChartSelector info="Allen, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Allendale"render={(props) => <ChartSelector info="Allendale, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Alpena"render={(props) => <ChartSelector info="Alpena, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Alpine"render={(props) => <ChartSelector info="Alpine, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Amador"render={(props) => <ChartSelector info="Amador, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Amelia"render={(props) => <ChartSelector info="Amelia, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Amherst"render={(props) => <ChartSelector info="Amherst, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Amite"render={(props) => <ChartSelector info="Amite, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Anchorage"render={(props) => <ChartSelector info="Anchorage, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Anderson"render={(props) => <ChartSelector info="Anderson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Anderson"render={(props) => <ChartSelector info="Anderson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Anderson"render={(props) => <ChartSelector info="Anderson, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Anderson"render={(props) => <ChartSelector info="Anderson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Anderson"render={(props) => <ChartSelector info="Anderson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Andrew"render={(props) => <ChartSelector info="Andrew, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Andrews"render={(props) => <ChartSelector info="Andrews, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Androscoggin"render={(props) => <ChartSelector info="Androscoggin, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Angelina"render={(props) => <ChartSelector info="Angelina, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Anne Arundel"render={(props) => <ChartSelector info="Anne Arundel, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Anoka"render={(props) => <ChartSelector info="Anoka, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Anson"render={(props) => <ChartSelector info="Anson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Antelope"render={(props) => <ChartSelector info="Antelope, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Antrim"render={(props) => <ChartSelector info="Antrim, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Apache"render={(props) => <ChartSelector info="Apache, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Appanoose"render={(props) => <ChartSelector info="Appanoose, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Appling"render={(props) => <ChartSelector info="Appling, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Appomattox"render={(props) => <ChartSelector info="Appomattox, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Aransas"render={(props) => <ChartSelector info="Aransas, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Arapahoe"render={(props) => <ChartSelector info="Arapahoe, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Archuleta"render={(props) => <ChartSelector info="Archuleta, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Arenac"render={(props) => <ChartSelector info="Arenac, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Arkansas"render={(props) => <ChartSelector info="Arkansas, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Arlington"render={(props) => <ChartSelector info="Arlington, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Armstrong"render={(props) => <ChartSelector info="Armstrong, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Armstrong"render={(props) => <ChartSelector info="Armstrong, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Aroostook"render={(props) => <ChartSelector info="Aroostook, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Ascension"render={(props) => <ChartSelector info="Ascension, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Ashe"render={(props) => <ChartSelector info="Ashe, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Ashland"render={(props) => <ChartSelector info="Ashland, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Ashland"render={(props) => <ChartSelector info="Ashland, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Ashley"render={(props) => <ChartSelector info="Ashley, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Ashtabula"render={(props) => <ChartSelector info="Ashtabula, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Asotin"render={(props) => <ChartSelector info="Asotin, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Assumption"render={(props) => <ChartSelector info="Assumption, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Atascosa"render={(props) => <ChartSelector info="Atascosa, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Atchison"render={(props) => <ChartSelector info="Atchison, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Atchison"render={(props) => <ChartSelector info="Atchison, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Athens"render={(props) => <ChartSelector info="Athens, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Atkinson"render={(props) => <ChartSelector info="Atkinson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Atlantic"render={(props) => <ChartSelector info="Atlantic, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Atoka"render={(props) => <ChartSelector info="Atoka, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Attala"render={(props) => <ChartSelector info="Attala, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Audrain"render={(props) => <ChartSelector info="Audrain, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Audubon"render={(props) => <ChartSelector info="Audubon, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Auglaize"render={(props) => <ChartSelector info="Auglaize, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Augusta"render={(props) => <ChartSelector info="Augusta, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Aurora"render={(props) => <ChartSelector info="Aurora, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Austin"render={(props) => <ChartSelector info="Austin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Autauga"render={(props) => <ChartSelector info="Autauga, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Avoyelles"render={(props) => <ChartSelector info="Avoyelles, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Baca"render={(props) => <ChartSelector info="Baca, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bacon"render={(props) => <ChartSelector info="Bacon, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Baker"render={(props) => <ChartSelector info="Baker, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Baker"render={(props) => <ChartSelector info="Baker, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Baldwin"render={(props) => <ChartSelector info="Baldwin, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Baldwin"render={(props) => <ChartSelector info="Baldwin, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Ballard"render={(props) => <ChartSelector info="Ballard, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Baltimore"render={(props) => <ChartSelector info="Baltimore, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Baltimore City"render={(props) => <ChartSelector info="Baltimore City, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Bamberg"render={(props) => <ChartSelector info="Bamberg, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bandera"render={(props) => <ChartSelector info="Bandera, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Banks"render={(props) => <ChartSelector info="Banks, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Bannock"render={(props) => <ChartSelector info="Bannock, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Baraga"render={(props) => <ChartSelector info="Baraga, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Barber"render={(props) => <ChartSelector info="Barber, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Barbour"render={(props) => <ChartSelector info="Barbour, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Barbour"render={(props) => <ChartSelector info="Barbour, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Barnes"render={(props) => <ChartSelector info="Barnes, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Barnstable"render={(props) => <ChartSelector info="Barnstable, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Barnwell"render={(props) => <ChartSelector info="Barnwell, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Barren"render={(props) => <ChartSelector info="Barren, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Barron"render={(props) => <ChartSelector info="Barron, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Barrow"render={(props) => <ChartSelector info="Barrow, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Barry"render={(props) => <ChartSelector info="Barry, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Barry"render={(props) => <ChartSelector info="Barry, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Bartholomew"render={(props) => <ChartSelector info="Bartholomew, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Barton"render={(props) => <ChartSelector info="Barton, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bartow"render={(props) => <ChartSelector info="Bartow, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bastrop"render={(props) => <ChartSelector info="Bastrop, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Bates"render={(props) => <ChartSelector info="Bates, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Bath"render={(props) => <ChartSelector info="Bath, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Bath"render={(props) => <ChartSelector info="Bath, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Baxter"render={(props) => <ChartSelector info="Baxter, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Bay"render={(props) => <ChartSelector info="Bay, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Bay"render={(props) => <ChartSelector info="Bay, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Bayfield"render={(props) => <ChartSelector info="Bayfield, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Beadle"render={(props) => <ChartSelector info="Beadle, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Bear River"render={(props) => <ChartSelector info="Bear River, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Beaufort"render={(props) => <ChartSelector info="Beaufort, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Beaufort"render={(props) => <ChartSelector info="Beaufort, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Beauregard"render={(props) => <ChartSelector info="Beauregard, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Beaver"render={(props) => <ChartSelector info="Beaver, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Beaver"render={(props) => <ChartSelector info="Beaver, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Beaverhead"render={(props) => <ChartSelector info="Beaverhead, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Becker"render={(props) => <ChartSelector info="Becker, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Beckham"render={(props) => <ChartSelector info="Beckham, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Bedford"render={(props) => <ChartSelector info="Bedford, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Bedford"render={(props) => <ChartSelector info="Bedford, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Bedford"render={(props) => <ChartSelector info="Bedford, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bee"render={(props) => <ChartSelector info="Bee, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Belknap"render={(props) => <ChartSelector info="Belknap, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bell"render={(props) => <ChartSelector info="Bell, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Belmont"render={(props) => <ChartSelector info="Belmont, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Beltrami"render={(props) => <ChartSelector info="Beltrami, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Ben Hill"render={(props) => <ChartSelector info="Ben Hill, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Bennington"render={(props) => <ChartSelector info="Bennington, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Benton"render={(props) => <ChartSelector info="Benton, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Benton"render={(props) => <ChartSelector info="Benton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Benton"render={(props) => <ChartSelector info="Benton, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Benton"render={(props) => <ChartSelector info="Benton, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Benton"render={(props) => <ChartSelector info="Benton, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Benton"render={(props) => <ChartSelector info="Benton, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Benton"render={(props) => <ChartSelector info="Benton, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Benton"render={(props) => <ChartSelector info="Benton, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Benton"render={(props) => <ChartSelector info="Benton, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Benzie"render={(props) => <ChartSelector info="Benzie, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Bergen"render={(props) => <ChartSelector info="Bergen, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Berkeley"render={(props) => <ChartSelector info="Berkeley, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Berkeley"render={(props) => <ChartSelector info="Berkeley, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Berks"render={(props) => <ChartSelector info="Berks, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Berkshire"render={(props) => <ChartSelector info="Berkshire, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Bernalillo"render={(props) => <ChartSelector info="Bernalillo, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Berrien"render={(props) => <ChartSelector info="Berrien, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Berrien"render={(props) => <ChartSelector info="Berrien, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Bertie"render={(props) => <ChartSelector info="Bertie, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Bethel"render={(props) => <ChartSelector info="Bethel, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bexar"render={(props) => <ChartSelector info="Bexar, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Bibb"render={(props) => <ChartSelector info="Bibb, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bibb"render={(props) => <ChartSelector info="Bibb, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Bienville"render={(props) => <ChartSelector info="Bienville, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Big Horn"render={(props) => <ChartSelector info="Big Horn, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Big Horn"render={(props) => <ChartSelector info="Big Horn, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Big Stone"render={(props) => <ChartSelector info="Big Stone, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Bingham"render={(props) => <ChartSelector info="Bingham, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Black Hawk"render={(props) => <ChartSelector info="Black Hawk, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Blackford"render={(props) => <ChartSelector info="Blackford, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Bladen"render={(props) => <ChartSelector info="Bladen, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Blaine"render={(props) => <ChartSelector info="Blaine, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Blair"render={(props) => <ChartSelector info="Blair, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Blanco"render={(props) => <ChartSelector info="Blanco, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Bland"render={(props) => <ChartSelector info="Bland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bleckley"render={(props) => <ChartSelector info="Bleckley, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Bledsoe"render={(props) => <ChartSelector info="Bledsoe, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Blount"render={(props) => <ChartSelector info="Blount, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Blount"render={(props) => <ChartSelector info="Blount, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Blue Earth"render={(props) => <ChartSelector info="Blue Earth, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Bolivar"render={(props) => <ChartSelector info="Bolivar, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Bollinger"render={(props) => <ChartSelector info="Bollinger, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Bon Homme"render={(props) => <ChartSelector info="Bon Homme, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Bond"render={(props) => <ChartSelector info="Bond, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Bonner"render={(props) => <ChartSelector info="Bonner, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Bonneville"render={(props) => <ChartSelector info="Bonneville, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Boone"render={(props) => <ChartSelector info="Boone, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Boone"render={(props) => <ChartSelector info="Boone, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Boone"render={(props) => <ChartSelector info="Boone, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Boone"render={(props) => <ChartSelector info="Boone, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Boone"render={(props) => <ChartSelector info="Boone, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Boone"render={(props) => <ChartSelector info="Boone, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Boone"render={(props) => <ChartSelector info="Boone, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bosque"render={(props) => <ChartSelector info="Bosque, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Bossier"render={(props) => <ChartSelector info="Bossier, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Botetourt"render={(props) => <ChartSelector info="Botetourt, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Boulder"render={(props) => <ChartSelector info="Boulder, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Boundary"render={(props) => <ChartSelector info="Boundary, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Bourbon"render={(props) => <ChartSelector info="Bourbon, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Bourbon"render={(props) => <ChartSelector info="Bourbon, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Bowie"render={(props) => <ChartSelector info="Bowie, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Bowman"render={(props) => <ChartSelector info="Bowman, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Box Butte"render={(props) => <ChartSelector info="Box Butte, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Boyd"render={(props) => <ChartSelector info="Boyd, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Boyle"render={(props) => <ChartSelector info="Boyle, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Bracken"render={(props) => <ChartSelector info="Bracken, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Bradford"render={(props) => <ChartSelector info="Bradford, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Bradford"render={(props) => <ChartSelector info="Bradford, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Bradley"render={(props) => <ChartSelector info="Bradley, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Bradley"render={(props) => <ChartSelector info="Bradley, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Branch"render={(props) => <ChartSelector info="Branch, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Brantley"render={(props) => <ChartSelector info="Brantley, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Braxton"render={(props) => <ChartSelector info="Braxton, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Brazoria"render={(props) => <ChartSelector info="Brazoria, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Brazos"render={(props) => <ChartSelector info="Brazos, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Breathitt"render={(props) => <ChartSelector info="Breathitt, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Breckinridge"render={(props) => <ChartSelector info="Breckinridge, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Bremer"render={(props) => <ChartSelector info="Bremer, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Brevard"render={(props) => <ChartSelector info="Brevard, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Bristol"render={(props) => <ChartSelector info="Bristol, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Bristol"render={(props) => <ChartSelector info="Bristol, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Bristol"render={(props) => <ChartSelector info="Bristol, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Broadwater"render={(props) => <ChartSelector info="Broadwater, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Brooke"render={(props) => <ChartSelector info="Brooke, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Brookings"render={(props) => <ChartSelector info="Brookings, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Brooks"render={(props) => <ChartSelector info="Brooks, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Brooks"render={(props) => <ChartSelector info="Brooks, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Broome"render={(props) => <ChartSelector info="Broome, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Broomfield"render={(props) => <ChartSelector info="Broomfield, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Broward"render={(props) => <ChartSelector info="Broward, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Brown"render={(props) => <ChartSelector info="Brown, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Brown"render={(props) => <ChartSelector info="Brown, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Brown"render={(props) => <ChartSelector info="Brown, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Brown"render={(props) => <ChartSelector info="Brown, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Brown"render={(props) => <ChartSelector info="Brown, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Brown"render={(props) => <ChartSelector info="Brown, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Brule"render={(props) => <ChartSelector info="Brule, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Brunswick"render={(props) => <ChartSelector info="Brunswick, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Brunswick"render={(props) => <ChartSelector info="Brunswick, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bryan"render={(props) => <ChartSelector info="Bryan, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Bryan"render={(props) => <ChartSelector info="Bryan, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Buchanan"render={(props) => <ChartSelector info="Buchanan, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Buchanan"render={(props) => <ChartSelector info="Buchanan, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Buchanan"render={(props) => <ChartSelector info="Buchanan, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Buckingham"render={(props) => <ChartSelector info="Buckingham, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Bucks"render={(props) => <ChartSelector info="Bucks, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Buena Vista"render={(props) => <ChartSelector info="Buena Vista, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Buena Vista"render={(props) => <ChartSelector info="Buena Vista, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Buffalo"render={(props) => <ChartSelector info="Buffalo, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Buffalo"render={(props) => <ChartSelector info="Buffalo, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Bullitt"render={(props) => <ChartSelector info="Bullitt, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Bulloch"render={(props) => <ChartSelector info="Bulloch, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Bullock"render={(props) => <ChartSelector info="Bullock, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Buncombe"render={(props) => <ChartSelector info="Buncombe, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Bureau"render={(props) => <ChartSelector info="Bureau, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Burke"render={(props) => <ChartSelector info="Burke, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Burke"render={(props) => <ChartSelector info="Burke, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Burke"render={(props) => <ChartSelector info="Burke, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Burleigh"render={(props) => <ChartSelector info="Burleigh, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Burleson"render={(props) => <ChartSelector info="Burleson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Burlington"render={(props) => <ChartSelector info="Burlington, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Burnet"render={(props) => <ChartSelector info="Burnet, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Burt"render={(props) => <ChartSelector info="Burt, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Butler"render={(props) => <ChartSelector info="Butler, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Butler"render={(props) => <ChartSelector info="Butler, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Butler"render={(props) => <ChartSelector info="Butler, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Butler"render={(props) => <ChartSelector info="Butler, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Butler"render={(props) => <ChartSelector info="Butler, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Butler"render={(props) => <ChartSelector info="Butler, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Butler"render={(props) => <ChartSelector info="Butler, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Butler"render={(props) => <ChartSelector info="Butler, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Butte"render={(props) => <ChartSelector info="Butte, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Butte"render={(props) => <ChartSelector info="Butte, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Butts"render={(props) => <ChartSelector info="Butts, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Cabarrus"render={(props) => <ChartSelector info="Cabarrus, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Cabell"render={(props) => <ChartSelector info="Cabell, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Caddo"render={(props) => <ChartSelector info="Caddo, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Caddo"render={(props) => <ChartSelector info="Caddo, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Calaveras"render={(props) => <ChartSelector info="Calaveras, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Calcasieu"render={(props) => <ChartSelector info="Calcasieu, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Caldwell"render={(props) => <ChartSelector info="Caldwell, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Caldwell"render={(props) => <ChartSelector info="Caldwell, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Caldwell"render={(props) => <ChartSelector info="Caldwell, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Caldwell"render={(props) => <ChartSelector info="Caldwell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Caldwell"render={(props) => <ChartSelector info="Caldwell, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Caledonia"render={(props) => <ChartSelector info="Caledonia, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Calhoun"render={(props) => <ChartSelector info="Calhoun, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Calhoun"render={(props) => <ChartSelector info="Calhoun, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Calhoun"render={(props) => <ChartSelector info="Calhoun, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Calhoun"render={(props) => <ChartSelector info="Calhoun, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Calhoun"render={(props) => <ChartSelector info="Calhoun, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Calhoun"render={(props) => <ChartSelector info="Calhoun, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Calhoun"render={(props) => <ChartSelector info="Calhoun, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Calhoun"render={(props) => <ChartSelector info="Calhoun, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Callahan"render={(props) => <ChartSelector info="Callahan, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Callaway"render={(props) => <ChartSelector info="Callaway, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Calloway"render={(props) => <ChartSelector info="Calloway, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Calumet"render={(props) => <ChartSelector info="Calumet, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Calvert"render={(props) => <ChartSelector info="Calvert, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Camas"render={(props) => <ChartSelector info="Camas, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Cambria"render={(props) => <ChartSelector info="Cambria, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Camden"render={(props) => <ChartSelector info="Camden, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Camden"render={(props) => <ChartSelector info="Camden, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Camden"render={(props) => <ChartSelector info="Camden, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Cameron"render={(props) => <ChartSelector info="Cameron, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Cameron"render={(props) => <ChartSelector info="Cameron, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Cameron"render={(props) => <ChartSelector info="Cameron, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Camp"render={(props) => <ChartSelector info="Camp, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Campbell"render={(props) => <ChartSelector info="Campbell, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Campbell"render={(props) => <ChartSelector info="Campbell, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Campbell"render={(props) => <ChartSelector info="Campbell, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Campbell"render={(props) => <ChartSelector info="Campbell, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Canadian"render={(props) => <ChartSelector info="Canadian, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Candler"render={(props) => <ChartSelector info="Candler, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Cannon"render={(props) => <ChartSelector info="Cannon, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Canyon"render={(props) => <ChartSelector info="Canyon, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Cape Girardeau"render={(props) => <ChartSelector info="Cape Girardeau, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Cape May"render={(props) => <ChartSelector info="Cape May, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Carbon"render={(props) => <ChartSelector info="Carbon, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Carbon"render={(props) => <ChartSelector info="Carbon, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Carbon"render={(props) => <ChartSelector info="Carbon, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Caribou"render={(props) => <ChartSelector info="Caribou, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Carlisle"render={(props) => <ChartSelector info="Carlisle, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Carlton"render={(props) => <ChartSelector info="Carlton, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Caroline"render={(props) => <ChartSelector info="Caroline, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Caroline"render={(props) => <ChartSelector info="Caroline, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Carroll"render={(props) => <ChartSelector info="Carroll, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Carroll"render={(props) => <ChartSelector info="Carroll, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Carroll"render={(props) => <ChartSelector info="Carroll, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Carroll"render={(props) => <ChartSelector info="Carroll, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Carroll"render={(props) => <ChartSelector info="Carroll, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Carroll"render={(props) => <ChartSelector info="Carroll, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Carroll"render={(props) => <ChartSelector info="Carroll, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Carroll"render={(props) => <ChartSelector info="Carroll, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Carroll"render={(props) => <ChartSelector info="Carroll, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Carroll"render={(props) => <ChartSelector info="Carroll, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Carroll"render={(props) => <ChartSelector info="Carroll, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Carroll"render={(props) => <ChartSelector info="Carroll, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Carroll"render={(props) => <ChartSelector info="Carroll, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Carson"render={(props) => <ChartSelector info="Carson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Carson City"render={(props) => <ChartSelector info="Carson City, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Carter"render={(props) => <ChartSelector info="Carter, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Carter"render={(props) => <ChartSelector info="Carter, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Carter"render={(props) => <ChartSelector info="Carter, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Carter"render={(props) => <ChartSelector info="Carter, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Carteret"render={(props) => <ChartSelector info="Carteret, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Carver"render={(props) => <ChartSelector info="Carver, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Cascade"render={(props) => <ChartSelector info="Cascade, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Casey"render={(props) => <ChartSelector info="Casey, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Cass"render={(props) => <ChartSelector info="Cass, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Cass"render={(props) => <ChartSelector info="Cass, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Cass"render={(props) => <ChartSelector info="Cass, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Cass"render={(props) => <ChartSelector info="Cass, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Cass"render={(props) => <ChartSelector info="Cass, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Cass"render={(props) => <ChartSelector info="Cass, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Cass"render={(props) => <ChartSelector info="Cass, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Cass"render={(props) => <ChartSelector info="Cass, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Cass"render={(props) => <ChartSelector info="Cass, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Cassia"render={(props) => <ChartSelector info="Cassia, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Castro"render={(props) => <ChartSelector info="Castro, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Caswell"render={(props) => <ChartSelector info="Caswell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Catahoula"render={(props) => <ChartSelector info="Catahoula, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Catawba"render={(props) => <ChartSelector info="Catawba, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Catoosa"render={(props) => <ChartSelector info="Catoosa, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Catron"render={(props) => <ChartSelector info="Catron, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Cattaraugus"render={(props) => <ChartSelector info="Cattaraugus, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Cayuga"render={(props) => <ChartSelector info="Cayuga, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Cecil"render={(props) => <ChartSelector info="Cecil, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Cedar"render={(props) => <ChartSelector info="Cedar, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Cedar"render={(props) => <ChartSelector info="Cedar, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Cedar"render={(props) => <ChartSelector info="Cedar, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Central Utah"render={(props) => <ChartSelector info="Central Utah, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Centre"render={(props) => <ChartSelector info="Centre, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Cerro Gordo"render={(props) => <ChartSelector info="Cerro Gordo, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Chaffee"render={(props) => <ChartSelector info="Chaffee, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Chambers"render={(props) => <ChartSelector info="Chambers, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Chambers"render={(props) => <ChartSelector info="Chambers, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Champaign"render={(props) => <ChartSelector info="Champaign, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Champaign"render={(props) => <ChartSelector info="Champaign, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Chariton"render={(props) => <ChartSelector info="Chariton, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Charles"render={(props) => <ChartSelector info="Charles, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Charles City"render={(props) => <ChartSelector info="Charles City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Charles Mix"render={(props) => <ChartSelector info="Charles Mix, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Charleston"render={(props) => <ChartSelector info="Charleston, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Charlevoix"render={(props) => <ChartSelector info="Charlevoix, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Charlotte"render={(props) => <ChartSelector info="Charlotte, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Charlotte"render={(props) => <ChartSelector info="Charlotte, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Charlottesville"render={(props) => <ChartSelector info="Charlottesville, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Charlton"render={(props) => <ChartSelector info="Charlton, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Chase"render={(props) => <ChartSelector info="Chase, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Chatham"render={(props) => <ChartSelector info="Chatham, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Chatham"render={(props) => <ChartSelector info="Chatham, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Chattahoochee"render={(props) => <ChartSelector info="Chattahoochee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Chattooga"render={(props) => <ChartSelector info="Chattooga, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Chautauqua"render={(props) => <ChartSelector info="Chautauqua, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Chautauqua"render={(props) => <ChartSelector info="Chautauqua, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Chaves"render={(props) => <ChartSelector info="Chaves, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Cheatham"render={(props) => <ChartSelector info="Cheatham, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Cheboygan"render={(props) => <ChartSelector info="Cheboygan, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Chelan"render={(props) => <ChartSelector info="Chelan, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Chemung"render={(props) => <ChartSelector info="Chemung, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Chenango"render={(props) => <ChartSelector info="Chenango, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Cherokee"render={(props) => <ChartSelector info="Cherokee, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Cherokee"render={(props) => <ChartSelector info="Cherokee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Cherokee"render={(props) => <ChartSelector info="Cherokee, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Cherokee"render={(props) => <ChartSelector info="Cherokee, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Cherokee"render={(props) => <ChartSelector info="Cherokee, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Cherokee"render={(props) => <ChartSelector info="Cherokee, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Cherokee"render={(props) => <ChartSelector info="Cherokee, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Cherokee"render={(props) => <ChartSelector info="Cherokee, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Cherry"render={(props) => <ChartSelector info="Cherry, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Chesapeake"render={(props) => <ChartSelector info="Chesapeake, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Cheshire"render={(props) => <ChartSelector info="Cheshire, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Chester"render={(props) => <ChartSelector info="Chester, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Chester"render={(props) => <ChartSelector info="Chester, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Chester"render={(props) => <ChartSelector info="Chester, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Chesterfield"render={(props) => <ChartSelector info="Chesterfield, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Chesterfield"render={(props) => <ChartSelector info="Chesterfield, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Cheyenne"render={(props) => <ChartSelector info="Cheyenne, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Chickasaw"render={(props) => <ChartSelector info="Chickasaw, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Chickasaw"render={(props) => <ChartSelector info="Chickasaw, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Chicot"render={(props) => <ChartSelector info="Chicot, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Childress"render={(props) => <ChartSelector info="Childress, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Chilton"render={(props) => <ChartSelector info="Chilton, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Chippewa"render={(props) => <ChartSelector info="Chippewa, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Chippewa"render={(props) => <ChartSelector info="Chippewa, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Chippewa"render={(props) => <ChartSelector info="Chippewa, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Chisago"render={(props) => <ChartSelector info="Chisago, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Chittenden"render={(props) => <ChartSelector info="Chittenden, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Choctaw"render={(props) => <ChartSelector info="Choctaw, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Choctaw"render={(props) => <ChartSelector info="Choctaw, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Choctaw"render={(props) => <ChartSelector info="Choctaw, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Chowan"render={(props) => <ChartSelector info="Chowan, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Christian"render={(props) => <ChartSelector info="Christian, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Christian"render={(props) => <ChartSelector info="Christian, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Christian"render={(props) => <ChartSelector info="Christian, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Churchill"render={(props) => <ChartSelector info="Churchill, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Cibola"render={(props) => <ChartSelector info="Cibola, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Cimarron"render={(props) => <ChartSelector info="Cimarron, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Citrus"render={(props) => <ChartSelector info="Citrus, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Clackamas"render={(props) => <ChartSelector info="Clackamas, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Claiborne"render={(props) => <ChartSelector info="Claiborne, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Claiborne"render={(props) => <ChartSelector info="Claiborne, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Claiborne"render={(props) => <ChartSelector info="Claiborne, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Clallam"render={(props) => <ChartSelector info="Clallam, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Clare"render={(props) => <ChartSelector info="Clare, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Clarendon"render={(props) => <ChartSelector info="Clarendon, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Clarion"render={(props) => <ChartSelector info="Clarion, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Clark"render={(props) => <ChartSelector info="Clark, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Clark"render={(props) => <ChartSelector info="Clark, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Clark"render={(props) => <ChartSelector info="Clark, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Clark"render={(props) => <ChartSelector info="Clark, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Clark"render={(props) => <ChartSelector info="Clark, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Clark"render={(props) => <ChartSelector info="Clark, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Clark"render={(props) => <ChartSelector info="Clark, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Clark"render={(props) => <ChartSelector info="Clark, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Clark"render={(props) => <ChartSelector info="Clark, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Clark"render={(props) => <ChartSelector info="Clark, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Clark"render={(props) => <ChartSelector info="Clark, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Clarke"render={(props) => <ChartSelector info="Clarke, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Clarke"render={(props) => <ChartSelector info="Clarke, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Clarke"render={(props) => <ChartSelector info="Clarke, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Clarke"render={(props) => <ChartSelector info="Clarke, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Clarke"render={(props) => <ChartSelector info="Clarke, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Clatsop"render={(props) => <ChartSelector info="Clatsop, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Clay"render={(props) => <ChartSelector info="Clay, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Clay"render={(props) => <ChartSelector info="Clay, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Clay"render={(props) => <ChartSelector info="Clay, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Clay"render={(props) => <ChartSelector info="Clay, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Clay"render={(props) => <ChartSelector info="Clay, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Clay"render={(props) => <ChartSelector info="Clay, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Clay"render={(props) => <ChartSelector info="Clay, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Clay"render={(props) => <ChartSelector info="Clay, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Clay"render={(props) => <ChartSelector info="Clay, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Clay"render={(props) => <ChartSelector info="Clay, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Clay"render={(props) => <ChartSelector info="Clay, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Clay"render={(props) => <ChartSelector info="Clay, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Clay"render={(props) => <ChartSelector info="Clay, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Clay"render={(props) => <ChartSelector info="Clay, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Clay"render={(props) => <ChartSelector info="Clay, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Clay"render={(props) => <ChartSelector info="Clay, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Clay"render={(props) => <ChartSelector info="Clay, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Clayton"render={(props) => <ChartSelector info="Clayton, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Clayton"render={(props) => <ChartSelector info="Clayton, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Clear Creek"render={(props) => <ChartSelector info="Clear Creek, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Clearfield"render={(props) => <ChartSelector info="Clearfield, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Clearwater"render={(props) => <ChartSelector info="Clearwater, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Cleburne"render={(props) => <ChartSelector info="Cleburne, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Cleburne"render={(props) => <ChartSelector info="Cleburne, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Clermont"render={(props) => <ChartSelector info="Clermont, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Cleveland"render={(props) => <ChartSelector info="Cleveland, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Cleveland"render={(props) => <ChartSelector info="Cleveland, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Cleveland"render={(props) => <ChartSelector info="Cleveland, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Clinch"render={(props) => <ChartSelector info="Clinch, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Clinton"render={(props) => <ChartSelector info="Clinton, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Clinton"render={(props) => <ChartSelector info="Clinton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Clinton"render={(props) => <ChartSelector info="Clinton, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Clinton"render={(props) => <ChartSelector info="Clinton, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Clinton"render={(props) => <ChartSelector info="Clinton, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Clinton"render={(props) => <ChartSelector info="Clinton, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Clinton"render={(props) => <ChartSelector info="Clinton, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Clinton"render={(props) => <ChartSelector info="Clinton, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Clinton"render={(props) => <ChartSelector info="Clinton, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Cloud"render={(props) => <ChartSelector info="Cloud, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Coahoma"render={(props) => <ChartSelector info="Coahoma, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Cobb"render={(props) => <ChartSelector info="Cobb, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Cochise"render={(props) => <ChartSelector info="Cochise, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Cochran"render={(props) => <ChartSelector info="Cochran, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Cocke"render={(props) => <ChartSelector info="Cocke, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Coconino"render={(props) => <ChartSelector info="Coconino, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Codington"render={(props) => <ChartSelector info="Codington, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Coffee"render={(props) => <ChartSelector info="Coffee, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Coffee"render={(props) => <ChartSelector info="Coffee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Coffee"render={(props) => <ChartSelector info="Coffee, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Coffey"render={(props) => <ChartSelector info="Coffey, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Colbert"render={(props) => <ChartSelector info="Colbert, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Cole"render={(props) => <ChartSelector info="Cole, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Coles"render={(props) => <ChartSelector info="Coles, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Colfax"render={(props) => <ChartSelector info="Colfax, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Colfax"render={(props) => <ChartSelector info="Colfax, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Colleton"render={(props) => <ChartSelector info="Colleton, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Collier"render={(props) => <ChartSelector info="Collier, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Collin"render={(props) => <ChartSelector info="Collin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Colonial Heights"render={(props) => <ChartSelector info="Colonial Heights, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Colorado"render={(props) => <ChartSelector info="Colorado, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Colquitt"render={(props) => <ChartSelector info="Colquitt, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Columbia"render={(props) => <ChartSelector info="Columbia, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Columbia"render={(props) => <ChartSelector info="Columbia, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Columbia"render={(props) => <ChartSelector info="Columbia, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Columbia"render={(props) => <ChartSelector info="Columbia, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Columbia"render={(props) => <ChartSelector info="Columbia, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Columbia"render={(props) => <ChartSelector info="Columbia, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Columbia"render={(props) => <ChartSelector info="Columbia, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Columbia"render={(props) => <ChartSelector info="Columbia, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Columbiana"render={(props) => <ChartSelector info="Columbiana, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Columbus"render={(props) => <ChartSelector info="Columbus, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Colusa"render={(props) => <ChartSelector info="Colusa, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Comal"render={(props) => <ChartSelector info="Comal, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Comanche"render={(props) => <ChartSelector info="Comanche, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Comanche"render={(props) => <ChartSelector info="Comanche, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Concho"render={(props) => <ChartSelector info="Concho, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Concordia"render={(props) => <ChartSelector info="Concordia, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Conecuh"render={(props) => <ChartSelector info="Conecuh, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Contra Costa"render={(props) => <ChartSelector info="Contra Costa, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Converse"render={(props) => <ChartSelector info="Converse, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Conway"render={(props) => <ChartSelector info="Conway, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Cook"render={(props) => <ChartSelector info="Cook, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Cook"render={(props) => <ChartSelector info="Cook, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Cooke"render={(props) => <ChartSelector info="Cooke, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Cooper"render={(props) => <ChartSelector info="Cooper, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Coos"render={(props) => <ChartSelector info="Coos, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Coos"render={(props) => <ChartSelector info="Coos, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Coosa"render={(props) => <ChartSelector info="Coosa, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Copiah"render={(props) => <ChartSelector info="Copiah, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Corson"render={(props) => <ChartSelector info="Corson, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Cortland"render={(props) => <ChartSelector info="Cortland, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Coryell"render={(props) => <ChartSelector info="Coryell, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Coshocton"render={(props) => <ChartSelector info="Coshocton, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Costilla"render={(props) => <ChartSelector info="Costilla, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Cotton"render={(props) => <ChartSelector info="Cotton, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Cottonwood"render={(props) => <ChartSelector info="Cottonwood, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Covington"render={(props) => <ChartSelector info="Covington, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Covington"render={(props) => <ChartSelector info="Covington, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Covington"render={(props) => <ChartSelector info="Covington, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Coweta"render={(props) => <ChartSelector info="Coweta, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Cowley"render={(props) => <ChartSelector info="Cowley, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Cowlitz"render={(props) => <ChartSelector info="Cowlitz, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Craig"render={(props) => <ChartSelector info="Craig, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Craig"render={(props) => <ChartSelector info="Craig, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Craighead"render={(props) => <ChartSelector info="Craighead, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Crane"render={(props) => <ChartSelector info="Crane, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Craven"render={(props) => <ChartSelector info="Craven, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Crawford"render={(props) => <ChartSelector info="Crawford, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Crawford"render={(props) => <ChartSelector info="Crawford, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Crawford"render={(props) => <ChartSelector info="Crawford, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Crawford"render={(props) => <ChartSelector info="Crawford, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Crawford"render={(props) => <ChartSelector info="Crawford, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Crawford"render={(props) => <ChartSelector info="Crawford, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Crawford"render={(props) => <ChartSelector info="Crawford, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Crawford"render={(props) => <ChartSelector info="Crawford, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Crawford"render={(props) => <ChartSelector info="Crawford, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Crawford"render={(props) => <ChartSelector info="Crawford, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Crawford"render={(props) => <ChartSelector info="Crawford, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Creek"render={(props) => <ChartSelector info="Creek, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Crenshaw"render={(props) => <ChartSelector info="Crenshaw, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Crisp"render={(props) => <ChartSelector info="Crisp, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Crittenden"render={(props) => <ChartSelector info="Crittenden, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Crittenden"render={(props) => <ChartSelector info="Crittenden, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Crockett"render={(props) => <ChartSelector info="Crockett, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Crook"render={(props) => <ChartSelector info="Crook, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Crook"render={(props) => <ChartSelector info="Crook, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Crosby"render={(props) => <ChartSelector info="Crosby, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Cross"render={(props) => <ChartSelector info="Cross, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Crow Wing"render={(props) => <ChartSelector info="Crow Wing, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Crowley"render={(props) => <ChartSelector info="Crowley, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Cullman"render={(props) => <ChartSelector info="Cullman, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Culpeper"render={(props) => <ChartSelector info="Culpeper, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Cumberland"render={(props) => <ChartSelector info="Cumberland, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Cumberland"render={(props) => <ChartSelector info="Cumberland, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Cumberland"render={(props) => <ChartSelector info="Cumberland, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Cumberland"render={(props) => <ChartSelector info="Cumberland, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Cumberland"render={(props) => <ChartSelector info="Cumberland, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Cumberland"render={(props) => <ChartSelector info="Cumberland, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Cumberland"render={(props) => <ChartSelector info="Cumberland, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Cumberland"render={(props) => <ChartSelector info="Cumberland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Cuming"render={(props) => <ChartSelector info="Cuming, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Currituck"render={(props) => <ChartSelector info="Currituck, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Curry"render={(props) => <ChartSelector info="Curry, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Curry"render={(props) => <ChartSelector info="Curry, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Custer"render={(props) => <ChartSelector info="Custer, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Custer"render={(props) => <ChartSelector info="Custer, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Custer"render={(props) => <ChartSelector info="Custer, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Custer"render={(props) => <ChartSelector info="Custer, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Cuyahoga"render={(props) => <ChartSelector info="Cuyahoga, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Dade"render={(props) => <ChartSelector info="Dade, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Dakota"render={(props) => <ChartSelector info="Dakota, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Dakota"render={(props) => <ChartSelector info="Dakota, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Dale"render={(props) => <ChartSelector info="Dale, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Dallam"render={(props) => <ChartSelector info="Dallam, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Dallas"render={(props) => <ChartSelector info="Dallas, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Dallas"render={(props) => <ChartSelector info="Dallas, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Dallas"render={(props) => <ChartSelector info="Dallas, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Dallas"render={(props) => <ChartSelector info="Dallas, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Dallas"render={(props) => <ChartSelector info="Dallas, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Dane"render={(props) => <ChartSelector info="Dane, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Danville"render={(props) => <ChartSelector info="Danville, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Dare"render={(props) => <ChartSelector info="Dare, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Darke"render={(props) => <ChartSelector info="Darke, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Darlington"render={(props) => <ChartSelector info="Darlington, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Dauphin"render={(props) => <ChartSelector info="Dauphin, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Davidson"render={(props) => <ChartSelector info="Davidson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Davidson"render={(props) => <ChartSelector info="Davidson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Davie"render={(props) => <ChartSelector info="Davie, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Daviess"render={(props) => <ChartSelector info="Daviess, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Daviess"render={(props) => <ChartSelector info="Daviess, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Daviess"render={(props) => <ChartSelector info="Daviess, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Davis"render={(props) => <ChartSelector info="Davis, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Davison"render={(props) => <ChartSelector info="Davison, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Dawson"render={(props) => <ChartSelector info="Dawson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Dawson"render={(props) => <ChartSelector info="Dawson, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Dawson"render={(props) => <ChartSelector info="Dawson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Day"render={(props) => <ChartSelector info="Day, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, De Soto"render={(props) => <ChartSelector info="De Soto, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, De Witt"render={(props) => <ChartSelector info="De Witt, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, DeKalb"render={(props) => <ChartSelector info="DeKalb, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, DeKalb"render={(props) => <ChartSelector info="DeKalb, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, DeKalb"render={(props) => <ChartSelector info="DeKalb, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, DeKalb"render={(props) => <ChartSelector info="DeKalb, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, DeKalb"render={(props) => <ChartSelector info="DeKalb, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, DeKalb"render={(props) => <ChartSelector info="DeKalb, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, DeSoto"render={(props) => <ChartSelector info="DeSoto, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, DeSoto"render={(props) => <ChartSelector info="DeSoto, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, DeWitt"render={(props) => <ChartSelector info="DeWitt, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Deaf Smith"render={(props) => <ChartSelector info="Deaf Smith, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Dearborn"render={(props) => <ChartSelector info="Dearborn, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Decatur"render={(props) => <ChartSelector info="Decatur, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Decatur"render={(props) => <ChartSelector info="Decatur, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Decatur"render={(props) => <ChartSelector info="Decatur, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Deer Lodge"render={(props) => <ChartSelector info="Deer Lodge, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Defiance"render={(props) => <ChartSelector info="Defiance, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Del Norte"render={(props) => <ChartSelector info="Del Norte, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Delaware"render={(props) => <ChartSelector info="Delaware, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Delaware"render={(props) => <ChartSelector info="Delaware, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Delaware"render={(props) => <ChartSelector info="Delaware, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Delaware"render={(props) => <ChartSelector info="Delaware, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Delaware"render={(props) => <ChartSelector info="Delaware, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Delaware"render={(props) => <ChartSelector info="Delaware, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Delta"render={(props) => <ChartSelector info="Delta, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Delta"render={(props) => <ChartSelector info="Delta, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Delta"render={(props) => <ChartSelector info="Delta, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Denton"render={(props) => <ChartSelector info="Denton, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Denver"render={(props) => <ChartSelector info="Denver, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Des Moines"render={(props) => <ChartSelector info="Des Moines, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Deschutes"render={(props) => <ChartSelector info="Deschutes, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Desha"render={(props) => <ChartSelector info="Desha, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Deuel"render={(props) => <ChartSelector info="Deuel, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Dewey"render={(props) => <ChartSelector info="Dewey, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Dickens"render={(props) => <ChartSelector info="Dickens, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Dickenson"render={(props) => <ChartSelector info="Dickenson, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Dickinson"render={(props) => <ChartSelector info="Dickinson, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Dickinson"render={(props) => <ChartSelector info="Dickinson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Dickinson"render={(props) => <ChartSelector info="Dickinson, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Dickson"render={(props) => <ChartSelector info="Dickson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Dillon"render={(props) => <ChartSelector info="Dillon, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Dimmit"render={(props) => <ChartSelector info="Dimmit, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Dinwiddie"render={(props) => <ChartSelector info="Dinwiddie, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/District of Columbia, District of Columbia"render={(props) => <ChartSelector info="District of Columbia, District of Columbia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Divide"render={(props) => <ChartSelector info="Divide, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Dixie"render={(props) => <ChartSelector info="Dixie, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Dixon"render={(props) => <ChartSelector info="Dixon, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Dodge"render={(props) => <ChartSelector info="Dodge, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Dodge"render={(props) => <ChartSelector info="Dodge, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Dodge"render={(props) => <ChartSelector info="Dodge, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Dodge"render={(props) => <ChartSelector info="Dodge, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Dona Ana"render={(props) => <ChartSelector info="Dona Ana, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Doniphan"render={(props) => <ChartSelector info="Doniphan, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Donley"render={(props) => <ChartSelector info="Donley, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Dooly"render={(props) => <ChartSelector info="Dooly, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Door"render={(props) => <ChartSelector info="Door, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Dorchester"render={(props) => <ChartSelector info="Dorchester, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Dorchester"render={(props) => <ChartSelector info="Dorchester, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Dougherty"render={(props) => <ChartSelector info="Dougherty, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Douglas"render={(props) => <ChartSelector info="Douglas, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Douglas"render={(props) => <ChartSelector info="Douglas, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Douglas"render={(props) => <ChartSelector info="Douglas, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Douglas"render={(props) => <ChartSelector info="Douglas, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Douglas"render={(props) => <ChartSelector info="Douglas, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Douglas"render={(props) => <ChartSelector info="Douglas, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Douglas"render={(props) => <ChartSelector info="Douglas, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Douglas"render={(props) => <ChartSelector info="Douglas, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Douglas"render={(props) => <ChartSelector info="Douglas, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Douglas"render={(props) => <ChartSelector info="Douglas, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Drew"render={(props) => <ChartSelector info="Drew, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, DuPage"render={(props) => <ChartSelector info="DuPage, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Dubois"render={(props) => <ChartSelector info="Dubois, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Dubuque"render={(props) => <ChartSelector info="Dubuque, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Dukes and Nantucket"render={(props) => <ChartSelector info="Dukes and Nantucket, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Dunklin"render={(props) => <ChartSelector info="Dunklin, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Dunn"render={(props) => <ChartSelector info="Dunn, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Dunn"render={(props) => <ChartSelector info="Dunn, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Duplin"render={(props) => <ChartSelector info="Duplin, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Durham"render={(props) => <ChartSelector info="Durham, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Dutchess"render={(props) => <ChartSelector info="Dutchess, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Duval"render={(props) => <ChartSelector info="Duval, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Duval"render={(props) => <ChartSelector info="Duval, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Dyer"render={(props) => <ChartSelector info="Dyer, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Eagle"render={(props) => <ChartSelector info="Eagle, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Early"render={(props) => <ChartSelector info="Early, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, East Baton Rouge"render={(props) => <ChartSelector info="East Baton Rouge, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, East Carroll"render={(props) => <ChartSelector info="East Carroll, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, East Feliciana"render={(props) => <ChartSelector info="East Feliciana, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Eastland"render={(props) => <ChartSelector info="Eastland, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Eaton"render={(props) => <ChartSelector info="Eaton, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Eau Claire"render={(props) => <ChartSelector info="Eau Claire, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Echols"render={(props) => <ChartSelector info="Echols, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Ector"render={(props) => <ChartSelector info="Ector, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Eddy"render={(props) => <ChartSelector info="Eddy, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Eddy"render={(props) => <ChartSelector info="Eddy, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Edgecombe"render={(props) => <ChartSelector info="Edgecombe, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Edgefield"render={(props) => <ChartSelector info="Edgefield, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Edmonson"render={(props) => <ChartSelector info="Edmonson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Edwards"render={(props) => <ChartSelector info="Edwards, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Effingham"render={(props) => <ChartSelector info="Effingham, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Effingham"render={(props) => <ChartSelector info="Effingham, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, El Dorado"render={(props) => <ChartSelector info="El Dorado, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, El Paso"render={(props) => <ChartSelector info="El Paso, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, El Paso"render={(props) => <ChartSelector info="El Paso, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Elbert"render={(props) => <ChartSelector info="Elbert, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Elbert"render={(props) => <ChartSelector info="Elbert, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Elk"render={(props) => <ChartSelector info="Elk, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Elkhart"render={(props) => <ChartSelector info="Elkhart, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Elko"render={(props) => <ChartSelector info="Elko, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Ellis"render={(props) => <ChartSelector info="Ellis, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Ellis"render={(props) => <ChartSelector info="Ellis, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Elmore"render={(props) => <ChartSelector info="Elmore, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Elmore"render={(props) => <ChartSelector info="Elmore, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Emanuel"render={(props) => <ChartSelector info="Emanuel, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Emmet"render={(props) => <ChartSelector info="Emmet, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Emmons"render={(props) => <ChartSelector info="Emmons, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Emporia"render={(props) => <ChartSelector info="Emporia, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Erath"render={(props) => <ChartSelector info="Erath, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Erie"render={(props) => <ChartSelector info="Erie, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Erie"render={(props) => <ChartSelector info="Erie, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Erie"render={(props) => <ChartSelector info="Erie, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Escambia"render={(props) => <ChartSelector info="Escambia, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Escambia"render={(props) => <ChartSelector info="Escambia, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Essex"render={(props) => <ChartSelector info="Essex, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Essex"render={(props) => <ChartSelector info="Essex, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Essex"render={(props) => <ChartSelector info="Essex, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Essex"render={(props) => <ChartSelector info="Essex, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Essex"render={(props) => <ChartSelector info="Essex, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Etowah"render={(props) => <ChartSelector info="Etowah, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Eureka"render={(props) => <ChartSelector info="Eureka, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Evangeline"render={(props) => <ChartSelector info="Evangeline, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Evans"render={(props) => <ChartSelector info="Evans, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Fairbanks North Star"render={(props) => <ChartSelector info="Fairbanks North Star, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Fairfax"render={(props) => <ChartSelector info="Fairfax, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Fairfax City"render={(props) => <ChartSelector info="Fairfax City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Fairfield"render={(props) => <ChartSelector info="Fairfield, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Fairfield"render={(props) => <ChartSelector info="Fairfield, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Fairfield"render={(props) => <ChartSelector info="Fairfield, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Fall River"render={(props) => <ChartSelector info="Fall River, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Falls"render={(props) => <ChartSelector info="Falls, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Falls Church"render={(props) => <ChartSelector info="Falls Church, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Fannin"render={(props) => <ChartSelector info="Fannin, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Fannin"render={(props) => <ChartSelector info="Fannin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Faribault"render={(props) => <ChartSelector info="Faribault, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Faulk"render={(props) => <ChartSelector info="Faulk, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Faulkner"render={(props) => <ChartSelector info="Faulkner, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Fauquier"render={(props) => <ChartSelector info="Fauquier, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Fayette"render={(props) => <ChartSelector info="Fayette, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Fayette"render={(props) => <ChartSelector info="Fayette, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Fayette"render={(props) => <ChartSelector info="Fayette, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Fayette"render={(props) => <ChartSelector info="Fayette, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Fayette"render={(props) => <ChartSelector info="Fayette, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Fayette"render={(props) => <ChartSelector info="Fayette, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Fayette"render={(props) => <ChartSelector info="Fayette, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Fayette"render={(props) => <ChartSelector info="Fayette, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Fayette"render={(props) => <ChartSelector info="Fayette, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Fayette"render={(props) => <ChartSelector info="Fayette, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Fayette"render={(props) => <ChartSelector info="Fayette, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Federal Correctional Institution (FCI)"render={(props) => <ChartSelector info="Federal Correctional Institution (FCI), Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Fentress"render={(props) => <ChartSelector info="Fentress, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Ferry"render={(props) => <ChartSelector info="Ferry, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Fillmore"render={(props) => <ChartSelector info="Fillmore, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Fillmore"render={(props) => <ChartSelector info="Fillmore, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Finney"render={(props) => <ChartSelector info="Finney, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Flagler"render={(props) => <ChartSelector info="Flagler, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Flathead"render={(props) => <ChartSelector info="Flathead, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Fleming"render={(props) => <ChartSelector info="Fleming, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Florence"render={(props) => <ChartSelector info="Florence, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Florence"render={(props) => <ChartSelector info="Florence, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Floyd"render={(props) => <ChartSelector info="Floyd, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Floyd"render={(props) => <ChartSelector info="Floyd, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Floyd"render={(props) => <ChartSelector info="Floyd, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Floyd"render={(props) => <ChartSelector info="Floyd, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Floyd"render={(props) => <ChartSelector info="Floyd, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Fluvanna"render={(props) => <ChartSelector info="Fluvanna, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Fond du Lac"render={(props) => <ChartSelector info="Fond du Lac, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Ford"render={(props) => <ChartSelector info="Ford, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Ford"render={(props) => <ChartSelector info="Ford, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Forest"render={(props) => <ChartSelector info="Forest, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Forrest"render={(props) => <ChartSelector info="Forrest, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Forsyth"render={(props) => <ChartSelector info="Forsyth, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Forsyth"render={(props) => <ChartSelector info="Forsyth, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Fort Bend"render={(props) => <ChartSelector info="Fort Bend, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Foster"render={(props) => <ChartSelector info="Foster, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Fountain"render={(props) => <ChartSelector info="Fountain, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Franklin"render={(props) => <ChartSelector info="Franklin, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Franklin"render={(props) => <ChartSelector info="Franklin, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Franklin"render={(props) => <ChartSelector info="Franklin, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Franklin"render={(props) => <ChartSelector info="Franklin, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Franklin"render={(props) => <ChartSelector info="Franklin, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Franklin"render={(props) => <ChartSelector info="Franklin, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Franklin"render={(props) => <ChartSelector info="Franklin, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Franklin"render={(props) => <ChartSelector info="Franklin, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Franklin"render={(props) => <ChartSelector info="Franklin, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Franklin"render={(props) => <ChartSelector info="Franklin, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Franklin"render={(props) => <ChartSelector info="Franklin, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Franklin"render={(props) => <ChartSelector info="Franklin, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Franklin"render={(props) => <ChartSelector info="Franklin, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Franklin"render={(props) => <ChartSelector info="Franklin, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Franklin"render={(props) => <ChartSelector info="Franklin, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Franklin"render={(props) => <ChartSelector info="Franklin, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Franklin"render={(props) => <ChartSelector info="Franklin, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Franklin"render={(props) => <ChartSelector info="Franklin, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Franklin"render={(props) => <ChartSelector info="Franklin, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Franklin"render={(props) => <ChartSelector info="Franklin, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Franklin"render={(props) => <ChartSelector info="Franklin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Franklin"render={(props) => <ChartSelector info="Franklin, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Franklin"render={(props) => <ChartSelector info="Franklin, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Franklin"render={(props) => <ChartSelector info="Franklin, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Franklin City"render={(props) => <ChartSelector info="Franklin City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Frederick"render={(props) => <ChartSelector info="Frederick, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Frederick"render={(props) => <ChartSelector info="Frederick, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Fredericksburg"render={(props) => <ChartSelector info="Fredericksburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Freeborn"render={(props) => <ChartSelector info="Freeborn, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Freestone"render={(props) => <ChartSelector info="Freestone, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Fremont"render={(props) => <ChartSelector info="Fremont, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Fremont"render={(props) => <ChartSelector info="Fremont, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Fremont"render={(props) => <ChartSelector info="Fremont, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Fresno"render={(props) => <ChartSelector info="Fresno, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Frio"render={(props) => <ChartSelector info="Frio, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Fulton"render={(props) => <ChartSelector info="Fulton, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Fulton"render={(props) => <ChartSelector info="Fulton, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Fulton"render={(props) => <ChartSelector info="Fulton, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Fulton"render={(props) => <ChartSelector info="Fulton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Fulton"render={(props) => <ChartSelector info="Fulton, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Fulton"render={(props) => <ChartSelector info="Fulton, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Fulton"render={(props) => <ChartSelector info="Fulton, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Fulton"render={(props) => <ChartSelector info="Fulton, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Furnas"render={(props) => <ChartSelector info="Furnas, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Gadsden"render={(props) => <ChartSelector info="Gadsden, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Gage"render={(props) => <ChartSelector info="Gage, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Gaines"render={(props) => <ChartSelector info="Gaines, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Galax"render={(props) => <ChartSelector info="Galax, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Gallatin"render={(props) => <ChartSelector info="Gallatin, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Gallatin"render={(props) => <ChartSelector info="Gallatin, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Gallatin"render={(props) => <ChartSelector info="Gallatin, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Gallia"render={(props) => <ChartSelector info="Gallia, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Galveston"render={(props) => <ChartSelector info="Galveston, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Garfield"render={(props) => <ChartSelector info="Garfield, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Garfield"render={(props) => <ChartSelector info="Garfield, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Garfield"render={(props) => <ChartSelector info="Garfield, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Garland"render={(props) => <ChartSelector info="Garland, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Garrard"render={(props) => <ChartSelector info="Garrard, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Garrett"render={(props) => <ChartSelector info="Garrett, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Garvin"render={(props) => <ChartSelector info="Garvin, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Gasconade"render={(props) => <ChartSelector info="Gasconade, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Gaston"render={(props) => <ChartSelector info="Gaston, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Gates"render={(props) => <ChartSelector info="Gates, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Geary"render={(props) => <ChartSelector info="Geary, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Geauga"render={(props) => <ChartSelector info="Geauga, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Gem"render={(props) => <ChartSelector info="Gem, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Genesee"render={(props) => <ChartSelector info="Genesee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Genesee"render={(props) => <ChartSelector info="Genesee, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Geneva"render={(props) => <ChartSelector info="Geneva, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Gentry"render={(props) => <ChartSelector info="Gentry, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, George"render={(props) => <ChartSelector info="George, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Georgetown"render={(props) => <ChartSelector info="Georgetown, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Gibson"render={(props) => <ChartSelector info="Gibson, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Gibson"render={(props) => <ChartSelector info="Gibson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Gila"render={(props) => <ChartSelector info="Gila, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Gilchrist"render={(props) => <ChartSelector info="Gilchrist, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Giles"render={(props) => <ChartSelector info="Giles, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Giles"render={(props) => <ChartSelector info="Giles, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Gillespie"render={(props) => <ChartSelector info="Gillespie, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Gilmer"render={(props) => <ChartSelector info="Gilmer, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Gilpin"render={(props) => <ChartSelector info="Gilpin, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Glacier"render={(props) => <ChartSelector info="Glacier, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Glades"render={(props) => <ChartSelector info="Glades, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Gladwin"render={(props) => <ChartSelector info="Gladwin, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Glenn"render={(props) => <ChartSelector info="Glenn, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Gloucester"render={(props) => <ChartSelector info="Gloucester, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Gloucester"render={(props) => <ChartSelector info="Gloucester, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Glynn"render={(props) => <ChartSelector info="Glynn, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Gogebic"render={(props) => <ChartSelector info="Gogebic, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Golden Valley"render={(props) => <ChartSelector info="Golden Valley, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Goliad"render={(props) => <ChartSelector info="Goliad, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Gonzales"render={(props) => <ChartSelector info="Gonzales, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Goochland"render={(props) => <ChartSelector info="Goochland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Goodhue"render={(props) => <ChartSelector info="Goodhue, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Gooding"render={(props) => <ChartSelector info="Gooding, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Gordon"render={(props) => <ChartSelector info="Gordon, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Goshen"render={(props) => <ChartSelector info="Goshen, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Gosper"render={(props) => <ChartSelector info="Gosper, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Gove"render={(props) => <ChartSelector info="Gove, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Grady"render={(props) => <ChartSelector info="Grady, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Grady"render={(props) => <ChartSelector info="Grady, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Grafton"render={(props) => <ChartSelector info="Grafton, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Graham"render={(props) => <ChartSelector info="Graham, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Grainger"render={(props) => <ChartSelector info="Grainger, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Grand"render={(props) => <ChartSelector info="Grand, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Grand Forks"render={(props) => <ChartSelector info="Grand Forks, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Grand Isle"render={(props) => <ChartSelector info="Grand Isle, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Grand Traverse"render={(props) => <ChartSelector info="Grand Traverse, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Grant"render={(props) => <ChartSelector info="Grant, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Grant"render={(props) => <ChartSelector info="Grant, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Grant"render={(props) => <ChartSelector info="Grant, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Grant"render={(props) => <ChartSelector info="Grant, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Grant"render={(props) => <ChartSelector info="Grant, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Grant"render={(props) => <ChartSelector info="Grant, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Grant"render={(props) => <ChartSelector info="Grant, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Grant"render={(props) => <ChartSelector info="Grant, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Grant"render={(props) => <ChartSelector info="Grant, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Grant"render={(props) => <ChartSelector info="Grant, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Grant"render={(props) => <ChartSelector info="Grant, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Granville"render={(props) => <ChartSelector info="Granville, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Gratiot"render={(props) => <ChartSelector info="Gratiot, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Graves"render={(props) => <ChartSelector info="Graves, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Gray"render={(props) => <ChartSelector info="Gray, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Gray"render={(props) => <ChartSelector info="Gray, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Grays Harbor"render={(props) => <ChartSelector info="Grays Harbor, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Grayson"render={(props) => <ChartSelector info="Grayson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Grayson"render={(props) => <ChartSelector info="Grayson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Grayson"render={(props) => <ChartSelector info="Grayson, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Greeley"render={(props) => <ChartSelector info="Greeley, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Green"render={(props) => <ChartSelector info="Green, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Green"render={(props) => <ChartSelector info="Green, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Green Lake"render={(props) => <ChartSelector info="Green Lake, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Greenbrier"render={(props) => <ChartSelector info="Greenbrier, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Greene"render={(props) => <ChartSelector info="Greene, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Greene"render={(props) => <ChartSelector info="Greene, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Greene"render={(props) => <ChartSelector info="Greene, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Greene"render={(props) => <ChartSelector info="Greene, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Greene"render={(props) => <ChartSelector info="Greene, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Greene"render={(props) => <ChartSelector info="Greene, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Greene"render={(props) => <ChartSelector info="Greene, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Greene"render={(props) => <ChartSelector info="Greene, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Greene"render={(props) => <ChartSelector info="Greene, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Greene"render={(props) => <ChartSelector info="Greene, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Greene"render={(props) => <ChartSelector info="Greene, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Greene"render={(props) => <ChartSelector info="Greene, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Greene"render={(props) => <ChartSelector info="Greene, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Greene"render={(props) => <ChartSelector info="Greene, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Greenlee"render={(props) => <ChartSelector info="Greenlee, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Greensville"render={(props) => <ChartSelector info="Greensville, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Greenup"render={(props) => <ChartSelector info="Greenup, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Greenville"render={(props) => <ChartSelector info="Greenville, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Greenwood"render={(props) => <ChartSelector info="Greenwood, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Greenwood"render={(props) => <ChartSelector info="Greenwood, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Greer"render={(props) => <ChartSelector info="Greer, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Gregg"render={(props) => <ChartSelector info="Gregg, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Grenada"render={(props) => <ChartSelector info="Grenada, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Grimes"render={(props) => <ChartSelector info="Grimes, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Grundy"render={(props) => <ChartSelector info="Grundy, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Grundy"render={(props) => <ChartSelector info="Grundy, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Grundy"render={(props) => <ChartSelector info="Grundy, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Guadalupe"render={(props) => <ChartSelector info="Guadalupe, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Guadalupe"render={(props) => <ChartSelector info="Guadalupe, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Guernsey"render={(props) => <ChartSelector info="Guernsey, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Guilford"render={(props) => <ChartSelector info="Guilford, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Gulf"render={(props) => <ChartSelector info="Gulf, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Gunnison"render={(props) => <ChartSelector info="Gunnison, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Guthrie"render={(props) => <ChartSelector info="Guthrie, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Gwinnett"render={(props) => <ChartSelector info="Gwinnett, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Habersham"render={(props) => <ChartSelector info="Habersham, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Hale"render={(props) => <ChartSelector info="Hale, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hale"render={(props) => <ChartSelector info="Hale, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Halifax"render={(props) => <ChartSelector info="Halifax, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Halifax"render={(props) => <ChartSelector info="Halifax, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Hall"render={(props) => <ChartSelector info="Hall, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Hall"render={(props) => <ChartSelector info="Hall, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hamblen"render={(props) => <ChartSelector info="Hamblen, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Hamilton"render={(props) => <ChartSelector info="Hamilton, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Hamilton"render={(props) => <ChartSelector info="Hamilton, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Hamilton"render={(props) => <ChartSelector info="Hamilton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Hamilton"render={(props) => <ChartSelector info="Hamilton, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Hamilton"render={(props) => <ChartSelector info="Hamilton, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Hamilton"render={(props) => <ChartSelector info="Hamilton, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Hamilton"render={(props) => <ChartSelector info="Hamilton, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Hamilton"render={(props) => <ChartSelector info="Hamilton, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hamilton"render={(props) => <ChartSelector info="Hamilton, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hamilton"render={(props) => <ChartSelector info="Hamilton, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Hamlin"render={(props) => <ChartSelector info="Hamlin, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Hampden"render={(props) => <ChartSelector info="Hampden, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Hampshire"render={(props) => <ChartSelector info="Hampshire, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Hampshire"render={(props) => <ChartSelector info="Hampshire, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Hampton"render={(props) => <ChartSelector info="Hampton, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Hampton"render={(props) => <ChartSelector info="Hampton, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Hancock"render={(props) => <ChartSelector info="Hancock, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Hancock"render={(props) => <ChartSelector info="Hancock, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Hancock"render={(props) => <ChartSelector info="Hancock, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Hancock"render={(props) => <ChartSelector info="Hancock, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Hancock"render={(props) => <ChartSelector info="Hancock, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Hancock"render={(props) => <ChartSelector info="Hancock, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Hancock"render={(props) => <ChartSelector info="Hancock, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Hancock"render={(props) => <ChartSelector info="Hancock, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hancock"render={(props) => <ChartSelector info="Hancock, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Hancock"render={(props) => <ChartSelector info="Hancock, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Hanover"render={(props) => <ChartSelector info="Hanover, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hansford"render={(props) => <ChartSelector info="Hansford, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Haralson"render={(props) => <ChartSelector info="Haralson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Hardee"render={(props) => <ChartSelector info="Hardee, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hardeman"render={(props) => <ChartSelector info="Hardeman, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Hardin"render={(props) => <ChartSelector info="Hardin, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Hardin"render={(props) => <ChartSelector info="Hardin, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Hardin"render={(props) => <ChartSelector info="Hardin, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Hardin"render={(props) => <ChartSelector info="Hardin, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hardin"render={(props) => <ChartSelector info="Hardin, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hardin"render={(props) => <ChartSelector info="Hardin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Harding"render={(props) => <ChartSelector info="Harding, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Hardy"render={(props) => <ChartSelector info="Hardy, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Harford"render={(props) => <ChartSelector info="Harford, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Harnett"render={(props) => <ChartSelector info="Harnett, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Harper"render={(props) => <ChartSelector info="Harper, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Harris"render={(props) => <ChartSelector info="Harris, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Harris"render={(props) => <ChartSelector info="Harris, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Harrison"render={(props) => <ChartSelector info="Harrison, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Harrison"render={(props) => <ChartSelector info="Harrison, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Harrison"render={(props) => <ChartSelector info="Harrison, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Harrison"render={(props) => <ChartSelector info="Harrison, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Harrison"render={(props) => <ChartSelector info="Harrison, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Harrison"render={(props) => <ChartSelector info="Harrison, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Harrison"render={(props) => <ChartSelector info="Harrison, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Harrison"render={(props) => <ChartSelector info="Harrison, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Harrisonburg"render={(props) => <ChartSelector info="Harrisonburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Hart"render={(props) => <ChartSelector info="Hart, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Hart"render={(props) => <ChartSelector info="Hart, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Hartford"render={(props) => <ChartSelector info="Hartford, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hartley"render={(props) => <ChartSelector info="Hartley, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Harvey"render={(props) => <ChartSelector info="Harvey, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Haskell"render={(props) => <ChartSelector info="Haskell, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Haskell"render={(props) => <ChartSelector info="Haskell, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Hawaii"render={(props) => <ChartSelector info="Hawaii, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hawkins"render={(props) => <ChartSelector info="Hawkins, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hays"render={(props) => <ChartSelector info="Hays, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Haywood"render={(props) => <ChartSelector info="Haywood, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Haywood"render={(props) => <ChartSelector info="Haywood, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Heard"render={(props) => <ChartSelector info="Heard, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hemphill"render={(props) => <ChartSelector info="Hemphill, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Hempstead"render={(props) => <ChartSelector info="Hempstead, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Henderson"render={(props) => <ChartSelector info="Henderson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Henderson"render={(props) => <ChartSelector info="Henderson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Henderson"render={(props) => <ChartSelector info="Henderson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Henderson"render={(props) => <ChartSelector info="Henderson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Henderson"render={(props) => <ChartSelector info="Henderson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Hendricks"render={(props) => <ChartSelector info="Hendricks, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Hendry"render={(props) => <ChartSelector info="Hendry, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Hennepin"render={(props) => <ChartSelector info="Hennepin, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Henrico"render={(props) => <ChartSelector info="Henrico, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Henry"render={(props) => <ChartSelector info="Henry, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Henry"render={(props) => <ChartSelector info="Henry, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Henry"render={(props) => <ChartSelector info="Henry, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Henry"render={(props) => <ChartSelector info="Henry, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Henry"render={(props) => <ChartSelector info="Henry, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Henry"render={(props) => <ChartSelector info="Henry, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Henry"render={(props) => <ChartSelector info="Henry, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Henry"render={(props) => <ChartSelector info="Henry, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Henry"render={(props) => <ChartSelector info="Henry, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Henry"render={(props) => <ChartSelector info="Henry, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Herkimer"render={(props) => <ChartSelector info="Herkimer, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Hernando"render={(props) => <ChartSelector info="Hernando, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Hertford"render={(props) => <ChartSelector info="Hertford, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Hickman"render={(props) => <ChartSelector info="Hickman, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Hickman"render={(props) => <ChartSelector info="Hickman, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Hidalgo"render={(props) => <ChartSelector info="Hidalgo, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hidalgo"render={(props) => <ChartSelector info="Hidalgo, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Highland"render={(props) => <ChartSelector info="Highland, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Highland"render={(props) => <ChartSelector info="Highland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Highlands"render={(props) => <ChartSelector info="Highlands, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Hill"render={(props) => <ChartSelector info="Hill, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hill"render={(props) => <ChartSelector info="Hill, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Hillsborough"render={(props) => <ChartSelector info="Hillsborough, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Hillsborough"render={(props) => <ChartSelector info="Hillsborough, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Hillsdale"render={(props) => <ChartSelector info="Hillsdale, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Hinds"render={(props) => <ChartSelector info="Hinds, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Hinsdale"render={(props) => <ChartSelector info="Hinsdale, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Hocking"render={(props) => <ChartSelector info="Hocking, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hockley"render={(props) => <ChartSelector info="Hockley, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Hoke"render={(props) => <ChartSelector info="Hoke, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Holmes"render={(props) => <ChartSelector info="Holmes, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Holmes"render={(props) => <ChartSelector info="Holmes, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Holmes"render={(props) => <ChartSelector info="Holmes, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Holt"render={(props) => <ChartSelector info="Holt, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Honolulu"render={(props) => <ChartSelector info="Honolulu, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hood"render={(props) => <ChartSelector info="Hood, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Hood River"render={(props) => <ChartSelector info="Hood River, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Hopewell"render={(props) => <ChartSelector info="Hopewell, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Hopkins"render={(props) => <ChartSelector info="Hopkins, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hopkins"render={(props) => <ChartSelector info="Hopkins, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Horry"render={(props) => <ChartSelector info="Horry, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Hot Spring"render={(props) => <ChartSelector info="Hot Spring, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Hot Springs"render={(props) => <ChartSelector info="Hot Springs, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Houghton"render={(props) => <ChartSelector info="Houghton, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Houston"render={(props) => <ChartSelector info="Houston, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Houston"render={(props) => <ChartSelector info="Houston, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Houston"render={(props) => <ChartSelector info="Houston, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Houston"render={(props) => <ChartSelector info="Houston, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Houston"render={(props) => <ChartSelector info="Houston, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Howard"render={(props) => <ChartSelector info="Howard, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Howard"render={(props) => <ChartSelector info="Howard, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Howard"render={(props) => <ChartSelector info="Howard, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Howard"render={(props) => <ChartSelector info="Howard, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Howard"render={(props) => <ChartSelector info="Howard, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Howard"render={(props) => <ChartSelector info="Howard, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Howard"render={(props) => <ChartSelector info="Howard, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Howell"render={(props) => <ChartSelector info="Howell, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Hudson"render={(props) => <ChartSelector info="Hudson, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Huerfano"render={(props) => <ChartSelector info="Huerfano, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Hughes"render={(props) => <ChartSelector info="Hughes, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Humboldt"render={(props) => <ChartSelector info="Humboldt, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Humboldt"render={(props) => <ChartSelector info="Humboldt, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Humboldt"render={(props) => <ChartSelector info="Humboldt, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Humphreys"render={(props) => <ChartSelector info="Humphreys, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Humphreys"render={(props) => <ChartSelector info="Humphreys, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hunt"render={(props) => <ChartSelector info="Hunt, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Hunterdon"render={(props) => <ChartSelector info="Hunterdon, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Huntingdon"render={(props) => <ChartSelector info="Huntingdon, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Huntington"render={(props) => <ChartSelector info="Huntington, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Huron"render={(props) => <ChartSelector info="Huron, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Huron"render={(props) => <ChartSelector info="Huron, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Hutchinson"render={(props) => <ChartSelector info="Hutchinson, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Hutchinson"render={(props) => <ChartSelector info="Hutchinson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Hyde"render={(props) => <ChartSelector info="Hyde, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Iberia"render={(props) => <ChartSelector info="Iberia, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Iberville"render={(props) => <ChartSelector info="Iberville, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Idaho"render={(props) => <ChartSelector info="Idaho, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Imperial"render={(props) => <ChartSelector info="Imperial, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Independence"render={(props) => <ChartSelector info="Independence, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Indian River"render={(props) => <ChartSelector info="Indian River, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Indiana"render={(props) => <ChartSelector info="Indiana, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Ingham"render={(props) => <ChartSelector info="Ingham, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Inyo"render={(props) => <ChartSelector info="Inyo, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Ionia"render={(props) => <ChartSelector info="Ionia, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Iosco"render={(props) => <ChartSelector info="Iosco, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Iowa"render={(props) => <ChartSelector info="Iowa, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Iowa"render={(props) => <ChartSelector info="Iowa, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Iredell"render={(props) => <ChartSelector info="Iredell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Iron"render={(props) => <ChartSelector info="Iron, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Iron"render={(props) => <ChartSelector info="Iron, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Iroquois"render={(props) => <ChartSelector info="Iroquois, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Irwin"render={(props) => <ChartSelector info="Irwin, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Isabella"render={(props) => <ChartSelector info="Isabella, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Isanti"render={(props) => <ChartSelector info="Isanti, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Island"render={(props) => <ChartSelector info="Island, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Isle of Wight"render={(props) => <ChartSelector info="Isle of Wight, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Itasca"render={(props) => <ChartSelector info="Itasca, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Itawamba"render={(props) => <ChartSelector info="Itawamba, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Izard"render={(props) => <ChartSelector info="Izard, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jack"render={(props) => <ChartSelector info="Jack, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Jackson"render={(props) => <ChartSelector info="Jackson, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Jackson"render={(props) => <ChartSelector info="Jackson, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Jackson"render={(props) => <ChartSelector info="Jackson, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jackson"render={(props) => <ChartSelector info="Jackson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Jackson"render={(props) => <ChartSelector info="Jackson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Jackson"render={(props) => <ChartSelector info="Jackson, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Jackson"render={(props) => <ChartSelector info="Jackson, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Jackson"render={(props) => <ChartSelector info="Jackson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Jackson"render={(props) => <ChartSelector info="Jackson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Jackson"render={(props) => <ChartSelector info="Jackson, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Jackson"render={(props) => <ChartSelector info="Jackson, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Jackson"render={(props) => <ChartSelector info="Jackson, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Jackson"render={(props) => <ChartSelector info="Jackson, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Jackson"render={(props) => <ChartSelector info="Jackson, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Jackson"render={(props) => <ChartSelector info="Jackson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Jackson"render={(props) => <ChartSelector info="Jackson, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Jackson"render={(props) => <ChartSelector info="Jackson, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Jackson"render={(props) => <ChartSelector info="Jackson, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Jackson"render={(props) => <ChartSelector info="Jackson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jackson"render={(props) => <ChartSelector info="Jackson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Jackson"render={(props) => <ChartSelector info="Jackson, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Jackson"render={(props) => <ChartSelector info="Jackson, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, James City"render={(props) => <ChartSelector info="James City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jasper"render={(props) => <ChartSelector info="Jasper, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Jasper"render={(props) => <ChartSelector info="Jasper, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Jasper"render={(props) => <ChartSelector info="Jasper, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Jasper"render={(props) => <ChartSelector info="Jasper, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Jasper"render={(props) => <ChartSelector info="Jasper, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Jasper"render={(props) => <ChartSelector info="Jasper, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Jasper"render={(props) => <ChartSelector info="Jasper, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jasper"render={(props) => <ChartSelector info="Jasper, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Jay"render={(props) => <ChartSelector info="Jay, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jeff Davis"render={(props) => <ChartSelector info="Jeff Davis, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Jefferson"render={(props) => <ChartSelector info="Jefferson, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Jefferson"render={(props) => <ChartSelector info="Jefferson, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Jefferson"render={(props) => <ChartSelector info="Jefferson, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Jefferson"render={(props) => <ChartSelector info="Jefferson, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jefferson"render={(props) => <ChartSelector info="Jefferson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Jefferson"render={(props) => <ChartSelector info="Jefferson, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Jefferson"render={(props) => <ChartSelector info="Jefferson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Jefferson"render={(props) => <ChartSelector info="Jefferson, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Jefferson"render={(props) => <ChartSelector info="Jefferson, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Jefferson"render={(props) => <ChartSelector info="Jefferson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Jefferson"render={(props) => <ChartSelector info="Jefferson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Jefferson"render={(props) => <ChartSelector info="Jefferson, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Jefferson"render={(props) => <ChartSelector info="Jefferson, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Jefferson"render={(props) => <ChartSelector info="Jefferson, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Jefferson"render={(props) => <ChartSelector info="Jefferson, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Jefferson"render={(props) => <ChartSelector info="Jefferson, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Jefferson"render={(props) => <ChartSelector info="Jefferson, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Jefferson"render={(props) => <ChartSelector info="Jefferson, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Jefferson"render={(props) => <ChartSelector info="Jefferson, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Jefferson"render={(props) => <ChartSelector info="Jefferson, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Jefferson"render={(props) => <ChartSelector info="Jefferson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jefferson"render={(props) => <ChartSelector info="Jefferson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Jefferson"render={(props) => <ChartSelector info="Jefferson, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Jefferson"render={(props) => <ChartSelector info="Jefferson, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Jefferson"render={(props) => <ChartSelector info="Jefferson, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Jefferson Davis"render={(props) => <ChartSelector info="Jefferson Davis, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Jefferson Davis"render={(props) => <ChartSelector info="Jefferson Davis, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jenkins"render={(props) => <ChartSelector info="Jenkins, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Jennings"render={(props) => <ChartSelector info="Jennings, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Jerauld"render={(props) => <ChartSelector info="Jerauld, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Jerome"render={(props) => <ChartSelector info="Jerome, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Jersey"render={(props) => <ChartSelector info="Jersey, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Jessamine"render={(props) => <ChartSelector info="Jessamine, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Jewell"render={(props) => <ChartSelector info="Jewell, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jim Hogg"render={(props) => <ChartSelector info="Jim Hogg, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jim Wells"render={(props) => <ChartSelector info="Jim Wells, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Jo Daviess"render={(props) => <ChartSelector info="Jo Daviess, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Johnson"render={(props) => <ChartSelector info="Johnson, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Johnson"render={(props) => <ChartSelector info="Johnson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Johnson"render={(props) => <ChartSelector info="Johnson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Johnson"render={(props) => <ChartSelector info="Johnson, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Johnson"render={(props) => <ChartSelector info="Johnson, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Johnson"render={(props) => <ChartSelector info="Johnson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Johnson"render={(props) => <ChartSelector info="Johnson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Johnson"render={(props) => <ChartSelector info="Johnson, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Johnson"render={(props) => <ChartSelector info="Johnson, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Johnson"render={(props) => <ChartSelector info="Johnson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Johnson"render={(props) => <ChartSelector info="Johnson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Johnson"render={(props) => <ChartSelector info="Johnson, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Johnston"render={(props) => <ChartSelector info="Johnston, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Johnston"render={(props) => <ChartSelector info="Johnston, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Jones"render={(props) => <ChartSelector info="Jones, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Jones"render={(props) => <ChartSelector info="Jones, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Jones"render={(props) => <ChartSelector info="Jones, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Jones"render={(props) => <ChartSelector info="Jones, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Jones"render={(props) => <ChartSelector info="Jones, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Josephine"render={(props) => <ChartSelector info="Josephine, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Juneau"render={(props) => <ChartSelector info="Juneau, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Juneau"render={(props) => <ChartSelector info="Juneau, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Juniata"render={(props) => <ChartSelector info="Juniata, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Kalamazoo"render={(props) => <ChartSelector info="Kalamazoo, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Kalkaska"render={(props) => <ChartSelector info="Kalkaska, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Kanawha"render={(props) => <ChartSelector info="Kanawha, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Kandiyohi"render={(props) => <ChartSelector info="Kandiyohi, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Kane"render={(props) => <ChartSelector info="Kane, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Kankakee"render={(props) => <ChartSelector info="Kankakee, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Kansas City"render={(props) => <ChartSelector info="Kansas City, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Karnes"render={(props) => <ChartSelector info="Karnes, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Kauai"render={(props) => <ChartSelector info="Kauai, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Kaufman"render={(props) => <ChartSelector info="Kaufman, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Kay"render={(props) => <ChartSelector info="Kay, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Kearney"render={(props) => <ChartSelector info="Kearney, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Kearny"render={(props) => <ChartSelector info="Kearny, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Kemper"render={(props) => <ChartSelector info="Kemper, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Kenai Peninsula"render={(props) => <ChartSelector info="Kenai Peninsula, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Kendall"render={(props) => <ChartSelector info="Kendall, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Kendall"render={(props) => <ChartSelector info="Kendall, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Kennebec"render={(props) => <ChartSelector info="Kennebec, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Kenosha"render={(props) => <ChartSelector info="Kenosha, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Delaware, Kent"render={(props) => <ChartSelector info="Kent, Delaware" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Kent"render={(props) => <ChartSelector info="Kent, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Kent"render={(props) => <ChartSelector info="Kent, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Kent"render={(props) => <ChartSelector info="Kent, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Kenton"render={(props) => <ChartSelector info="Kenton, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Keokuk"render={(props) => <ChartSelector info="Keokuk, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Kern"render={(props) => <ChartSelector info="Kern, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Kerr"render={(props) => <ChartSelector info="Kerr, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Kershaw"render={(props) => <ChartSelector info="Kershaw, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Ketchikan Gateway"render={(props) => <ChartSelector info="Ketchikan Gateway, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Kewaunee"render={(props) => <ChartSelector info="Kewaunee, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Kimball"render={(props) => <ChartSelector info="Kimball, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, King"render={(props) => <ChartSelector info="King, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, King George"render={(props) => <ChartSelector info="King George, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, King William"render={(props) => <ChartSelector info="King William, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, King and Queen"render={(props) => <ChartSelector info="King and Queen, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Kingfisher"render={(props) => <ChartSelector info="Kingfisher, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Kings"render={(props) => <ChartSelector info="Kings, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Kingsbury"render={(props) => <ChartSelector info="Kingsbury, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Kiowa"render={(props) => <ChartSelector info="Kiowa, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Kiowa"render={(props) => <ChartSelector info="Kiowa, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Kit Carson"render={(props) => <ChartSelector info="Kit Carson, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Kitsap"render={(props) => <ChartSelector info="Kitsap, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Kittitas"render={(props) => <ChartSelector info="Kittitas, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Kittson"render={(props) => <ChartSelector info="Kittson, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Klamath"render={(props) => <ChartSelector info="Klamath, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Kleberg"render={(props) => <ChartSelector info="Kleberg, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Klickitat"render={(props) => <ChartSelector info="Klickitat, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Knott"render={(props) => <ChartSelector info="Knott, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Knox"render={(props) => <ChartSelector info="Knox, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Knox"render={(props) => <ChartSelector info="Knox, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Knox"render={(props) => <ChartSelector info="Knox, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Knox"render={(props) => <ChartSelector info="Knox, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Knox"render={(props) => <ChartSelector info="Knox, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Knox"render={(props) => <ChartSelector info="Knox, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Knox"render={(props) => <ChartSelector info="Knox, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Knox"render={(props) => <ChartSelector info="Knox, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Kodiak Island"render={(props) => <ChartSelector info="Kodiak Island, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Koochiching"render={(props) => <ChartSelector info="Koochiching, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Kootenai"render={(props) => <ChartSelector info="Kootenai, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Kosciusko"render={(props) => <ChartSelector info="Kosciusko, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Kossuth"render={(props) => <ChartSelector info="Kossuth, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, La Crosse"render={(props) => <ChartSelector info="La Crosse, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, La Paz"render={(props) => <ChartSelector info="La Paz, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, La Plata"render={(props) => <ChartSelector info="La Plata, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, La Salle"render={(props) => <ChartSelector info="La Salle, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, LaGrange"render={(props) => <ChartSelector info="LaGrange, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, LaPorte"render={(props) => <ChartSelector info="LaPorte, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, LaSalle"render={(props) => <ChartSelector info="LaSalle, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, LaSalle"render={(props) => <ChartSelector info="LaSalle, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Labette"render={(props) => <ChartSelector info="Labette, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Lac qui Parle"render={(props) => <ChartSelector info="Lac qui Parle, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lackawanna"render={(props) => <ChartSelector info="Lackawanna, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Lafayette"render={(props) => <ChartSelector info="Lafayette, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Lafayette"render={(props) => <ChartSelector info="Lafayette, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Lafayette"render={(props) => <ChartSelector info="Lafayette, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lafayette"render={(props) => <ChartSelector info="Lafayette, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Lafayette"render={(props) => <ChartSelector info="Lafayette, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Lafayette"render={(props) => <ChartSelector info="Lafayette, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Lafourche"render={(props) => <ChartSelector info="Lafourche, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Lake"render={(props) => <ChartSelector info="Lake, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Lake"render={(props) => <ChartSelector info="Lake, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Lake"render={(props) => <ChartSelector info="Lake, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Lake"render={(props) => <ChartSelector info="Lake, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Lake"render={(props) => <ChartSelector info="Lake, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Lake"render={(props) => <ChartSelector info="Lake, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Lake"render={(props) => <ChartSelector info="Lake, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Lake"render={(props) => <ChartSelector info="Lake, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Lake"render={(props) => <ChartSelector info="Lake, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Lake"render={(props) => <ChartSelector info="Lake, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Lamar"render={(props) => <ChartSelector info="Lamar, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lamar"render={(props) => <ChartSelector info="Lamar, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lamar"render={(props) => <ChartSelector info="Lamar, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lamar"render={(props) => <ChartSelector info="Lamar, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lamb"render={(props) => <ChartSelector info="Lamb, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Lamoille"render={(props) => <ChartSelector info="Lamoille, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lampasas"render={(props) => <ChartSelector info="Lampasas, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Lancaster"render={(props) => <ChartSelector info="Lancaster, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lancaster"render={(props) => <ChartSelector info="Lancaster, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Lancaster"render={(props) => <ChartSelector info="Lancaster, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Lancaster"render={(props) => <ChartSelector info="Lancaster, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Lander"render={(props) => <ChartSelector info="Lander, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Lane"render={(props) => <ChartSelector info="Lane, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lanier"render={(props) => <ChartSelector info="Lanier, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Lapeer"render={(props) => <ChartSelector info="Lapeer, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Laramie"render={(props) => <ChartSelector info="Laramie, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Larimer"render={(props) => <ChartSelector info="Larimer, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Larue"render={(props) => <ChartSelector info="Larue, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Las Animas"render={(props) => <ChartSelector info="Las Animas, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Latah"render={(props) => <ChartSelector info="Latah, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Latimer"render={(props) => <ChartSelector info="Latimer, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Lauderdale"render={(props) => <ChartSelector info="Lauderdale, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lauderdale"render={(props) => <ChartSelector info="Lauderdale, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Lauderdale"render={(props) => <ChartSelector info="Lauderdale, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Laurel"render={(props) => <ChartSelector info="Laurel, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Laurens"render={(props) => <ChartSelector info="Laurens, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Laurens"render={(props) => <ChartSelector info="Laurens, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lavaca"render={(props) => <ChartSelector info="Lavaca, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Lawrence"render={(props) => <ChartSelector info="Lawrence, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Lawrence"render={(props) => <ChartSelector info="Lawrence, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Lawrence"render={(props) => <ChartSelector info="Lawrence, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Lawrence"render={(props) => <ChartSelector info="Lawrence, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Lawrence"render={(props) => <ChartSelector info="Lawrence, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lawrence"render={(props) => <ChartSelector info="Lawrence, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Lawrence"render={(props) => <ChartSelector info="Lawrence, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lawrence"render={(props) => <ChartSelector info="Lawrence, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Lawrence"render={(props) => <ChartSelector info="Lawrence, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Lawrence"render={(props) => <ChartSelector info="Lawrence, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Le Flore"render={(props) => <ChartSelector info="Le Flore, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Le Sueur"render={(props) => <ChartSelector info="Le Sueur, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Lea"render={(props) => <ChartSelector info="Lea, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Leake"render={(props) => <ChartSelector info="Leake, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Leavenworth"render={(props) => <ChartSelector info="Leavenworth, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lebanon"render={(props) => <ChartSelector info="Lebanon, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Lee"render={(props) => <ChartSelector info="Lee, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Lee"render={(props) => <ChartSelector info="Lee, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Lee"render={(props) => <ChartSelector info="Lee, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lee"render={(props) => <ChartSelector info="Lee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Lee"render={(props) => <ChartSelector info="Lee, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Lee"render={(props) => <ChartSelector info="Lee, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lee"render={(props) => <ChartSelector info="Lee, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Lee"render={(props) => <ChartSelector info="Lee, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Lee"render={(props) => <ChartSelector info="Lee, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lee"render={(props) => <ChartSelector info="Lee, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Lee"render={(props) => <ChartSelector info="Lee, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Leelanau"render={(props) => <ChartSelector info="Leelanau, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Leflore"render={(props) => <ChartSelector info="Leflore, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lehigh"render={(props) => <ChartSelector info="Lehigh, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Lenawee"render={(props) => <ChartSelector info="Lenawee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Lenoir"render={(props) => <ChartSelector info="Lenoir, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Leon"render={(props) => <ChartSelector info="Leon, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Leon"render={(props) => <ChartSelector info="Leon, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Leslie"render={(props) => <ChartSelector info="Leslie, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Letcher"render={(props) => <ChartSelector info="Letcher, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Levy"render={(props) => <ChartSelector info="Levy, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Lewis"render={(props) => <ChartSelector info="Lewis, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Lewis"render={(props) => <ChartSelector info="Lewis, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Lewis"render={(props) => <ChartSelector info="Lewis, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Lewis"render={(props) => <ChartSelector info="Lewis, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Lewis"render={(props) => <ChartSelector info="Lewis, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Lewis"render={(props) => <ChartSelector info="Lewis, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Lewis"render={(props) => <ChartSelector info="Lewis, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Lewis and Clark"render={(props) => <ChartSelector info="Lewis and Clark, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Lexington"render={(props) => <ChartSelector info="Lexington, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Lexington"render={(props) => <ChartSelector info="Lexington, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Liberty"render={(props) => <ChartSelector info="Liberty, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Liberty"render={(props) => <ChartSelector info="Liberty, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Liberty"render={(props) => <ChartSelector info="Liberty, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Liberty"render={(props) => <ChartSelector info="Liberty, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Licking"render={(props) => <ChartSelector info="Licking, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Limestone"render={(props) => <ChartSelector info="Limestone, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Limestone"render={(props) => <ChartSelector info="Limestone, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Lincoln"render={(props) => <ChartSelector info="Lincoln, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Lincoln"render={(props) => <ChartSelector info="Lincoln, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lincoln"render={(props) => <ChartSelector info="Lincoln, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Lincoln"render={(props) => <ChartSelector info="Lincoln, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Lincoln"render={(props) => <ChartSelector info="Lincoln, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Lincoln"render={(props) => <ChartSelector info="Lincoln, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Lincoln"render={(props) => <ChartSelector info="Lincoln, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Lincoln"render={(props) => <ChartSelector info="Lincoln, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lincoln"render={(props) => <ChartSelector info="Lincoln, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Lincoln"render={(props) => <ChartSelector info="Lincoln, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Lincoln"render={(props) => <ChartSelector info="Lincoln, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Lincoln"render={(props) => <ChartSelector info="Lincoln, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Lincoln"render={(props) => <ChartSelector info="Lincoln, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Lincoln"render={(props) => <ChartSelector info="Lincoln, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Lincoln"render={(props) => <ChartSelector info="Lincoln, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Lincoln"render={(props) => <ChartSelector info="Lincoln, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Lincoln"render={(props) => <ChartSelector info="Lincoln, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Lincoln"render={(props) => <ChartSelector info="Lincoln, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Lincoln"render={(props) => <ChartSelector info="Lincoln, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Lincoln"render={(props) => <ChartSelector info="Lincoln, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Lincoln"render={(props) => <ChartSelector info="Lincoln, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Lincoln"render={(props) => <ChartSelector info="Lincoln, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Linn"render={(props) => <ChartSelector info="Linn, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Linn"render={(props) => <ChartSelector info="Linn, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Linn"render={(props) => <ChartSelector info="Linn, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Linn"render={(props) => <ChartSelector info="Linn, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Litchfield"render={(props) => <ChartSelector info="Litchfield, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Live Oak"render={(props) => <ChartSelector info="Live Oak, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Livingston"render={(props) => <ChartSelector info="Livingston, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Livingston"render={(props) => <ChartSelector info="Livingston, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Livingston"render={(props) => <ChartSelector info="Livingston, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Livingston"render={(props) => <ChartSelector info="Livingston, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Livingston"render={(props) => <ChartSelector info="Livingston, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Livingston"render={(props) => <ChartSelector info="Livingston, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Llano"render={(props) => <ChartSelector info="Llano, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Logan"render={(props) => <ChartSelector info="Logan, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Logan"render={(props) => <ChartSelector info="Logan, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Logan"render={(props) => <ChartSelector info="Logan, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Logan"render={(props) => <ChartSelector info="Logan, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Logan"render={(props) => <ChartSelector info="Logan, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Logan"render={(props) => <ChartSelector info="Logan, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Logan"render={(props) => <ChartSelector info="Logan, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Logan"render={(props) => <ChartSelector info="Logan, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Long"render={(props) => <ChartSelector info="Long, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Lonoke"render={(props) => <ChartSelector info="Lonoke, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Lorain"render={(props) => <ChartSelector info="Lorain, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Los Alamos"render={(props) => <ChartSelector info="Los Alamos, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Los Angeles"render={(props) => <ChartSelector info="Los Angeles, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Loudon"render={(props) => <ChartSelector info="Loudon, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Loudoun"render={(props) => <ChartSelector info="Loudoun, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Louisa"render={(props) => <ChartSelector info="Louisa, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Louisa"render={(props) => <ChartSelector info="Louisa, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Love"render={(props) => <ChartSelector info="Love, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Lowndes"render={(props) => <ChartSelector info="Lowndes, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lowndes"render={(props) => <ChartSelector info="Lowndes, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Lowndes"render={(props) => <ChartSelector info="Lowndes, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lubbock"render={(props) => <ChartSelector info="Lubbock, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Lucas"render={(props) => <ChartSelector info="Lucas, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Luce"render={(props) => <ChartSelector info="Luce, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Lumpkin"render={(props) => <ChartSelector info="Lumpkin, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Luna"render={(props) => <ChartSelector info="Luna, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Lunenburg"render={(props) => <ChartSelector info="Lunenburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Luzerne"render={(props) => <ChartSelector info="Luzerne, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Lycoming"render={(props) => <ChartSelector info="Lycoming, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Lyman"render={(props) => <ChartSelector info="Lyman, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Lynchburg"render={(props) => <ChartSelector info="Lynchburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Lynn"render={(props) => <ChartSelector info="Lynn, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Lyon"render={(props) => <ChartSelector info="Lyon, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Lyon"render={(props) => <ChartSelector info="Lyon, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Lyon"render={(props) => <ChartSelector info="Lyon, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Lyon"render={(props) => <ChartSelector info="Lyon, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Lyon"render={(props) => <ChartSelector info="Lyon, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Mackinac"render={(props) => <ChartSelector info="Mackinac, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Macomb"render={(props) => <ChartSelector info="Macomb, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Macon"render={(props) => <ChartSelector info="Macon, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Macon"render={(props) => <ChartSelector info="Macon, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Macon"render={(props) => <ChartSelector info="Macon, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Macon"render={(props) => <ChartSelector info="Macon, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Macon"render={(props) => <ChartSelector info="Macon, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Macon"render={(props) => <ChartSelector info="Macon, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Macoupin"render={(props) => <ChartSelector info="Macoupin, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Madera"render={(props) => <ChartSelector info="Madera, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Madison"render={(props) => <ChartSelector info="Madison, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Madison"render={(props) => <ChartSelector info="Madison, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Madison"render={(props) => <ChartSelector info="Madison, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Madison"render={(props) => <ChartSelector info="Madison, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Madison"render={(props) => <ChartSelector info="Madison, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Madison"render={(props) => <ChartSelector info="Madison, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Madison"render={(props) => <ChartSelector info="Madison, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Madison"render={(props) => <ChartSelector info="Madison, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Madison"render={(props) => <ChartSelector info="Madison, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Madison"render={(props) => <ChartSelector info="Madison, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Madison"render={(props) => <ChartSelector info="Madison, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Madison"render={(props) => <ChartSelector info="Madison, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Madison"render={(props) => <ChartSelector info="Madison, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Madison"render={(props) => <ChartSelector info="Madison, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Madison"render={(props) => <ChartSelector info="Madison, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Madison"render={(props) => <ChartSelector info="Madison, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Madison"render={(props) => <ChartSelector info="Madison, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Madison"render={(props) => <ChartSelector info="Madison, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Madison"render={(props) => <ChartSelector info="Madison, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Mahaska"render={(props) => <ChartSelector info="Mahaska, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Mahnomen"render={(props) => <ChartSelector info="Mahnomen, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Mahoning"render={(props) => <ChartSelector info="Mahoning, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Major"render={(props) => <ChartSelector info="Major, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Malheur"render={(props) => <ChartSelector info="Malheur, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Manassas"render={(props) => <ChartSelector info="Manassas, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Manassas Park"render={(props) => <ChartSelector info="Manassas Park, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Manatee"render={(props) => <ChartSelector info="Manatee, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Manistee"render={(props) => <ChartSelector info="Manistee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Manitowoc"render={(props) => <ChartSelector info="Manitowoc, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Marathon"render={(props) => <ChartSelector info="Marathon, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Marengo"render={(props) => <ChartSelector info="Marengo, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Maricopa"render={(props) => <ChartSelector info="Maricopa, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Maries"render={(props) => <ChartSelector info="Maries, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Marin"render={(props) => <ChartSelector info="Marin, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Marinette"render={(props) => <ChartSelector info="Marinette, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Marion"render={(props) => <ChartSelector info="Marion, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Marion"render={(props) => <ChartSelector info="Marion, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Marion"render={(props) => <ChartSelector info="Marion, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Marion"render={(props) => <ChartSelector info="Marion, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Marion"render={(props) => <ChartSelector info="Marion, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Marion"render={(props) => <ChartSelector info="Marion, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Marion"render={(props) => <ChartSelector info="Marion, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Marion"render={(props) => <ChartSelector info="Marion, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Marion"render={(props) => <ChartSelector info="Marion, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Marion"render={(props) => <ChartSelector info="Marion, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Marion"render={(props) => <ChartSelector info="Marion, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Marion"render={(props) => <ChartSelector info="Marion, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Marion"render={(props) => <ChartSelector info="Marion, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Marion"render={(props) => <ChartSelector info="Marion, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Marion"render={(props) => <ChartSelector info="Marion, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Marion"render={(props) => <ChartSelector info="Marion, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Marion"render={(props) => <ChartSelector info="Marion, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Marlboro"render={(props) => <ChartSelector info="Marlboro, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Marquette"render={(props) => <ChartSelector info="Marquette, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Marquette"render={(props) => <ChartSelector info="Marquette, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Marshall"render={(props) => <ChartSelector info="Marshall, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Marshall"render={(props) => <ChartSelector info="Marshall, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Marshall"render={(props) => <ChartSelector info="Marshall, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Marshall"render={(props) => <ChartSelector info="Marshall, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Marshall"render={(props) => <ChartSelector info="Marshall, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Marshall"render={(props) => <ChartSelector info="Marshall, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Marshall"render={(props) => <ChartSelector info="Marshall, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Marshall"render={(props) => <ChartSelector info="Marshall, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Marshall"render={(props) => <ChartSelector info="Marshall, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Marshall"render={(props) => <ChartSelector info="Marshall, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Marshall"render={(props) => <ChartSelector info="Marshall, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Martin"render={(props) => <ChartSelector info="Martin, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Martin"render={(props) => <ChartSelector info="Martin, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Martin"render={(props) => <ChartSelector info="Martin, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Martin"render={(props) => <ChartSelector info="Martin, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Martin"render={(props) => <ChartSelector info="Martin, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Martin"render={(props) => <ChartSelector info="Martin, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Martinsville"render={(props) => <ChartSelector info="Martinsville, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Mason"render={(props) => <ChartSelector info="Mason, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Mason"render={(props) => <ChartSelector info="Mason, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Mason"render={(props) => <ChartSelector info="Mason, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Mason"render={(props) => <ChartSelector info="Mason, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Mason"render={(props) => <ChartSelector info="Mason, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Mason"render={(props) => <ChartSelector info="Mason, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Massac"render={(props) => <ChartSelector info="Massac, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Matagorda"render={(props) => <ChartSelector info="Matagorda, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Matanuska-Susitna"render={(props) => <ChartSelector info="Matanuska-Susitna, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Mathews"render={(props) => <ChartSelector info="Mathews, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Maui"render={(props) => <ChartSelector info="Maui, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Maury"render={(props) => <ChartSelector info="Maury, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Maverick"render={(props) => <ChartSelector info="Maverick, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Mayes"render={(props) => <ChartSelector info="Mayes, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, McClain"render={(props) => <ChartSelector info="McClain, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, McCook"render={(props) => <ChartSelector info="McCook, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, McCormick"render={(props) => <ChartSelector info="McCormick, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, McCracken"render={(props) => <ChartSelector info="McCracken, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, McCreary"render={(props) => <ChartSelector info="McCreary, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, McCulloch"render={(props) => <ChartSelector info="McCulloch, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, McCurtain"render={(props) => <ChartSelector info="McCurtain, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, McDonald"render={(props) => <ChartSelector info="McDonald, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, McDonough"render={(props) => <ChartSelector info="McDonough, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, McDowell"render={(props) => <ChartSelector info="McDowell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, McDowell"render={(props) => <ChartSelector info="McDowell, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, McDuffie"render={(props) => <ChartSelector info="McDuffie, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, McHenry"render={(props) => <ChartSelector info="McHenry, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, McHenry"render={(props) => <ChartSelector info="McHenry, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, McIntosh"render={(props) => <ChartSelector info="McIntosh, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, McIntosh"render={(props) => <ChartSelector info="McIntosh, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, McIntosh"render={(props) => <ChartSelector info="McIntosh, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, McKean"render={(props) => <ChartSelector info="McKean, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, McKenzie"render={(props) => <ChartSelector info="McKenzie, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, McKinley"render={(props) => <ChartSelector info="McKinley, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, McLean"render={(props) => <ChartSelector info="McLean, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, McLean"render={(props) => <ChartSelector info="McLean, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, McLean"render={(props) => <ChartSelector info="McLean, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, McLennan"render={(props) => <ChartSelector info="McLennan, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, McLeod"render={(props) => <ChartSelector info="McLeod, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, McMinn"render={(props) => <ChartSelector info="McMinn, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, McNairy"render={(props) => <ChartSelector info="McNairy, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, McPherson"render={(props) => <ChartSelector info="McPherson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Meade"render={(props) => <ChartSelector info="Meade, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Meade"render={(props) => <ChartSelector info="Meade, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Meagher"render={(props) => <ChartSelector info="Meagher, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Mecklenburg"render={(props) => <ChartSelector info="Mecklenburg, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Mecklenburg"render={(props) => <ChartSelector info="Mecklenburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Mecosta"render={(props) => <ChartSelector info="Mecosta, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Medina"render={(props) => <ChartSelector info="Medina, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Medina"render={(props) => <ChartSelector info="Medina, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Meeker"render={(props) => <ChartSelector info="Meeker, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Meigs"render={(props) => <ChartSelector info="Meigs, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Meigs"render={(props) => <ChartSelector info="Meigs, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Menard"render={(props) => <ChartSelector info="Menard, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Mendocino"render={(props) => <ChartSelector info="Mendocino, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Menifee"render={(props) => <ChartSelector info="Menifee, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Menominee"render={(props) => <ChartSelector info="Menominee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Menominee"render={(props) => <ChartSelector info="Menominee, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Merced"render={(props) => <ChartSelector info="Merced, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Mercer"render={(props) => <ChartSelector info="Mercer, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Mercer"render={(props) => <ChartSelector info="Mercer, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Mercer"render={(props) => <ChartSelector info="Mercer, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Mercer"render={(props) => <ChartSelector info="Mercer, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Mercer"render={(props) => <ChartSelector info="Mercer, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Mercer"render={(props) => <ChartSelector info="Mercer, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Mercer"render={(props) => <ChartSelector info="Mercer, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Meriwether"render={(props) => <ChartSelector info="Meriwether, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Merrick"render={(props) => <ChartSelector info="Merrick, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Merrimack"render={(props) => <ChartSelector info="Merrimack, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Mesa"render={(props) => <ChartSelector info="Mesa, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Miami"render={(props) => <ChartSelector info="Miami, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Miami"render={(props) => <ChartSelector info="Miami, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Miami"render={(props) => <ChartSelector info="Miami, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Miami-Dade"render={(props) => <ChartSelector info="Miami-Dade, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Michigan Department of Corrections (MDOC)"render={(props) => <ChartSelector info="Michigan Department of Corrections (MDOC), Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Middlesex"render={(props) => <ChartSelector info="Middlesex, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Middlesex"render={(props) => <ChartSelector info="Middlesex, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Middlesex"render={(props) => <ChartSelector info="Middlesex, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Middlesex"render={(props) => <ChartSelector info="Middlesex, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Midland"render={(props) => <ChartSelector info="Midland, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Midland"render={(props) => <ChartSelector info="Midland, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Mifflin"render={(props) => <ChartSelector info="Mifflin, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Milam"render={(props) => <ChartSelector info="Milam, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Mille Lacs"render={(props) => <ChartSelector info="Mille Lacs, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Miller"render={(props) => <ChartSelector info="Miller, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Miller"render={(props) => <ChartSelector info="Miller, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Miller"render={(props) => <ChartSelector info="Miller, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Mills"render={(props) => <ChartSelector info="Mills, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Milwaukee"render={(props) => <ChartSelector info="Milwaukee, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Miner"render={(props) => <ChartSelector info="Miner, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Mineral"render={(props) => <ChartSelector info="Mineral, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Mineral"render={(props) => <ChartSelector info="Mineral, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Mineral"render={(props) => <ChartSelector info="Mineral, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Mingo"render={(props) => <ChartSelector info="Mingo, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Minidoka"render={(props) => <ChartSelector info="Minidoka, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Minnehaha"render={(props) => <ChartSelector info="Minnehaha, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Missaukee"render={(props) => <ChartSelector info="Missaukee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Mississippi"render={(props) => <ChartSelector info="Mississippi, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Mississippi"render={(props) => <ChartSelector info="Mississippi, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Missoula"render={(props) => <ChartSelector info="Missoula, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Mitchell"render={(props) => <ChartSelector info="Mitchell, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Mitchell"render={(props) => <ChartSelector info="Mitchell, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Mitchell"render={(props) => <ChartSelector info="Mitchell, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Mitchell"render={(props) => <ChartSelector info="Mitchell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Mitchell"render={(props) => <ChartSelector info="Mitchell, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Mobile"render={(props) => <ChartSelector info="Mobile, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Moffat"render={(props) => <ChartSelector info="Moffat, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Mohave"render={(props) => <ChartSelector info="Mohave, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Moniteau"render={(props) => <ChartSelector info="Moniteau, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Monmouth"render={(props) => <ChartSelector info="Monmouth, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Mono"render={(props) => <ChartSelector info="Mono, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Monona"render={(props) => <ChartSelector info="Monona, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Monongalia"render={(props) => <ChartSelector info="Monongalia, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Monroe"render={(props) => <ChartSelector info="Monroe, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Monroe"render={(props) => <ChartSelector info="Monroe, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Monroe"render={(props) => <ChartSelector info="Monroe, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Monroe"render={(props) => <ChartSelector info="Monroe, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Monroe"render={(props) => <ChartSelector info="Monroe, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Monroe"render={(props) => <ChartSelector info="Monroe, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Monroe"render={(props) => <ChartSelector info="Monroe, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Monroe"render={(props) => <ChartSelector info="Monroe, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Monroe"render={(props) => <ChartSelector info="Monroe, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Monroe"render={(props) => <ChartSelector info="Monroe, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Monroe"render={(props) => <ChartSelector info="Monroe, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Monroe"render={(props) => <ChartSelector info="Monroe, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Monroe"render={(props) => <ChartSelector info="Monroe, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Monroe"render={(props) => <ChartSelector info="Monroe, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Monroe"render={(props) => <ChartSelector info="Monroe, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Montague"render={(props) => <ChartSelector info="Montague, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Montcalm"render={(props) => <ChartSelector info="Montcalm, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Monterey"render={(props) => <ChartSelector info="Monterey, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Montezuma"render={(props) => <ChartSelector info="Montezuma, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Montgomery"render={(props) => <ChartSelector info="Montgomery, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Montgomery"render={(props) => <ChartSelector info="Montgomery, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Montgomery"render={(props) => <ChartSelector info="Montgomery, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Montgomery"render={(props) => <ChartSelector info="Montgomery, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Montgomery"render={(props) => <ChartSelector info="Montgomery, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Montgomery"render={(props) => <ChartSelector info="Montgomery, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Montgomery"render={(props) => <ChartSelector info="Montgomery, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Montgomery"render={(props) => <ChartSelector info="Montgomery, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Montgomery"render={(props) => <ChartSelector info="Montgomery, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Montgomery"render={(props) => <ChartSelector info="Montgomery, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Montgomery"render={(props) => <ChartSelector info="Montgomery, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Montgomery"render={(props) => <ChartSelector info="Montgomery, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Montgomery"render={(props) => <ChartSelector info="Montgomery, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Montgomery"render={(props) => <ChartSelector info="Montgomery, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Montgomery"render={(props) => <ChartSelector info="Montgomery, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Montgomery"render={(props) => <ChartSelector info="Montgomery, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Montgomery"render={(props) => <ChartSelector info="Montgomery, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Montgomery"render={(props) => <ChartSelector info="Montgomery, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Montmorency"render={(props) => <ChartSelector info="Montmorency, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Montour"render={(props) => <ChartSelector info="Montour, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Montrose"render={(props) => <ChartSelector info="Montrose, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Moody"render={(props) => <ChartSelector info="Moody, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Moore"render={(props) => <ChartSelector info="Moore, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Moore"render={(props) => <ChartSelector info="Moore, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Moore"render={(props) => <ChartSelector info="Moore, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Morehouse"render={(props) => <ChartSelector info="Morehouse, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Morgan"render={(props) => <ChartSelector info="Morgan, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Morgan"render={(props) => <ChartSelector info="Morgan, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Morgan"render={(props) => <ChartSelector info="Morgan, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Morgan"render={(props) => <ChartSelector info="Morgan, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Morgan"render={(props) => <ChartSelector info="Morgan, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Morgan"render={(props) => <ChartSelector info="Morgan, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Morgan"render={(props) => <ChartSelector info="Morgan, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Morgan"render={(props) => <ChartSelector info="Morgan, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Morgan"render={(props) => <ChartSelector info="Morgan, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Morgan"render={(props) => <ChartSelector info="Morgan, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Morrill"render={(props) => <ChartSelector info="Morrill, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Morris"render={(props) => <ChartSelector info="Morris, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Morris"render={(props) => <ChartSelector info="Morris, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Morris"render={(props) => <ChartSelector info="Morris, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Morrison"render={(props) => <ChartSelector info="Morrison, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Morrow"render={(props) => <ChartSelector info="Morrow, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Morrow"render={(props) => <ChartSelector info="Morrow, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Morton"render={(props) => <ChartSelector info="Morton, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Morton"render={(props) => <ChartSelector info="Morton, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Motley"render={(props) => <ChartSelector info="Motley, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Moultrie"render={(props) => <ChartSelector info="Moultrie, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Mountrail"render={(props) => <ChartSelector info="Mountrail, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Mower"render={(props) => <ChartSelector info="Mower, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Muhlenberg"render={(props) => <ChartSelector info="Muhlenberg, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Multnomah"render={(props) => <ChartSelector info="Multnomah, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Murray"render={(props) => <ChartSelector info="Murray, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Murray"render={(props) => <ChartSelector info="Murray, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Murray"render={(props) => <ChartSelector info="Murray, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Muscatine"render={(props) => <ChartSelector info="Muscatine, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Muscogee"render={(props) => <ChartSelector info="Muscogee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Muskegon"render={(props) => <ChartSelector info="Muskegon, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Muskingum"render={(props) => <ChartSelector info="Muskingum, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Muskogee"render={(props) => <ChartSelector info="Muskogee, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Musselshell"render={(props) => <ChartSelector info="Musselshell, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Nacogdoches"render={(props) => <ChartSelector info="Nacogdoches, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Nance"render={(props) => <ChartSelector info="Nance, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Napa"render={(props) => <ChartSelector info="Napa, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Nash"render={(props) => <ChartSelector info="Nash, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Nassau"render={(props) => <ChartSelector info="Nassau, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Nassau"render={(props) => <ChartSelector info="Nassau, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Natchitoches"render={(props) => <ChartSelector info="Natchitoches, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Natrona"render={(props) => <ChartSelector info="Natrona, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Navajo"render={(props) => <ChartSelector info="Navajo, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Navarro"render={(props) => <ChartSelector info="Navarro, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Nelson"render={(props) => <ChartSelector info="Nelson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Nelson"render={(props) => <ChartSelector info="Nelson, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Nelson"render={(props) => <ChartSelector info="Nelson, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Nemaha"render={(props) => <ChartSelector info="Nemaha, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Neosho"render={(props) => <ChartSelector info="Neosho, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Neshoba"render={(props) => <ChartSelector info="Neshoba, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Nevada"render={(props) => <ChartSelector info="Nevada, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Nevada"render={(props) => <ChartSelector info="Nevada, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Delaware, New Castle"render={(props) => <ChartSelector info="New Castle, Delaware" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, New Hanover"render={(props) => <ChartSelector info="New Hanover, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, New Haven"render={(props) => <ChartSelector info="New Haven, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, New Kent"render={(props) => <ChartSelector info="New Kent, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, New London"render={(props) => <ChartSelector info="New London, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, New Madrid"render={(props) => <ChartSelector info="New Madrid, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, New York City"render={(props) => <ChartSelector info="New York City, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Newaygo"render={(props) => <ChartSelector info="Newaygo, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Newberry"render={(props) => <ChartSelector info="Newberry, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Newport"render={(props) => <ChartSelector info="Newport, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Newport News"render={(props) => <ChartSelector info="Newport News, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Newton"render={(props) => <ChartSelector info="Newton, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Newton"render={(props) => <ChartSelector info="Newton, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Newton"render={(props) => <ChartSelector info="Newton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Newton"render={(props) => <ChartSelector info="Newton, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Newton"render={(props) => <ChartSelector info="Newton, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Newton"render={(props) => <ChartSelector info="Newton, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Nez Perce"render={(props) => <ChartSelector info="Nez Perce, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Niagara"render={(props) => <ChartSelector info="Niagara, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Nicholas"render={(props) => <ChartSelector info="Nicholas, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Nicholas"render={(props) => <ChartSelector info="Nicholas, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Nicollet"render={(props) => <ChartSelector info="Nicollet, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Niobrara"render={(props) => <ChartSelector info="Niobrara, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Noble"render={(props) => <ChartSelector info="Noble, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Noble"render={(props) => <ChartSelector info="Noble, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Noble"render={(props) => <ChartSelector info="Noble, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Nobles"render={(props) => <ChartSelector info="Nobles, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Nodaway"render={(props) => <ChartSelector info="Nodaway, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Nome"render={(props) => <ChartSelector info="Nome, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Norfolk"render={(props) => <ChartSelector info="Norfolk, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Norfolk"render={(props) => <ChartSelector info="Norfolk, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Norman"render={(props) => <ChartSelector info="Norman, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Northampton"render={(props) => <ChartSelector info="Northampton, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Northampton"render={(props) => <ChartSelector info="Northampton, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Northampton"render={(props) => <ChartSelector info="Northampton, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Northumberland"render={(props) => <ChartSelector info="Northumberland, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Northumberland"render={(props) => <ChartSelector info="Northumberland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Norton"render={(props) => <ChartSelector info="Norton, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Nottoway"render={(props) => <ChartSelector info="Nottoway, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Nowata"render={(props) => <ChartSelector info="Nowata, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Noxubee"render={(props) => <ChartSelector info="Noxubee, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Nueces"render={(props) => <ChartSelector info="Nueces, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Nye"render={(props) => <ChartSelector info="Nye, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, O'Brien"render={(props) => <ChartSelector info="O'Brien, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Oakland"render={(props) => <ChartSelector info="Oakland, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Obion"render={(props) => <ChartSelector info="Obion, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Ocean"render={(props) => <ChartSelector info="Ocean, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Oceana"render={(props) => <ChartSelector info="Oceana, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Oconee"render={(props) => <ChartSelector info="Oconee, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Oconee"render={(props) => <ChartSelector info="Oconee, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Oconto"render={(props) => <ChartSelector info="Oconto, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Ogemaw"render={(props) => <ChartSelector info="Ogemaw, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Oglala Lakota"render={(props) => <ChartSelector info="Oglala Lakota, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Ogle"render={(props) => <ChartSelector info="Ogle, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Oglethorpe"render={(props) => <ChartSelector info="Oglethorpe, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Ohio"render={(props) => <ChartSelector info="Ohio, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Ohio"render={(props) => <ChartSelector info="Ohio, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Ohio"render={(props) => <ChartSelector info="Ohio, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Okaloosa"render={(props) => <ChartSelector info="Okaloosa, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Okanogan"render={(props) => <ChartSelector info="Okanogan, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Okeechobee"render={(props) => <ChartSelector info="Okeechobee, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Okfuskee"render={(props) => <ChartSelector info="Okfuskee, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Oklahoma"render={(props) => <ChartSelector info="Oklahoma, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Okmulgee"render={(props) => <ChartSelector info="Okmulgee, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Oktibbeha"render={(props) => <ChartSelector info="Oktibbeha, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Oldham"render={(props) => <ChartSelector info="Oldham, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Oldham"render={(props) => <ChartSelector info="Oldham, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Oliver"render={(props) => <ChartSelector info="Oliver, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Olmsted"render={(props) => <ChartSelector info="Olmsted, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Oneida"render={(props) => <ChartSelector info="Oneida, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Oneida"render={(props) => <ChartSelector info="Oneida, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Onondaga"render={(props) => <ChartSelector info="Onondaga, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Onslow"render={(props) => <ChartSelector info="Onslow, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Ontario"render={(props) => <ChartSelector info="Ontario, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Ontonagon"render={(props) => <ChartSelector info="Ontonagon, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Orange"render={(props) => <ChartSelector info="Orange, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Orange"render={(props) => <ChartSelector info="Orange, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Orange"render={(props) => <ChartSelector info="Orange, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Orange"render={(props) => <ChartSelector info="Orange, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Orange"render={(props) => <ChartSelector info="Orange, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Orange"render={(props) => <ChartSelector info="Orange, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Orange"render={(props) => <ChartSelector info="Orange, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Orange"render={(props) => <ChartSelector info="Orange, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Orangeburg"render={(props) => <ChartSelector info="Orangeburg, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Oregon"render={(props) => <ChartSelector info="Oregon, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Orleans"render={(props) => <ChartSelector info="Orleans, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Orleans"render={(props) => <ChartSelector info="Orleans, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Orleans"render={(props) => <ChartSelector info="Orleans, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Osage"render={(props) => <ChartSelector info="Osage, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Osage"render={(props) => <ChartSelector info="Osage, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Osage"render={(props) => <ChartSelector info="Osage, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Osborne"render={(props) => <ChartSelector info="Osborne, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Osceola"render={(props) => <ChartSelector info="Osceola, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Osceola"render={(props) => <ChartSelector info="Osceola, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Osceola"render={(props) => <ChartSelector info="Osceola, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Oscoda"render={(props) => <ChartSelector info="Oscoda, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Oswego"render={(props) => <ChartSelector info="Oswego, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Otero"render={(props) => <ChartSelector info="Otero, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Otero"render={(props) => <ChartSelector info="Otero, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Otoe"render={(props) => <ChartSelector info="Otoe, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Otsego"render={(props) => <ChartSelector info="Otsego, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Otsego"render={(props) => <ChartSelector info="Otsego, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Ottawa"render={(props) => <ChartSelector info="Ottawa, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Ottawa"render={(props) => <ChartSelector info="Ottawa, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Ottawa"render={(props) => <ChartSelector info="Ottawa, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Ottawa"render={(props) => <ChartSelector info="Ottawa, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Otter Tail"render={(props) => <ChartSelector info="Otter Tail, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Ouachita"render={(props) => <ChartSelector info="Ouachita, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Ouachita"render={(props) => <ChartSelector info="Ouachita, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Ouray"render={(props) => <ChartSelector info="Ouray, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Out of CO"render={(props) => <ChartSelector info="Out of CO, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Out of GA"render={(props) => <ChartSelector info="Out of GA, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Out of HI"render={(props) => <ChartSelector info="Out of HI, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Out of MI"render={(props) => <ChartSelector info="Out of MI, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Out of OK"render={(props) => <ChartSelector info="Out of OK, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Out of TN"render={(props) => <ChartSelector info="Out of TN, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Outagamie"render={(props) => <ChartSelector info="Outagamie, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Overton"render={(props) => <ChartSelector info="Overton, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Owen"render={(props) => <ChartSelector info="Owen, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Owsley"render={(props) => <ChartSelector info="Owsley, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Owyhee"render={(props) => <ChartSelector info="Owyhee, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Oxford"render={(props) => <ChartSelector info="Oxford, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Ozaukee"render={(props) => <ChartSelector info="Ozaukee, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Pacific"render={(props) => <ChartSelector info="Pacific, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Page"render={(props) => <ChartSelector info="Page, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Page"render={(props) => <ChartSelector info="Page, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Palm Beach"render={(props) => <ChartSelector info="Palm Beach, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Palo Pinto"render={(props) => <ChartSelector info="Palo Pinto, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Pamlico"render={(props) => <ChartSelector info="Pamlico, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Panola"render={(props) => <ChartSelector info="Panola, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Panola"render={(props) => <ChartSelector info="Panola, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Park"render={(props) => <ChartSelector info="Park, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Park"render={(props) => <ChartSelector info="Park, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Park"render={(props) => <ChartSelector info="Park, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Parke"render={(props) => <ChartSelector info="Parke, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Parker"render={(props) => <ChartSelector info="Parker, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Parmer"render={(props) => <ChartSelector info="Parmer, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Pasco"render={(props) => <ChartSelector info="Pasco, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Pasquotank"render={(props) => <ChartSelector info="Pasquotank, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Passaic"render={(props) => <ChartSelector info="Passaic, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Patrick"render={(props) => <ChartSelector info="Patrick, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Paulding"render={(props) => <ChartSelector info="Paulding, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Paulding"render={(props) => <ChartSelector info="Paulding, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Pawnee"render={(props) => <ChartSelector info="Pawnee, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Payette"render={(props) => <ChartSelector info="Payette, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Payne"render={(props) => <ChartSelector info="Payne, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Peach"render={(props) => <ChartSelector info="Peach, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Pearl River"render={(props) => <ChartSelector info="Pearl River, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Pecos"render={(props) => <ChartSelector info="Pecos, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Pemiscot"render={(props) => <ChartSelector info="Pemiscot, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Pend Oreille"render={(props) => <ChartSelector info="Pend Oreille, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Pender"render={(props) => <ChartSelector info="Pender, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Pendleton"render={(props) => <ChartSelector info="Pendleton, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Pendleton"render={(props) => <ChartSelector info="Pendleton, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Pennington"render={(props) => <ChartSelector info="Pennington, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Pennington"render={(props) => <ChartSelector info="Pennington, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Penobscot"render={(props) => <ChartSelector info="Penobscot, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Peoria"render={(props) => <ChartSelector info="Peoria, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Pepin"render={(props) => <ChartSelector info="Pepin, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Perquimans"render={(props) => <ChartSelector info="Perquimans, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Perry"render={(props) => <ChartSelector info="Perry, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Perry"render={(props) => <ChartSelector info="Perry, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Perry"render={(props) => <ChartSelector info="Perry, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Perry"render={(props) => <ChartSelector info="Perry, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Perry"render={(props) => <ChartSelector info="Perry, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Perry"render={(props) => <ChartSelector info="Perry, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Perry"render={(props) => <ChartSelector info="Perry, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Perry"render={(props) => <ChartSelector info="Perry, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Perry"render={(props) => <ChartSelector info="Perry, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Perry"render={(props) => <ChartSelector info="Perry, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Pershing"render={(props) => <ChartSelector info="Pershing, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Person"render={(props) => <ChartSelector info="Person, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Petersburg"render={(props) => <ChartSelector info="Petersburg, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Petersburg"render={(props) => <ChartSelector info="Petersburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Pettis"render={(props) => <ChartSelector info="Pettis, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Phelps"render={(props) => <ChartSelector info="Phelps, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Phelps"render={(props) => <ChartSelector info="Phelps, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Philadelphia"render={(props) => <ChartSelector info="Philadelphia, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Phillips"render={(props) => <ChartSelector info="Phillips, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Phillips"render={(props) => <ChartSelector info="Phillips, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Phillips"render={(props) => <ChartSelector info="Phillips, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Piatt"render={(props) => <ChartSelector info="Piatt, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Pickaway"render={(props) => <ChartSelector info="Pickaway, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Pickens"render={(props) => <ChartSelector info="Pickens, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Pickens"render={(props) => <ChartSelector info="Pickens, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Pickens"render={(props) => <ChartSelector info="Pickens, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Pierce"render={(props) => <ChartSelector info="Pierce, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Pierce"render={(props) => <ChartSelector info="Pierce, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Pierce"render={(props) => <ChartSelector info="Pierce, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Pierce"render={(props) => <ChartSelector info="Pierce, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Pierce"render={(props) => <ChartSelector info="Pierce, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Pike"render={(props) => <ChartSelector info="Pike, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Pike"render={(props) => <ChartSelector info="Pike, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Pike"render={(props) => <ChartSelector info="Pike, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Pike"render={(props) => <ChartSelector info="Pike, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Pike"render={(props) => <ChartSelector info="Pike, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Pike"render={(props) => <ChartSelector info="Pike, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Pike"render={(props) => <ChartSelector info="Pike, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Pike"render={(props) => <ChartSelector info="Pike, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Pike"render={(props) => <ChartSelector info="Pike, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Pike"render={(props) => <ChartSelector info="Pike, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Pima"render={(props) => <ChartSelector info="Pima, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Pinal"render={(props) => <ChartSelector info="Pinal, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Pine"render={(props) => <ChartSelector info="Pine, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Pinellas"render={(props) => <ChartSelector info="Pinellas, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Pipestone"render={(props) => <ChartSelector info="Pipestone, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Piscataquis"render={(props) => <ChartSelector info="Piscataquis, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Pitkin"render={(props) => <ChartSelector info="Pitkin, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Pitt"render={(props) => <ChartSelector info="Pitt, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Pittsburg"render={(props) => <ChartSelector info="Pittsburg, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Pittsylvania"render={(props) => <ChartSelector info="Pittsylvania, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Placer"render={(props) => <ChartSelector info="Placer, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Plaquemines"render={(props) => <ChartSelector info="Plaquemines, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Platte"render={(props) => <ChartSelector info="Platte, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Platte"render={(props) => <ChartSelector info="Platte, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Platte"render={(props) => <ChartSelector info="Platte, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Pleasants"render={(props) => <ChartSelector info="Pleasants, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Plumas"render={(props) => <ChartSelector info="Plumas, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Plymouth"render={(props) => <ChartSelector info="Plymouth, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Plymouth"render={(props) => <ChartSelector info="Plymouth, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Poinsett"render={(props) => <ChartSelector info="Poinsett, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Pointe Coupee"render={(props) => <ChartSelector info="Pointe Coupee, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Polk"render={(props) => <ChartSelector info="Polk, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Polk"render={(props) => <ChartSelector info="Polk, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Polk"render={(props) => <ChartSelector info="Polk, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Polk"render={(props) => <ChartSelector info="Polk, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Polk"render={(props) => <ChartSelector info="Polk, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Polk"render={(props) => <ChartSelector info="Polk, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Polk"render={(props) => <ChartSelector info="Polk, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Polk"render={(props) => <ChartSelector info="Polk, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Polk"render={(props) => <ChartSelector info="Polk, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Polk"render={(props) => <ChartSelector info="Polk, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Polk"render={(props) => <ChartSelector info="Polk, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Polk"render={(props) => <ChartSelector info="Polk, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Pondera"render={(props) => <ChartSelector info="Pondera, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Pontotoc"render={(props) => <ChartSelector info="Pontotoc, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Pontotoc"render={(props) => <ChartSelector info="Pontotoc, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Pope"render={(props) => <ChartSelector info="Pope, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Poquoson"render={(props) => <ChartSelector info="Poquoson, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Portage"render={(props) => <ChartSelector info="Portage, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Portage"render={(props) => <ChartSelector info="Portage, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Porter"render={(props) => <ChartSelector info="Porter, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Portsmouth"render={(props) => <ChartSelector info="Portsmouth, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Posey"render={(props) => <ChartSelector info="Posey, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Pottawatomie"render={(props) => <ChartSelector info="Pottawatomie, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Pottawatomie"render={(props) => <ChartSelector info="Pottawatomie, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Pottawattamie"render={(props) => <ChartSelector info="Pottawattamie, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Potter"render={(props) => <ChartSelector info="Potter, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Potter"render={(props) => <ChartSelector info="Potter, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Powell"render={(props) => <ChartSelector info="Powell, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Power"render={(props) => <ChartSelector info="Power, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Poweshiek"render={(props) => <ChartSelector info="Poweshiek, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Powhatan"render={(props) => <ChartSelector info="Powhatan, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Prairie"render={(props) => <ChartSelector info="Prairie, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Pratt"render={(props) => <ChartSelector info="Pratt, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Preble"render={(props) => <ChartSelector info="Preble, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Prentiss"render={(props) => <ChartSelector info="Prentiss, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Presque Isle"render={(props) => <ChartSelector info="Presque Isle, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Preston"render={(props) => <ChartSelector info="Preston, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Price"render={(props) => <ChartSelector info="Price, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Prince Edward"render={(props) => <ChartSelector info="Prince Edward, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Prince George"render={(props) => <ChartSelector info="Prince George, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Prince George's"render={(props) => <ChartSelector info="Prince George's, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Prince William"render={(props) => <ChartSelector info="Prince William, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Prince of Wales-Hyder"render={(props) => <ChartSelector info="Prince of Wales-Hyder, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Providence"render={(props) => <ChartSelector info="Providence, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Prowers"render={(props) => <ChartSelector info="Prowers, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Pueblo"render={(props) => <ChartSelector info="Pueblo, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Pulaski"render={(props) => <ChartSelector info="Pulaski, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Pulaski"render={(props) => <ChartSelector info="Pulaski, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Pulaski"render={(props) => <ChartSelector info="Pulaski, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Pulaski"render={(props) => <ChartSelector info="Pulaski, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Pulaski"render={(props) => <ChartSelector info="Pulaski, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Pulaski"render={(props) => <ChartSelector info="Pulaski, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Pulaski"render={(props) => <ChartSelector info="Pulaski, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Putnam"render={(props) => <ChartSelector info="Putnam, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Putnam"render={(props) => <ChartSelector info="Putnam, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Putnam"render={(props) => <ChartSelector info="Putnam, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Putnam"render={(props) => <ChartSelector info="Putnam, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Putnam"render={(props) => <ChartSelector info="Putnam, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Putnam"render={(props) => <ChartSelector info="Putnam, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Putnam"render={(props) => <ChartSelector info="Putnam, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Quay"render={(props) => <ChartSelector info="Quay, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Queen Anne's"render={(props) => <ChartSelector info="Queen Anne's, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Quitman"render={(props) => <ChartSelector info="Quitman, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Quitman"render={(props) => <ChartSelector info="Quitman, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Rabun"render={(props) => <ChartSelector info="Rabun, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Racine"render={(props) => <ChartSelector info="Racine, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Radford"render={(props) => <ChartSelector info="Radford, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Rains"render={(props) => <ChartSelector info="Rains, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Raleigh"render={(props) => <ChartSelector info="Raleigh, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Ralls"render={(props) => <ChartSelector info="Ralls, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Ramsey"render={(props) => <ChartSelector info="Ramsey, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Ramsey"render={(props) => <ChartSelector info="Ramsey, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Randall"render={(props) => <ChartSelector info="Randall, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Randolph"render={(props) => <ChartSelector info="Randolph, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Randolph"render={(props) => <ChartSelector info="Randolph, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Randolph"render={(props) => <ChartSelector info="Randolph, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Randolph"render={(props) => <ChartSelector info="Randolph, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Randolph"render={(props) => <ChartSelector info="Randolph, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Randolph"render={(props) => <ChartSelector info="Randolph, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Randolph"render={(props) => <ChartSelector info="Randolph, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Randolph"render={(props) => <ChartSelector info="Randolph, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Rankin"render={(props) => <ChartSelector info="Rankin, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Rapides"render={(props) => <ChartSelector info="Rapides, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Rappahannock"render={(props) => <ChartSelector info="Rappahannock, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Ravalli"render={(props) => <ChartSelector info="Ravalli, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Ray"render={(props) => <ChartSelector info="Ray, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Red Lake"render={(props) => <ChartSelector info="Red Lake, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Red River"render={(props) => <ChartSelector info="Red River, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Red River"render={(props) => <ChartSelector info="Red River, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Red Willow"render={(props) => <ChartSelector info="Red Willow, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Redwood"render={(props) => <ChartSelector info="Redwood, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Reeves"render={(props) => <ChartSelector info="Reeves, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Reno"render={(props) => <ChartSelector info="Reno, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Rensselaer"render={(props) => <ChartSelector info="Rensselaer, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Renville"render={(props) => <ChartSelector info="Renville, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Republic"render={(props) => <ChartSelector info="Republic, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Reynolds"render={(props) => <ChartSelector info="Reynolds, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Rhea"render={(props) => <ChartSelector info="Rhea, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Rice"render={(props) => <ChartSelector info="Rice, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Rice"render={(props) => <ChartSelector info="Rice, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Richland"render={(props) => <ChartSelector info="Richland, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Richland"render={(props) => <ChartSelector info="Richland, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Richland"render={(props) => <ChartSelector info="Richland, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Richland"render={(props) => <ChartSelector info="Richland, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Richland"render={(props) => <ChartSelector info="Richland, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Richland"render={(props) => <ChartSelector info="Richland, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Richland"render={(props) => <ChartSelector info="Richland, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Richmond"render={(props) => <ChartSelector info="Richmond, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Richmond"render={(props) => <ChartSelector info="Richmond, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Richmond"render={(props) => <ChartSelector info="Richmond, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Richmond City"render={(props) => <ChartSelector info="Richmond City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Riley"render={(props) => <ChartSelector info="Riley, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Rio Arriba"render={(props) => <ChartSelector info="Rio Arriba, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Rio Blanco"render={(props) => <ChartSelector info="Rio Blanco, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Rio Grande"render={(props) => <ChartSelector info="Rio Grande, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Ripley"render={(props) => <ChartSelector info="Ripley, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Ripley"render={(props) => <ChartSelector info="Ripley, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Riverside"render={(props) => <ChartSelector info="Riverside, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Roane"render={(props) => <ChartSelector info="Roane, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Roane"render={(props) => <ChartSelector info="Roane, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Roanoke"render={(props) => <ChartSelector info="Roanoke, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Roanoke City"render={(props) => <ChartSelector info="Roanoke City, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Roberts"render={(props) => <ChartSelector info="Roberts, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Roberts"render={(props) => <ChartSelector info="Roberts, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Robertson"render={(props) => <ChartSelector info="Robertson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Robertson"render={(props) => <ChartSelector info="Robertson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Robeson"render={(props) => <ChartSelector info="Robeson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Rock"render={(props) => <ChartSelector info="Rock, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Rock"render={(props) => <ChartSelector info="Rock, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Rock Island"render={(props) => <ChartSelector info="Rock Island, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Rockbridge"render={(props) => <ChartSelector info="Rockbridge, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Rockcastle"render={(props) => <ChartSelector info="Rockcastle, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Rockdale"render={(props) => <ChartSelector info="Rockdale, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Rockingham"render={(props) => <ChartSelector info="Rockingham, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Rockingham"render={(props) => <ChartSelector info="Rockingham, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Rockingham"render={(props) => <ChartSelector info="Rockingham, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Rockland"render={(props) => <ChartSelector info="Rockland, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Rockwall"render={(props) => <ChartSelector info="Rockwall, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Rogers"render={(props) => <ChartSelector info="Rogers, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Rolette"render={(props) => <ChartSelector info="Rolette, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Rooks"render={(props) => <ChartSelector info="Rooks, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Roosevelt"render={(props) => <ChartSelector info="Roosevelt, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Roosevelt"render={(props) => <ChartSelector info="Roosevelt, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Roscommon"render={(props) => <ChartSelector info="Roscommon, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Roseau"render={(props) => <ChartSelector info="Roseau, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Ross"render={(props) => <ChartSelector info="Ross, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Routt"render={(props) => <ChartSelector info="Routt, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Rowan"render={(props) => <ChartSelector info="Rowan, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Rowan"render={(props) => <ChartSelector info="Rowan, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Rush"render={(props) => <ChartSelector info="Rush, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Rusk"render={(props) => <ChartSelector info="Rusk, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Rusk"render={(props) => <ChartSelector info="Rusk, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Russell"render={(props) => <ChartSelector info="Russell, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Russell"render={(props) => <ChartSelector info="Russell, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Russell"render={(props) => <ChartSelector info="Russell, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Rutherford"render={(props) => <ChartSelector info="Rutherford, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Rutherford"render={(props) => <ChartSelector info="Rutherford, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Rutland"render={(props) => <ChartSelector info="Rutland, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Sabine"render={(props) => <ChartSelector info="Sabine, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Sabine"render={(props) => <ChartSelector info="Sabine, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Sacramento"render={(props) => <ChartSelector info="Sacramento, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Sagadahoc"render={(props) => <ChartSelector info="Sagadahoc, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Saginaw"render={(props) => <ChartSelector info="Saginaw, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Saguache"render={(props) => <ChartSelector info="Saguache, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Salem"render={(props) => <ChartSelector info="Salem, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Salem"render={(props) => <ChartSelector info="Salem, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Saline"render={(props) => <ChartSelector info="Saline, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Saline"render={(props) => <ChartSelector info="Saline, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Saline"render={(props) => <ChartSelector info="Saline, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Saline"render={(props) => <ChartSelector info="Saline, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Saline"render={(props) => <ChartSelector info="Saline, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Salt Lake"render={(props) => <ChartSelector info="Salt Lake, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Saluda"render={(props) => <ChartSelector info="Saluda, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Sampson"render={(props) => <ChartSelector info="Sampson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, San Augustine"render={(props) => <ChartSelector info="San Augustine, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Benito"render={(props) => <ChartSelector info="San Benito, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Bernardino"render={(props) => <ChartSelector info="San Bernardino, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Diego"render={(props) => <ChartSelector info="San Diego, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Francisco"render={(props) => <ChartSelector info="San Francisco, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, San Jacinto"render={(props) => <ChartSelector info="San Jacinto, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Joaquin"render={(props) => <ChartSelector info="San Joaquin, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, San Juan"render={(props) => <ChartSelector info="San Juan, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, San Juan"render={(props) => <ChartSelector info="San Juan, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, San Juan"render={(props) => <ChartSelector info="San Juan, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Luis Obispo"render={(props) => <ChartSelector info="San Luis Obispo, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, San Mateo"render={(props) => <ChartSelector info="San Mateo, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, San Miguel"render={(props) => <ChartSelector info="San Miguel, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, San Miguel"render={(props) => <ChartSelector info="San Miguel, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, San Patricio"render={(props) => <ChartSelector info="San Patricio, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Sanborn"render={(props) => <ChartSelector info="Sanborn, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Sandoval"render={(props) => <ChartSelector info="Sandoval, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Sandusky"render={(props) => <ChartSelector info="Sandusky, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Sangamon"render={(props) => <ChartSelector info="Sangamon, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Sanilac"render={(props) => <ChartSelector info="Sanilac, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Santa Barbara"render={(props) => <ChartSelector info="Santa Barbara, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Santa Clara"render={(props) => <ChartSelector info="Santa Clara, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Santa Cruz"render={(props) => <ChartSelector info="Santa Cruz, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Santa Cruz"render={(props) => <ChartSelector info="Santa Cruz, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Santa Fe"render={(props) => <ChartSelector info="Santa Fe, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Santa Rosa"render={(props) => <ChartSelector info="Santa Rosa, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Sarasota"render={(props) => <ChartSelector info="Sarasota, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Saratoga"render={(props) => <ChartSelector info="Saratoga, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Sargent"render={(props) => <ChartSelector info="Sargent, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Sarpy"render={(props) => <ChartSelector info="Sarpy, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Sauk"render={(props) => <ChartSelector info="Sauk, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Saunders"render={(props) => <ChartSelector info="Saunders, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Sawyer"render={(props) => <ChartSelector info="Sawyer, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Schenectady"render={(props) => <ChartSelector info="Schenectady, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Schley"render={(props) => <ChartSelector info="Schley, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Schoharie"render={(props) => <ChartSelector info="Schoharie, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Schoolcraft"render={(props) => <ChartSelector info="Schoolcraft, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Schuyler"render={(props) => <ChartSelector info="Schuyler, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Schuyler"render={(props) => <ChartSelector info="Schuyler, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Schuylkill"render={(props) => <ChartSelector info="Schuylkill, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Scioto"render={(props) => <ChartSelector info="Scioto, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Scotland"render={(props) => <ChartSelector info="Scotland, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Scotland"render={(props) => <ChartSelector info="Scotland, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Scott"render={(props) => <ChartSelector info="Scott, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Scott"render={(props) => <ChartSelector info="Scott, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Scott"render={(props) => <ChartSelector info="Scott, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Scott"render={(props) => <ChartSelector info="Scott, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Scott"render={(props) => <ChartSelector info="Scott, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Scott"render={(props) => <ChartSelector info="Scott, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Scott"render={(props) => <ChartSelector info="Scott, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Scott"render={(props) => <ChartSelector info="Scott, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Scott"render={(props) => <ChartSelector info="Scott, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Scott"render={(props) => <ChartSelector info="Scott, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Scotts Bluff"render={(props) => <ChartSelector info="Scotts Bluff, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Screven"render={(props) => <ChartSelector info="Screven, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Scurry"render={(props) => <ChartSelector info="Scurry, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Searcy"render={(props) => <ChartSelector info="Searcy, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Sebastian"render={(props) => <ChartSelector info="Sebastian, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Sedgwick"render={(props) => <ChartSelector info="Sedgwick, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Seminole"render={(props) => <ChartSelector info="Seminole, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Seminole"render={(props) => <ChartSelector info="Seminole, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Seminole"render={(props) => <ChartSelector info="Seminole, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Seneca"render={(props) => <ChartSelector info="Seneca, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Seneca"render={(props) => <ChartSelector info="Seneca, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Sequatchie"render={(props) => <ChartSelector info="Sequatchie, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Sequoyah"render={(props) => <ChartSelector info="Sequoyah, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Sevier"render={(props) => <ChartSelector info="Sevier, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Sevier"render={(props) => <ChartSelector info="Sevier, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Seward"render={(props) => <ChartSelector info="Seward, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Seward"render={(props) => <ChartSelector info="Seward, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Sharkey"render={(props) => <ChartSelector info="Sharkey, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Sharp"render={(props) => <ChartSelector info="Sharp, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Shasta"render={(props) => <ChartSelector info="Shasta, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Shawano"render={(props) => <ChartSelector info="Shawano, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Shawnee"render={(props) => <ChartSelector info="Shawnee, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Sheboygan"render={(props) => <ChartSelector info="Sheboygan, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Shelby"render={(props) => <ChartSelector info="Shelby, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Shelby"render={(props) => <ChartSelector info="Shelby, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Shelby"render={(props) => <ChartSelector info="Shelby, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Shelby"render={(props) => <ChartSelector info="Shelby, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Shelby"render={(props) => <ChartSelector info="Shelby, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Shelby"render={(props) => <ChartSelector info="Shelby, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Shelby"render={(props) => <ChartSelector info="Shelby, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Shelby"render={(props) => <ChartSelector info="Shelby, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Shelby"render={(props) => <ChartSelector info="Shelby, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Shenandoah"render={(props) => <ChartSelector info="Shenandoah, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Sherburne"render={(props) => <ChartSelector info="Sherburne, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Sheridan"render={(props) => <ChartSelector info="Sheridan, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Sheridan"render={(props) => <ChartSelector info="Sheridan, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Sherman"render={(props) => <ChartSelector info="Sherman, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Sherman"render={(props) => <ChartSelector info="Sherman, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Sherman"render={(props) => <ChartSelector info="Sherman, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Sherman"render={(props) => <ChartSelector info="Sherman, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Shiawassee"render={(props) => <ChartSelector info="Shiawassee, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Sibley"render={(props) => <ChartSelector info="Sibley, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Silver Bow"render={(props) => <ChartSelector info="Silver Bow, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Simpson"render={(props) => <ChartSelector info="Simpson, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Simpson"render={(props) => <ChartSelector info="Simpson, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Sioux"render={(props) => <ChartSelector info="Sioux, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Sioux"render={(props) => <ChartSelector info="Sioux, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Siskiyou"render={(props) => <ChartSelector info="Siskiyou, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Skagit"render={(props) => <ChartSelector info="Skagit, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Skamania"render={(props) => <ChartSelector info="Skamania, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Slope"render={(props) => <ChartSelector info="Slope, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Smith"render={(props) => <ChartSelector info="Smith, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Smith"render={(props) => <ChartSelector info="Smith, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Smith"render={(props) => <ChartSelector info="Smith, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Smith"render={(props) => <ChartSelector info="Smith, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Smyth"render={(props) => <ChartSelector info="Smyth, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Snohomish"render={(props) => <ChartSelector info="Snohomish, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Snyder"render={(props) => <ChartSelector info="Snyder, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Socorro"render={(props) => <ChartSelector info="Socorro, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Solano"render={(props) => <ChartSelector info="Solano, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Somerset"render={(props) => <ChartSelector info="Somerset, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Somerset"render={(props) => <ChartSelector info="Somerset, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Somerset"render={(props) => <ChartSelector info="Somerset, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Somerset"render={(props) => <ChartSelector info="Somerset, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Sonoma"render={(props) => <ChartSelector info="Sonoma, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Southampton"render={(props) => <ChartSelector info="Southampton, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Southeast Fairbanks"render={(props) => <ChartSelector info="Southeast Fairbanks, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Southeast Utah"render={(props) => <ChartSelector info="Southeast Utah, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Southwest"render={(props) => <ChartSelector info="Southwest, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Southwest Utah"render={(props) => <ChartSelector info="Southwest Utah, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Spalding"render={(props) => <ChartSelector info="Spalding, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Spartanburg"render={(props) => <ChartSelector info="Spartanburg, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Spencer"render={(props) => <ChartSelector info="Spencer, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Spencer"render={(props) => <ChartSelector info="Spencer, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Spink"render={(props) => <ChartSelector info="Spink, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Spokane"render={(props) => <ChartSelector info="Spokane, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Spotsylvania"render={(props) => <ChartSelector info="Spotsylvania, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Bernard"render={(props) => <ChartSelector info="St. Bernard, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Charles"render={(props) => <ChartSelector info="St. Charles, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, St. Charles"render={(props) => <ChartSelector info="St. Charles, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, St. Clair"render={(props) => <ChartSelector info="St. Clair, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, St. Clair"render={(props) => <ChartSelector info="St. Clair, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, St. Clair"render={(props) => <ChartSelector info="St. Clair, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, St. Clair"render={(props) => <ChartSelector info="St. Clair, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, St. Croix"render={(props) => <ChartSelector info="St. Croix, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, St. Francis"render={(props) => <ChartSelector info="St. Francis, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, St. Francois"render={(props) => <ChartSelector info="St. Francois, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Helena"render={(props) => <ChartSelector info="St. Helena, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. James"render={(props) => <ChartSelector info="St. James, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. John the Baptist"render={(props) => <ChartSelector info="St. John the Baptist, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, St. Johns"render={(props) => <ChartSelector info="St. Johns, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, St. Joseph"render={(props) => <ChartSelector info="St. Joseph, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, St. Joseph"render={(props) => <ChartSelector info="St. Joseph, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Landry"render={(props) => <ChartSelector info="St. Landry, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, St. Lawrence"render={(props) => <ChartSelector info="St. Lawrence, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, St. Louis"render={(props) => <ChartSelector info="St. Louis, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, St. Louis"render={(props) => <ChartSelector info="St. Louis, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, St. Louis City"render={(props) => <ChartSelector info="St. Louis City, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, St. Lucie"render={(props) => <ChartSelector info="St. Lucie, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Martin"render={(props) => <ChartSelector info="St. Martin, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Mary"render={(props) => <ChartSelector info="St. Mary, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, St. Mary's"render={(props) => <ChartSelector info="St. Mary's, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, St. Tammany"render={(props) => <ChartSelector info="St. Tammany, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Stafford"render={(props) => <ChartSelector info="Stafford, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Stafford"render={(props) => <ChartSelector info="Stafford, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Stanislaus"render={(props) => <ChartSelector info="Stanislaus, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Stanly"render={(props) => <ChartSelector info="Stanly, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Stanton"render={(props) => <ChartSelector info="Stanton, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Stanton"render={(props) => <ChartSelector info="Stanton, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Stark"render={(props) => <ChartSelector info="Stark, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Stark"render={(props) => <ChartSelector info="Stark, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Stark"render={(props) => <ChartSelector info="Stark, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Starke"render={(props) => <ChartSelector info="Starke, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Starr"render={(props) => <ChartSelector info="Starr, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Staunton"render={(props) => <ChartSelector info="Staunton, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Ste. Genevieve"render={(props) => <ChartSelector info="Ste. Genevieve, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Stearns"render={(props) => <ChartSelector info="Stearns, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Steele"render={(props) => <ChartSelector info="Steele, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Stephens"render={(props) => <ChartSelector info="Stephens, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Stephens"render={(props) => <ChartSelector info="Stephens, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Stephens"render={(props) => <ChartSelector info="Stephens, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Stephenson"render={(props) => <ChartSelector info="Stephenson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Steuben"render={(props) => <ChartSelector info="Steuben, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Steuben"render={(props) => <ChartSelector info="Steuben, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Stevens"render={(props) => <ChartSelector info="Stevens, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Stevens"render={(props) => <ChartSelector info="Stevens, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Stewart"render={(props) => <ChartSelector info="Stewart, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Stewart"render={(props) => <ChartSelector info="Stewart, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Stillwater"render={(props) => <ChartSelector info="Stillwater, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Stoddard"render={(props) => <ChartSelector info="Stoddard, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Stokes"render={(props) => <ChartSelector info="Stokes, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Stone"render={(props) => <ChartSelector info="Stone, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Stone"render={(props) => <ChartSelector info="Stone, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Stone"render={(props) => <ChartSelector info="Stone, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Storey"render={(props) => <ChartSelector info="Storey, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Story"render={(props) => <ChartSelector info="Story, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Strafford"render={(props) => <ChartSelector info="Strafford, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Stutsman"render={(props) => <ChartSelector info="Stutsman, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Sublette"render={(props) => <ChartSelector info="Sublette, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Suffolk"render={(props) => <ChartSelector info="Suffolk, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Suffolk"render={(props) => <ChartSelector info="Suffolk, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Suffolk"render={(props) => <ChartSelector info="Suffolk, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Sullivan"render={(props) => <ChartSelector info="Sullivan, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Sullivan"render={(props) => <ChartSelector info="Sullivan, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Sullivan"render={(props) => <ChartSelector info="Sullivan, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Sullivan"render={(props) => <ChartSelector info="Sullivan, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Sullivan"render={(props) => <ChartSelector info="Sullivan, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Sully"render={(props) => <ChartSelector info="Sully, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Summers"render={(props) => <ChartSelector info="Summers, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Summit"render={(props) => <ChartSelector info="Summit, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Summit"render={(props) => <ChartSelector info="Summit, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Summit"render={(props) => <ChartSelector info="Summit, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Sumner"render={(props) => <ChartSelector info="Sumner, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Sumner"render={(props) => <ChartSelector info="Sumner, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Sumter"render={(props) => <ChartSelector info="Sumter, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Sumter"render={(props) => <ChartSelector info="Sumter, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Sumter"render={(props) => <ChartSelector info="Sumter, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Sumter"render={(props) => <ChartSelector info="Sumter, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Sunflower"render={(props) => <ChartSelector info="Sunflower, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Surry"render={(props) => <ChartSelector info="Surry, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Surry"render={(props) => <ChartSelector info="Surry, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Susquehanna"render={(props) => <ChartSelector info="Susquehanna, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Delaware, Sussex"render={(props) => <ChartSelector info="Sussex, Delaware" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Sussex"render={(props) => <ChartSelector info="Sussex, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Sussex"render={(props) => <ChartSelector info="Sussex, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Sutter"render={(props) => <ChartSelector info="Sutter, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Suwannee"render={(props) => <ChartSelector info="Suwannee, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Sweetwater"render={(props) => <ChartSelector info="Sweetwater, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Swift"render={(props) => <ChartSelector info="Swift, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Swisher"render={(props) => <ChartSelector info="Swisher, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Switzerland"render={(props) => <ChartSelector info="Switzerland, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Talbot"render={(props) => <ChartSelector info="Talbot, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Talbot"render={(props) => <ChartSelector info="Talbot, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Talladega"render={(props) => <ChartSelector info="Talladega, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Tallahatchie"render={(props) => <ChartSelector info="Tallahatchie, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Tallapoosa"render={(props) => <ChartSelector info="Tallapoosa, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Tama"render={(props) => <ChartSelector info="Tama, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Taney"render={(props) => <ChartSelector info="Taney, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Tangipahoa"render={(props) => <ChartSelector info="Tangipahoa, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Taos"render={(props) => <ChartSelector info="Taos, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Tarrant"render={(props) => <ChartSelector info="Tarrant, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Tate"render={(props) => <ChartSelector info="Tate, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Tattnall"render={(props) => <ChartSelector info="Tattnall, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Taylor"render={(props) => <ChartSelector info="Taylor, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Taylor"render={(props) => <ChartSelector info="Taylor, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Taylor"render={(props) => <ChartSelector info="Taylor, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Taylor"render={(props) => <ChartSelector info="Taylor, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Taylor"render={(props) => <ChartSelector info="Taylor, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Taylor"render={(props) => <ChartSelector info="Taylor, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Tazewell"render={(props) => <ChartSelector info="Tazewell, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Tazewell"render={(props) => <ChartSelector info="Tazewell, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Tehama"render={(props) => <ChartSelector info="Tehama, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Telfair"render={(props) => <ChartSelector info="Telfair, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Teller"render={(props) => <ChartSelector info="Teller, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Tensas"render={(props) => <ChartSelector info="Tensas, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Terrebonne"render={(props) => <ChartSelector info="Terrebonne, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Terrell"render={(props) => <ChartSelector info="Terrell, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Terry"render={(props) => <ChartSelector info="Terry, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Teton"render={(props) => <ChartSelector info="Teton, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Teton"render={(props) => <ChartSelector info="Teton, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Texas"render={(props) => <ChartSelector info="Texas, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Texas"render={(props) => <ChartSelector info="Texas, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Thomas"render={(props) => <ChartSelector info="Thomas, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Thurston"render={(props) => <ChartSelector info="Thurston, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Thurston"render={(props) => <ChartSelector info="Thurston, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Tift"render={(props) => <ChartSelector info="Tift, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Tillamook"render={(props) => <ChartSelector info="Tillamook, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Tillman"render={(props) => <ChartSelector info="Tillman, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Tioga"render={(props) => <ChartSelector info="Tioga, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Tioga"render={(props) => <ChartSelector info="Tioga, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Tippah"render={(props) => <ChartSelector info="Tippah, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Tippecanoe"render={(props) => <ChartSelector info="Tippecanoe, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Tipton"render={(props) => <ChartSelector info="Tipton, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Tipton"render={(props) => <ChartSelector info="Tipton, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Tishomingo"render={(props) => <ChartSelector info="Tishomingo, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Titus"render={(props) => <ChartSelector info="Titus, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Todd"render={(props) => <ChartSelector info="Todd, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Todd"render={(props) => <ChartSelector info="Todd, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Todd"render={(props) => <ChartSelector info="Todd, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Tolland"render={(props) => <ChartSelector info="Tolland, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Tom Green"render={(props) => <ChartSelector info="Tom Green, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Tompkins"render={(props) => <ChartSelector info="Tompkins, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Tooele"render={(props) => <ChartSelector info="Tooele, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Toole"render={(props) => <ChartSelector info="Toole, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Toombs"render={(props) => <ChartSelector info="Toombs, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Torrance"render={(props) => <ChartSelector info="Torrance, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Towns"render={(props) => <ChartSelector info="Towns, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Transylvania"render={(props) => <ChartSelector info="Transylvania, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Traverse"render={(props) => <ChartSelector info="Traverse, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Travis"render={(props) => <ChartSelector info="Travis, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Trempealeau"render={(props) => <ChartSelector info="Trempealeau, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Treutlen"render={(props) => <ChartSelector info="Treutlen, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, TriCounty"render={(props) => <ChartSelector info="TriCounty, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Trigg"render={(props) => <ChartSelector info="Trigg, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Trimble"render={(props) => <ChartSelector info="Trimble, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Trinity"render={(props) => <ChartSelector info="Trinity, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Troup"render={(props) => <ChartSelector info="Troup, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Trousdale"render={(props) => <ChartSelector info="Trousdale, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Trumbull"render={(props) => <ChartSelector info="Trumbull, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Tucker"render={(props) => <ChartSelector info="Tucker, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Tulare"render={(props) => <ChartSelector info="Tulare, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Tulsa"render={(props) => <ChartSelector info="Tulsa, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Tunica"render={(props) => <ChartSelector info="Tunica, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Tuolumne"render={(props) => <ChartSelector info="Tuolumne, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Turner"render={(props) => <ChartSelector info="Turner, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Turner"render={(props) => <ChartSelector info="Turner, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Tuscaloosa"render={(props) => <ChartSelector info="Tuscaloosa, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Tuscarawas"render={(props) => <ChartSelector info="Tuscarawas, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Tuscola"render={(props) => <ChartSelector info="Tuscola, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Twiggs"render={(props) => <ChartSelector info="Twiggs, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Twin Falls"render={(props) => <ChartSelector info="Twin Falls, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Tyler"render={(props) => <ChartSelector info="Tyler, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Tyler"render={(props) => <ChartSelector info="Tyler, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Tyrrell"render={(props) => <ChartSelector info="Tyrrell, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Uinta"render={(props) => <ChartSelector info="Uinta, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Ulster"render={(props) => <ChartSelector info="Ulster, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Umatilla"render={(props) => <ChartSelector info="Umatilla, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Unassigned"render={(props) => <ChartSelector info="Unassigned, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Unassigned"render={(props) => <ChartSelector info="Unassigned, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Unassigned"render={(props) => <ChartSelector info="Unassigned, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Unassigned"render={(props) => <ChartSelector info="Unassigned, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Unassigned"render={(props) => <ChartSelector info="Unassigned, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Unassigned"render={(props) => <ChartSelector info="Unassigned, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Unassigned"render={(props) => <ChartSelector info="Unassigned, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Delaware, Unassigned"render={(props) => <ChartSelector info="Unassigned, Delaware" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Unassigned"render={(props) => <ChartSelector info="Unassigned, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Unassigned"render={(props) => <ChartSelector info="Unassigned, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Hawaii, Unassigned"render={(props) => <ChartSelector info="Unassigned, Hawaii" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Unassigned"render={(props) => <ChartSelector info="Unassigned, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Unassigned"render={(props) => <ChartSelector info="Unassigned, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Unassigned"render={(props) => <ChartSelector info="Unassigned, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Unassigned"render={(props) => <ChartSelector info="Unassigned, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Unassigned"render={(props) => <ChartSelector info="Unassigned, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Unassigned"render={(props) => <ChartSelector info="Unassigned, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Unassigned"render={(props) => <ChartSelector info="Unassigned, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Unassigned"render={(props) => <ChartSelector info="Unassigned, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Unassigned"render={(props) => <ChartSelector info="Unassigned, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Unassigned"render={(props) => <ChartSelector info="Unassigned, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Unassigned"render={(props) => <ChartSelector info="Unassigned, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Unassigned"render={(props) => <ChartSelector info="Unassigned, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Unassigned"render={(props) => <ChartSelector info="Unassigned, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Unassigned"render={(props) => <ChartSelector info="Unassigned, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Unassigned"render={(props) => <ChartSelector info="Unassigned, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Unassigned"render={(props) => <ChartSelector info="Unassigned, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Unassigned"render={(props) => <ChartSelector info="Unassigned, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Hampshire, Unassigned"render={(props) => <ChartSelector info="Unassigned, New Hampshire" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Unassigned"render={(props) => <ChartSelector info="Unassigned, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Unassigned"render={(props) => <ChartSelector info="Unassigned, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Unassigned"render={(props) => <ChartSelector info="Unassigned, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Unassigned"render={(props) => <ChartSelector info="Unassigned, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Unassigned"render={(props) => <ChartSelector info="Unassigned, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Unassigned"render={(props) => <ChartSelector info="Unassigned, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Unassigned"render={(props) => <ChartSelector info="Unassigned, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Unassigned"render={(props) => <ChartSelector info="Unassigned, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Unassigned"render={(props) => <ChartSelector info="Unassigned, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Unassigned"render={(props) => <ChartSelector info="Unassigned, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Unassigned"render={(props) => <ChartSelector info="Unassigned, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Unassigned"render={(props) => <ChartSelector info="Unassigned, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Unassigned"render={(props) => <ChartSelector info="Unassigned, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Unassigned"render={(props) => <ChartSelector info="Unassigned, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Unassigned"render={(props) => <ChartSelector info="Unassigned, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Unassigned"render={(props) => <ChartSelector info="Unassigned, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Unassigned"render={(props) => <ChartSelector info="Unassigned, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Unassigned"render={(props) => <ChartSelector info="Unassigned, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Unassigned"render={(props) => <ChartSelector info="Unassigned, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Unassigned"render={(props) => <ChartSelector info="Unassigned, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Unassigned"render={(props) => <ChartSelector info="Unassigned, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Unicoi"render={(props) => <ChartSelector info="Unicoi, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Union"render={(props) => <ChartSelector info="Union, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Union"render={(props) => <ChartSelector info="Union, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Union"render={(props) => <ChartSelector info="Union, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Union"render={(props) => <ChartSelector info="Union, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Union"render={(props) => <ChartSelector info="Union, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Union"render={(props) => <ChartSelector info="Union, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Union"render={(props) => <ChartSelector info="Union, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Union"render={(props) => <ChartSelector info="Union, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Union"render={(props) => <ChartSelector info="Union, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Union"render={(props) => <ChartSelector info="Union, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Union"render={(props) => <ChartSelector info="Union, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Union"render={(props) => <ChartSelector info="Union, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Union"render={(props) => <ChartSelector info="Union, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Union"render={(props) => <ChartSelector info="Union, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Union"render={(props) => <ChartSelector info="Union, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Union"render={(props) => <ChartSelector info="Union, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Union"render={(props) => <ChartSelector info="Union, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Upshur"render={(props) => <ChartSelector info="Upshur, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Upshur"render={(props) => <ChartSelector info="Upshur, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Upson"render={(props) => <ChartSelector info="Upson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Utah"render={(props) => <ChartSelector info="Utah, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Uvalde"render={(props) => <ChartSelector info="Uvalde, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Val Verde"render={(props) => <ChartSelector info="Val Verde, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Mexico, Valencia"render={(props) => <ChartSelector info="Valencia, New Mexico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Valley"render={(props) => <ChartSelector info="Valley, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Van Buren"render={(props) => <ChartSelector info="Van Buren, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Van Buren"render={(props) => <ChartSelector info="Van Buren, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Van Buren"render={(props) => <ChartSelector info="Van Buren, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Van Buren"render={(props) => <ChartSelector info="Van Buren, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Van Wert"render={(props) => <ChartSelector info="Van Wert, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Van Zandt"render={(props) => <ChartSelector info="Van Zandt, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Vance"render={(props) => <ChartSelector info="Vance, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Vanderburgh"render={(props) => <ChartSelector info="Vanderburgh, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Venango"render={(props) => <ChartSelector info="Venango, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Ventura"render={(props) => <ChartSelector info="Ventura, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Vermilion"render={(props) => <ChartSelector info="Vermilion, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Vermilion"render={(props) => <ChartSelector info="Vermilion, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Vermillion"render={(props) => <ChartSelector info="Vermillion, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Vernon"render={(props) => <ChartSelector info="Vernon, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Vernon"render={(props) => <ChartSelector info="Vernon, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Victoria"render={(props) => <ChartSelector info="Victoria, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Vigo"render={(props) => <ChartSelector info="Vigo, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Vilas"render={(props) => <ChartSelector info="Vilas, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Virginia Beach"render={(props) => <ChartSelector info="Virginia Beach, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Volusia"render={(props) => <ChartSelector info="Volusia, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Wabash"render={(props) => <ChartSelector info="Wabash, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Wabash"render={(props) => <ChartSelector info="Wabash, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Wabasha"render={(props) => <ChartSelector info="Wabasha, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Wabaunsee"render={(props) => <ChartSelector info="Wabaunsee, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Wagoner"render={(props) => <ChartSelector info="Wagoner, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Wahkiakum"render={(props) => <ChartSelector info="Wahkiakum, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Wake"render={(props) => <ChartSelector info="Wake, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Wakulla"render={(props) => <ChartSelector info="Wakulla, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Waldo"render={(props) => <ChartSelector info="Waldo, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Walker"render={(props) => <ChartSelector info="Walker, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Walker"render={(props) => <ChartSelector info="Walker, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Walker"render={(props) => <ChartSelector info="Walker, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Walla Walla"render={(props) => <ChartSelector info="Walla Walla, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Waller"render={(props) => <ChartSelector info="Waller, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Wallowa"render={(props) => <ChartSelector info="Wallowa, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Walsh"render={(props) => <ChartSelector info="Walsh, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Walthall"render={(props) => <ChartSelector info="Walthall, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Walton"render={(props) => <ChartSelector info="Walton, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Walton"render={(props) => <ChartSelector info="Walton, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Walworth"render={(props) => <ChartSelector info="Walworth, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Walworth"render={(props) => <ChartSelector info="Walworth, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Wapello"render={(props) => <ChartSelector info="Wapello, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Ward"render={(props) => <ChartSelector info="Ward, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Ware"render={(props) => <ChartSelector info="Ware, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Warren"render={(props) => <ChartSelector info="Warren, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Warren"render={(props) => <ChartSelector info="Warren, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Warren"render={(props) => <ChartSelector info="Warren, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Warren"render={(props) => <ChartSelector info="Warren, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Warren"render={(props) => <ChartSelector info="Warren, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Warren"render={(props) => <ChartSelector info="Warren, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Warren"render={(props) => <ChartSelector info="Warren, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New Jersey, Warren"render={(props) => <ChartSelector info="Warren, New Jersey" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Warren"render={(props) => <ChartSelector info="Warren, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Warren"render={(props) => <ChartSelector info="Warren, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Warren"render={(props) => <ChartSelector info="Warren, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Warren"render={(props) => <ChartSelector info="Warren, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Warren"render={(props) => <ChartSelector info="Warren, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Warren"render={(props) => <ChartSelector info="Warren, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Warrick"render={(props) => <ChartSelector info="Warrick, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Wasatch"render={(props) => <ChartSelector info="Wasatch, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Wasco"render={(props) => <ChartSelector info="Wasco, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Waseca"render={(props) => <ChartSelector info="Waseca, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wyoming, Washakie"render={(props) => <ChartSelector info="Washakie, Wyoming" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Washburn"render={(props) => <ChartSelector info="Washburn, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Washington"render={(props) => <ChartSelector info="Washington, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Washington"render={(props) => <ChartSelector info="Washington, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Washington"render={(props) => <ChartSelector info="Washington, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Florida, Washington"render={(props) => <ChartSelector info="Washington, Florida" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Washington"render={(props) => <ChartSelector info="Washington, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Idaho, Washington"render={(props) => <ChartSelector info="Washington, Idaho" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Washington"render={(props) => <ChartSelector info="Washington, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Washington"render={(props) => <ChartSelector info="Washington, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Washington"render={(props) => <ChartSelector info="Washington, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Washington"render={(props) => <ChartSelector info="Washington, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Washington"render={(props) => <ChartSelector info="Washington, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, Washington"render={(props) => <ChartSelector info="Washington, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Washington"render={(props) => <ChartSelector info="Washington, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Washington"render={(props) => <ChartSelector info="Washington, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Washington"render={(props) => <ChartSelector info="Washington, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Washington"render={(props) => <ChartSelector info="Washington, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Washington"render={(props) => <ChartSelector info="Washington, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Washington"render={(props) => <ChartSelector info="Washington, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Washington"render={(props) => <ChartSelector info="Washington, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Washington"render={(props) => <ChartSelector info="Washington, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Washington"render={(props) => <ChartSelector info="Washington, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Washington"render={(props) => <ChartSelector info="Washington, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Washington"render={(props) => <ChartSelector info="Washington, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Rhode Island, Washington"render={(props) => <ChartSelector info="Washington, Rhode Island" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Washington"render={(props) => <ChartSelector info="Washington, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Washington"render={(props) => <ChartSelector info="Washington, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Washington"render={(props) => <ChartSelector info="Washington, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Washington"render={(props) => <ChartSelector info="Washington, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Washington"render={(props) => <ChartSelector info="Washington, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, Washoe"render={(props) => <ChartSelector info="Washoe, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Washtenaw"render={(props) => <ChartSelector info="Washtenaw, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Watauga"render={(props) => <ChartSelector info="Watauga, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Watonwan"render={(props) => <ChartSelector info="Watonwan, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Waukesha"render={(props) => <ChartSelector info="Waukesha, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Waupaca"render={(props) => <ChartSelector info="Waupaca, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Waushara"render={(props) => <ChartSelector info="Waushara, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Wayne"render={(props) => <ChartSelector info="Wayne, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Wayne"render={(props) => <ChartSelector info="Wayne, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Wayne"render={(props) => <ChartSelector info="Wayne, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Wayne"render={(props) => <ChartSelector info="Wayne, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Wayne"render={(props) => <ChartSelector info="Wayne, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Wayne"render={(props) => <ChartSelector info="Wayne, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Wayne"render={(props) => <ChartSelector info="Wayne, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Wayne"render={(props) => <ChartSelector info="Wayne, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Wayne"render={(props) => <ChartSelector info="Wayne, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Wayne"render={(props) => <ChartSelector info="Wayne, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Wayne"render={(props) => <ChartSelector info="Wayne, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Wayne"render={(props) => <ChartSelector info="Wayne, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Wayne"render={(props) => <ChartSelector info="Wayne, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Waynesboro"render={(props) => <ChartSelector info="Waynesboro, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Weakley"render={(props) => <ChartSelector info="Weakley, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Webb"render={(props) => <ChartSelector info="Webb, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Utah, Weber-Morgan"render={(props) => <ChartSelector info="Weber-Morgan, Utah" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Webster"render={(props) => <ChartSelector info="Webster, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Webster"render={(props) => <ChartSelector info="Webster, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Webster"render={(props) => <ChartSelector info="Webster, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Webster"render={(props) => <ChartSelector info="Webster, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Webster"render={(props) => <ChartSelector info="Webster, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Webster"render={(props) => <ChartSelector info="Webster, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, Webster"render={(props) => <ChartSelector info="Webster, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Weld"render={(props) => <ChartSelector info="Weld, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Wells"render={(props) => <ChartSelector info="Wells, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Wells"render={(props) => <ChartSelector info="Wells, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, West Baton Rouge"render={(props) => <ChartSelector info="West Baton Rouge, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, West Carroll"render={(props) => <ChartSelector info="West Carroll, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, West Feliciana"render={(props) => <ChartSelector info="West Feliciana, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Westchester"render={(props) => <ChartSelector info="Westchester, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Westmoreland"render={(props) => <ChartSelector info="Westmoreland, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Westmoreland"render={(props) => <ChartSelector info="Westmoreland, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Wetzel"render={(props) => <ChartSelector info="Wetzel, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Michigan, Wexford"render={(props) => <ChartSelector info="Wexford, Michigan" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wharton"render={(props) => <ChartSelector info="Wharton, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Whatcom"render={(props) => <ChartSelector info="Whatcom, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Wheeler"render={(props) => <ChartSelector info="Wheeler, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wheeler"render={(props) => <ChartSelector info="Wheeler, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, White"render={(props) => <ChartSelector info="White, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, White"render={(props) => <ChartSelector info="White, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, White"render={(props) => <ChartSelector info="White, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, White"render={(props) => <ChartSelector info="White, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, White"render={(props) => <ChartSelector info="White, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nevada, White Pine"render={(props) => <ChartSelector info="White Pine, Nevada" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Whiteside"render={(props) => <ChartSelector info="Whiteside, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Whitfield"render={(props) => <ChartSelector info="Whitfield, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Indiana, Whitley"render={(props) => <ChartSelector info="Whitley, Indiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Whitley"render={(props) => <ChartSelector info="Whitley, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Whitman"render={(props) => <ChartSelector info="Whitman, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wichita"render={(props) => <ChartSelector info="Wichita, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Wicomico"render={(props) => <ChartSelector info="Wicomico, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wilbarger"render={(props) => <ChartSelector info="Wilbarger, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Wilcox"render={(props) => <ChartSelector info="Wilcox, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Wilcox"render={(props) => <ChartSelector info="Wilcox, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Wilkes"render={(props) => <ChartSelector info="Wilkes, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Wilkes"render={(props) => <ChartSelector info="Wilkes, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Wilkin"render={(props) => <ChartSelector info="Wilkin, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Wilkinson"render={(props) => <ChartSelector info="Wilkinson, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Wilkinson"render={(props) => <ChartSelector info="Wilkinson, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Will"render={(props) => <ChartSelector info="Will, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Willacy"render={(props) => <ChartSelector info="Willacy, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Dakota, Williams"render={(props) => <ChartSelector info="Williams, North Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Williams"render={(props) => <ChartSelector info="Williams, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, Williamsburg"render={(props) => <ChartSelector info="Williamsburg, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Williamsburg"render={(props) => <ChartSelector info="Williamsburg, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Williamson"render={(props) => <ChartSelector info="Williamson, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Williamson"render={(props) => <ChartSelector info="Williamson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Williamson"render={(props) => <ChartSelector info="Williamson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Wilson"render={(props) => <ChartSelector info="Wilson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Wilson"render={(props) => <ChartSelector info="Wilson, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Tennessee, Wilson"render={(props) => <ChartSelector info="Wilson, Tennessee" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wilson"render={(props) => <ChartSelector info="Wilson, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Winchester"render={(props) => <ChartSelector info="Winchester, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Connecticut, Windham"render={(props) => <ChartSelector info="Windham, Connecticut" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Windham"render={(props) => <ChartSelector info="Windham, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Vermont, Windsor"render={(props) => <ChartSelector info="Windsor, Vermont" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Winkler"render={(props) => <ChartSelector info="Winkler, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Louisiana, Winn"render={(props) => <ChartSelector info="Winn, Louisiana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Winnebago"render={(props) => <ChartSelector info="Winnebago, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Winnebago"render={(props) => <ChartSelector info="Winnebago, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Winnebago"render={(props) => <ChartSelector info="Winnebago, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Winneshiek"render={(props) => <ChartSelector info="Winneshiek, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Winona"render={(props) => <ChartSelector info="Winona, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alabama, Winston"render={(props) => <ChartSelector info="Winston, Alabama" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Winston"render={(props) => <ChartSelector info="Winston, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Wirt"render={(props) => <ChartSelector info="Wirt, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wise"render={(props) => <ChartSelector info="Wise, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Wise"render={(props) => <ChartSelector info="Wise, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Wood"render={(props) => <ChartSelector info="Wood, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Wood"render={(props) => <ChartSelector info="Wood, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Wood"render={(props) => <ChartSelector info="Wood, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Wisconsin, Wood"render={(props) => <ChartSelector info="Wood, Wisconsin" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Woodbury"render={(props) => <ChartSelector info="Woodbury, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Illinois, Woodford"render={(props) => <ChartSelector info="Woodford, Illinois" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kentucky, Woodford"render={(props) => <ChartSelector info="Woodford, Kentucky" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Woodruff"render={(props) => <ChartSelector info="Woodruff, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Woods"render={(props) => <ChartSelector info="Woods, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Woodson"render={(props) => <ChartSelector info="Woodson, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oklahoma, Woodward"render={(props) => <ChartSelector info="Woodward, Oklahoma" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maryland, Worcester"render={(props) => <ChartSelector info="Worcester, Maryland" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Massachusetts, Worcester"render={(props) => <ChartSelector info="Worcester, Massachusetts" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Georgia, Worth"render={(props) => <ChartSelector info="Worth, Georgia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Worth"render={(props) => <ChartSelector info="Worth, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Worth"render={(props) => <ChartSelector info="Worth, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Iowa, Wright"render={(props) => <ChartSelector info="Wright, Iowa" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Wright"render={(props) => <ChartSelector info="Wright, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Missouri, Wright"render={(props) => <ChartSelector info="Wright, Missouri" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Ohio, Wyandot"render={(props) => <ChartSelector info="Wyandot, Ohio" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Kansas, Wyandotte"render={(props) => <ChartSelector info="Wyandotte, Kansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Wyoming"render={(props) => <ChartSelector info="Wyoming, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, Wyoming"render={(props) => <ChartSelector info="Wyoming, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/West Virginia, Wyoming"render={(props) => <ChartSelector info="Wyoming, West Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, Wythe"render={(props) => <ChartSelector info="Wythe, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/North Carolina, Yadkin"render={(props) => <ChartSelector info="Yadkin, North Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Washington, Yakima"render={(props) => <ChartSelector info="Yakima, Washington" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Yalobusha"render={(props) => <ChartSelector info="Yalobusha, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Oregon, Yamhill"render={(props) => <ChartSelector info="Yamhill, Oregon" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Dakota, Yankton"render={(props) => <ChartSelector info="Yankton, South Dakota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/New York, Yates"render={(props) => <ChartSelector info="Yates, New York" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Yavapai"render={(props) => <ChartSelector info="Yavapai, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Mississippi, Yazoo"render={(props) => <ChartSelector info="Yazoo, Mississippi" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arkansas, Yell"render={(props) => <ChartSelector info="Yell, Arkansas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Minnesota, Yellow Medicine"render={(props) => <ChartSelector info="Yellow Medicine, Minnesota" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Montana, Yellowstone"render={(props) => <ChartSelector info="Yellowstone, Montana" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Yoakum"render={(props) => <ChartSelector info="Yoakum, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Yolo"render={(props) => <ChartSelector info="Yolo, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Maine, York"render={(props) => <ChartSelector info="York, Maine" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Nebraska, York"render={(props) => <ChartSelector info="York, Nebraska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Pennsylvania, York"render={(props) => <ChartSelector info="York, Pennsylvania" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/South Carolina, York"render={(props) => <ChartSelector info="York, South Carolina" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virginia, York"render={(props) => <ChartSelector info="York, Virginia" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Young"render={(props) => <ChartSelector info="Young, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/California, Yuba"render={(props) => <ChartSelector info="Yuba, California" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Alaska, Yukon-Koyukuk"render={(props) => <ChartSelector info="Yukon-Koyukuk, Alaska" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Arizona, Yuma"render={(props) => <ChartSelector info="Yuma, Arizona" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Colorado, Yuma"render={(props) => <ChartSelector info="Yuma, Colorado" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Zapata"render={(props) => <ChartSelector info="Zapata, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Texas, Zavala"render={(props) => <ChartSelector info="Zavala, Texas" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Diamond Princess, "render={(props) => <ChartSelector info="Diamond Princess" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Grand Princess, "render={(props) => <ChartSelector info="Grand Princess" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Guam, "render={(props) => <ChartSelector info="Guam" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Northern Mariana Islands, "render={(props) => <ChartSelector info="Northern Mariana Islands" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Puerto Rico, "render={(props) => <ChartSelector info="Puerto Rico" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Recovered, "render={(props) => <ChartSelector info="Recovered" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>
									<Route path="/Virgin Islands, "render={(props) => <ChartSelector info="Virgin Islands" chart_type={this.state.selected_chart_type} isAuthed={true} />}/>

														
								</div>     							 
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			  <br></br>

			</div>
    );
  }
}


export default No_Navbar_Template;


/*
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="overview">
										<ListGroup.Item> <NavLink exact to="/All_States">All States (combined)</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/New_York">New York</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/California">California</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/Washington">Washington</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/New_Jersey">New Jersey</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/other_states">View Other States</NavLink></ListGroup.Item>

									</ListGroup>
								</ListGroup>
								*/


//<Route path="/other_states"render={(props) => <ColumnChartStates info="coming soon" isAuthed={true} />}/>


/*

								<form onSubmit={this.testChange}>
									<input type="hidden" name="country" id="countryId" value="US"/>
									<select name="state" class="states order-alpha" id="stateId" >
										<option value="">Select State</option>
									</select>
									<select name="city" class="cities order-alpha" id="cityId">
										<option value="">Select City</option>
									</select>
									<input type="submit"/>

								</form>

*/


// working drpdwn

/* 
		<input type="hidden" name="country" id="countryId" value="US"/>
									<select name="state" class="states order-alpha" id="stateId" >
										<option value="">Select State</option>
									</select>
									<select name="city" class="cities order-alpha" id="cityId">
										<option value="">Select City</option>
									</select>



<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script src="//geodata.solutions/includes/statecity.js"></script>
*/