import React from 'react'
import unity from '../img/made_with_unity.png'
export default function MadeUnity() {
  return (
    <div className='unityContainer' id='unity'>
    <div className='subcontainerUnity'>
      <img className='logounity' src={unity}alt='unitylogo'/>
      <p className='unityText'>Learn about the methods we used to make Hollow Knight, and about the engine under-pinning the whole game.</p>
      <button className='buttonUnity'>Details</button>
      </div>
    </div>
  )
}
