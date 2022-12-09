import React, { ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { withSession } from '../hoc/withSession';
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;


interface LayoutComponentProps {
  children: ReactNode
}

function LayoutComponent({ children } : LayoutComponentProps){
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return(
        <>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div
                className="logo"
                // src="https://cdn.latestk.com/static/logos/kineps_logo.svg"
                // alt=""
            />
            <Menu
              theme='dark'
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item>
                <Link to="/">메인화면</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/user">이용고객현황</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/notice">공지사항&FAQ</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer, margin:'15px' }}>
             
            </Header>
            <Content
              style={{
                margin: '0px 16px 10px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              { children } 
            </Content>
          </Layout>
        </Layout>
      </>
    )
}

export default withSession(LayoutComponent);