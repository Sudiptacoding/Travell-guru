import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserDetles } from '../../App';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import CoxsbazarMoreDetles from '../CoxsbazarMoreDetles/CoxsbazarMoreDetles';
import CoxsCardmoreDetles from '../CoxsCardmoreDetles/CoxsCardmoreDetles';
import Destination from '../Destination/Destination';
import Error from '../Error/Error';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Navbar from '../Navbar/Navbar';
import PrivetRouter from '../PrivetRouter/PrivetRouter';
import SreemongalCardmoreDetles from '../SreemongalCardmoreDetles/SreemongalCardmoreDetles';
import SreemongolMoreDetles from '../SreemongolMoreDetles/SreemongolMoreDetles';
import SundarbanCardmoreDetles from '../SundarbanCardmoreDetles/SundarbanCardmoreDetles';
import SundarbanMoreDetles from '../SundarbanMoreDetles/SundarbanMoreDetles';

import './IndexRouting.css';

const IndexRouting = () => {
    const [users , setUsers] = useContext(UserDetles);
    return (
        <div className='all--bg'>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/destination' element={<Destination></Destination>}></Route>
                    <Route path='/blog' element={<Blog></Blog>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/login' element={<PrivetRouter isSignin={users.isSignin}><Login></Login></PrivetRouter>}></Route>

                    <Route path='/logout' element={<Logout></Logout>}></Route>

                    <Route path='/coxs' element={<CoxsCardmoreDetles></CoxsCardmoreDetles>}></Route>
                    <Route path='/sreemongal' element={<SreemongalCardmoreDetles></SreemongalCardmoreDetles>}></Route>
                    <Route path='/sundarbon' element={<SundarbanCardmoreDetles></SundarbanCardmoreDetles>}></Route>


                    <Route path='/msree' element={<SreemongolMoreDetles></SreemongolMoreDetles>}></Route>
                    <Route path='/mcox' element={<CoxsbazarMoreDetles></CoxsbazarMoreDetles>}></Route>
                    <Route path='/msun' element={<SundarbanMoreDetles></SundarbanMoreDetles>}></Route>

                    <Route path='*' element={<Error></Error>}></Route>


                </Routes>
            </BrowserRouter>
        </div>

    );
};

export default IndexRouting;