import React, { useState, useEffect } from "react";
import { calenderContents } from "../../helpers/content";
import NextButton from "../../common_component/next_button/next_button.component";
import Calender from "../../components/calender/calender.component";
import ResumingHomeImage from "../../assets/images/Resuming Home/Group 2.svg";
import Plan from "../../assets/images/update/plan.svg";
import Rest from "../../assets/images/update/rest.svg";
import Container from "../../common_component/container/container.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";

const ResumingHome = (props) => {
  const [showNextButton, setshowNextButton] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [load, setLoad] = useState(false);
  const next = () => {
    props.history.push("/returning_home/getting_back_to_normal");
  };
  const handleMenuButtonClick = (data) => {
    settoggle(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      var timerId;
      let el = document.querySelector(".swiper_container");
      el.addEventListener("scroll", () => {
        var elwinScroll = el.scrollTop;
        var elheight = el.scrollHeight - el.clientHeight;
        var elscrolled = (elwinScroll / elheight) * 100;
        console.log(elwinScroll, elheight, elscrolled);
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
          <MenuButton
            background="#008DFB"
            type="open"
            onClick={handleMenuButtonClick}
          />

          <div class="header">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
          </div>
          <div className="slider_container" style={{ display: "block" }}>
            <div className="resuming_home_title">
              <p className="resuming_home_title_text">
                Resuming home activities after surgery
              </p>
            </div>
            <div className="resuming_home_image_container">
              <img
                className="resuming_home_image"
                src={ResumingHomeImage}
                alt="resuming_home"
              ></img>
            </div>
            <div className="resuming_home_content">
              <p className="resuming_home_content_text">
                The programme opposite is a sample guide to help you find a
                balance, as you return to your normal activities at home
                following heart surgery.
              </p>
            </div>

            <NextButton
              prev
              onClick={() => props.history.push("/returning_home")}
              style={{
                position: "absolute",
                top: "80px",
                bottom: "auto",
                left: "10px",
                right: "auto",
              }}
            />
          </div>

          {load && (
            <>
              <div
                className="slider_container"
                style={{ display: "block", paddingTop: "2em" }}
              >
                <div
                  className="resuming_home_head_image_container"
                  style={{ maxWidth: "300px", margin: "0 auto" }}
                >
                  <img
                    src={Plan}
                    alt="head_image"
                    className="resuming_home_head_image"
                  />
                </div>

                <div className="resuming_home_content_container">
                  <div className="resuming_home_content_title">
                    <p className="resuming_home_content_title_text">
                      Prioritise
                    </p>
                  </div>
                  <div className="resuming_home_content">
                    <p className="resuming_home_content_text">
                      Think about the tasks you do. Are they important? Can
                      someone else do them? Can they be done more easily?
                    </p>
                  </div>
                </div>
                <div className="resuming_home_content_container">
                  <div className="resuming_home_content_title">
                    <p className="resuming_home_content_title_text">Plan </p>
                  </div>
                  <div className="resuming_home_content">
                    <p className="resuming_home_content_text">
                      Plan your day and week, spread out activities and allow
                      more time for difficult tasks. Continue to approach new
                      activities gradually.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="slider_container"
                style={{ display: "block", paddingTop: "2em" }}
              >
                <div
                  className="resuming_home_head_image_container"
                  style={{ maxWidth: "300px", margin: "0 auto" }}
                >
                  <img
                    src={Rest}
                    alt="head_image"
                    className="resuming_home_head_image"
                  />
                </div>
                <div className="resuming_home_content_container">
                  <div className="resuming_home_content_title">
                    <p className="resuming_home_content_title_text">
                      Pace yourself
                    </p>
                  </div>
                  <div className="resuming_home_content">
                    <p className="resuming_home_content_text">
                      Take a rest every day. Take extra breaks during activities
                      to gradually increase your strength and prevent you from
                      feeling tired or strained. Continue with your exercises.
                    </p>
                  </div>
                </div>

                <div className="resuming_home_content_container">
                  <div className="resuming_home_content_title">
                    <p className="resuming_home_content_title_text">
                      Positioning
                    </p>
                  </div>
                  <div className="resuming_home_content">
                    <p className="resuming_home_content_text">
                      Organise your workspace to conserve energy. Sit where
                      possible, limit bending and reaching and use equipment
                      such as long handle aids or trolleys to move objects.
                    </p>
                  </div>
                </div>
              </div>

              {calenderContents.map((data, index) => (
                <div className="slider_container" key={index}>
                  <Calender {...data} />
                </div>
              ))}

              {showNextButton && (
                <NextButton
                  onClick={next}
                  style={{
                    position: "fixed",
                    top: "auto",
                    bottom: "20px",
                    left: "auto",
                    right: "20px",
                  }}
                />
              )}
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ResumingHome;
