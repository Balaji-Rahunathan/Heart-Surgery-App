import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import ResumingHomeImage from "../../assets/images/Resuming Home/Group 2.svg";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import "./medications_for_your_heart.scss";
import HealthyHeart from "../../assets/images/update/healthyheart.svg";
import Health from "../../assets/images/update/health.svg";
import Medic from "../../assets/images/update/medication.svg";
import Store from "../../assets/images/update/store.svg";

const MedicationsForYourHeart = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/useful_addressess");
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
  console.log("button", showNextButton);
  return (
    <div className="mfyh_screen">
      <div className="mfyh_conatiner">
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
          <div className="slider_container" style={{position: 'relative'}}>
            <div className="mfyh_title_head ">
              <p className="mfyh_title_text">Medications for your heart</p>
            </div>
            <div className="mfyh_image_container">
              <img
                className="mfyh_image"
                style={{ width: "80%" }}
                src={HealthyHeart}
                alt="mfyh"
              ></img>
            </div>
            <div className="mfyh_content">
              <p
                className="mfyh_content_text"
                style={{ fontWeight: "700", marginTop: "20px" }}
              >
                Heart medications do not cure existing heart disease but they do
                help heart patients live longer and enjoy a higher quality of
                life. Most of these drugs have to be taken for life to help keep
                your heart from getting worse.
              </p>
            </div>

            <NextButton
            prev
            onClick={() =>
              props.history.push("/looking_forward_healthier_future/physical_inactivity")
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
              <div className="slider_container" style={{ paddingTop: "60px" }}>
                <div className="mfyh_title ">
                  {/* <p className="mfyh_title_text">Resuming home activities after surgery</p> */}
                </div>
                <div className="mfyh_image_container">
                  <img
                    className="mfyh_image"
                    style={{ width: "70%" }}
                    src={Health}
                    alt="mfyh"
                  ></img>
                </div>
                <div className="mfyh_content">
                  <p className="mfyh_content_text">
                    Some heart medications are prescribed to protect your heart,
                    while others are used to treat a specific problem such as
                    high blood pressure. Some tablets have more than one
                    function for example; your cholesterol lowering (statins)
                    tablets will reduce your risk of a heart attack even if you
                    don’t have high cholesterol.
                  </p>
                  <p
                    className="mfyh_content_text"
                    style={{ marginTop: "16px" }}
                  >
                    Heart medications are used to achieve a specific effect and
                    they must be taken exactly as prescribed. It may be helpful
                    to use a reminder system to take the medications on time.
                  </p>
                </div>
              </div>

              <div className="slider_container " style={{ paddingTop: "60px" }}>
                <div className="mfyh_title ">
                  {/* <p className="mfyh_title_text">Resuming home activities after surgery</p> */}
                </div>
                <div className="mfyh_image_container">
                  <img
                    className="mfyh_image"
                    style={{ width: "70%" }}
                    src={Medic}
                    alt="mfyh"
                  ></img>
                </div>
                <div className="mfyh_content">
                  <p className="mfyh_content_text">
                    To find out information on your heart medications talk to
                    your doctor, pharmacist or nurse. Don’t be afraid to ask
                    questions. It is their job and they will be happy to help
                    you.
                  </p>
                  <p
                    className="mfyh_content_text"
                    style={{ marginTop: "16px" }}
                  >
                    Tell the doctor, pharmacist or nurse about all the
                    medications you are taking including vitamins,
                    contraceptives, painkillers and herbal medication. For
                    safety reasons, speak to your pharmacist when buying
                    over-the-counter medication.
                  </p>
                </div>
              </div>

              <div className="slider_container" style={{ paddingTop: "60px" }}>
                <div className="mfyh_title ">
                  {/* <p className="mfyh_title_text">Resuming home activities after surgery</p> */}
                </div>
                <div className="mfyh_image_container">
                  <img
                    className="mfyh_image"
                    style={{ width: "70%" }}
                    src={Store}
                    alt="mfyh"
                  ></img>
                </div>
                <div className="mfyh_content">
                  <p className="mfyh_content_text">
                    All medications should be stored in a safe place out of the
                    reach of children. They should be stored in a cool, dry
                    place and protected from light. In general all medications
                    should be kept in their original container unless you are
                    using a specific dosing reminder system.
                  </p>
                  <p
                    className="mfyh_content_text"
                    style={{ marginTop: "16px" }}
                  >
                    With some medications, regular blood tests may be required
                    to monitor any side effects and to check if the drug is
                    working for you. Make sure you discuss your follow-up blood
                    tests with your doctor.
                  </p>
                </div>
              </div>

              <div className="slider_container" style={{ paddingTop: "60px", position:'relative' }}>
                <div className="mfyh_title ">
                  {/* <p className="mfyh_title_text">Resuming home activities after surgery</p> */}
                </div>
                {/* <div className="mfyh_image_container">
              <img
                className="mfyh_image"
                src={ResumingHomeImage}
                alt="mfyh"
              ></img>
            </div> */}
                <div className="mfyh_content">
                  <p className="mfyh_content_text">
                    Please ask your pharmacist for advice on the proper use of
                    products to help you stop smoking.
                  </p>
                  <p
                    className="mfyh_content_text blue-clrii"
                    style={{ padding: "10px 10px" }}
                  >
                    Do not stop taking your prescribed medication of your own
                    accord. This can be dangerous. If one medication does not
                    agree with you, please speak with your doctor as there is
                    usually a safe alternative that will.
                  </p>
                  <p
                    className="mfyh_content_text blue-clriii"
                    style={{ padding: "10px 10px" }}
                  >
                    The following two pages give you specific information on
                    many heart medications. Look for the generic name of your
                    medications on the box or label, then read about each one.
                    If you need help, please ask your nurse, pharmacist or a
                    member of the medical team. Look for the generic name of
                    your medications on the box or label, then read about each
                    one. If you need help, please ask your nurse, pharmacist or
                    a member of the medical team
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
    </div>
  );
};

export default MedicationsForYourHeart;
