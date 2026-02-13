import React from 'react'
import Frame from '../images/frame.png'
import BalloonField from "./balloonfield"
import Us from '../images/us.jpeg'
import { useState } from 'react'
import FloatingNote from "./floatingnote";
import LoveLetter from "./loveletter";




function Home() {
  const [open, setOpen] = useState(false);
    return (
        <div >
            <BalloonField />
            <div>
                <div className='pt-24 relative'>
                    <img className='w-72 mt-48 absolute shadow-lg shadow-primary/40 inset-0 m-auto z-0' src={Us} alt='us' />
                    <img className='w-80 mt-20 relative z-10 mx-auto' alt='ce' src={Frame} />
                </div>
            </div>
            <h1 className="text-5xl font-semibold butterfly text-background text-center mt-20">
                Happy Valentine's Week my Love 
            </h1>

            <div className="relative">
      {!open && <FloatingNote onOpen={() => setOpen(true)} />}
      {open && <LoveLetter onClose={() => setOpen(false)} />}
    </div>

        </div>
    );
};

export default Home;