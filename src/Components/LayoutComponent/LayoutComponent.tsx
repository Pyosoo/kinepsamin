import React, { ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { withSession } from '../../hoc/withSession';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import styles from './LayoutComponent.module.css';


const { Header, Sider, Content } = Layout;


interface LayoutComponentProps {
  children: ReactNode,
  currentPath: string,
  userToken: object
}

function LayoutComponent({ children }: LayoutComponentProps) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className="logo"
          // src="https://cdn.latestk.com/static/logos/kineps_logo.svg"
          // alt=""
          />
          <Menu
            theme='light'
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item>
              <Link to="/dashboard">메인화면</Link>
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
          <Header 
            style={{
              margin: '16px 16px 10px 16px',
              padding: '0 24px 0 24px',
              background: '#F5F5F5',
            }}
          >
            <div
              className={styles.layoutHeader}
            >
              <div 
              className={styles.logout}
              onClick={e => {
                Cookies.remove('isLogin');
                window.location.reload()
              }}>
              로그아웃
            </div>
            </div>
            
          </Header>
          <Content
            style={{
              margin: '0px 16px 10px 16px',
              padding: 24,
              minHeight: 280,
              background: '#F5F5F5',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default withSession(LayoutComponent);