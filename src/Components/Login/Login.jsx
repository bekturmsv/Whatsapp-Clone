import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import styles from './Login.module.css'


function Login ()  {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
         auth.signInWithPopup(provider).then((result) => 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            ).catch((error) => alert(error.message));
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" alt="" />
                <div className={styles.loginText}>
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button  onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;