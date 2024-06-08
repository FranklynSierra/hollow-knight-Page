import React, { useEffect, useState } from 'react'
import vasija from '../img/vasijapura.png'
import cherry from '../img/cherry.png'
export default function Footer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    
    setInterval(()=>setTime(new Date()),1000)
  }, []);
    return (
       <div className='footer'>
    <div className='subfooter'>
   
    <img className='vasija' src={vasija} alt='vasija' />
    
   
      <div >
      <h3 className='mysocial'>My social Medias</h3>
        <lu className='redes'>
        <li><a href='https://github.com/FranklynSierra'><ion-icon name="logo-github"></ion-icon></a></li>
        <li><a href='https://www.instagram.com/franklyn_sierra_contreras/'><ion-icon name="logo-instagram"></ion-icon></a></li>
        </lu>
     
      </div>
      <div  className='cherry'>
      <h3>Principal Page of Team Cherry</h3>
      
      <img  className='logocherry' src={cherry} alt='cherry' /> 
      </div>
   
    </div>
    <p className='copyright'>CopyRight {time.getFullYear()}</p>
    </div>
   
   
    
  )
}
