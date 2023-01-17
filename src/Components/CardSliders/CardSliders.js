import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CoxsBazar from '../CoxsBazar/CoxsBazar';
import SreeMangal from '../SreeMangal/SreeMangal';
import SundarBan from '../SundarBan/SundarBan';

import './CardSliders.css';

const CardSliders = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    return (
        <div className='total-area'>
            <div className='Card-container'>
                <div className='Card-text-section'>
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div>
                            <CoxsBazar></CoxsBazar>
                        </div>
                        <div>
                            <SreeMangal></SreeMangal>
                        </div>
                        <div>
                            <SundarBan></SundarBan>
                        </div>
                        <div>
                            <CoxsBazar></CoxsBazar>
                        </div>
                        <div>
                            <SreeMangal></SreeMangal>
                        </div>
                        <div>
                            <SundarBan></SundarBan>
                        </div>
                    </Slider>
                </div>

                <div className='Card-image-section'>
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                    >
                        <div>
                            <img src="https://i.postimg.cc/13r6TRLB/Rectangle-1.png" alt="" />
                            <h2>Cox’s  Bazar</h2>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/nc8DhQxT/Sreemongol.png" alt="" />
                            <h2>Sreemangal</h2>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/sDcgCBgM/sundorbon.png" alt="" />
                            <h2>Sundarbans</h2>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/13r6TRLB/Rectangle-1.png" alt="" />
                            <h2>Cox’s  Bazar</h2>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/nc8DhQxT/Sreemongol.png" alt="" />
                            <h2>Sreemangal</h2>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/sDcgCBgM/sundorbon.png" alt="" />
                            <h2>Sundarbans</h2>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CardSliders;