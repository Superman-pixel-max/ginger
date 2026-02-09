import React from 'react'
import Ginger from '../images/ginger.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <div className='px-8 flex items-center z-50 justify-between justify-center bg-primary w-full h-16 '>
                <div className='flex'>
                    <Link to="/"><h1 className='text-background pt-3 font-bold text-3xl font-bold twinkle m'>Ginger</h1>
</Link>
                    <img className='w-12 h-12 mt-2' src={Ginger} alt='ginger'/>
                </div>

                <div>
                    <ul className='text-accent relative butterfly flex text-2xl'>
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
                        <Link to='#' className='hover:text-tertiary group'><li>Feb. 11th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
    PROMISE DAY
  </span></Link>
                        <Link to='#' className='hover:text-tertiary group'><li>Feb. 12th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
    HUG DAY
  </span></Link>
                        <Link to='#' className='hover:text-tertiary group'><li>Feb. 13th {'>'}</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
    KISS DAY
  </span></Link>
                        <Link to='#' className='hover:text-tertiary group'><li>Feb. 14th</li><span className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-primary border-2 border-background text-tertiary font-bold text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 
                   transition duration-300 twinkle">
    VALENTINE'S DAY
  </span></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;