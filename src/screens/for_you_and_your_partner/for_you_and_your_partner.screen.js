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
                Stress relates to the pressures, demands
and unexpected changes going on in your
daily life and how you react to them. A
certain amount of pressure in your life is
healthy. Pressure can help you focus and
help you meet a challenge. When the
amount of pressure in your life is causing
you distress you can become stressed.
Stress is a negative feeling.
                </p>
              </div>
              <NextButton
                prev
                onClick={() =>
                  props.history.push("/returning_home/exercise_target_for_life")
                }
                style={{
                  position: "absolute",
                  top: "100px",
                  bottom: "auto",
                  left: "10px",
                  right: "auto",
                }}
              />
            </div>

            <div className="slider_container" style={{paddingTop:'4em'}}>
              
              
              
              <div className="fyandyp_image_content_container">
                <p className="fyandyp_image_content_text">
                You will probably feel a bit “up and down”
for the first few weeks after your surgery.
You may feel restless, have difficulty
sleeping, and talk a lot or very little. Don’t
worry, this can often happen after any
major surgery – this will improve. It will take
some time to adjust to the changes in your
life. Just don’t focus too much on them.
Remember that most people return to a full
and productive life. Deep breathing and
exercise can ease anxiety.
                </p>
              </div>
              <NextButton
                prev
                onClick={() =>
                  props.history.push("/returning_home/exercise_target_for_life")
                }
                style={{
                  position: "absolute",
                  top: "100px",
                  bottom: "auto",
                  left: "10px",
                  right: "auto",
                }}
              />
            </div>

            {load && (
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
                    While you are recovering from heart surgery
it is important to remember that your
condition not only affects you. It also affects
your partner, family, friends and work
colleagues. Allow time to talk to your family
and friends about how you are feeling.
                    </p>
                  </div>
                </div>

                <div className="slider_container" style={{paddingTop:'4em'}}>
                
                 <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                    For some people heart surgery is a new
lease of life. It is a great opportunity to look
after yourself and focus on a healthier
future. However, as you recover you may
experience feelings of loss, fear, anxiety
and frustration. Remember that these
feelings are your feelings. Each person
comes to terms with these emotions and
feelings in their own way. You may find that
you are more aware of your emotions at
this time; this is very common and is just temporary. You have been through a
significant life changing surgery and your
body and mind need time to accept this.
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
                        Ask questions about your condition and your recovery.
                        Decide to make your lifestyle healthier.
                      </p>
                    </div>

                    <div className="fyandup_sub_content_title_container">
                      <p className="fyandup_sub_content_title_text">
                        2. Involve your partner, family and friends:
                      </p>
                    </div>
                    <div className="fyandup_sub_content_container">
                      <p className="fyandup_sub_content_text">
                        Talk to them. If you explain your feelings, people will
                        be in a better position to support you when you need
                        support, give you “space” when you need space and
                        understand what’s going on with you.
                      </p>
                    </div>

                    <div className="fyandup_sub_content_title_container">
                      <p className="fyandup_sub_content_title_text">
                        3. Regain your social life as much as possible:
                      </p>
                    </div>
                    <div className="fyandup_sub_content_container">
                      <p className="fyandup_sub_content_text">
                        Friends can be a great support. They can help you return
                        to normal and lend a listening ear outside of the home.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="slider_container"
                  style={{ position: "relative" }}
                >
                  <div className="fyandyp_title_container">
                    <p className="fyandyp_title_text">Depression</p>
                  </div>

                  <div className="fyandyp_image_container">
                    <img src={DepressionImage} className="fyandyp_image"></img>
                  </div>

                  <div className="fyandyp_image_content_container">
                    <p className="fyandyp_image_content_text">
                      Depression is common after heart surgery, especially if
                      you have been troubled by depression before. It is normal
                      to experience good days and bad days as you recover. On a
                      bad day you may have to push your- self to get out of bed
                      and be tearful. You may avoid meeting people and may not
                      feel like talking with friends. These feelings are common
                      but for most people, only temporary. Push yourself a
                      little if you feel this way. Tell your family exactly how
                      you are feeling. If you feel this way continuously for
                      three to four weeks, you may be depressed. Please see your
                      GP as you may need a short course of treatment. You can
                      also contact your local cardiac rehabilitation team for
                      follow up advice and counselling.
                    </p>
                  </div>
                  {showNextButton && (
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
                  )}
                </div>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ForYouAndYourPartner;
