import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ReactFullpage from '@fullpage/react-fullpage';
import '../../node_modules/pattern.css/dist/pattern.css'

import logo from '../images/ernesto_perez_logo.svg';
import uiux from '../images/uiux.svg';
import iphone from '../images/IphoneX.svg';
import laptop from '../images/laptop.svg';
import ipad from '../images/iPad.svg'; 
import niceBackground from '../images/niceBackground.svg';

function MySection(props){
  return (
    <div className="section">
      <div className="mainText">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <div className="redDots pattern-dots-md"></div>
      </div>
      <img className={props.class} src={props.screen}></img>
    </div>
  );
};


const IndexPage = () => { 
  
const anchors = ["home", "designSystem", "webApp", "mobileApp", "contact"];

const [origin, setOrigin] = useState(0);
const [destination, setDestination] = useState(0);

const onLeave = (origin, destination, direction) => setOrigin(origin.index);
const afterLoad = (origin, destination, direction) => setDestination(destination.index);

console.log(origin)

  return(
    <>
    <header className="header">
      <img src={logo}></img>
      <ul className="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">Design system</a></li>
      <li><a href="#">Web app</a></li>
      <li><a href="#">Mobile app</a></li>
      <li><a href="#">Contact</a></li>
      </ul>
    </header>

    <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    onLeave={onLeave.bind(this)}
    afterLoad={afterLoad.bind(this)}
    render={({ state, fullpageApi }) => {
      return (
          <div>
          <MySection title={"Hi I'm Ernesto"} description={"A system-minded Senior Product Designer with visual design, development, and business background."} screen={iphone} class={"iphone"} />
          <MySection title={"Design system"} description={"A system-minded Senior Product Designer with visual design, development, and business background."} screen={laptop} class={"laptop"}  />
          <MySection title={"Web app"} description={"A system-minded Senior Product Designer with visual design, development, and business background."} screen={ipad} class={"ipad"}  />
          <MySection title={"Mobile app"} description={"A system-minded Senior Product Designer with visual design, development, and business background."} screen={iphone} class={"iphone"}  />
          </div>
      );
    }}
  />
    <div>
      <div className="pageNumber">{'0'+(destination+1)}</div>
      <div className="whiteDots pattern-diagonal-lines-sm"></div>
      <img className="niceBackground" src={niceBackground}></img>
      <img src={uiux} className="fixedText"></img>
      <div className="backPatterns pattern-vertical-lines-xl"></div>
    </div>
  </>
    )
  }

export default IndexPage
