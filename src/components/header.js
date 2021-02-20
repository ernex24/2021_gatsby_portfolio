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

      <li><a href="mailto:ernex24@gmail.com" 
             className={ props.pageactive === 4 ? "navactive" : " "  } 
             >Contact</a></li>

    </ul>
    </div>
    <ul className="socialnav">
      <li><a href="https://www.linkedin.com/ernesto1984" target="_blank"><img src={linkedin}></img></a></li>
      <li><a href="https://dribbble.com/ernex1984" target="_blank"><img src={dribbble}></img></a></li>
      <li><a href="https://www.instagram.com/ernex_ux_ui" target="_blank"><img src={instagram}></img></a></li>
    </ul>
  </header>
)

export default Header
