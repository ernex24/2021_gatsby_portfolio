import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/ernesto_perez_logo.svg';
import linkedin from '../images/linkedin.svg';
import dribbble from '../images/dribbble.svg';
import instagram from '../images/instagram.svg';

const moveTo = (section) => {
  window.fullpage_api.moveTo(section);
  // console.log(window.fullpage_api)
}

const Header = (props) => (
  <header className="header">
    <div className="mainHeader">
    <div><a href="#home" onClick={() => moveTo(1)} ><img className="logo" src={logo}></img></a></div>
    <ul className="nav">

      <li><a href="#home" 
             className={ props.pageactive === 0 ? "navactive" : " "  } 
             onClick={() => moveTo(1)} >Home</a></li>

      <li><a href="#designSystem" 
             className={ props.pageactive === 1 ? "navactive" : " "  }  
             onClick={() => moveTo(2)} >Design system</a></li>

      <li><a href="#webApp" 
             className={ props.pageactive === 2 ? "navactive" : " "  } 
             onClick={() => moveTo(3)} >Web app</a></li>

      <li><a href="#mobileApp" 
             className={ props.pageactive === 3 ? "navactive" : " "  } 
             onClick={() => moveTo(4)} >Mobile app</a></li>

      <li><a href="#contact" 
             className={ props.pageactive === 4 ? "navactive" : " "  } 
             onClick={() => moveTo(1)} >Contact</a></li>

    </ul>
    </div>
    <ul className="socialnav">
      <li><img src={linkedin}></img></li>
      <li><img src={dribbble}></img></li>
      <li><img src={instagram}></img></li>
    </ul>
  </header>
)

export default Header
