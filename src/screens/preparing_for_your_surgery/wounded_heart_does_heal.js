import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import "../resuming_home/resuming_home.screen.scss";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import Wound from "../../assets/images/update/wound.png";

const WoundedHeartDoesHeal = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);

  const next = () => {
    props.history.push("/exercise");
  };

  const handleMenuButtonClick = (data) => {
    console.log(data);
    settoggle(data);
  };

  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container");
    console.log(el);
    el.scrollTo = 0;
    el.scrollTop = 0;

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

          <div className="slider_container" style={{ paddingTop: "2em" }}>
            <div className="resuming_home_head_container">
              <div className="resuming_home_head_title_container">
                <div className="resuming_home_head_title">
                  A wounded heart does heal
                </div>
              </div>
              <div className="resuming_home_head_image_container">
                <img
                  src={Wound}
                  alt="head_image"
                  className="resuming_home_head_image"
                />
              </div>
              <div className="resuming_home_head_content_container">
                <div className="resuming_home_head_content">
                  In order to operate on your heart, the surgeon must make a cut
                  into the front of your chest and divide your breast bone
                  (sternum). If you are having coronary heart surgery, then an
                  incision will also be made into your leg or arm to remove a
                  blood vessel, which the surgeon will use to bypass the
                  blockages in your coronary arteries.
                </div>
              </div>
            </div>
          </div>

          <div className="slider_container">
            <div className="resuming_home_head_container">
              <div className="resuming_home_head_content_container">
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "4em" }}
                >
                  After your operation, the surgeon will use special surgical
                  wire to set the breastbone again. This wire is very strong and
                  will stay in your body forever. You can’t feel these wires but
                  they will show up on a chest x-ray. The cut in your skin is
                  stitched, stapled or glued together and covered with a
                  dressing. You will have a scar which will fade as it heals.
                  <p style={{ fontWeight: "bolder" }}>
                    Your breastbone usually takes six weeks or more to heal.
                  </p>
                </div>
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  During the first few days after surgery your chest, leg or arm
                  wounds may be sore. Please tell your nurse if you are sore. We
                  will give you painkillers at regular intervals, to ease the
                  soreness and make moving around easier. Some people may
                  experience a tingling feeling over their chest and arm when
                  the arteries from these areas are used for the bypass. Your
                  wound may feel itchy, lumpy or numb and you may notice
                  swelling and bruising. These symptoms are a normal part of
                  healing and will disappear in the weeks following surgery.
                </div>
              </div>
            </div>
          </div>

          <div className="slider_container" style={{ paddingTop: "2em" }}>
            <div className="resuming_home_head_container">
              <div className="resuming_home_head_title_container">
                <div className="resuming_home_head_title">
                  Possible complications during your recovery
                </div>
              </div>
              <div className="resuming_home_head_image_container">
                <img
                  src={Wound}
                  alt="head_image"
                  className="resuming_home_head_image"
                />
              </div>
              <div className="resuming_home_head_content_container">
                <div
                  className="resuming_home_head_content"
                  style={{ fontWeight: "bolder" }}
                >
                  It is important to note that during your recovery you may have
                  some complications.
                </div>
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Nausea (feeling sick).
                </div>
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Constipation. If you experience either of these tell your
                  nurse and she/he will give you something to relieve it.
                </div>{" "}
                
               
                
               
              </div>
            </div>
          </div>

          <div className="slider_container" style={{ paddingTop: "3em" }}>
            <div className="resuming_home_head_container">
              
              
              <div className="resuming_home_head_content_container">
               
                
                
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Tiredness, forgetfulness and lack of concentration. This may
                  persist for a couple of weeks after surgery, and usually
                  improves with time and rest.
                </div>{" "}
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Occasionally, people may experience vivid dreams or become
                  confused and disorientated after surgery. Do not worry if this
                  happens to you as it is a side effect of the surgery and will
                  pass.
                </div>{" "}
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Atrial Fibrillation. This is an irregular heartbeat which may
                  make you feel weak, sweaty or have palpitations.
                </div>{" "}
                <div
                  className="resuming_home_head_content"
                  style={{ paddingTop: "1em" }}
                >
                  Pleural effusion - this is a collection of fluid in the lining
                  of your lungs (pleura). It is very common after heart surgery.
                  Your doctor will be able to see it on a chest x-ray. It can
                  stop without treatment. However, in a small number of people
                  the collection of fluid is large and you may feel short of
                  breath and need to have the fluid removed. Your surgeon will
                  give you a local anaesthetic to numb the area and will put in
                  a tube to drain the fluid. The tube will remain in your chest
                  until an x-ray shows all the fluid is gone.
                </div>
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
        </Container>
      </div>
    </div>
  );
};

export default WoundedHeartDoesHeal;
