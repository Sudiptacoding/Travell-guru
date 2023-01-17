import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { UserDetles } from '../../App';
import './Navbar.css';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from "firebase/auth";

function NavScrollExample() {
    const [users, setUsers] = useContext(UserDetles);
    const [name, setName] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            onAuthStateChanged(auth, (user) => {
                if (user !== null) {
                    setName(user.displayName);

                } else {
                }
            }, 1000);
            return () => clearInterval(interval);
        })

    }, []);
    return (
        <Navbar className='bg'>
            <Container fluid>
                <Navbar.Brand href="#"><img className='logo-icon' src="https://i.postimg.cc/hPq8XPvz/Capture-removebg-preview.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Form className="d-flex search">
                        <Form.Control className='form--control'
                            type="search"
                            placeholder="Search your Destination..."
                            aria-label="Search"
                            id="inputID"
                        />
                    </Form>
                    <Nav className=" my-2 my-lg-0 nav-item  " style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink to='/'>News</NavLink>
                        <NavLink to='/destination'>Destination</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>

                        {
                            users.isSignin && <NavLink to='/logout'>Log out</NavLink>
                        }
                        {
                            users.isSignin ? <NavLink to='/login'>{name}</NavLink> : <NavLink to='/login'>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavScrollExample;