import { Layout, Menu, Popconfirm, Button, notification } from "antd";
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
    SmileOutlined,
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
        label: 'Sales-order',
        key:'/salesorder',
        icon:<DiffOutlined />
    },
    {
        label:'Inventory',
        key:'/inventory',
        icon:<EditOutlined/>
    },
]

const GeekLayout = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
          message: 'Introduction of MCCS system',
          description:
            "Sorry, I don't know either",
          icon: (
            <SmileOutlined
              style={{
                color: '#108ee9',
              }}
            />
          ),
        });
      };
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
                <span className="introduction">
                    {contextHolder}
                    <Button type="primary" onClick={openNotification}>
                        Introduction
                    </Button>
                </ span>
                    <span className="user-name">ccls</span>
                    <span className="user-logout">
                        <Popconfirm title="Are you sure you want to logout?" okText="Logout" cancelText="Cancel">
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