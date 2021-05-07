import React, { useState, useEffect } from "react";
import { returnHomeContent } from "../../helpers/content";
import Container from "../../common_component/container/container.component";
import "../resuming_home/resuming_home.screen.scss";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import Group from "../../components/group/group.component";
import HeadImage from "../../assets/images/returning_home/Group 2.png";

const GettingBacktoNormal = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/returning_home/home_exercise_after_surgery");
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
                <div className="resuming_home_head_title">
                  Getting back to normal
                </div>
              </div>

              <div style={{fontWeight:'bold', padding:'20px 0'}}>Concentration and memory problems</div>


              <div className="resuming_home_head_image_container">
                <img
                  src={HeadImage}
                  alt="head_image"
                  className="resuming_home_head_image"
                />
              </div>
              <div className="resuming_home_head_content_container">


                <div className="resuming_home_head_content">
                  After your heart surgery you may find that your concentration
                  is poor. This usually returns to normal during your recovery
                  at home. Some people also find their memory is affected but
                  this is usually temporary and gradually resolves within six
                  months of your surgery. If this problem persists please speak
                  to your GP. Some people also find their memory s affected but
                  this is usually temporary and gradually resolves within six
                  months of your surgery. If this problem persists please speak
                  to your GP
                </div>
              </div>
            </div>
            <NextButton
              prev
              onClick={() => props.history.push("/returning_home/resuming_home")}
              style={{
                position: "absolute",
                top: "90px",
                bottom: "auto",
                left: "10px",
                right: "auto",
              }}
            />
          </div>
          {load && (
            <>
              {returnHomeContent.map((data, index) => {
                return (
                  <div className="slider_container">
                    <Group {...data} />
                  </div>
                );
              })}

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

export default GettingBacktoNormal;
