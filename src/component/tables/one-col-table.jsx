import React from 'react';
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';
import { Card } from 'antd';

const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    render: (text) => <a>{text}</a>,
  }
];

const OneColTable = (props) => {
  const { title, data } = props;
  return(
    <>
      <Card
        title={title}
        style={{
          backgroundColor: 'rgb(39,39,39)',
          borderColor: 'rgb(200,200,200)',
          color: 'red'
        }}
      >
        <Table columns={columns} dataSource={data} pagination={{position: ['none', 'none']}}  />
      </Card>
     </>

  )
};

export default OneColTable;