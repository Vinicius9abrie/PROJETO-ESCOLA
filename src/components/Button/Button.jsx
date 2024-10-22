import React from 'react'
import "./Button.css"
export default function Btn(props) {
  return (
    <>
    <button className={props.variant} onClick={props.onClick}>{props.children}</button>
    </> 
  )
}
