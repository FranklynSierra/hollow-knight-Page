import React from 'react';
import sueños from '../img/sueñosocultos.jpg'
import grimm from '../img/grimcompañia.jpg'
import savia from '../img/saviavida.jpg'
import dioses from '../img/dioses.jpg'

export default function DLCs() {
  return (
    <div className='containerdlcs' id='dlcs'>
      <h1>Hollow Knight Expands with 4 Giant Free Content Packs</h1>
      <div className='dlcs'>
        <div className='dlc'>
          <h2>Hidden Dreams</h2>
          <img src={sueños} alt='Hidden Dreams'></img>
          <p>Mighty new foes emerge! New Boss fights. New Upgrades. New Music.</p>
        </div>
        <div className='dlc'>
          <h2>The Grimm Troupe</h2>
          <img src={grimm} alt='The Grimm Troupe'></img>
          <p>Light the Nightmare Lantern. Summon the Troupe. New Major Quest. New Boss Fights. New Charms. New Enemies. New Friends.</p>
        </div>
        <div className='dlc'>
          <h2>Lifeblood</h2>
          <img src={savia} alt='Lifeblood'></img>
        <p>A Kingdom Upgraded! New Boss. Upgraded Bosses. Tweaks and Refinements across the whole game.</p>
        </div>
        <div className='dlc'>
          <h2>Godmaster</h2>
          <img src={dioses} alt='Godmaster'></img>
         <p>Take your place amongst the Gods. New Characters and Quest. New Boss Fights. Epic New Music!</p> 
        </div>
      </div>
    </div>
  )
}
