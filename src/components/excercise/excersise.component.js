import "./excercise.comonent.scss";
import React from "react";
import Video from "../../assets/video/3.mp4";
import Button from "../../assets/images/Buuton.svg";
import SwipeBlack from "../../assets/images/swipe-arrow.svg";
import ReactPlayer from "react-player";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";

export default class Excercise extends React.Component {
  constructor(props) {
    console.log(props);
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
  ref = (player) => {
    this.player = player;
  };

  componentDidMount() {
    this.setState({ timing: 0 });
    setTimeout(()=>{
      this.setState({timing: 0.1})
    }, 500)
  }

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

  next = () => {
    this.setState({
      timing: 0,
      swipeClass: "swipe_icon",
      swipePrev: "swipe_icon_hidden",
    });
    setTimeout(()=>{
      this.setState({timing: 0.1})
    }, 500)
    this.props.history.push(this.props.nextPageLink);
  };

  prev = () => {
    this.setState({
      timing: 0,
      swipeClass: "swipe_icon",
      swipePrev: "swipe_icon_hidden",
    });
    setTimeout(()=>{
      this.setState({timing: 0.1})
    }, 500)
    this.props.history.push(this.props.prevPageLink);
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
              <div className="postion_container">{this.props.position}</div>
              <div className="exercise_name_container">
                {this.props.excerciseName}
              </div>
              <div className="head_text">
                {this.props.content.map((content) => (
                  <p className="content_text">{content}</p>
                ))}
              </div>
            </div>
            <div
              className="video_container"
              style={{ width: "60vw", height: "60vw" }}
            >
              <ReactPlayer
                width="100%"
                height="100%"
                url={this.props.videoUrl.default}
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
            <div className="exercise_footer">
              <img
                src={Button}
                alt="button"
                onClick={() => this.prev()}
                className="prev_btn"
              />
              <img
                src={Button}
                alt="button"
                onClick={() => this.next()}
                className="next_btn"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
