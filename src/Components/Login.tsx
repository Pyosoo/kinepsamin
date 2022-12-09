import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification } from 'antd';
import {
    LoadingOutlined,
    CloseCircleFilled
} from '@ant-design/icons';


function Login() {
    const navigate = useNavigate();

    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onFinish = (values: any) => {
        setIsLoading(true);
        if (id === "snstkfka02") {
            setIsLoading(false);
            openNotification('로그인에 성공했습니다.', 'success')
            Cookies.set('isLogin', 'true')
            navigate('/main', { replace: true });

        } else {
            setIsLoading(false);
            openNotification('로그인 정보가 올바르지 않습니다.', 'error')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setId(value)
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value)
    };

    const loginFlow = () => {
    }



    const openNotification = (message: string, type:string) => {
        notification.open({
            duration: type === "success" ? 3 : 5,
            description: (
                <div style={{color:'white', fontWeight:'800'}}>{message}</div>
            ),
            style: {
                backgroundColor: type === "error" ? 'rgba(255, 71, 126, 1)' : type === "success" ? 'rgba(99, 102, 241, 1)' : 'rgba(9, 198, 171, 1)',
                color: 'white'
            },
            closeIcon: (
                <CloseCircleFilled style={{color:'white'}} />
            )
        });
    };


    return (
        <>
            <div
                style={{
                    width: '400px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%)`,
                }}
            >
                <img
                    src="https://cdn.latestk.com/static/logos/kineps_logo.svg"
                    style={{
                        width: '130px',
                        height: '50px',
                        marginLeft: '160px',
                        display: 'block',
                        marginBottom: '30px'
                    }}
                    alt=""
                />
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="ID"
                        name="ID"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            style={{ width: '200px' }}
                            value={id}
                            onChange={onChangeId}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            style={{ width: '200px' }}
                            value={password}
                            onChange={onChangePassword}
                        />
                    </Form.Item>

                    {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                    {
                        isLoading ?
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" style={{ width: '200px' }}>
                                    <LoadingOutlined />
                                </Button>
                            </Form.Item>
                            :
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" style={{ width: '200px' }}>
                                    로그인
                                </Button>
                            </Form.Item>
                    }

                </Form>
            </div>
        </>
    );
};

export default Login;