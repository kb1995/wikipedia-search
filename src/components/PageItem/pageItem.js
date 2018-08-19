import React from "react";
import "./pageItem.css";

const PageItem = props => {
  return (
    <div>
      <a href={props.url} target="_blank">
        <li className="list-group-item animated fadeIn">
          <p className="heading">{props.heading}</p>
          <p className="description">{props.description}</p>
        </li>
      </a>
    </div>
  );
};

export default PageItem;
