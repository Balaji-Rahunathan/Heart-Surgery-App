import React, { useState, useEffect } from "react";
import "./managing_your_risk_factors.screen.scss";
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

const ManagingYourRiskFactors = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);

  const next = () => {
    props.history.push("/looking_forward_healthier_future/high_blood_pressure");
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
              <p className="myrf_head_text">Managing your Risk Factors</p>
            </div>

            <div className="myrf_title_container">
              <p className="myrf_title_text">Diabetes</p>
            </div>
            <div className="myrf_image_container">
              <img src={DiabetesImage} className="myrf_image"></img>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                Diabetes is a condition where blood sugar levels rise above
                normal. You have an increased chance of getting diabetes if you
                have excess body fat around the middle of your body and are
                physically inactive. People with diabetes are three to four
                times more likely to develop heart disease than people without
                diabetes. If you have diabetes, reduce your risk of heart
                disease by:
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Getting your
                blood sugar under control,and keeping it under control.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Making the
                dietary changes advised.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Keeping your
                cholesterol under control.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Getting
                moving. Discuss any planned new exercise or physical activity
                with your medical team.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Achieving and
                maintaining a healthy body weight and a slim waistline.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Keeping your
                blood pressure less than 140/85, unless advised otherwise.
              </p>
              <p className="myrf_content_text">
                <FiberManualRecordIcon className="myrf_points" /> Stopping
                smoking.
              </p>
            </div>

            <div className="myrf_content_container">
              <p className="myrf_content_text">
                Drinking more than the recommended amounts of alcohol when you
                are on insulin can cause your blood sugars to go to low (hypo).
                This can happen even 10 to 16 hours after you have stopped
                drinking. Talk to your doctor about the precautions to be taken
                with alcohol. If you are not being followed up yearly at a
                specialist diabetes centre and would like to be, please talk
                with your GP.
              </p>
            </div>

            <div className="myrf_title_container">
              <p className="myrf_title_text">Impaired Glucose Tolerance</p>
            </div>
            <div className="myrf_image_container">
              <img src={GlucoseImage} className="myrf_image"></img>
            </div>
            <div className="myrf_content_container">
              <p className="myrf_content_text">
                If your sugars are above normal, but not high enough to be
                called diabetes, you have Impaired Glucose Tolerance (IGT) or “
                pre-diabetes” . With this condition, you are also at increased
                risk of heart disease and should follow all of the advice above.
                You will need to have a glucose tolerance test repeated yearly
                by your GP.
              </p>
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
              props.history.push("/returning_home/relaxation_techniques")
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

export default ManagingYourRiskFactors;
