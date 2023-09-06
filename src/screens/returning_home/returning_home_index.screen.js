import React from "react";
import "./returning_home_index.screen.scss";
import IndexImage from "../../assets/images/returning_home/returning_home_main1.png";
import Container from "../../common_component/container/container.component";
import NextButton from "../../common_component/next_button/next_button.component";

const ReturningHomeIndex = (props) => {
  return (
    // <Container>
    <div
      className="returning_home_index_container"
      style={{ position: "relative" }}
    >
      <div className="returning_home_index_head">
        <p className="returning_home_index_head_text">Returning Home</p>
      </div>
      <div className="returning_home_index_content"></div>
      <NextButton
        prev
        onClick={() => props.history.push("/heel_raises")}
        style={{
          position: "absolute",
          top: "auto",
          bottom: "20px",
          left: "10px",
          right: "auto",
        }}
      />
    </div>
    // </Container>
  );
};

export default ReturningHomeIndex;
