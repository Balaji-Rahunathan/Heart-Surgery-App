import React from "react";
import Video from "../../../assets/video/hand_main.mp4";
import Button from "../../../assets/images/Buuton.svg";
import SwipeBlack from "../../../assets/images/swipe-arrow.svg";
import ReactPlayer from "react-player";
import "../exercise-neck/exercise-neck.scss";
import Sidebar from "../../../components/sidebar/sidebar.component";
import MenuButton from "../../../common_component/menu_button/menu_button.component";

export default class ExerciseHandsUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: "0.1",
      vid: "",
      seekslider: "",
      swipeClass: "swipe_icon",
      swipePrev: "swipe_icon_hidden",
      toggle: false,
    };
  }

  componentDidMount() {}

  onChange = (value) => {
    console.log(value);
    if (value > 0.3 && value < 0.6) {
      this.setState({
        swipeClass: "swipe_icon_hidden",
        swipePrev: "swipe_icon_hidden",
      });
    }
    if (value >= 0.6) {
      this.setState({
        swipeClass: "swipe_icon_hidden",
        swipePrev: "swipe_icon_prev",
      });
    }
    if (value <= 0.3) {
      this.setState({
        swipeClass: "swipe_icon",
        swipePrev: "swipe_icon_hidden",
      });
    }
    this.setState({ timing: value });
    this.player.seekTo(value);
  };

  ref = (player) => {
    this.player = player;
  };

  next = () => {
    this.props.history.push("/shoulder_movement");
  };

  handleMenuButtonClick = (data) => {
    this.setState({ toggle: data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="exercise_one_container">
          <Sidebar
            {...this.props}
            toggle={this.state.toggle}
            onClick={this.handleMenuButtonClick}
          />
          <div className="exercise_content">
            <MenuButton
              background="#008dfb"
              type="open"
              onClick={this.handleMenuButtonClick}
              style={{ position: "absolute", left: "0", top: "0" }}
            />
            <div className="exercise_head">
              <h1>Arm Raising</h1>
              {/* <div className="head_text">The Corono arteries of the heart are t
                            he left corona artery, right corona artery and circumflex artery. The 
                            Corono arteries of the heart are left corona artery, right corona artery
                             and circumflex artery.</div> */}
              <div className="head_text">
                <p>
                  Starting Position: Sit up straight and tall in an upright
                  chair.
                </p>
                <p className="spc">
                  Lift both arms out to the side and up over your head. Try to
                  clap your hands together. Do not use jerky movements.
                </p>

                <p className="spc">Repeat 2 to 3 times.</p>
              </div>
            </div>
            <div className="video_container">
              <ReactPlayer
                width="100%"
                height="100%"
                url={Video}
                ref={this.ref}
                playbackRate={0.5}
              />
            </div>
            <div className="exercise_body">
              <div className="video_controls_bar">
                <input
                  id="seekslider"
                  onChange={(eve) => this.onChange(eve.target.value)}
                  className="slider"
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.001"
                  value={this.state.timing}
                />
              </div>
              <div className={this.state.swipeClass}>
                <div className="swipe_text">Swipe</div>
                <img
                  src={SwipeBlack}
                  alt="swipe_black"
                  className="swipe_img"
                ></img>
              </div>
              <div className={this.state.swipePrev}>
                <img
                  src={SwipeBlack}
                  className="swipe_translate swipe_img"
                  alt="swipe_black"
                ></img>
                <div className="swipe_text">Swipe</div>
              </div>
            </div>
            <div className="exercise_footer" onClick={() => this.next()}>
              <img src={Button} alt="button" className="next_btn"></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
