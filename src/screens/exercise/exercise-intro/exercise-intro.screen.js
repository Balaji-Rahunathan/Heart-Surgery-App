import React from "react";
import "./exercise-intro.screen.scss";
import ExerciseImg from "../../../assets/images/work_place.svg";
import { getNodeText } from "@testing-library/react";
import Sidebar from "../../../components/sidebar/sidebar.component";
import MenuButton from "../../../common_component/menu_button/menu_button.component";
import NextButton from "../../../common_component/next_button/next_button.component";

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  next = () => {
    this.props.history.push("/after_surgery");
  };  

  handleMenuButtonClick = (data) => {
    this.setState({ toggle: data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="exercise_container">
          <Sidebar
            {...this.props}
            toggle={this.state.toggle}
            onClick={this.handleMenuButtonClick}
          />
          <MenuButton
            background="white"
            type="open"
            onClick={this.handleMenuButtonClick}
            style={{ position: "absolute", left: "0", top: "0" }}
          />
          <div className="exercise_content">
            <div className="exercise_head">
              <h1 className="title">After Surgery</h1>
              <div className="head_text">
              </div>
            </div>
            <div style={{height:'90px'}}></div>
            {/* There are two sets of exercises - four sitting exercises and four standing exercises. Try to do each group at least once per day. You could do the sitting exercises in the morning and the standing exercises later in the day. Choose a comfortable routine. */}
            <div className="exercise_body">
              <img
                src={ExerciseImg}
                alt="exercise_img"
                className="exercise_img"
              ></img>
            </div>
            <div className="exercise_footer">
              <div className="see_more_btn" onClick={() => this.next()}>
                See More
              </div>
            </div>

            <NextButton
              prev
              onClick={()=>this.props.history.push("/preparing_for_surgery")}
              style={{
                position: "fixed",
                top: "auto",
                bottom: "20px",
                left: "10px",
                right: "auto",
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
