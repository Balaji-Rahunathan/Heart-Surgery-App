import React, { useState, useEffect } from "react";
import "../managing_your_risk_factors/managing_your_risk_factors.screen.scss";
import DiabetesImage from "../../assets/images/managing_your_risk_factors/Group 2.svg";
import GlucoseImage from "../../assets/images/managing_your_risk_factors/Group 3.svg";
import BloodPressureImage from "../../assets/images/managing_your_risk_factors/Group 4.svg";
import PressureCheckImage from "../../assets/images/managing_your_risk_factors/Group 5.svg";
import HowToImage from "../../assets/images/managing_your_risk_factors/Group 6.svg";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Container from "../../common_component/container/container.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import NextButton from "../../common_component/next_button/next_button.component";

const HighBloodPressure = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);

  const next = () => {
    props.history.push("/looking_forward_healthier_future/smoking");
  };

  const handleMenuButtonClick = (data) => {
    console.log(data);
    settoggle(data);
  };

  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container");

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
  }, []);
  return (
    <div className="myrf_screen">
      <div className="myrf_container">
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
          <div className="myrf_wrapper">
            <div className="myrf_head_container">
              <p className="myrf_head_text">High Blood Pressure</p>
            </div>
            <div className="myrf_image_container">
              <img src={BloodPressureImage} className="myrf_image"></img>
            </div>
            <div className="myrf_sub_title_container">
              <p className="myrf_sub_title_text">
                High blood pressure explained
              </p>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                Blood pressure is the pressure against which your heart must
                pump to get blood out of your heart. If your blood pressure is
                too high, it makes your heart work harder and causes it to
                enlarge and weaken over time. The high pressure also damages the
                smooth lining of your arteries, allowing plaque to build up
                easily. If you have high blood pressure, you have an increased
                risk of heart attacks, strokes, kidney failure and heart
                failure.
              </p>
            </div>

            <div className="myrf_sub_title_container">
              <p className="myrf_sub_title_text">
                How do i know if i have high blood pressure?
              </p>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                You don’t unless you get it checked, as people with high blood
                pressure feel and look normal.
              </p>
            </div>

            <div className="myrf_sub_title_container">
              <p className="myrf_sub_title_text">
                what should my blood pressure reading be?
              </p>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                Talk to your doctor about what is a normal blood pressure for
                you. As a rule people with heart disease or diabetes should aim
                for the targets in the box opposite.
              </p>
            </div>

            <div className="myrf_sub_title_container">
              <p className="myrf_sub_title_text">
                How often should I have my blood pressure checked?
              </p>
            </div>
            <div className="myrf_image_container">
              <img src={PressureCheckImage} className="myrf_image"></img>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                If your blood pressure is high, you will need medication and you
                should have your blood presure checked by your doctor until it
                reaches the target in the box opposite. Then it should be
                checked every three months or whenever you are renewing your
                prescription. even if you do not have high blood pressure, it is
                wise to have it checked at least once a year.
              </p>
            </div>

            <div className="myrf_sub_title_container">
              <p className="myrf_sub_title_text">
                How to reduce high blood pressure
              </p>
            </div>
            <div className="myrf_image_container">
              <img src={HowToImage} className="myrf_image"></img>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Lose weight if
                you are overweight.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Be physically
                active and eat healthily.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Do not add
                salt at the table or in cooking.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Take it easy
                on alcohol, avoid binge drinking completely.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Take your
                medications regularly as advised. These are usually prescribed
                for life.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Stop smoking.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#abd9ff",
                padding: "1px 0",
                width: "84%",
                margin: "0 auto 50px auto",
                borderRadius: "10px",
              }}
            >
              <div
                className="myrf_sub_title_container"
                style={{ marginBottom: "0px", textAlign: "left" }}
              >
                <p className="myrf_sub_title_text">
                  What is the normal blood pressure reading?
                </p>
              </div>
              <div
                className="myrf_content_container"
                style={{ marginTop: "10px" }}
              >
                <p className="myrf_content_text">Top number: 140 or less</p>
                <p className="myrf_content_text">Bottom number: 90 or less</p>
                <p className="myrf_content_text">85 or less (if diabetic)</p>
              </div>
            </div>
          </div>

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

          <NextButton
            prev
            onClick={() =>
              props.history.push("/looking_forward_healthier_future")
            }
            style={{
              position: "absolute",
              top: "90px",
              bottom: "auto",
              left: "10px",
              right: "auto",
            }}
          />
        </Container>
      </div>
    </div>
  );
};

export default HighBloodPressure;
