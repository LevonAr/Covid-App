import React, { PureComponent } from 'react';
import ReactWordcloud from 'react-wordcloud';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';
import TwoColTable from '../tables/two-col-table';
import OneColTable from '../tables/one-col-table';
import { Card, Statistic } from 'antd';
import { RedditCircleFilled } from '@ant-design/icons';


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

    renderColorfulLegendText(value, entry) {
      const { color } = entry;
      
      return <span style={{ color }}>{value}</span>;
    }

    render() {
        const topCompetitorsData = [
            {
              key: '1',
              company: 'LinkedIn',
            },
            {
              key: '2',
              company: 'Blind',
            },
            {
              key: '3',
              company: 'Monster',
            },
            {
              key: '4',
              company: 'levels.fyi',
            },
            {
              key: '5',
              company: 'ZipRecruiter',
            },
        ];
        const topSubRedditsData = [
            {
              key: '1',
              company: 'cscareerquestions',
            },
            {
              key: '2',
              company: 'jobs',
            },
            {
              key: '3',
              company: 'antiwork',
            },
            {
              key: '4',
              company: 'personalfinance',
            },
            {
              key: '5',
              company: 'askreddit',
            },
        ];
        const topJobTitlesData = [
            {
              key: '1',
              company: 'CEO',
            },
            {
              key: '2',
              company: 'Recruiter',
            },
            {
              key: '3',
              company: 'VP',
            },
            {
              key: '4',
              company: 'Software Engineer',
            },
            {
              key: '5',
              company: 'Director',
            },
        ];
        const jobTitlesPositiveSentimentData = [
            {
              key: '1',
              company: 'Data Scientist',
              sentiment: 3.47
            },
            {
              key: '2',
              company: 'Business Analyst',
              sentiment: 3.46
            },
            {
              key: '3',
              company: 'Recruiter',
              sentiment: 3.31
            },
            {
              key: '4',
              company: 'Data Analyst',
              sentiment: 3.17
            },
            {
              key: '5',
              company: 'Mechanical Engineer',
              sentiment: 3.09
            },
        ];
        const jobTitlesNegativeSentimentData = [
            {
              key: '1',
              company: 'CEO',
              sentiment: 1.78
            },
            {
              key: '2',
              company: 'VP',
              sentiment: 1.93
            },
            {
              key: '3',
              company: 'CTO',
              sentiment: 1.88
            },
            {
              key: '4',
              company: 'Partner',
              sentiment: 1.69
            },
            {
              key: '5',
              company: 'English Teacher',
              sentiment: 0.08
            },
        ];
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

            <div className="row p-3 mb-3 py-sm d-none d-md-flex justify-content-center mb-0">
                <div className="col-12">
                    <Card
                        title="Reddit Sentiment Score"
                        style={{
                        backgroundColor: 'rgb(39,39,39)',
                        }}
                    >
                        <LineChart
                          width={1000}
                          height={400}
                          data={this.state.data_array}
                          margin={{
                              top: 5, right: 60, left: 20, bottom: 5,
                          }}
                        >
                        <XAxis dataKey="week" minTickGap={20} stroke="white"/>
                        <YAxis domain={[2, 3]} stroke="white"/>
                        <Tooltip />
                        <Legend height={30} verticalAlign="top" formatter={this.renderColorfulLegendText}/>
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
                        <OneColTable title={'Top Competitors'} data={topCompetitorsData}></OneColTable>
                    </div>
                    <div className="col-4">
                        <OneColTable title={'Top SubReddits'} data={topSubRedditsData}></OneColTable>
                    </div>
                    <div className="col-4">
                        <OneColTable title={'Top Job Titles'} data={topJobTitlesData}></OneColTable>
                    </div>
                </div>

                <div className="row p-3 mb-3 py-sm d-none d-md-flex mb-0">
                    <div className="col-6">
                        <TwoColTable title={'Job Titles with Positive Sentiment '} data={jobTitlesPositiveSentimentData}></TwoColTable>
                    </div>
                    <div className="col-6">
                        <TwoColTable title={'Job Titles with Negative Sentiment '} data={jobTitlesNegativeSentimentData}></TwoColTable>
                    </div>
                </div>    
        </div> 
        );
    }
}

export default RedditDashboard;