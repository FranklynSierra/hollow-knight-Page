import React from 'react'
import descend1 from '../img/descend1.jpg'
import descend2 from '../img/descend2.jpg'
import descend3 from '../img/descend3.jpg'
export default function Descend() {
    return (
        <div className='descendPrincipal'>
            <div className='descendContiner'>
                <div className='descents'>
                    <img className='descentimg' src={descend1} alt='cristal' />
                    <div className='descentText'>
                        <h2>Brave the Depths of a Forgotten Kingdom</h2>
                        <p>Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.</p>
                        <p>As the enigmatic Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils.</p>
                    </div>

                </div>
                <div className='descents'>
                    <div className='descentText'>
                        <h2>Use Your Skills and Reflexes to Survive</h2>
                        <p>Hollow Knight is a challenging 2D action-adventure. You’ll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery.</p>
                        <ul>
                            <li>Explore vast, interconnected worlds</li>
                            <li>Encounter a bizarre collection of friends and foes</li>
                            <li>Evolve with powerful new skills and abilities</li>
                        </ul>
                   
                    </div>
                    <img className='descentimg' src={descend2}alt='knight'/>
                </div>
                <div className='descents'>
                      <img className='descentimg' src={descend3}alt='green'/>
                      <div className='descentText'>

                        <h2>Evocative Hand-Drawn Art</h2>
                        <p>The world of Hollow Knight is brought to life in vivid, moody detail, its caverns alive with bizarre and terrifying creatures, each animated by hand in a traditional 2D style.</p>
                        <p>Every new area you’ll discover is beautifully unique and strange, teeming with new creatures and characters to discover. The world of Hollow Knight is one worth exploring just to take in the sights and discover new wonders hidden off of the beaten path.</p>
                      </div>
                </div>
            </div>
        </div>
    )
}
