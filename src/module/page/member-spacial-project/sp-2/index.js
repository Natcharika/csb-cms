import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table } from 'antd';
import api from "../../../utils/form/api";
import '../../../theme/css/table.css'

export default function Sp2() {
  const [data, setData] = useState();
  const fetchData = async () => {
    api
      .getStudent()
      .then((res) => {
        let filterData = res.data.body.filter((item) => item.projectStatus[0] == 1 && item.projectStatus[1] == 1);
        console.log(filterData);
        setData(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //   },
  //   {
  //     key: '4',
  //     name: 'Jim Red',
  //     age: 32,
  //     address: 'London No. 2 Lake Park',
  //   },

  // ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const components = {
    header: {
      cell: (props) => (
        <th style={{ backgroundColor: '#F77100', color: '#FFFFFF', borderBottom: '2px solid #FFFFFF' }}>
          {props.children}
        </th>
      ),
    },
  };

  return (
    <div>
      {/* <h1>{JSON.stringify(data)}</h1> */}
      <Table className="custom-table" columns={columns} dataSource={data} onChange={onChange} components={components}  />;
    </div>
  );
}
