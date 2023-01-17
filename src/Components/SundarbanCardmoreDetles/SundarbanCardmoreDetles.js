import React from 'react';
import BookingSundarban from '../BookingSundarban/BookingSundarban';

import '../../App.css';

const SundarbanCardmoreDetles = () => {
    return (
        <div className='booking___container'>
            <div className='booking__text__container'>
                <h1 className='box__Booking__h1'>Sundarbans</h1>
                <p className='box__Booking__p'>Sundarbans is a city, on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className='booking__form__container'>
                <BookingSundarban></BookingSundarban>
            </div>
        </div>
    );
};

export default SundarbanCardmoreDetles;