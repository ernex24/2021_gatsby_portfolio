import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Bounce from 'react-reveal/Bounce';

function MySection(props){
  const [show, setShow] = useState(false);
  const origin = props.pageactive
  const destination =  props.pageloaded
  console.log("origin " + origin + " destination " + destination)

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    origin === destination ? setShow(true) : setShow(false)
  });
  
  return (
    <div className="section">
      <div className="mainText">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <div className="redDots pattern-dots-md"></div>
      </div>
      <Bounce right when={show}>
      <img className={props.class} src={props.screen}></img>
      </Bounce>
    </div>
   
  );
};

export default MySection

