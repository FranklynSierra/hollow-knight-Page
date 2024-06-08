import React from 'react'
import steam from '../img/steam2.png'
import gogcom from '../img/gog2.png'
import humble from '../img/humble2.png'
import switchnintendo from '../img/switch.png'
import xbox from '../img/xbox.png'
import play from '../img/play.png'


export default function ContainerLogo() {
  return (
    <div className='containerlogos'>
     
        <div className='subcontainerlogo'>
        <div>
        <img className='logoplataform' src={steam} alt='logo'></img>
        <img className='logoplataform'src={gogcom} alt='logo'></img>
        <img className='logoplataform'src={humble} alt='logo'></img>
        </div>
        <div>
        <img className='logoplataform'src={switchnintendo} alt='logo'></img>
        <img className='logoplataform'src={xbox} alt='logo'></img>
        <img className='logoplataform' src={play} alt='logo'></img>
        </div>
        </div>
      </div>
  )
}
