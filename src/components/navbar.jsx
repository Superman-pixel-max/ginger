import React from 'react'
import Ginger from '../images/ginger.png'
import { Link } from 'react-router-dom';

function Navbar({ transparent }) {
    return (
        <div className={`px-8 flex items-center justify-between w-full h-16 fixed top-0 z-50 transition-all duration-500
            ${transparent ? "bg-black/30 backdrop-blur-sm shadow-lg shadow-black/10" : "bg-primary"}`}>

            <div className='flex'>
                <Link to="/"><h1
                    className={`pt-3 font-bold text-3xl twinkle m
  ${transparent ? "text-primary" : "text-background"}`}
                >Ginger</h1>
                </Link>
                <img className='w-12 h-12 mt-2' src={Ginger} alt='ginger' />
            </div>

            <div>
                <ul
                className={`relative butterfly flex text-2xl
                ${transparent ? "text-white" : "text-accent"}`}
                >
                    <Link to="/rose" className='hover:text-tertiary group'><li>Feb. 7th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        ROSE DAY
                    </span></Link>

                    <Link to='/propose' className='hover:text-tertiary group'><li>Feb. 8th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        PROPOSE DAY
                    </span></Link>

                    <Link to='/choco' className='hover:text-tertiary group'><li>Feb. 9th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        CHOCOLATE DAY
                    </span></Link>
                    <Link to='/teddy' className='hover:text-tertiary group'><li>Feb. 10th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        TEDDY DAY
                    </span></Link>
                    <Link to='/promise' className='hover:text-tertiary group'><li>Feb. 11th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        PROMISE DAY
                    </span></Link>
                    <Link to='/hug' className='hover:text-tertiary group'><li>Feb. 12th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        HUG DAY
                    </span></Link>
                    <Link to='/kiss' className='hover:text-tertiary group'><li>Feb. 13th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        KISS DAY
                    </span></Link>
                    <Link to='/val' className='hover:text-tertiary group'><li>Feb. 14th</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
                        VALENTINE'S DAY
                    </span></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;