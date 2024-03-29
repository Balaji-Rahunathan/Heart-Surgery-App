import React from "react";
import "./stage.component.scss";
import ArrowImage from '../../assets/images/swipe-arrow-blue.svg'

const Stage = (props) => {
  const { stage, description, src, feel } = props;
  return (
    <div className="stage_container">
      <div className="stage_title">{stage}</div>
      {src && (
        <div className="stage_image_conatiner">
          <img src={ArrowImage} atl="swiper_arrow_left" className="swiper_arrow_left" />
          <img
            src={src.default}
            alt="stage_image"
            className="stage_image"
          />
          <img src={ArrowImage} atl="swiper_arrow_right" />
        </div>
      )}
      <div className="stage_description">{description}</div>

      {feel && (
        <div className="stage_feel_container">
          <div className={`stage_feel_wrapper ${feel !== "Light" && "bg_red"}`}>
            <div className="stage_feel_description">
              The excercise should feel
            </div>
            <div className="stage_feel">{feel}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stage;
