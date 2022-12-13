import React from 'react';
import { withSession } from 'src/hoc/withSession';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';

interface UserProps {
    currentPath: string,
    userToken: object
}

function User(props: UserProps) {
    console.log(props)
    return (
        <>
            <div>
                <Paper
                    elevation={0}
                    className={styles.line1}
                >
                    <div className={styles.title}>유저검색</div>
                    <div className={styles.line1_container}>
                        <div className={styles.line1_component1}>
                            <div className={styles.check_line}>1</div>
                            <div className={styles.check_line}>2</div>
                            <div className={styles.check_line}>3</div>
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