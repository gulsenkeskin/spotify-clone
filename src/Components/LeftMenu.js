import React from 'react'
import "../Styles/LeftMenu.css"
import {FaSpotify,FaEllipsisH} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"


 function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i><FaSpotify></FaSpotify></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH></FaEllipsisH></i>
        </div>
        <div className='searchBox'>
            <input type="text" placeHolder="Search...">
                <i><BiSearchAlt></BiSearchAlt></i>
            </input>
        </div>

    </div>
  )
}
export default {LeftMenu}