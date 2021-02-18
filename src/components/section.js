import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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

export default MySection
