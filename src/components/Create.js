import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUser  } from '../redux/UserReducer';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser ({ id: users[users.length - 1].id + 1, name, email }));
        navigate('/list');
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3 className='text-center'>Add New User</h3>
                <div className="button-container d-flex justify-content-center mb-4">
                    <Link to="/create" className='btn btn-primary mx-2'>Create +</Link>
                    <Link to="/list" className='btn btn-primary mx-2'>List +</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='name' className='form-label'>Name :</label>
                        <input 
                            type='text' 
                            name='name' 
                            className='form-control' 
                            placeholder='Enter name' 
                            onChange={e => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input 
                            type='email' 
                            name='email' 
                            className='form-control' 
                            placeholder='Enter email' 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <button className='btn btn-primary w-100'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;