import React from "react";
import "./workCard.css";
import { NavLink } from "react-router-dom";

const workCard = (props) => {
  return (
    <div className="projec-card">
      <img src={props.image} alt="avata" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.desc}</p>
        <div className="pro-btn">
          <NavLink to={props.url} target="blank" className="btn">
            View site
          </NavLink>
          <NavLink to={props.source} target="blank" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default workCard;
