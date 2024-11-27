import { Layout, Menu, Popconfirm } from "antd";
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Sider } = Layout

const items = [
    {
        label: 'Dashboard',
        key:'/',
        icon:<HomeOutlined />
    },
    {
        label: 'Sales-orders',
        key:'/article',
        icon:<DiffOutlined />
    },
    {
        label:'Inventory',
        key:'/publish',
        icon:<EditOutlined/>
    },
]

const GeekLayout = () => {
    const navigate = useNavigate()
    const onMenuClick = (route) =>{
        const path = route.key
        navigate(path)
    }
    const location = useLocation()
    const selectedKey = location.pathname
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">ccls</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出?" okText="退出" cancelText="取消">
                            <LogoutOutlined />Logout
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        onClick={ onMenuClick }
                        selectedKeys={ selectedKey }
                        items={items}
                        style={{ height: '100%', borderRight: 0}}></Menu>
                </Sider>
                <Layout className="layout-content" style={{padding : 20}}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
         
    )
}
export default GeekLayout