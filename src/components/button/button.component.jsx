import React from "react";
import { Link } from "react-router-dom";

import "./button.styles.scss";

const Button = ({ href, text, handleClick }) => {
  return (
    <Link to={href}>
      <button className='button go-home' onClick={handleClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
