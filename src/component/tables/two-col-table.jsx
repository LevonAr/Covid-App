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

const TwoColTable = (props) => {
  const { title, data } = props;
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