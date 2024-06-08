import React, {  useState } from 'react'
import chang1 from './imgChanges/chang1.jpg'
import chang2 from './imgChanges/change2.jpg'
import chang3 from './imgChanges/change3.jpg'
import chang4 from './imgChanges/change4.jpg'
import chang5 from './imgChanges/change5.jpg'

export default function ChangeImages() {

    const [change, setChange] = useState(chang1);
    const click=()=>{
      let value=change;
      if(value===chang1){
        setChange(chang2)
      }else if(value===chang2){
        setChange(chang3)

      }else if(value===chang3){
        setChange(chang4)

      }else if(value===chang4){
        setChange(chang5)

      }else if(value===chang5){
        setChange(chang1)

      }
    }
    const reverseclick=()=>{
      let value=change;
     
     if(value===chang1){
      setChange(chang5)
     }
      else if(value===chang5){
        setChange(chang4)
      }else if(value===chang4){
        setChange(chang3)

      }else if(value===chang3){
        setChange(chang2)

      }else if(value===chang2){
        setChange(chang1)

      }
    }
    // useEffect(() => {
      
    //   setTimeout(()=>{
    //     click()
    //   },5000)
    // }, );
    return (
    <div className='principalchangeimg'>
    <button className='changebutton' onClick={reverseclick}><ion-icon name="chevron-back-outline"></ion-icon></button>
    <img src={change} className='changeimg' alt='imgs'/>
    <button className='changebutton' onClick={click}> <ion-icon name="chevron-forward-outline"></ion-icon> </button>
    </div>
  )
}
