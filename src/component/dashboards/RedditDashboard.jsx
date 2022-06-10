import React, { PureComponent } from 'react';
import ReactWordcloud from 'react-wordcloud';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';
import TwoColTable from '../tables/two-col-table';
import OneColTable from '../tables/one-col-table';
import { Card, Statistic } from 'antd';
import { ArrowDownOutlined, RedditCircleFilled } from '@ant-design/icons';


import RedditSentimentScores from '../../data/reddit-sentiment-scores.json';
import RedditWordcloud from '../../data/reddit-wordcloud.json'

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
            data_array: RedditSentimentScores
        })
    }

    render() {
        return (
        <div>
            <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                <div className="col-12">
                    <Card
                        title="Reddit Weekly Mentions"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >   
                        <div className='d-flex align-items-center'>
                            <RedditCircleFilled style={{ fontSize: '46px', color: 'rgb(255, 69, 0)', paddingRight: '8px'}}/>
                            <Statistic
                                value={910}
                                valueStyle={{
                                    color: 'rgb(255, 69, 0)',
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
                        title="Reddit Sentiment Score"
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
                        <Line type="monotone" dataKey="sentiment_score" stroke="rgb(255, 69, 0)" activeDot={{ r: 8 }} dot={false} strokeWidth={4}/>
                        </LineChart>
                    </Card>
                </div>
            </div>

            <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                <div className="col-12">

                    <Card
                        title="Reddit Wordcloud"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >
                        <ReactWordcloud 
                            words={RedditWordcloud}
                            options={{fontSizes: [15, 80], colors: ['#FD7F20', '#FC2E20', '#010100', 'rgb(255, 69, 0)', 'rgb(255, 255, 255)']}}
                        />
                    </Card>
                </div>
            </div>

                <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                    <div className="col-4">
                        <OneColTable title={'Top Competitors'}></OneColTable>
                    </div>
                    <div className="col-4">
                        <OneColTable title={'Top Subreddits'}></OneColTable>
                    </div>
                    <div className="col-4">
                        <OneColTable title={'Top Job Titles'}></OneColTable>
                    </div>
                </div>

                <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                    <div className="col-6">
                        <TwoColTable title={'Job Titles with Positive Sentiment '}></TwoColTable>
                    </div>
                    <div className="col-6">
                        <TwoColTable title={'Job Titles with Negative Sentiment '}></TwoColTable>
                    </div>
                </div>    
        </div> 
        );
    }
}

export default RedditDashboard;