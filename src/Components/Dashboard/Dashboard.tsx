import React from 'react';
import { withSession } from 'src/hoc/withSession';
import LayoutComponent from '../LayoutComponent/LayoutComponent';
import style from './Dashboard.module.css';


function Dashboard(){
    return (
        <div>
            dashboard
        </div>
    )
}

export default withSession(Dashboard);