import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { withSession } from '../../hoc/withSession';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import styles from './LayoutComponent.module.css';
import { s3url } from 'src/lib/constant';
import { string } from 'prop-types';

const { Header, Sider, Content } = Layout;


interface LayoutComponentProps {
  children: React.ReactElement,
  currentPath: string,
  userToken: object
}

function LayoutComponent({ children, currentPath, userToken }: LayoutComponentProps) {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <img
            className="logo"
            src={s3url + "kinepsLogo.svg"}
            alt=""
            style={{ width: '114px', height: '26px', marginTop:'20px', marginBottom:'40px' }}
          />
          <Menu
            theme='light'
            mode="inline"
            style={{
              fontFamily: 'Pretendard-Regular'
            }}
            defaultSelectedKeys={['dashboard']}
            selectedKeys={[
              currentPath === "/dashboard" ? "dashboard" :
                currentPath === "/user" ? "user" :
                  currentPath === "/notice" ? "notice"
                    : "dashboard"
            ]}
          >
            <Menu.Item key="dashboard">
              <Link to="/dashboard">메인화면</Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to="/user">이용고객현황</Link>
            </Menu.Item>
            <Menu.Item key="notice">
              <Link to="/notice">공지사항&FAQ</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              margin: '16px 16px 20px 16px',
              padding: '0 10px 0 10px',
              background: '#F5F5F5',
              fontFamily: 'Pretendard-Regular'
            }}
          >
            <div
              className={styles.layoutHeader}
            >
              <div className={styles.headerTitle}>
                {
                  currentPath === "/dashboard" ?
                    <>
                      <img src={s3url + "dashboard_dashboard.svg"} style={{ width: '24px', height: '21px', marginRight: '20px', marginTop:'20px' }} alt="" />
                      <div>메인화면</div>
                    </>
                    : currentPath === "/user" ?
                      <>
                        <img src={s3url + "dashboard_user.svg"} style={{ width: '19px', height: '21px', marginRight: '20px', marginTop:'20px' }} alt="" /> 
                        <div>이용고객 현황</div>
                      </>
                      : currentPath === "/notice" ?
                        <>
                          <img src={s3url + "dashboard_notice.svg"} style={{ width: '21px', height: '21px', marginRight: '20px', marginTop:'20px' }} alt="" /> 
                          <div>공지사항 및 FAQ</div>
                        </>
                        :
                        "메인화면"
                }
              </div>
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
              padding: 10,
              minHeight: 280,
              background: '#F5F5F5',
              fontFamily: 'Pretendard-Regular'
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