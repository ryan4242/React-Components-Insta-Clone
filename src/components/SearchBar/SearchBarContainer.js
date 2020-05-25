// You do not need to change any code in this file
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="social logo">
        <FontAwesomeIcon icon={faInstagram} />
        <p>| Instagram</p>
      </div>
      <form className="search-form" onSubmit={props.submit}>
        <input
          type="text"
          placeholder= "Search"
          value= {props.value}
          onChange= {props.change}
          onKeyUp= {props.display}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
