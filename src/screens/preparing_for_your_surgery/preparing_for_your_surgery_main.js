import React, { useState, useEffect } from "react";
import StressImage from "../../assets/images/exercise_target_for_life/Group 5.svg";
import RecoverImage from "../../assets/images/exercise_target_for_life/Group 6.svg";
import DepressionImage from "../../assets/images/exercise_target_for_life/Group 7.svg";
import Container from "../../common_component/container/container.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import "../for_you_and_your_partner/for_you_and_your_partner.screen.scss";
import NextButton from "../../common_component/next_button/next_button.component";
import Relax from "../../assets/images/Resuming Home/Group 5.png";
import Breath from "../../assets/images/update/breath.svg";
import Sence from "../../assets/images/update/sence.svg";
import Imagin from "../../assets/images/update/imagin.svg";
import Lap from "../../assets/images/update/lap.svg";
import Fist from "../../assets/images/update/fist.svg";

const PreparingForSurgeryMain = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);
  const next = () => {
    props.history.push("/preparing_for_surgery");
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

  const flexStyle = {
    display: "flex",
    paddingTop: "3em",
    flexDirection: "column",
  };
  return (
    <div className="fyandyp_screen">
      <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
      <div className="fyandyp_container">
        <div class="header">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>
        <div className="fyandyp_wrapper">
          <Container className="swiper_container">
            <MenuButton
              background="#008DFB"
              type="open"
              onClick={handleMenuButtonClick}
            />

            <div className="slider_container" style={{ position: "relative" , paddingTop:'1em'}}>
              <div className="fyandyp_title_container">
                <p
                  className="fyandyp_title_text rt_title_text"
                  style={{
                    fontWeight: "600",
                    fontSize: "22px",
                    color: "#00a1fb",
                    paddingTop: "2em",
                  }}
                >
                  Preparing for your Surgery
                </p>
              </div>

              <div className="fyandyp_image_container">
                <img src={Relax} className="fyandyp_image" style={{width:'80%'}}></img>
              </div>

              <div className="fyandyp_image_content_container">
                <p className="fyandyp_image_content_text">
                  Please bring ear plugs to help you rest and sleep. Do NOT
                  bring any valuables into the hospital e.g. large amounts of
                  cash, jewellery, credit cards or a cheque book. A little money
                  is enough for your day-to-day needs. Be careful of your
                  glasses, dentures and hear- ing aids. Send your outdoor
                  clothes home.
                </p>
              </div>

              <NextButton
                prev
                onClick={() =>
                  props.history.push("/preparing_for_surgery_home")
                }
                style={{
                  position: "absolute",
                  top: "auto",
                  bottom: "20px",
                  left: "20px",
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
                  <div className="slider_container" style={flexStyle}>
                    <div className="fyandyp_image_content_container">
                      <p className="fyandyp_image_content_text">
                        IF buying pyjamas or nightdresses for your hospital
                        stay, make sure they are big enough. Remember your
                        movements will be restricted due to your surgical cuts.
                        Bring a pair of slippers with non-skid soles that fits
                        loosely as your feet may swell after surgery.
                      </p>
                      <p
                        className="fyandyp_image_content_text"
                        style={{ paddingTop: "20px" }}
                      >
                        Chaplains of all denominations are available. If you
                        wish to contact one, please ask your nurse.
                      </p>

                      <p
                        className="fyandyp_image_content_text"
                        style={{ padding: "20px", backgroundColor:'#B6DEFF', borderRadius:'10px', marginTop:'20px'}}
                      >
                        t is recommended that you nominate one member of your
                        family as spokesperson. That person may then phone the
                        hospital to enquire about you during your stay. Other
                        family members, friends and neighbours should then
                        contact your nominated spokesperson
                      </p>
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
    </div>
  );
};

export default PreparingForSurgeryMain;
