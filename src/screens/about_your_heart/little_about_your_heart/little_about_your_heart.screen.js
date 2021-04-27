import React, { useState, useEffect } from "react";
import Container from "../../../common_component/container/container.component";
import MenuButton from "../../../common_component/menu_button/menu_button.component";
import Sidebar from "../../../components/sidebar/sidebar.component";
import NextButton from "../../../common_component/next_button/next_button.component";
import HeadImage from "../../../assets/images/returning_home/Group 2.png";

const LittleAboutYourHeart = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/preparing_for_surgery_home");
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
                  Let’s begin by learning a little about your heart
                </div>
              </div>
              <div className="resuming_home_head_image_container">
                <img
                  src={HeadImage}
                  alt="head_image"
                  className="resuming_home_head_image"
                />
              </div>
              <div className="resuming_home_head_content_container">
                <div className="resuming_home_head_content">
                  Your heart is a strong muscle located just beneath your
                  breastbone (sternum). Its job is to pump blood around your
                  body so every part of your body receives oxygen. To do this
                  job well your heart needs its own supply of oxygen rich blood.
                  It gets this from the coronary arteries, which lie on the
                  surface of your heart and surround your heart muscle.
                </div>
              </div>
            </div>
            <NextButton
              prev
              onClick={() => props.history.push("/about_your_heart")}
              style={{
                position: "absolute",
                top: "auto",
                bottom: "20px",
                left: "10px",
                right: "auto",
              }}
            />
          </div>
          {load && (
            <>
              <div
                className="slider_container"
                style={{ position: "relative" }}
              >
                <div className="resuming_home_head_container">
                  <div className="resuming_home_head_title_container">
                    <div className="resuming_home_head_title"></div>
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
                      <p style={{ padding: "1em" }}>
                        The coronary arteries are called the{" "}
                        <b>left coronary artery</b>, the{" "}
                        <b>circumflex artery</b> and the{" "}
                        <b>right coronary artery</b> (see picture below). Each
                        of them divides into smaller branches so all areas of
                        the heart muscle get a good supply of oxygen.
                      </p>
                      <p style={{ padding: "1em" }}>
                        Over time these arteries can get narrowed by a fatty
                        substance called plaque. This is called Coronary Artery
                        Disease. When this happens the heart muscle may not get
                        enough oxygen-rich blood and you may get angina (e.g.
                        shortness of breath, chest tightness, jaw pain or ache).
                      </p>
                      <p style={{ padding: "1em" }}>
                        If the angina continues, you may even have a heart
                        attack. When doctors feel the arteries are too badly
                        narrowed to treat with medications and lifestyle changes
                        alone, they recommend bypass surgery for you.
                      </p>
                    </div>
                  </div>
                </div>

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
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default LittleAboutYourHeart;
