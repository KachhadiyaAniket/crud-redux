import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

    
    return (
        <div className='container' style={{ marginTop: '2rem' }}>
            <h2 className="button-container d-flex justify-content-center mb-4">Simple Crud App With Redux</h2>
            
            <div className="button-container d-flex justify-content-center mb-4">
                <Link to="/create" className='btn btn-primary mx-2'>Create +</Link>
                <Link to="/list" className='btn btn-primary mx-2'>List +</Link>
            </div>

        </div>
    )
}

export default Home;
