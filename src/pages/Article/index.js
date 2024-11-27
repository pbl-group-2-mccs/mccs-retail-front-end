import { Card, Table, Tag, Space} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { getSalesOrdersListAPI } from '@/apis/sales-orders'

const Article = () => {

    const columns = [
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
          },
          {
            title: 'Customer Id',
            dataIndex: 'customerId',
            key: 'customerId',
          },
          {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Customer Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Customer Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Customer Address Line 1',
            dataIndex: 'addressLine1',
            key: 'addressLine1',
          },
          {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
          },
          {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
    ]

    const data = [
        {
            orderId: '1',
            customer: {
                customerId:44,
                name:"Timothy Berger",
                email:"nicholaswall@example.com",
                phone:"240232312",
                addressLine1:"9281",
                addressLine2:null,
                city:"Washington",
                state:"Virginia",
                zipCode:"22042",
                country:"USA",
            },
            orderDate:"2024-11-26",
            totalAmount:488.39,
            status:"Cancelled"
          },
    ]

    const flatData = data.map((item) => ({
        ...item,
        customerId: item.customer?.customerId,
        name: item.customer?.name,
        email: item.customer?.email,
        phone: item.customer?.phone,
        addressLine1: item.customer?.addressLine1
      }));
      
    console.log(data)
    // const [list, setList] = useState([])
    // useEffect(() => {
    //     async function getList() {
    //         const res = await getSalesOrdersListAPI()
    //         setList(res.data.results)
    //     }
    //     getList()
    // }, [])
    return (
        <div>
            <Card title={'dataset'}>
                <Table rowKey={"id"} columns={columns} dataSource={flatData} />
            </Card>
        </div>
    )
}

export default Article