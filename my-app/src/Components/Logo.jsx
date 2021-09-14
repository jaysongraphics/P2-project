import React from 'react'
import Image from './Images/crypto_logo.png'


function Logo(){
    return  (
       <div className='logo'> 
             <img src={Image} width='150px' height=' 150px' alt='logo'/>
      </div>
    )
}


export default Logo