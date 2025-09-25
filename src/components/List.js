import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
    const users = useSelector((state) => state.users);




    return (
        <div className='container' style={{ marginTop: '2rem' }}>
            <div className="button-container d-flex justify-content-center mb-4">
                <Link to="/create" className='btn btn-primary mx-2'>Create +</Link>
     
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                       
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
