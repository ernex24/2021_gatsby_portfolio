import React, { useState } from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import MySection from "../components/section";

import ReactFullpage from '@fullpage/react-fullpage';
import '../../node_modules/pattern.css/dist/pattern.css';

import phone from '../images/iPhone.png';
import laptop from '../images/Macbook.png';
import arrowDown from '../images/arrow_down.svg';
import arrowUp from '../images/arrow_up.svg';
import niceBackground from '../images/niceBackground.svg';

const moveDown = () => {
  // console.log(window.fullpage_api)
  window.fullpage_api.moveSectionDown();
}

const moveUp = () => {
  window.fullpage_api.moveSectionUp();
}


const IndexPage = () => { 
  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState(0);
  const onLeave = (origin, destination, direction) => setOrigin(destination.index);
  const afterLoad = (origin, destination, direction) => setDestination(destination.index);
  const anchors = ["home", "designSystem", "webApp", "mobileApp", "contact"];


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
            <MySection 
              title={"Hi I'm Ernesto"}
              subtitle={"Senior UI UX Engineer"} 
              description={"A system-minded Senior Product Designer with visual design, development, and business background."}
              cta={"Download my cv"} 
              link={"https://ernesto-perez.com/cv_ernesto_perez.pdf"} 
              screen={phone} 
              class={"phone"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Design system"}
              subtitle={"Project"} 
              description={"A system-minded Senior Product Designer with visual design, development, and business background."} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={laptop} 
              class={"laptop"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Web app"} 
              subtitle={"Project"} 
              description={"A system-minded Senior Product Designer with visual design, development, and business background."} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={laptop} 
              class={"laptop"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Mobile app"}
              subtitle={"Project"} 
              description={"A system-minded Senior Product Designer with visual design, development, and business background."} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={phone} 
              class={"phone"} 
              pageactive={origin} 
              pageloaded={destination}/>
            </div>
        );
      }}
    />
    <div>
      <div className="pageNumber">{'0'+(origin+1)}</div>
      <img className="niceBackground" src={niceBackground}></img>
      <img onClick={() => moveDown()} className={ origin === 3 ? " hide" : " arrowDown"} src={arrowDown}></img>
      <img onClick={() => moveUp()} className={ origin === 0 ? " hide" : " arrowUp"  } src={arrowUp}></img>
    </div>
  </>
    )
  }

export default IndexPage
