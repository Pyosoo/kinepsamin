import React from 'react';
import { withSession } from 'src/hoc/withSession';

interface NoticeProps {
    currentPath: string,
    userToken: object
}

function Notice(props: NoticeProps){
    
    console.log(props)

    return (
        <div>
            Notice
        </div>
    )
}

export default withSession(Notice);