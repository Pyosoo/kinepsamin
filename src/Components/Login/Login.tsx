import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification } from 'antd';
import {
    LoadingOutlined,
    CloseCircleFilled
} from '@ant-design/icons';
import {
    loginFlow
} from 'src/apis/apis';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const navigate = useNavigate();

    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onFinish = async (values: any) => {
        try {
            setIsLoading(true);
            loginFlow(id, password)
                .then(r => {
                    console.log(!r.success)
                    if(!r.success){
                        toast.error("로그인 오류", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                    setIsLoading(false)
                })
        } catch( err: any ){
            
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



    return (
        <>
            <ToastContainer 
                transition={Bounce}
            />
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