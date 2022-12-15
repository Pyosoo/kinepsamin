import React from 'react';
import { s3url } from 'src/lib/constant';

export default function CheckBoxUnChecked() {
    return (
        <>
            <div style={{width:'22px', height:'22px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img
                    src={s3url + "checkbox_unchecked.svg"}
                    alt="checkbox"
                    style={{
                        width:'100%',
                        height:'100%'
                    }}
                />
            </div>
        </>
    )
}   