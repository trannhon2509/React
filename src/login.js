import React, { useState, useEffect, createContext, useContext } from 'react';
import db from './db.json';
import { redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import ManageProduct from './manageProduct';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = db.users.find((u) => u.username === username && u.password === password);
        if (user) {
            setIsLoggedIn(true);
            
        } else {
            alert('Invalid username or password');
        }
    };
    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/manage-product';
        }
    }, [isLoggedIn]);
    return (
             <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='mb-3 row '>
            <h1 className='text-center'>Login</h1>
                <div>
                <label className='col-sm-2 col-form-label'>
                Username:
                </label>
                <div className='col-sm-10'>
                <input className='form-control' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                </div>
                <br />
                <div>
                <label className='col-sm-2 col-form-label'>
                Password:
                </label>
                <div className='col-sm-10'>
                <input className='form-control'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                </div>
                <br />
                <Button className='mt-3' type="submit" color="danger" >Login</Button>
            </form>
        </div>
    );
}

export default Login;