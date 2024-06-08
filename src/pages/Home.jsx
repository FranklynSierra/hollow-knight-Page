import React from 'react'
import logo from '../img/logohollow4.jpg'
import ContainerLogo from '../components/ContainerLogo'
import MadeUnity from '../components/MadeUnity'
import DLCs from '../components/DlCs'
import ChangeImages from '../components/ChangeImages'
import Creators from '../components/Creators'
export default function Home() {
  return (
    <div className='home'>
<div id='scroll-watcher'>.</div>
      <img className='logo' src={logo} alt='logo'></img>
      <div className='content'>
        <h1 className='text'>what is Hollow Knight?</h1>
        <p className='whatis'>
Hollow Knight is a classic 2D action adventure set in a vast interconnected world. Explore twisting caverns, ancient cities and deadly wastelands. Battle corrupted creatures, make new friends with strange insects, and solve ancient mysteries that lie at the heart of the kingdom.</p>
      </div>
      <h2 className='textplataform'id='plataforms' >Plataforms:</h2>
     <ContainerLogo/>

    
     <DLCs/>
     <MadeUnity/>
     <ChangeImages/>
     <Creators/>
    </div>
  )
}
