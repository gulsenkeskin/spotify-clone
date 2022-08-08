import React from 'react'
import "../Styles/LeftMenu.css"
import {FaSpotify,FaEllipsisH} from "react-icons/fa"


 function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i>FaSpotify</i>
            <h2>FaSpotify</h2>
            <i>FaEllipsisH</i>
        </div>
        <div className='searchBox'></div>

    </div>
  )
}
export default {LeftMenu}