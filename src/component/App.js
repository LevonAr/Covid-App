
import React, { Component } from 'react';

import './header.css'
import './template.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { TwitterCircleFilled, RedditCircleFilled } from '@ant-design/icons';

import {
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";

import { Button, Dropdown, Space, Layout, Menu } from 'antd';

import RedditDashboard from './dashboards/RedditDashboard';
import TwitterDashboard from './dashboards/TwitterDashboard';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			selected_source: "reddit"
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('event', event);
		this.setState({
			selected_source: event.key
		})
		console.log('this.state', this.state);
	}
  
  	render() {  
		console.log('this.state', this.state);
		const menu = (
			<Menu
				onClick={this.handleClick}
			  items={[
				{
				  key: 'reddit',
				  label: (
					<NavLink
						onClick={this.handleClick}
						to="/reddit"
					>
						Reddit
					</NavLink>
				  ),
				  value: 'reddit'
				},
				{
				  key: 'twitter',
				  label: (
					<NavLink 
						onClick={this.handleClick}
						to="/twitter"
					>
						Twitter
					</NavLink>
				  ),
				},
			  ]}
			/>
		  );
		return (
			<Layout className='mainContainter'>
				<BrowserRouter>
					<>
						<Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'rgb(39,39,39)', borderBottom: `2px solid ${this.state.selected_source === "reddit" ? "rgba(255, 69, 0, 1)" : "rgba(29, 161, 242, 1)"}`}} className="header d-flex justify-content-center align-items-center">
							<Dropdown overlay={menu} placement="bottom">
								<Button
									className='d-flex align-items-center'
									size="large"
									style={{ 
										background: this.state.selected_source === "reddit" ? "rgba(255, 69, 0, .9)" : "rgba(29, 161, 242, .9)",
										border: "2px solid black",
										padding: 20,
										color:"black",
										borderRadius: 5
									}}
									icon={this.state.selected_source === "reddit" ? <RedditCircleFilled style={{ fontSize: 32 }}/> : <TwitterCircleFilled style={{ fontSize: 32 }}/>}
								>Social Media Source</Button>
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
										backgroundColor: 'rgba(0, 0, 0, .95)'
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


export default App;
