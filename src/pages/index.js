import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import MySection from "../components/section"

import ReactFullpage from '@fullpage/react-fullpage';
import '../../node_modules/pattern.css/dist/pattern.css'

import logo from '../images/ernesto_perez_logo.svg';
import uiux from '../images/uiux.svg';
import iphone from '../images/IphoneX.svg';
import laptop from '../images/laptop.svg';
import ipad from '../images/iPad.svg'; 
import niceBackground from '../images/niceBackground.svg';


const IndexPage = () => { 
  
  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState(0);
  const onLeave = (origin, destination, direction) => setOrigin(destination.index);
  const afterLoad = (origin, destination, direction) => setDestination(destination.index);
  const anchors = ["home", "designSystem", "webApp", "mobileApp", "contact"];

   console.log(origin)

  return(
    <>
    <Header pageactive={origin} />
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
      <div className="pageNumber">{'0'+(origin+1)}</div>
      <div className="whiteDots pattern-diagonal-lines-sm"></div>
      <img className="niceBackground" src={niceBackground}></img>
      <img src={uiux} className="fixedText"></img>
      <div className="backPatterns pattern-vertical-lines-xl"></div>
    </div>
  </>
    )
  }

export default IndexPage
