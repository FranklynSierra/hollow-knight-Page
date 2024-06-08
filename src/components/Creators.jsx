import React from 'react'
import tc from '../img/tc.png'
import ari from '../img/arigibson.png'
import william from '../img/william.png'
import david from '../img/david.png'
export default function Creators() {
  return (
    <div className='principalcreators' id='Creators'>
      <div className='contentcreators'>
        <img src={tc} alt='tclogo' />
        <div>
        <button className='cherrybutton'><a href="https://www.teamcherry.com.au/">Visit the Team Cherry Site</a></button>
        </div>
     <p> Hollow Knight is being developed by Team Cherry in Adelaide, South Australia. They're a team of 3 people who, alongside making the game, are responsible for building these websites, cutting those game trailers, posting regular game updates, answering questions on social media and much more. Though it's a lot of work, we love doing it, and it's made even more enjoyable by the enthusiastic support we've received from fans this whole way.</p>
      </div>
      <div className='creators'>
        <div className='creator'>
          <img src={ari} alt='ari'></img>
          <h2>Ari Gibson</h2>
          <p>Ari is responsible for game design alongside William. He creates the game's art, environments and animates hundreds of bugs.</p>
        </div>
        <div className='creator'>
          <img src={william} alt='william'></img>
        <h2>William Pellen</h2>
         <p>William designs the game along with Ari. He creates the enemy, boss and game behaviour for Hollow Knight. If an enemy seems too challenging or a gauntlet insurmountable, blame him!</p>
        </div>
        <div className='creator'>
        <img src={david} alt='david'></img>
        <h2>David Kazi</h2>
        <p>Dave was responsible for Hollow Knight's technical direction. He divided his time between making the game run and fixing things that Ari and William broke.</p>
        </div>
      </div>
    </div>
  )
}
