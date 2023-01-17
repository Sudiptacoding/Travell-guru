import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { auth } from '../firebase.config';

import './Login.css';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";


import { UserDetles } from '../../App';

const provider = new GoogleAuthProvider();

const Login = () => {
    const [users, setUsers] = useContext(UserDetles)
    const [toggol, setToggol] = useState(false);

    const [user, setUser] = useState({
        isSignin: false,
        email: '',
        password: '',
        currentuser: '',
        emailVerified: '',
        from: '',
        to: '',
        place: '',
        city: ''
    });
    setUsers(user);


    // Google Sign In 

    const handelGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newUser = { ...user }
                newUser.name = displayName;
                newUser.email = email;
                newUser.isSignin = true
                setUser(newUser)
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorMessage);
            });

    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data, e) => {

        const { email, password } = data;
        const fullname = data.firstname + " " + data.lastname;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = { ...user };
                newUser.email = user.email;
                newUser.isSignin = true;
                userProfileUpded(fullname);
                verificationEmail();
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
        e.target.reset();
    }

    // sent vefify email
    const verificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("verify email sent successfully . Please check yout email 🥰")
            });
    }


    const handelBluer = (e) => {
        let isFormValid = true;
        if (e.target.name === "email") {
            isFormValid = /\S+/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isFormValid = /\S+/.test(e.target.value)
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handelSubmit = (e) => {
        if (user.email && user.password) {

            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const newUser = { ...user };
                    newUser.email = user.email;
                    newUser.isSignin = true;
                    setUser(newUser);
                    alert('user log in sucessfully')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        e.preventDefault();
        e.target.reset();
    }

    // firebase upded 


    // userprofile upded
    const userProfileUpded = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            alert(error);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                const newUser = { ...user }
                newUser.isSignin = true;
                newUser.emailVerified = user.emailVerified;
                newUser.currentuser = user.displayName;
                setUser(newUser);
            }
            else {

            }
        });
    }, [user]);

    const handelResetPassword = () => {
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                alert('password reset email sent successfully . Please check your email');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);

            });
    }



    return (
        <>
            <div className='login-form-container'>

                {
                    toggol ? <div className='form-container login-form'>
                        <h1>Login</h1>
                        <form action="" onSubmit={handelSubmit}>
                            <div>
                                <label htmlFor="email">Username or Email</label> <br />
                                <input type="email" onBlur={handelBluer} name="email" id="email" required className={`form-control`} />
                            </div>
                            <div>
                                <label htmlFor="password">Passowrd</label> <br />
                                <input type="password" onBlur={handelBluer} name="password" id="password" required className={`form-control`} />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className='forget-button'>
                            <button onClick={handelResetPassword}>Reset password</button>
                        </div>
                    </div> :
                        <div className="card form-container">
                            <h3 className="">Create an account </h3>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-row">

                                        <div className="form-group col">
                                            <label>First Name</label>
                                            <input name="firstname" type="firstname" {...register('firstname')} className={`form-control`} required />
                                        </div>
                                        <div className="form-group col">
                                            <label>Last Name</label>
                                            <input name="lastname" type="lastname" {...register('lastname')} className={`form-control`} required />
                                        </div>

                                        <div className="form-group col">
                                            <label>Username or Email</label>
                                            <input name="email" type="email" {...register('email')} className={`form-control`} required />
                                        </div>

                                        <div className="form-group col">
                                            <label>Password</label>
                                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.password?.message}</div>
                                        </div>
                                        <div className="form-group col">
                                            <label>Confirm Password</label>
                                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-1">Create an account</button>
                                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                }

                <div className='toggol-change'>
                    {
                        toggol ? <div>Don’t have an account? <button onClick={() => setToggol(!toggol)}>{toggol ? "Create an account" : "Create A acount"}</button></div> : <div> Already have an account?  <button onClick={() => setToggol(!toggol)}>{toggol ? "Sign in" : "Login"}</button></div>
                    }

                </div>
                <div className='google-signin-button'>
                    <button onClick={handelGoogleSignIn}> <img src="https://i.postimg.cc/7hh1KtDL/download-removebg-preview.png" alt="" /> Continue with Google</button>
                </div>

            </div>
        </>

    );
};

export default Login;