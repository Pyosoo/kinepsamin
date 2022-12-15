import React from 'react';
import { withSession } from 'src/hoc/withSession';
import styles from './Dashboard.module.css';
import Paper from '@mui/material/Paper';
import { PieChart } from 'react-minimal-pie-chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
    s3url
} from 'src/lib/constant';


function Dashboard(props:any) {

    const data = [
        {
            name: '1',
            money: 4000,
        },
        {
            name: '2',
            money: 7000,
        },
        {
            name: '3',
            money: 2000,
        },
        {
            name: '4',
            money: 8000,
        },
        {
            name: '5',
            money: 2000,
        },
    ];



    return (
        <div className={styles.root}>
            <div className={styles.line1}>
                <Paper
                    className={styles.line1_box}
                    elevation={0}
                >
                    <div className={styles.line1_left}>
                        <img src={s3url+"humanIcon.svg"} alt="" style={{width:'12px', height:'15px'}}/>
                        <div className={styles.title}>
                            현재 보유한 회원 수
                        </div>
                        <div className={styles.count}>
                            1,120명
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <PieChart
                            data={[
                                {
                                    value: 20,
                                    color: 'rgba(99, 102, 241, 1)',
                                    name: "name1"
                                }
                            ]}
                            label={({ dataEntry }) => dataEntry.value}
                            labelPosition={0}
                            labelStyle={{
                                fontSize: "22px",
                                fill: "#333333",
                                fontWeight: '800'
                            }}
                            reveal={20}
                            lineWidth={18}
                            background="rgba(240, 240, 240, 1)"
                            lengthAngle={360}
                            startAngle={300}
                            rounded
                            animate
                        />
                    </div>
                </Paper>
                <Paper
                    elevation={0}
                    className={styles.line1_box}
                >
                    <div className={styles.line1_left}>
                        <img src={s3url+"humanPlusIcon.svg"} alt="" style={{width:'15px', height:'15px'}}/>
                        <div className={styles.title}>
                            현재 보유한 회원 수
                        </div>
                        <div className={styles.count}>
                            1,120명
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <PieChart
                            data={[
                                {
                                    value: 60,
                                    color: 'rgba(9, 198, 171, 1)',
                                    name: "name1"
                                }
                            ]}
                            label={({ dataEntry }) => dataEntry.value}
                            labelPosition={0}
                            labelStyle={{
                                fontSize: "22px",
                                fill: "#333333",
                                fontWeight: '800'
                            }}
                            reveal={60}
                            lineWidth={18}
                            background="rgba(240, 240, 240, 1)"
                            lengthAngle={360}
                            startAngle={300}
                            rounded
                            animate
                        />
                    </div>
                </Paper>
                <Paper
                    elevation={0}
                    className={styles.line1_box}
                >
                    <div className={styles.line1_left}>
                        <img src={s3url+"humanminusIcon.svg"} alt="" style={{width:'15px', height:'15px'}}/>
                        <div className={styles.title}>
                            현재 보유한 회원 수
                        </div>
                        <div className={styles.count}>
                            1,120명
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <PieChart
                            data={[
                                {
                                    value: 40,
                                    color: 'rgba(255, 71, 126, 1)',
                                    name: "name1"
                                }
                            ]}
                            label={({ dataEntry }) => dataEntry.value}
                            labelPosition={0}
                            labelStyle={{
                                fontSize: "22px",
                                fill: "#333333",
                                fontWeight: '800'
                            }}
                            reveal={40}
                            lineWidth={18}
                            background="rgba(240, 240, 240, 1)"
                            lengthAngle={360}
                            startAngle={300}
                            rounded
                            animate
                        />
                    </div>
                </Paper>
            </div>


            <div className={styles.line2}>
                <Paper
                    className={styles.line2_box1}
                    elevation={0}
                >
                    <div className={styles.line2_title}>
                        <img src={s3url + "dashboard_purpleGraph.svg"} style={{ width:'24px', height:"24px",  margin:'5px 10px 0 10px' }} alt="" />
                        매출현황 그래프
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height="100%" >
                            <AreaChart
                                width={500}
                                height={200}
                                data={data}
                                style={{ marginTop: '50px' }}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="money" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="money" stroke="rgba(255, 207, 104, 1)" fill="#FFFAF0" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Paper>
                <Paper
                    className={styles.line2_box2}
                    elevation={0}
                >
                    <div className={styles.line2_title}>
                        <img src={s3url + "dashboard_cash.svg"} style={{ width:'24px', height:"24px",  margin:'5px 10px 0 10px' }} alt="" />
                        이번달 정산 예정금액
                    </div>
                </Paper>
            </div>


            <div className={styles.line3}>
                <Paper
                    className={styles.line3_box1}
                    elevation={0}
                >
                    <div className={styles.line2_title}>
                        <img src={s3url + "dashboard_dollar.svg"} style={{ width:'24px', height:"24px",  margin:'5px 10px 0 10px' }} alt="" />
                        이번달 정산 내역
                    </div>
                </Paper>
                <Paper
                    className={styles.line3_box2}
                    elevation={0}
                >
                    <div className={styles.line2_title}>
                        <img src={s3url + "dashboard_yellowSpeak.svg"} style={{ width:'24px', height:"24px",  margin:'5px 10px 0 10px' }} alt="" />
                        벤더 프로필
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default withSession(Dashboard);