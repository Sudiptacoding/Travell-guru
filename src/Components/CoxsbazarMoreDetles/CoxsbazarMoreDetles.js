import React, { useContext } from 'react';
import { UserDetles } from '../../App';

import './CoxsbazarMoreDetles.css';

const CoxsbazarMoreDetles = () => {
    const [users, setUsers] = useContext(UserDetles);
    return (
        <div className='detles-coxsbazar'>
            <div className='deltes'>
                <h4>Stay in {users.place}</h4>
                <h5>City : {users.city}</h5>
                <h5>Booking time {users.form} to {users.to}</h5>
            </div>

            <div className='map-and-room'>
                <div className='Hotel-detles'>
                    <div className='room-box'>
                        <div><img src="https://i.postimg.cc/TPLxz0mY/Rectangle-28.png" alt="" /></div>
                        <div className='hotel-detls'>
                            <h5>Light bright airy stylish apt & safe <br /> peaceful stay</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths <br /> Wif Air conditioning Kitchen <br /> Cancellation fexibility availiable <br /> <span>4.9 (20) $34/ night $167 total</span> </p>
                        </div>
                    </div>

                    <div className='room-box'>
                        <div><img src="https://i.postimg.cc/7LNjyXSv/Rectangle-26.png" alt="" /></div>
                        <div className='hotel-detls'>
                            <h5>Light bright airy stylish apt & safe <br /> peaceful stay</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths <br /> Wif Air conditioning Kitchen <br /> Cancellation fexibility availiable <br /> <span>4.9 (20) $34/ night $167 total</span> </p>
                        </div>
                    </div>
                    <div className='room-box'>
                        <div><img src="https://i.postimg.cc/SR7kZK96/Rectangle-27.png" alt="" /></div>
                        <div className='hotel-detls'>
                            <h5>Light bright airy stylish apt & safe <br /> peaceful stay</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths <br /> Wif Air conditioning Kitchen <br /> Cancellation fexibility availiable <br /> <span>4.9 (20) $34/ night $167 total</span> </p>
                        </div>
                    </div>
                </div>
                <div className='map-detles'>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="708" height="652" id="gmap_canvas" src="https://maps.google.com/maps?q=cox%20bazar&t=k&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a></div></div>
                </div>
            </div>

        </div>
    );
};

export default CoxsbazarMoreDetles;