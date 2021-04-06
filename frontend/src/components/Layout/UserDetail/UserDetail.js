import React from 'react'
import classes from './UserDetaill.module.css';

export const UserDetail = (props) => {
    return (
        <React.Fragment>


            <div className={classes.container}>
                <div className={classes.userdetail}>
                    <p className={classes.child}>Numele:{props.nume}</p>
                    <p className={classes.child}>Descriere:{props.descriere}</p>
                    <p className={classes.child}>Universitate:{props.univeristate}</p>
                </div>

            </div>

        </React.Fragment>

    )
}

export default UserDetail
