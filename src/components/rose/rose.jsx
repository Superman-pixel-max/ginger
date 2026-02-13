import React from 'react'
import PetalField from "./petalfield"
import PetalFieldp from "./petalfieldp"
import Rosee from "../../images/rose.png"



function Rose() {
    return (
        <div >
            <PetalField/>
            <PetalFieldp/>

            <h2 className='pt-36 text-center text-accent twinkle text-[30px]'>Happy Rose Day Puchchuu!</h2>
            <p className='text-center text-accent twinkle text-[30px]'>All these roses are for you, and i'll grow many more for you.</p>

            <img src={Rosee} className='w-96 relative top-[8vh] mx-auto' alt='rose'/>
        </div>
    );
};

export default Rose;