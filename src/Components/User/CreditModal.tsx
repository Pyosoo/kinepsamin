import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Input } from 'antd';

interface propType {
    open: boolean;
    id: string | undefined;
    anchorEl: any;
    handleClose: any;
    selectedUids: Array<string>;
    creditValue: string;
    setCreditValue: any;
    creditMemo: string;
    setCreditMemo: any;
}

function CreditModal(props: propType) {
    return (
        <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <div style={{ padding: '25px', width: '320px', fontFamily:'Pretendard-Regular' }}>
                <div style={{ marginBottom: '15px', fontWeight: '800' }}>
                    크래딧 추가
                </div>
                <div style={{ marginBottom: '10px' }}>
                    총
                    <span style={{ color: 'rgba(99, 102, 241, 1)', fontWeight: '600', marginLeft: '10px' }}>{props.selectedUids.length}</span>
                    명에게 크래딧을 추가하시겠습니까?
                </div>
                <div style={{ width: '300px', display: 'flex', flexWrap: 'wrap', maxHeight: '200px', overflowY: 'auto', padding: '10px', border: "1px solid rgba(217, 217, 217, 1)", borderRadius: '5px' }}>
                    {
                        props.selectedUids.map((d: any) => {
                            return (
                                <div style={{ width: '25%', textAlign: 'center' }}>
                                    {d}
                                </div>
                            )
                        })
                    }
                </div>
                
                <div style={{width:'300px', marginTop:'15px', marginBottom:'3px', paddingLeft:'5px'}}>충전 금액</div>
                <Input
                    value={props.creditValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setCreditValue(e.target.value)}
                    placeholder="0"
                    style={{
                        width: '322px'
                    }}
                />

                <div style={{width:'300px', marginTop:'15px', marginBottom:'3px', paddingLeft:'5px'}}>충전 메시지</div>
                <Input
                    value={props.creditMemo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setCreditMemo(e.target.value)}
                    placeholder="message"
                    style={{
                        width: '322px'
                    }}
                />


                <div style={{ display:'flex', marginTop:'30px' }}>
                    <div
                        className='hoverCursor'
                        style={{
                            border:'1px solid rgba(99, 102, 241, 1)',
                            color:'rgba(99, 102, 241, 1)',
                            width:'150px',
                            height:'30px',
                            lineHeight:'30px',
                            textAlign:'center',
                            borderRadius:'5px',
                        }}
                        onMouseOver={e => {
                            e.target.style.backgroundColor ='rgba(99, 102, 241, 1)';
                            e.target.style.color = "white";
                        }}
                        onMouseOut={e => {
                            e.target.style.backgroundColor ='white';
                            e.target.style.color = "rgba(99, 102, 241, 1)";
                        }}
                    >크래딧추가</div>
                    <div
                        className='hoverCursor'
                        onClick={props.handleClose}
                        style={{
                            border:'1px solid rgba(255, 71, 126, 1)',
                            color:'rgba(255, 71, 126, 1)',
                            width:'150px',
                            height:'30px',
                            lineHeight:'30px',
                            textAlign:'center',
                            borderRadius:'5px',
                            marginLeft:'auto'
                        }}
                        onMouseOver={e => {
                            e.target.style.backgroundColor ='rgba(255, 71, 126, 1)';
                            e.target.style.color = "white";
                        }}
                        onMouseOut={e => {
                            e.target.style.backgroundColor ='white';
                            e.target.style.color = "rgba(255, 71, 126, 1)";
                        }}
                    >취소</div>
                </div>
            </div>
        </Popover>
    )
}

export default CreditModal;