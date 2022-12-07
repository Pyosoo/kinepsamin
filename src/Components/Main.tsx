import React from 'react';
import { withSession } from '../hoc/withSession';

function Main(){
    return(
        <div>
            Main
        </div>
    )
}

export default withSession( Main);