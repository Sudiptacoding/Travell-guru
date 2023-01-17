import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css'
const SreeMangal = () => {
    const navigate = useNavigate();
    const navigateToCoxsMore = () => {
        navigate('/sreemongal')
    }
    return (
        <div>
            <h1>Sreemangal</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className='more___detles__button' onClick={navigateToCoxsMore}>Booking <i class="fa-sharp fa-solid fa-arrow-right"></i></button>            
        </div>
    );
};

export default SreeMangal;