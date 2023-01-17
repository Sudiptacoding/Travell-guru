import React, { useContext } from 'react';
import { UserDetles } from '../../App';
import { signOut } from "firebase/auth";
import { auth } from '../firebase.config';
import { Navigate } from 'react-router-dom';

import './Logout.css';

const Logout = () => {
    const [users, setUsers] = useContext(UserDetles);
    console.log(users);
    const handelDelet = () => {
        signOut(auth).then(() => {
            const newUser = { ...users };
            newUser.name = '';
            newUser.currentuser = ''
            newUser.isSignin = false;
            newUser.email = '';
            setUsers(newUser)
        }).catch(() => {
        });
    }
    return (
        <div className='Logout'>
            <div className='total-logout-container'>
                <div className='logout-logo'><img src="https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png" alt="" /></div>
                <div className='logout-text'><h3>Hello {users.displayName} are you sure to logout</h3></div>
                <button onClick={handelDelet}>Log Out</button>
            </div>
            {
                users.isSignin ? <div></div> : <Navigate to='/'></Navigate>
            }

        </div>
    );
};

export default Logout;