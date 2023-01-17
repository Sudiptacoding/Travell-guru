import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';


const CoxsBazar = () => {
    const navigate = useNavigate();
    const navigateToCoxsMore = () => {
        navigate('/coxs')
    }
    return (
        <div>
            <h1>Cox's bazar</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className='more___detles__button' onClick={navigateToCoxsMore}>Booking <i class="fa-sharp fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default CoxsBazar;