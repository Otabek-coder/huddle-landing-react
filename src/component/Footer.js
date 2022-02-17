import React from 'react'
import { IconContext } from 'react-icons';
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'


export default function Footer() {
    return (
        <IconContext.Provider value={{color:"#fff", size: "2.5em"}}>
    <div>
    <footer>
    <div class="cns-container">
    <li>< MdFacebook /></li>
      <li><AiFillTwitterCircle /></li>
      <li><AiFillInstagram /></li>
    </div>
  </footer>
  </div>
  </IconContext.Provider>
  )
}
