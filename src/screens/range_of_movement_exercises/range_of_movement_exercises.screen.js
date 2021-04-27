import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import HeadImage from "../../assets/images/returning_home/Group 2.png";

const RangeofMovementExercises = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/neck_mobilisation");
  };

  const handleMenuButtonClick = (data) => {
    console.log(data);
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
    <div className="resuming_home_screen">
      <div className="resuming_home_conatiner">
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container">
          <div class="header">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
          </div>
          <MenuButton
            background="#008DFB"
            type="open"
            onClick={handleMenuButtonClick}
          />

          <div className="slider_container">
            <div className="resuming_home_head_container">
              <div className="resuming_home_head_title_container">
                <div
                  className="resuming_home_head_title"
                  style={{ padding: "0.5em 50px" }}
                >
                  Range of movement exercises
                </div>
              </div>
              {/* <div className="resuming_home_head_image_container">
                <img
                  src={HeadImage}
                  alt="head_image"
                  className="resuming_home_head_image"
                />
              </div> */}
              <div className="resuming_home_head_content_container">
                <div className="resuming_home_head_content">
                  <p>
                    These are simple exercises to strengthen and stretch your
                    muscles
                  </p>
                  <p>
                    It’s also a good idea to continue your deep breathing
                    exercises (page 12) often during the day. Do all movements
                    slowly and smoothly so that they do not cause pain.
                  </p>
                  <p>
                    Do not attempt the exercises if you have a temperature or if
                    you feel excessively tired or breathless.
                  </p>
                  <p>
                    There are two sets of exercises: four sitting exercises and
                    four standing exercises. Try to do each group at least once
                    per day. You could do the sitting exercises in the morning
                    and the standing exercises later in the day. Choose a
                    comfortable routine.
                  </p>
                </div>
              </div>
            </div>
            <NextButton
              prev
              onClick={() => props.history.push("/after_surgery")}
              style={{
                position: "absolute",
                top: "auto",
                bottom: "20px",
                left: "10px",
                right: "auto",
              }}
            />
            <NextButton
              onClick={next}
              style={{
                position: "absolute",
                top: "auto",
                bottom: "20px",
                left: "auto",
                right: "20px",
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RangeofMovementExercises;
