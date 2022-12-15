import React, { useState } from 'react';
import { withSession } from 'src/hoc/withSession';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxChecked from 'src/Components/Checkbox/CheckboxChecked';
import CheckBoxUnChecked from 'src/Components/Checkbox/CheckboxUnChecked';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function User(props: any) {
    
    const [priceOption, setPriceOption] = useState<Array<string>>([]);
    const [funcOption, setFuncOption] = useState<Array<string>>([]);
    const [planOption, setPlanOption] = useState<Array<string>>([]);

    return (
        <>
            <div className={styles.root}>
                <Paper
                    elevation={0}
                    className={styles.line1}
                >
                    <div className={styles.title}>유저검색</div>
                    <div className={styles.line1_container}>
                        <div className={styles.line1_component1}>
                            <div className={styles.line}>
                                <div className={styles.subtitle}>이용 현황</div>
                                <div className={styles.check_line}>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={priceOption.includes('free')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPriceOption(Array.from(new Set([...priceOption, 'free'])))
                                                } else {
                                                    setPriceOption([...priceOption.filter(d => d !== "free")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>무료</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={priceOption.includes('paied')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPriceOption(Array.from(new Set([...priceOption, 'paied'])))
                                                } else {
                                                    setPriceOption([...priceOption.filter(d => d !== "paied")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>유료</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={priceOption.includes('expired')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPriceOption(Array.from(new Set([...priceOption, 'expired'])))
                                                } else {
                                                    setPriceOption([...priceOption.filter(d => d !== "expired")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>만료</div>
                                    </div>
                                </div>
                            </div>





                            <div className={styles.line}>
                                <div className={styles.subtitle}>사용 현황</div>
                                <div className={styles.check_line}>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={funcOption.includes('product')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setFuncOption(Array.from(new Set([...funcOption, 'product'])))
                                                } else {
                                                    setFuncOption([...funcOption.filter(d => d !== "product")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>상품관리</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={funcOption.includes('order')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setFuncOption(Array.from(new Set([...funcOption, 'order'])))
                                                } else {
                                                    setFuncOption([...funcOption.filter(d => d !== "order")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>주문관리</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={funcOption.includes('keyword')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setFuncOption(Array.from(new Set([...funcOption, 'keyword'])))
                                                } else {
                                                    setFuncOption([...funcOption.filter(d => d !== "keyword")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>키워드관리</div>
                                    </div>
                                </div>
                            </div>





                            <div className={styles.line}>
                            <div className={styles.subtitle}>사용 플랜</div>
                                <div className={styles.check_line}>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={planOption.includes('guest')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPlanOption(Array.from(new Set([...planOption, 'guest'])))
                                                } else {
                                                    setPlanOption([...planOption.filter(d => d !== "guest")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>게스트</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={planOption.includes('basic')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPlanOption(Array.from(new Set([...planOption, 'basic'])))
                                                } else {
                                                    setPlanOption([...planOption.filter(d => d !== "basic")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>베이직</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={planOption.includes('premium')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPlanOption(Array.from(new Set([...planOption, 'premium'])))
                                                } else {
                                                    setPlanOption([...planOption.filter(d => d !== "premium")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>프리미엄</div>
                                    </div>
                                    <div className={styles.checkBox}>
                                        <Checkbox
                                            {...label}
                                            checked={planOption.includes('enterprise')}
                                            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                if(event.target.checked){
                                                    setPlanOption(Array.from(new Set([...planOption, 'enterprise'])))
                                                } else {
                                                    setPlanOption([...planOption.filter(d => d !== "enterprise")])
                                                }
                                            }}
                                            icon={<CheckBoxUnChecked />}
                                            checkedIcon={<CheckBoxChecked />}
                                        />
                                        <div className={styles.check_text}>엔터프라이즈</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line1_component2}>

                        </div>
                        <div className={styles.line1_component3}>

                        </div>
                    </div>
                </Paper>
                <Paper
                    elevation={0}
                    className={styles.line2}
                >
                    유저리스트
                </Paper>
            </div>
        </>
    )
}

export default withSession(User);