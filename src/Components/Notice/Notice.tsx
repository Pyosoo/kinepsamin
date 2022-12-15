import React from 'react';
import { withSession } from 'src/hoc/withSession';

function Notice(props: any){
    
    console.log(props)

    return (
        <div>
            Notice
        </div>
    )
}

export default withSession(Notice);