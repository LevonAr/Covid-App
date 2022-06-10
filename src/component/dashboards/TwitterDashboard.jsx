import React, { PureComponent } from 'react';
import ReactWordcloud from 'react-wordcloud';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';
import TwoColTable from '../tables/two-col-table';
import OneColTable from '../tables/one-col-table';
import { Card, Statistic } from 'antd';
import { TwitterCircleFilled } from '@ant-design/icons';

import TwitterSentimentScores from '../../data/twitter-sentiment-scores.json';
import TwitterWordcloud from '../../data/twitter-wordcloud.json'

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

class RedditDashboard extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
        data_array: []
        }
    }

    componentDidMount() {
        //scroll page up after clicking on state
        window.scrollTo(0, 0)
        this.setState({
            data_array: TwitterSentimentScores
        })
    }

    render() {
        return (
        <div>
            <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                <div className="col-12">
                    <Card
                        title="Twitter Weekly Mentions"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >   
                        <div className='d-flex align-items-center'>
                            <TwitterCircleFilled style={{ fontSize: '46px', color: 'rgb(29, 161, 242)', paddingRight: '8px'}}/>
                            <Statistic
                                value={1780}
                                valueStyle={{
                                    color: 'rgb(29, 161, 242)',
                                    fontSize: '46px'
                                }}
                            />                        
                        </div>
                    </Card>
                </div>
            </div>
    
            {/* Mentions this week on {this.props.info}: {this.state.total} */}

            <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                <div className="col-12">
                    <Card
                        title="Twitter Sentiment Score"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >
                        <LineChart
                        width={1070}
                        height={400}
                        data={this.state.data_array}
                        margin={{
                            top: 5, right: 60, left: 20, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" minTickGap={20} stroke="white"/>
                        <YAxis domain={[2, 3]} stroke="white"/>
                        <Tooltip />
                        <Legend height={30} verticalAlign="top"/>
                        <Line type="monotone" dataKey="sentiment_score" stroke="rgb(29, 161, 242)" activeDot={{ r: 8 }} strokeWidth={4}/>
                        </LineChart>
                    </Card>
                </div>
            </div>

            <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                <div className="col-12">

                    <Card
                        title="Twitter Wordcloud"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >
                        <ReactWordcloud 
                            words={TwitterWordcloud}
                            options={{fontSizes: [15, 80], colors: ['#68BBE3', '#0E86D4', '#055C9D', '#003060', 'rgb(8, 160, 233)', 'rgb(0, 132, 180)', 'rgb(255, 255, 255)']}}
                        />
                    </Card>
                </div>
            </div>
        </div> 
        );
    }
}

export default RedditDashboard;