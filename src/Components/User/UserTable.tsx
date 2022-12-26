import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';

const dateOptions = {
    year: '2-digit',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: "America/New_York",
    hour12: false
}

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

const columns: ColumnsType<DataType> = [
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
        title: 'expiryAt',
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
        title: 'credit',
        dataIndex: 'credit',
        key: 'credit',
        render: (text) => <div>{text}</div>,
    },

];

const UserTable = (props: any) => {
    return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={props.userList.users}
            scroll={{ y: 330}}
        />
    )
}

export default UserTable;