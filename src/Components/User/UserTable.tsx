import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxChecked from 'src/Components/Checkbox/CheckboxChecked';
import CheckBoxUnChecked from 'src/Components/Checkbox/CheckboxUnChecked';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface DataType {
    createdAt: string;
    credit: number;
    email: string;
    expiryAt: string;
    nickname: string;
    plan: string;
    promotions: Object;
    uid: string;
    vendor: string
}

interface PropsType {
    userList : any;
    selectedUids: Array<string>;
    setSelectedUids: any;
}

const UserTable = ({ userList, selectedUids, setSelectedUids }: PropsType) => {

    const columns: ColumnsType<DataType> = [
        {
            title: <div>
                <Checkbox
                    checked={userList.users.every(r => selectedUids.includes(r.uid))}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.checked) {
                            setSelectedUids(Array.from(new Set([...selectedUids, ...userList.users.map(d => d.uid)])))  //수정할것
                        } else {
                            setSelectedUids(selectedUids.filter(d => userList.users.includes(d)))
                        }
                    }}
                    icon={<CheckBoxUnChecked />}
                    checkedIcon={<CheckBoxChecked />}
                />
            </div>,
            dataIndex: 'checkbox',
            key: 'checkbox',
            width: 60,
            render: (_, record, index) => <div>
                <Checkbox
                    checked={selectedUids.includes(record.uid)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.checked) {
                            setSelectedUids(Array.from(new Set([...selectedUids, record.uid])))
                        } else {
                            setSelectedUids(selectedUids.filter(d => d !== record.uid))
                        }
                    }}
                    icon={<CheckBoxUnChecked />}
                    checkedIcon={<CheckBoxChecked />}
                />
            </div>,
        },
        {
            title: '아이디',
            dataIndex: 'nickname',
            key: 'nickname',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '이메일',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '플랜',
            dataIndex: 'plan',
            key: 'plan',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '벤더',
            dataIndex: 'vendor',
            key: 'vendor',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '생성일',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <div>{moment(text).utc(true).format('YYYY.MM.DD')}</div>,
        },
    
        {
            title: '만료일',
            dataIndex: 'expiryAt',
            key: 'expiryAt',
            render: (text) => <div>{moment(text).utc(true).format('YYYY.MM.DD')}</div>,
        },
        {
            title: 'uid',
            dataIndex: 'uid',
            key: 'uid',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '크래딧',
            dataIndex: 'credit',
            key: 'credit',
            render: (text) => <div>{text}</div>,
        },
    
    ];

    return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={userList.users}
            scroll={{ y: 330}}
        />
    )
}

export default UserTable;