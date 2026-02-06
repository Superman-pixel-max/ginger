import React from 'react'
import Heart from '../images/Icons8/icons8-favorite-50-3.png'

function Footer(){
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-4 twinkle text-accent">
            <p className='flex items-center justify-between justify-center'>Made with my full heart for my only love , you , Aadya Amit Sharma. <img className='ml-2' src={Heart} alt='e'/></p>
        </div>
    );
};

export default Footer;