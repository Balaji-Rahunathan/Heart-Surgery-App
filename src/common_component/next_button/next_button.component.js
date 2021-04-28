import React from "react";
import Button from "../../assets/images/Buuton.svg";
import "./next_button.component.scss";

const NextButton = (props) => {
  const { onClick, style, prev } = props;
  return (
    <div>
      {prev ? (
        <img
          src={Button}
          alt="next_button"
          className="red-circle4-prev prev_button"
          onClick={onClick}
          style={style}
        />
      ) : (
        <img
          src={Button}
          alt="next_button"
          className="red-circle4 next_button"
          onClick={onClick}
          style={style}
        />
      )}
    </div>
  );
};

export default NextButton;
