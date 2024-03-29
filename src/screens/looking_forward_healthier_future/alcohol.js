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
import Alcoholl from "../../assets/images/update/drink.svg";

const Alcohol = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/looking_forward_healthier_future/physical_inactivity");
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

        <div className="slider_container" style={{ position: "relative" }}>
          <div className="pths_head_container">
            <p
              className="pths_head_text"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#00a1fb",
                paddingRight: "3em",
                paddingBottom: "0em",
              }}
            >
              Alcohol
            </p>
          </div>
          <div className="pths_title_container">
            <p className="pths_title_text">Too much alcohol</p>
          </div>

          <div className="mfyh_image_container">
            <img
              className="mfyh_image"
              style={{ width: "70%" }}
              src={Alcoholl}
              alt="mfyh"
            ></img>
          </div>

          <div className="pths_content_container">
            <p className="pths_content_text">
            There is some evidence that drinking a
small amount of alcohol helps protect your
heart. Drinking too much alcohol however,
has the opposite effect because it contributes
to strokes, high blood pressure, and liver
problems. It can also damage your heart
muscle, causing heart rhythm problems
and heart failure. Alcohol is also very high
in calories and can increase blood triglycerides, (a type of bad fat) and your weight.
            </p>
          </div>

          <NextButton
            prev
            onClick={() =>
              props.history.push(
                "/looking_forward_healthier_future/healthy_eating_for_a_healthy_heart"
              )
            }
            style={{
              position: "absolute",
              top: "80px",
              bottom: "20px",
              left: "10px",
              right: "auto",
            }}
          />
        </div>

        {load && (
          <>
            <div className="slider_container">
              <div
                className="pths_content_container clryloo"
                style={{ marginTop: "0.5em", paddingTop: "2em" }}
              >
                <p
                  className="pths_content_text"
                  style={{ paddingTop: "0.5em" }}
                >
                  <b>if you do not drink</b>
                </p>
                <p className="pths_content_text">Do not start.</p>
                <p
                  className="pths_content_text"
                  style={{ paddingTop: "0.8em", fontWeight: "bold" }}
                >
                  If you do drink
                </p>
                <p className="pths_content_text">Keep within the limits.</p>
                <p className="pths_content_text">
                  Spread your intake over the week.
                </p>
                <p className="pths_content_text">
                  Have some alcohol free days.
                </p>

                <p
                  className="pths_content_text"
                  style={{ paddingTop: "0.8em", fontWeight: "bold" }}
                >
                  How much is too much?
                </p>
                <p className="pths_content_text">
                  Men should not exceed 17 standard drinks / units of alcohol
                  per week. Women should not exceed 11 standard drinks / units
                  of alcohol per week.
                </p>

                <p
                  className="pths_content_text"
                  style={{ paddingTop: "0.8em", fontWeight: "bold" }}
                >
                  Avoid binge drinking
                </p>
                <p className="pths_content_text">
                  ‘Binge drinking’ is having five or more standard drinks in one
                  sitting for men and four or more standard drinks in one
                  sitting for women.
                </p>

                <p
                  className="pths_content_text"
                  style={{ paddingTop: "0.8em", fontWeight: "bold" }}
                >
                  How much is a standard drink of alcohol?
                </p>
                <p className="pths_content_text">
                  One standard drink / unit is equal to:
                </p>

                <p className="pths_content_text">
                  Half a pint of beer (Please note; a pint of beer is two units)
                </p>
                <p className="pths_content_text">100ml glass of wine</p>
                <p className="pths_content_text">
                  Single pub measure of spirit / sherry.
                </p>
                <p className="pths_content_text">
                  A home measure may really be a double or treble measure. Use a
                  spirit measure and sugar free mixers.
                </p>
              </div>
            </div>

            <div
              className="slider_container"
              style={{ paddingTop: "4em", position: "relative" }}
            >
              <div className="pths_content_container">
                <p
                  className="pths_content_text txtto"
                  style={{ paddingRight: "2.5em" }}
                >
                  It is normally safe to take a small amount of alcohol while
                  taking your heart drugs. If you are taking Warfarin however,
                  talk to your doctor for advice on drinking alcohol.
                </p>
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
  );
};

export default Alcohol;
