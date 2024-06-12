import React from 'react'
import logo from '../img/hollow.png'
import { Link } from 'react-scroll'

export default function SideBar() {
  return (

    <div className='sideBar'>

      <div className='side'>

        <ul>
          <Link className='sides'
            activeClass="active"
            to="plataforms"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >Plataforms
            
            </Link> 
            </ul>
              <ul>
            <Link className='sides'
            activeClass="active"
            to="dlcs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >DLCs
            
            </Link> 
            </ul>
            <ul>
            <Link className='sides'
            activeClass="active"
            to="unity"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000} >Unity
            
            </Link> 
            </ul>
            <ul>
            <Link className='sides'
            activeClass="active"
            to="Creators"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >Creators
            
            </Link> 
            </ul>
      </div>

      <h2 className='SideMenu'>Hollow Knight</h2>
      <div className='logocontainer'>
        <img className='logoside' src={logo} alt='logo'></img>
      </div>

    </div>
  )
}
