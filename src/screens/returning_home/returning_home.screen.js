import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import "./returning_home.screen.scss";
import ReturningHomeIndex from "./returning_home_index.screen";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import ResumingHome from "../resuming_home/resuming_home.screen";
import TheJourneyHomeImage from "../../assets/images/update/car_home.svg";
import NextButton from "../../common_component/next_button/next_button.component";
import AtHome from "../../assets/images/update/athome.svg";
import CareHeart from "../../assets/images/update/heart-care.svg";

const ReturningHome = (props) => {
  const [toggle, settoggle] = useState(false);
  const [load, setLoad] = useState(false);
  const handleMenuButtonClick = (data) => {
    settoggle(data);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <div className="returning_home_screen">
      <div className="resuming_home_conatiner">
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container">
          <div className="slider_container">
            <MenuButton
              background="white"
              type="open"
              onClick={handleMenuButtonClick}
              style={{ position: "absolute", left: "0", top: "0" }}
            />
            <ReturningHomeIndex {...props} />
          </div>

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
          {load && (
            <>
              <div className="slider_container" style={{ display: "block" }}>
                <div className="resuming_home_title">
                  <p className="resuming_home_title_text">The journey home</p>
                </div>
                <div className="resuming_home_image_container">
                  <img
                    className="resuming_home_image"
                    src={TheJourneyHomeImage}
                    alt="resuming_home"
                  ></img>
                </div>
                <div className="resuming_home_content">
                  <p className="resuming_home_content_text">
                    You will need someone to collect you from the hospital. Sit
                    in the front passenger seat of the car. Wear your seat belt.
                    This may be a little uncomfortable so use a small cushion or
                    towel to prevent the seat belt from rubbing against your
                    breast bone. Take some painkillers before you go and
                    remember to take regular breaks if your journey home is
                    long.
                  </p>
                </div>
              </div>
              <div className="slider_container" style={{ display: "block" }}>
                <div className="resuming_home_title">
                  <p className="resuming_home_title_text">At home</p>
                </div>
                <div className="resuming_home_image_container">
                  <img
                    className="resuming_home_image"
                    src={AtHome}
                    alt="resuming_home"
                  ></img>
                </div>
                <div className="resuming_home_content">
                  <p className="resuming_home_content_text">
                    You may feel frightened, anxious and tired returning home.
                    This is normal and will pass in time as you gain confidence.
                    It is important not to overdo things in the early stages.
                    You and your heart have been through a lot and you need time
                    to heal. Try to be patient with yourself and not to worry.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ paddingTop: "1em" }}
                  >
                    Your chest and leg wound may be sore for up to six weeks as
                    they are still healing. Continue to take your painkillers.
                    When you feel the pain is getting better, gradually reduce
                    or stop them. First stop the afternoon painkillers, then the
                    morning ones. In order to help you sleep well, stop the
                    night time painkillers last.
                  </p>
                </div>
              </div>

              <div className="slider_container" style={{ display: "block" }}>
                <div className="resuming_home_title">
                  <p className="resuming_home_title_text">At home</p>
                </div>
                <div className="resuming_home_image_container">
                  <img
                    className="resuming_home_image"
                    src={AtHome}
                    alt="resuming_home"
                  ></img>
                </div>
                <div className="resuming_home_content">
                  <p className="resuming_home_content_text">
                    If you had an artery taken from your arm or chest, it is
                    normal to experience some numbness or tingling in your
                    fingers or over your left breast area for several months.
                    Tell your GP if you feel it is not improving or is getting
                    worse.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ paddingTop: "1em" }}
                  >
                    Some people retain fluid after surgery and may need to be on
                    a low salt diet or take water tablets. Weigh yourself each
                    day. Do this first thing in the morning after using the
                    toilet, while you are still in your night clothes. Write
                    down your weight so you have a daily record. If you gain 2
                    lbs (1kg) or more for two days in a row, you may be
                    retaining fluid and you will need to visit your GP to adjust
                    your medication.
                  </p>
                </div>
              </div>

              <div
                className="slider_container"
                style={{ display: "block", paddingTop: "2em" }}
              >
                <div className="resuming_home_title">
                  <p className="resuming_home_title_text">
                    Taking care of your new heart valve
                  </p>
                </div>
                <div className="resuming_home_image_container">
                  <img
                    className="resuming_home_image"
                    src={CareHeart}
                    alt="resuming_home"
                  ></img>
                </div>
                <div className="resuming_home_content" style={{marginTop:'1em'}}>
                  <p className="resuming_home_content_text">
                    Fot the rest of your life, after heart valve surgery, dental
                    treatment and other surgery can increase the risk of
                    infection in your heart. This infection is called Bacterial
                    endocarditis and could damage your heart valves. To prevent
                    your new heart valve from infection your doctor or dentist
                    may prescribe antibiotics before and after your treatment.
                    Infection in the heart can also occur after an accidental
                    cut or break in the skin. Keep all wounds clean and dry and
                    discuss the need for antibiotic medication with your doctor.
                  </p>
                  {/* <p className="resuming_home_content_text" style={{paddingTop:'1em'}}>
                  Some people retain fluid after surgery and may need to be on
                    a low salt diet or take water tablets. Weigh yourself each
                    day. Do this first thing in the morning after using the
                    toilet, while you are still in your night clothes. Write
                    down your weight so you have a daily record. If you gain 2
                    lbs (1kg) or more for two days in a row, you may be
                    retaining fluid and you will need to visit your GP to adjust
                    your medication.
                  </p> */}
                </div>
              </div>

              <div
                className="slider_container"
                style={{
                  display: "block",
                  paddingTop: "4em",
                 
                }}
              >
             <div style={{ backgroundColor: "#FCE4AA",
                  width: "85%",
                  margin: "0 auto",borderRadius:'10px', paddingBottom:'20px'}}> <div className="resuming_home_title">
                  <p
                    className="resuming_home_title_text"
                    style={{ fontSize: "16px", paddingBottom: "0" }}
                  >
                    If you experience any of the following symptoms, then please
                    visit your GP:
                  </p>
                </div>

                <div className="resuming_home_content">
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Pain, redness, swelling or discharge from your wounds.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Pain in your chest, neck or shoulders that is worse with
                    deep breathing.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Unexplained shortness of breath i.e. more breathless than
                    usual moving around or shortness of breath that continues at
                    rest.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Aches, pains, chills or a temperature above 37.5o C (99.5o
                    F) for more than 24 hours.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Tiredness or a loss of appetite that does not improve after
                    a couple of days.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Excessive bruising or bleeding.
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    Palpitations (a feeling of fluttering in your chest,
                    especially if you also feel weaker).
                  </p>
                  <p
                    className="resuming_home_content_text"
                    style={{ marginTop: "1em" }}
                  >
                    If you notice that you have gained weight over two to three
                    days.
                  </p>
                </div></div>


                <NextButton
                  onClick={() =>
                    props.history.push("/returning_home/resuming_home")
                  }
                  style={{
                    position: "absolute",
                    top: "auto",
                    bottom: "0px",
                    left: "auto",
                    right: "0px",
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

export default ReturningHome;
