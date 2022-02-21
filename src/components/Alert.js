import React from 'react'
import './Components.css'

export default function Alert(props) {
  
  return (
    <div style={{height: '15px'}}>
      {props.alert && <div id='alert'>
        <p>{props.alert.msg}</p>
      </div>}
    </div>
  )
}
