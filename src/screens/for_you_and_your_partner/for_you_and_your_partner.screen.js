import React, { useState, useEffect } from "react";
import StressImage from "../../assets/images/exercise_target_for_life/Group 5.svg";
import RecoverImage from "../../assets/images/exercise_target_for_life/Group 6.svg";
import DepressionImage from "../../assets/images/exercise_target_for_life/Group 7.svg";
import Container from "../../common_component/container/container.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import "./for_you_and_your_partner.screen.scss";
import NextButton from "../../common_component/next_button/next_button.component";
import Relax from "../../assets/images/update/relax.svg";
import Breath from "../../assets/images/update/breath.svg";
import Sence from "../../assets/images/update/sence.svg";
import Imagin from "../../assets/images/update/imagin.svg";
import Lap from "../../assets/images/update/lap.svg";
import Fist from "../../assets/images/update/fist.svg";

const ForYouAndYourPartner = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/returning_home/relaxation_techniques");
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
      setLoad(true)
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
              <div className="fyandyp_head_container">
                <p className="fyandyp_head_text">For you and your partner</p>
              </div>
              <div
                className="fyandyp_title_container"
                style={{ margin: "0em 2em 2em 1em" }}
              >
                <p className="fyandyp_title_text">Stress</p>
              </div>
              <div className="fyandyp_image_container">
                <img src={StressImage} className="fyandyp_image"></img>
              </div>
              <div className="fyandyp_image_content_container">
                <p className="fyandyp_image_content_text">
                  After your heart surgery you may find that your concentration
                  is poor. This usually returns to normal during your recovery
                  at home. Some people also find their memory is affected but
                  this is usually temporary and gradually resolves within six
                  months of your surgery. If this problem persists please speak
                  to your GP. Some people also find their memory s affected but
                  this is usually temporary and gradually resolves within six
                  months of your surgery. If this problem persists please speak
                  to your GP.
                </p>
              </div>
            </div>

            {
              load && (
                <>

                  <div className="slider_container">
                    <div className="fyandyp_title_container">
                      <p className="fyandyp_title_text">
                        Managing your feelings as you recover
                </p>
                    </div>

                    <div className="fyandyp_image_container">
                      <img src={RecoverImage} className="fyandyp_image"></img>
                    </div>

                    <div className="fyandyp_image_content_container">
                      <p className="fyandyp_image_content_text">
                        Some people may have a poor appetite for a few days after
                        surgery. If this persists for longer please ask your doctor or
                        nurse to refer you to a dietitian. A healthy balanced diet is
                        recommended as you recover. If you have been advised to lose
                        weight after your surgery, you should wait until your wound
                        has fully healed. This can take up to six weeks. Do not diet
                        or lose weight during this period. See ‘Healthy Eating for a
                        Healthy Heart’, page 34.
                </p>
                    </div>
                  </div>

                  <div className="slider_container">
                    <div className="fyandyp_sub_content_container">
                      <div className="fyandup_sub_content_head_container">
                        <p className="fyandup_sub_content_head_text">
                          Try to balance your feelings by:
                  </p>
                      </div>
                      <div className="fyandup_sub_content_title_container">
                        <p className="fyandup_sub_content_title_text">
                          1. Getting involved in your medical treatment:
                  </p>
                      </div>
                      <div className="fyandup_sub_content_container">
                        <p className="fyandup_sub_content_text">
                          Ask questions about your condition and your recovery. Decide
                          to make your lifestyle healthier.
                  </p>
                      </div>

                      <div className="fyandup_sub_content_title_container">
                        <p className="fyandup_sub_content_title_text">
                          2. Involve your partner, family and friends:
                  </p>
                      </div>
                      <div className="fyandup_sub_content_container">
                        <p className="fyandup_sub_content_text">
                          Talk to them. If you explain your feelings, people will be
                          in a better position to support you when you need support,
                          give you “space” when you need space and understand what’s
                          going on with you.
                  </p>
                      </div>

                      <div className="fyandup_sub_content_title_container">
                        <p className="fyandup_sub_content_title_text">
                          3. Regain your social life as much as possible:
                  </p>
                      </div>
                      <div className="fyandup_sub_content_container">
                        <p className="fyandup_sub_content_text">
                          Friends can be a great support. They can help you return to
                          normal and lend a listening ear outside of the home.
                  </p>
                      </div>
                    </div>
                  </div>

                  <div className="slider_container">
                    <div className="fyandyp_title_container">
                      <p className="fyandyp_title_text">Depression</p>
                    </div>

                    <div className="fyandyp_image_container">
                      <img src={DepressionImage} className="fyandyp_image"></img>
                    </div>

                    <div className="fyandyp_image_content_container">
                      <p className="fyandyp_image_content_text">
                        Depression is common after heart surgery, especially if you
                        have been troubled by depression before. It is normal to
                        experience good days and bad days as you recover. On a bad day
                        you may have to push your- self to get out of bed and be
                        tearful. You may avoid meeting people and may not feel like
                        talking with friends. These feelings are common but for most
                        people, only temporary. Push yourself a little if you feel
                        this way. Tell your family exactly how you are feeling. If you
                        feel this way continuously for three to four weeks, you may be
                        depressed. Please see your GP as you may need a short course
                        of treatment. You can also contact your local cardiac
                        rehabilitation team for follow up advice and counselling.
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
              )
            }
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ForYouAndYourPartner;
