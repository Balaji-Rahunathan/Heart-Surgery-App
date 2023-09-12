import React, { useState, useEffect } from "react";
import HomeWalkingImage from "../../assets/images/home walking/home-walk.svg";
import Container from "../../common_component/container/container.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import "./home_walking_programme.screen.scss";
import NextButton from "../../common_component/next_button/next_button.component";

const HomeWalkingProgramme = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/returning_home/home_walking");
  };
  const handleMenuButtonClick = (data) => {
    settoggle(data);
  };
  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container");
    setTimeout(() => {
      el.addEventListener("scroll", () => {
        var elwinScroll = el.scrollTop;
        var elheight = el.scrollHeight - el.clientHeight;
        var elscrolled = (elwinScroll / elheight) * 100;
        // console.log(elwinScroll, elheight, elscrolled)
        document.getElementById("myBar").style.width = elscrolled + "%";
        if (elscrolled > 92) {
          if (timerId) {
            return;
          }
          timerId = setTimeout(function () {
            setshowNextButton(true);
            timerId = undefined;
          }, 500);
        } else {
          if (timerId) {
            return;
          }
          timerId = setTimeout(function () {
            setshowNextButton(false);
            timerId = undefined;
          }, 500);
        }
      });
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <div className="hwp_screen">
      <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
      <div className="hwp_container">
        <div class="header">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>
        <div className="hwp_wrapper">
          <Container className="swiper_container">
            {/* <MenuButton
              background="#008DFB"
              type="open"
              onClick={handleMenuButtonClick}
            /> */}
            <div className="slider_container">
              <div className="hwp_head_container">
                <p className="hwp_head_text">Home Walking Programme</p>
              </div>
              <div className="hwp_image_container">
                <img src={HomeWalkingImage} className="hwp_image"></img>
              </div>
              <div className="hwp_image_content_container">
                <p className="hwp_image_content_text">
                  The following walking table will guide you on how soon to
                  start walking, how many minutes to start with, and how you
                  should feel as you walk.{" "}
                  <b>Walk on the flat for the first three weeks.</b>
                </p>
              </div>
              <div className="hwp_title_container">
                <p className="hwp_title_text">
                  Week 1
                </p>
              </div>
              <div className="hwp_image_content_container">
                <p className="hwp_image_content_text">
                  Do only as much walking as you did while in hospital.
                    </p>
              </div>

              <div className="hwp_title_container">
                <p className="hwp_title_text">Week 2 onwards</p>
              </div>

              <div className="hwp_image_container">
                {/* <img src={RecoverImage} className="hwp_image"></img> */}
              </div>

              <div className="hwp_image_content_container">
                <p className="hwp_image_content_text">
                  Follow the stages below – when you feel one stage is easy
                  for 2 days in a row, move on to the next stage.
                    </p>
              </div>
              <NextButton
                onClick={next}
                style={{
                  position: "absolute",
                  top: "auto",
                  bottom: "5px",
                  left: "auto",
                  right: "20px",
                }}
              />
              <NextButton
                prev
                onClick={() =>
                  props.history.push(
                    "/returning_home/home_exercise_after_surgery"
                  )
                }
                style={{
                  position: "absolute",
                  top: "80px",
                  bottom: "auto",
                  left: "10px",
                  right: "auto",
                }}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomeWalkingProgramme;
