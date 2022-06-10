
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
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import { Button, Dropdown, Space, Layout, Menu } from 'antd';


import ChartSelectorUSA from './column charts/Column Chart USA.js';
import RedditDashboard from './dashboards/RedditDashboard';
import TwitterDashboard from './dashboards/TwitterDashboard';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;


const menu = (
	<Menu
	  items={[
		{
		  key: '1',
		  label: (
			<NavLink
				to="/reddit"
			>
				Reddit
			</NavLink>
		  ),
		},
		{
		  key: '2',
		  label: (
			<NavLink
				to="/twitter"
			>
				Twitter
			</NavLink>
		  ),
		},
	  ]}
	/>
  );
class No_Navbar_Template extends Component {
	constructor(props){
		super(props)
		this.state = {
			selected_chart_type: "NewCasesChart"
		}
		this.handleClick = this.handleClick.bind(this);
		this.myfunction = this.myfunction.bind(this);

	}

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

			<Layout className='mainContainter'>
				<BrowserRouter>
					<>
						<Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'rgb(39,39,39)', borderBottom: '2px solid rgb(255, 69, 0)'}} className="header d-flex justify-content-center align-items-center">
							<Dropdown overlay={menu} placement="bottom">
								<Button
									style={{ background: "rgba(255, 69, 0, .7)", borderColor: "white", color:"white" }} 
								>Social Media Company</Button>
							</Dropdown>
						</Header>
						<Layout>
							<Layout>
								<Content
									className="site-layout-background"
									style={{
										padding: 48,
										marginTop: 36,
										minHeight: 280,
										backgroundColor: 'rgb(0, 0, 0)'
									}}
								>
									<Row>
										<Col>
											<Container>						
												<div className="content">
													<Route exact path="/" render={(props) => <RedditDashboard isAuthed={true} />}/>
													<Route path="/reddit"render={(props) => <RedditDashboard isAuthed={true} />}/>
													<Route path="/twitter"render={(props) => <TwitterDashboard isAuthed={true} />}/>					
												</div>     							 
											</Container>
										</Col>					
									</Row>	
								</Content>
							</Layout>
						</Layout>	
					</>		
				</BrowserRouter>
			</Layout>
		);
  	}
}


export default No_Navbar_Template;
