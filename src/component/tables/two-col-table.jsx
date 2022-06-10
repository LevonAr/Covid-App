import React from 'react';
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';
import { Card } from 'antd';
import './table-style.css';


const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sentiment Score',
    dataIndex: 'sentiment',
    key: 'sentiment',
  }
];
const data = [
  {
    key: '1',
    company: 'John Brown',
    sentiment: 32
  },
  {
    key: '2',
    company: 'Jim Green',
    sentiment: 42
  },
  {
    key: '3',
    company: 'Joe Black',
    sentiment: 32
  },
  {
    key: '3',
    company: 'Joe Black',
    sentiment: 32
  },
  {
    key: '3',
    company: 'Joe Black',
    sentiment: 32
  },
];

const TwoColTable = (props) => {
  const { title } = props;
  return(
    <>
      <Card
        title={title}
        style={{
          backgroundColor: 'rgb(39,39,39)',
        }}
      >
        <Table columns={columns} dataSource={data} pagination={{position: ['none', 'none']}}  />
      </Card>
     </>

  )
};

export default TwoColTable;