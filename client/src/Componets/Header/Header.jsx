import React from 'react'
import './header.css'
import { BiSearchAlt} from 'react-icons/bi'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'


export const Header = () => {

  return (
    <div className='Header-main'>
        <div className='left-side'>
            <div>
           <img src="\img.png" alt="" />
           </div>
           <div>
           <h1>Store</h1>
           </div>
           <div className='outer'>
            <input type="text" />
            <div className='inner'>
           <BiSearchAlt/>
           </div>
           </div>
           
        </div>
        <div className='right-side'>
            <div className='icon' >
             <AiOutlineShoppingCart/>
            </div>
            <div className='icon'>
            <MdAccountCircle/>
            </div>
        </div>
    </div>
  )
}
