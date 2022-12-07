import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

	const navigate = useNavigate();

    useEffect(() => {
        if(Cookies.get('isLogin') === "true"){
            navigate('/main')
        }
    }, [navigate])

    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setId(value)
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value)
    };

    const loginFlow = () => {
        if(id === "snstkfka02"){
		    navigate('/main', { replace: true});
            Cookies.set('isLogin', 'true')
        } else alert("로그인 실패")
    }

    return (
        <div>
            <input
                value={id}
                onChange={onChangeId}
            />
            <input
                value={password}
                onChange={onChangePassword}
            />
            <button onClick={loginFlow}>로그인</button>
        </div>
    )
}

export default Login;