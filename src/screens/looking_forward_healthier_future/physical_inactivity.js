import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import HealthyEating from "../../assets/images/looking_forward_healthier_future/Group 6.svg";
import "./page_three.screen.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NextButton from "../../common_component/next_button/next_button.component";
import Exec from "../../assets/images/update/cardio.svg";
import Fish from "../../assets/images/update/fish.svg";
import Fruit from "../../assets/images/update/fruit.svg";
import Fat from "../../assets/images/update/fat.svg";
import Sugar from "../../assets/images/update/sugar.svg";
import Fiber from "../../assets/images/update/fibre.svg";
import Salt from "../../assets/images/update/salt.svg";
import Family from "../../assets/images/update/family.svg";

const PhysicalInactivity = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/medications_for_your_heart");
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
    <div className="page_three_screen">
      <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />

      <Container className="swiper_container">
        {/* <MenuButton
          background="#008DFB"
          type="open"
          onClick={handleMenuButtonClick}
        /> */}
        <div class="header">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>

        <div className="slider_container" style={{ position: "relative" }}>
          <div className="pths_head_container">
            <p
              className="pths_head_text"
              style={{
                padding: "0.8em 60px",
                fontWeight: "600",
                fontSize: "24px",
                color: "#00a1fb",
              }}
            >
              Physical Inactivity
            </p>
          </div>

          <div className="pths_content_container">
            <p className="pths_content_text">
              Inactivity is a major risk factor for Coronary Artery Disease.
              Regular exercise slows the clogging of the body’s arteries. The
              fact that you have heart disease does not mean that it is too late
              to start exercising. The opposite is true in fact, as making time
              for regular physical activity now can reduce your risk of heart
              and health problems in the future.
            </p>
            <div
              className="pths_head_container"
              style={{ padding: "2em 2em 0 2em" }}
            >
              <img src={Exec} alt="healthy_eating" className="pths_image"></img>
            </div>
          </div>

          {/* <NextButton
            prev
            onClick={() =>
              props.history.push("/looking_forward_healthier_future/alcohol")
            }
            style={{
              position: "absolute",
              top: "auto",
              bottom: "20px",
              left: "20px",
              right: "auto",
            }}
          /> */}
        </div>

        {load && (
          <>
            <div className="slider_container">
              <div
                className="pths_content_container"
                style={{ paddingTop: "2em" }}
              >
                <p className="pths_content_text blue-clro">
                  A highly recommended information and exercise training
                  programme called Cardiac Rehabilitation, may be available in
                  your area. It is very popular with heart patients as it has
                  been shown to reduce anxiety, and to improve confidence,
                  physical well-being and fitness. Please talk to the medical
                  team if you would like to take part as it is available to
                  people who have had most types of heart surgery.
                </p>
              </div>
              <div className="pths_title_container">
                <p className="pths_title_text" style={{ paddingTop: "2em" }}>
                  Why Exercise?
                </p>
              </div>
              <div className="pths_content_container">
                <p className="pths_content_text">
                  Exercise and physical activity protects you by:
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Keeping
                  your body weight healthy.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Keeping
                  your body weight healthy.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  Lowering your blood pressure.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Making
                  your blood less likely to clot.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  Lowering your stress, depression and anxiety.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  Improving your circulation, muscle tone,strength and
                  flexibility.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  Improving the way you feel about yourself.
                </p>
              </div>
            </div>

            <div className="slider_container" style={{ position: "relative" }}>
              <div className="pths_title_container">
                <p className="pths_title_text" style={{ paddingTop: "1em" }}>
                  Family History of Coronary Artery Disease
                </p>
              </div>
              <div
                className="pths_head_container"
                style={{ padding: "2em 2em 0 2em" }}
              >
                <img
                  src={Family}
                  alt="healthy_eating"
                  className="pths_image"
                ></img>
              </div>
              <div className="pths_content_container">
                <p className="pths_content_text">
                  Heart disease runs in families. Please encourage your family
                  to lead an active, healthy, smoke-free lifestyle.
                </p>
                <p className="pths_content_text blue-clro">
                  Build exercise into your daily life. The home walking
                  programme will help you get started.
                </p>
              </div>
              {/* {showNextButton && (
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
              )} */}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default PhysicalInactivity;
