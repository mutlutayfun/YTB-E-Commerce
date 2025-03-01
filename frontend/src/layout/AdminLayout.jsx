import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  GiftOutlined,
  DashboardOutlined,
  UserOutlined,
  BarcodeOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const items = [
  {
    key: '1',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Category',
  },
  {
    key: '3',
    icon: <GiftOutlined />,
    label: 'Product',
  },
  {
    key: '4',
    icon: <UserOutlined />,
    label: 'User',
  },
  {
    key: '5',
    icon: <BarcodeOutlined />,
    label: 'Coupon',
  },
];
 
function AdminLayout() {
 
  return (
    <div className="admin-layout">
      <Layout style={{minHeight : "100vh"}}>
      <Sider width="20%" style={{ color : "white"}}>
      <div
      style={{
        width: 256,
      }}
    >
      <Menu
        mode="vertical"
        theme="dark"
        items={items}
      />
    </div>
      </Sider>
      <Layout>
        <Header style={{ color : "white"}}>Header</Header>
        <Content style={{}}>Content</Content>
        <Footer style={{}}>Footer</Footer>
      </Layout>
    </Layout>
  </div>
  )
}
 
export default AdminLayout