import React, { useEffect, useState, useRef } from 'react';
import { withSession } from 'src/hoc/withSession';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxChecked from 'src/Components/Checkbox/CheckboxChecked';
import CheckBoxUnChecked from 'src/Components/Checkbox/CheckboxUnChecked';
import { s3url } from 'src/lib/constant';
import { fetchSummary, fetchUsers } from 'src/apis/apis';
import { Input } from 'antd';
import type { InputRef } from 'antd';
import UserTable from './UserTable';
import { Pagination } from 'antd';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface VendorObject {
    vendor: string;
}
interface ReferralObject {
    code: string;
    created_at: string;
    expiry_at: string;
}

function User(props: any) {
    
    const [priceOption, setPriceOption] = useState<Array<string>>([]);
    const [funcOption, setFuncOption] = useState<Array<string>>([]);
    const [planOption, setPlanOption] = useState<Array<string>>([]);
    const [searchVendor, setSearchVendor] = useState<string>('');
    const [searchReferral, setSearchReferral] = useState<string>('');
    const [vendors, setVendors] = useState<Array<object>>([]);
    const [referrals, setReferrals] = useState<Array<object>>([]);
    const [selectedVendors, setSelectedVendors] = useState<Array<string>>([]);
    const [selectedReferrals, setSelectedReferrals] = useState<Array<string>>([]);
    
    const [page, setPage] = useState<number>(1);
    const [userList, setUserList] = useState<Array<object>>([]);

    const inputRef = useRef<InputRef>(null);
    const inputRef2 = useRef<InputRef>(null);

    useEffect(() => {
        fetchSummary().then(r => {
            if(r.success){
                setVendors(r.data.vendors);
                setReferrals(r.data.referrals);
            }
        })
    }, [])

    useEffect(() => {
        let param = {
            'plan': planOption,
            'referral': selectedReferrals,
            'vendor': selectedVendors,
            'page': page,
            'email': '',
            'nickname': '',
            'phone': '',
            'free': ''
        }

        fetchUsers(param).then(r => {
            if(r.success){
                setUserList(r.data)
            }
        })
    }, [page, planOption, selectedReferrals, selectedVendors])


    return (
        <>
            <div className={styles.root}>
                <Paper
                    elevation={0}
                    className={styles.line1}
                >
                    <div className={styles.title}>
                        <img
                            src={s3url + "user_greenPeople.svg"}
                            style={{ width:'24px', height:'24px', marginRight:'10px' }}
                            alt=""
                        />
                        <div>유저검색</div>
                    </div>
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
                            <Input
                                size='large'
                                ref={inputRef}
                                prefix={
                                    searchVendor.length > 0 ? 
                                    <img src={s3url + "search_black.svg"} alt="" /> 
                                    :
                                    <img src={s3url + "search_gray.svg"} alt="" /> 
                                }
                                placeholder='Search'
                                value={searchVendor}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchVendor(e.target.value)}
                            />
                            <div className={styles.vendorBox}>
                                {
                                    vendors.filter((ve: VendorObject) => ve.vendor.includes(searchVendor)).map((d: VendorObject, i:number) => {
                                        return(
                                            <div className={styles.vendorItem} key={i}>
                                                <Checkbox   
                                                    {...label}
                                                    checked={selectedVendors.includes(d.vendor)}
                                                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                        if(event.target.checked){
                                                            setSelectedVendors(Array.from(new Set([...selectedVendors, d.vendor])))
                                                        } else {
                                                            setSelectedVendors([...selectedVendors.filter(v => v !== d.vendor)])
                                                        }
                                                    }}
                                                    icon={<CheckBoxUnChecked />}
                                                    checkedIcon={<CheckBoxChecked />}
                                                />
                                                <div>
                                                    {d.vendor}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.line1_component3}>
                            <Input
                                size='large'
                                ref={inputRef2}
                                prefix={
                                    searchReferral.length > 0 ? 
                                    <img src={s3url + "search_black.svg"} alt="" /> 
                                    :
                                    <img src={s3url + "search_gray.svg"} alt="" /> 
                                }
                                placeholder='Search'
                                value={searchReferral}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchReferral(e.target.value)}
                            />
                            <div className={styles.vendorBox}>
                                {
                                    referrals.filter((ref: ReferralObject) => ref.code.includes(searchReferral)).map((d: ReferralObject, i:number) => {
                                        return(
                                            <div className={styles.vendorItem} key={i}>
                                                <Checkbox   
                                                    {...label}
                                                    checked={selectedReferrals.includes(d.code)}
                                                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                                                        if(event.target.checked){
                                                            setSelectedReferrals(Array.from(new Set([...selectedReferrals, d.code])))
                                                        } else {
                                                            setSelectedReferrals([...selectedReferrals.filter(r => r !== d.code)])
                                                        }
                                                    }}
                                                    icon={<CheckBoxUnChecked />}
                                                    checkedIcon={<CheckBoxChecked />}
                                                />
                                                <div>
                                                    {d.code}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Paper>
                <Paper
                    elevation={0}
                    className={styles.line2}
                >
                    <div className={styles.tableTitle}>
                        <div className={styles.text1}>
                            검색결과
                        </div>
                        <div className={styles.text1}>
                            총 <span className={styles.text2}>{userList.total}</span>
                        </div>
                        <div className={styles.tableFunc}>
                            <div className={styles.calDiv} />
                            <div className={styles.scrapDiv} />
                            <div className={styles.creditDiv} />
                        </div>
                    </div>
                    
                    <div className={styles.tableDiv}>
                        <UserTable 
                            userList={userList}
                        />
                    </div>
                    
                    <div className={styles.pagination}>
                        <Pagination 
                            defaultCurrent={1} 
                            current={page}
                            pageSize={20}
                            showSizeChanger={false}
                            onChange={(page, pageSize) => {
                                console.log(page)
                                setPage(page);
                            }}
                            total={userList.total} 
                        />
                    </div>
                    
                </Paper>
            </div>
        </>
    )
}

export default withSession(User);