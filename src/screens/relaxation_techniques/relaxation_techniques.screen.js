import React, { useState, useEffect } from "react";
import StressImage from "../../assets/images/exercise_target_for_life/Group 5.svg";
import RecoverImage from "../../assets/images/exercise_target_for_life/Group 6.svg";
import DepressionImage from "../../assets/images/exercise_target_for_life/Group 7.svg";
import Container from "../../common_component/container/container.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import "../for_you_and_your_partner/for_you_and_your_partner.screen.scss";
import NextButton from "../../common_component/next_button/next_button.component";
import Relax from "../../assets/images/update/relax.svg";
import Breath from "../../assets/images/update/breath.svg";
import Sence from "../../assets/images/update/sence.svg";
import Imagin from "../../assets/images/update/imagin.svg";
import Lap from "../../assets/images/update/lap.svg";
import Fist from "../../assets/images/update/fist.svg";

const RelaxationTechniques = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);
  const next = () => {
    props.history.push("/looking_forward_healthier_future");
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

            <div className="slider_container">
              <div className="fyandyp_title_container">
                <p
                  className="fyandyp_title_text rt_title_text"
                  style={{
                    fontWeight: "600",
                    fontSize: "22px",
                    color: "#00a1fb",
                  }}
                >
                  Relaxation techniques
                </p>
              </div>

              <div className="fyandyp_image_container">
                <img src={Relax} className="fyandyp_image"></img>
              </div>

              <div className="fyandyp_image_content_container">
                <p className="fyandyp_image_content_text">
                  Teach your body how to relax and provide a balance to the
                  stresses in your life
                </p>
                <p
                  className="fyandyp_image_content_text"
                  style={{ fontWeight: "700", marginTop: "10px" }}
                >
                  Before you relax:
                </p>
                <p
                  className="fyandyp_image_content_text"
                  style={{ marginTop: "8px" }}
                >
                  Find a quiet place where you won’t be distracted.
                </p>
                <p
                  className="fyandyp_image_content_text"
                  style={{ marginTop: "8px" }}
                >
                  Get comfortable. Sit or lie so that your muscles are doing
                  very little work.
                </p>
                <p
                  className="fyandyp_image_content_text"
                  style={{ marginTop: "8px" }}
                >
                  Uncross your arms and legs.
                </p>
              </div>
            </div>

            {load && (
              <>
                <div className="slider_container">
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text rt_title_text">
                      Deep Breathing
                    </p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={Breath} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      Breathe in through your nose to a count of four and blow
                      out slowly through your mouth to a count of eight. Pause
                      in between breaths. Repeat this ten times or until you
                      feel relaxed. Aim to do this twice daily.
                    </p>
                  </div>
                </div>

                <div className="slider_container">
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text rt_title_text">
                      Body Focus
                    </p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={Sence} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      Take a deep breath, close your eyes and sense if there are
                      any places of excess tension or pain in your body. If you
                      find one, take a deep breath and try to imagine that place
                      loosening up. Then gently and slowly move that part of the
                      body just a little bit to let it loosen and relax.
                    </p>
                  </div>
                </div>

                <div className="slider_container">
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text rt_title_text">
                      Tense/relax
                    </p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={Fist} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      Clench your fists as hard as you can, then relax them.
                      Notice the feeling as the tension leaves your hands. Now
                      repeat this tense/relax action for each of these muscle
                      groups until they are relaxed: face, neck and shoulders,
                      arms, stomach, buttocks, legs and feet.
                    </p>
                  </div>
                </div>

                <div className="slider_container">
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text rt_title_text">
                      Shoulder rolls
                    </p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={Lap} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      With your hands in your lap, firmly but slowly circle the
                      shoulders around as far as they will go, forwards and then
                      backwards. You can try one shoulder at a time and try
                      different speeds as well. Keep breathing. Do this a few
                      times, then relax and finish by shrugging a few times.
                    </p>
                  </div>
                </div>

                <div className="slider_container">
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text rt_title_text">imagery</p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={Imagin} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      Create a peaceful scene in your mind. Imagine you are at
                      the ocean, in the mountains or in a forest, or wherever
                      feels relaxing to you. Then practise your deep breathing
                      as described
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
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RelaxationTechniques;
