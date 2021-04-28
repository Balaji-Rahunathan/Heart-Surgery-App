import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import SmokingImage from "../../assets/images/looking_forward_healthier_future/Group 2.svg";
import RememberD4 from "../../assets/images/looking_forward_healthier_future/Group 3.svg";
import CigaretteImage from "../../assets/images/looking_forward_healthier_future/Group 8.svg";
import "./page_one.screen.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NextButton from "../../common_component/next_button/next_button.component";
import Second from "../../assets/images/update/smoke.svg";
import Third from "../../assets/images/update/smoketwo.svg";
import Fat from "../../assets/images/update/cholestrol.svg";
import Obis from "../../assets/images/update/obis.svg";

const HighCholesterol = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/looking_forward_healthier_future/being_overweight");
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
    <div className="page_one_screen">
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

        <div className="slider_container" style={{position: 'relative'}}>
          <div className="pos_sub_title_container">
            <div
              className="pos_sub_title_text"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#00a1fb",
                padding: "0.8em 50px",
              }}
            >
              High cholesterol
            </div>
          </div>
          <div
            className="pos_bold_text_container"
            style={{ textAlign: "left" }}
          >
            <div
              className="pths_head_container"
              style={{ padding: "2em 2em 0 2em" }}
            >
              <img src={Obis} alt="healthy_eating" className="pths_image"></img>
            </div>

            <p className="pos_bold_text">What is Cholesterol?</p>
          </div>

          <div className="pos_content_container" style={{ paddingTop: "1em" }}>
            <p className="pos_content_text">
              Cholesterol is a fatty substance found in the blood. A certain
              amount of cholesterol is important for a healthy body, however too
              much can increase our risk of heart disease. Cholesterol is mainly
              made in the body by the liver. Eating foods high in saturated fat
              increases the amount of cholesterol the liver makes, and can
              increase blood cholesterol levels. Some foods also contain
              cholesterol itself (e.g. eggs, shellfish, liver and kidneys) but
              these do not affect blood cholesterol as much as saturated fats.
              High levels of cholesterol in the blood can also be inherited from
              your parents.
            </p>
          </div>

          <NextButton
            prev
            onClick={() =>
              props.history.push("/looking_forward_healthier_future/smoking")
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
            <div className="slider_container">
              <div
                className="pos_bold_text_container"
                style={{ textAlign: "left", marginTop: "1em" }}
              >
                <p className="pos_bold_text" style={{ paddingTop: "5em" }}>
                  There are two types of lipoproteins in the blood:
                </p>
              </div>
              <div className="pos_content_container">
                <p className="pos_content_text">
                  Low density lipoproteins (LDL – or bad cholesterol). LDL helps
                  to build up plaque in the body’s arteries. High levels can
                  increase your risk of heart disease.
                </p>
                <p className="pos_content_text">
                  High density lipoproteins (HDL – or good cholesterol). HDL
                  helps to remove cholesterol, and slows down the build up of
                  plaque in the body’s arteries. Higher levels protect against
                  heart disease.
                </p>
              </div>
              <div
                className="pos_bold_text_container"
                style={{ textAlign: "left" }}
              >
                <p className="pos_bold_text">What are Triglycerides?</p>
              </div>
              <div className="pos_content_container">
                <p className="pos_content_text">
                  There is also a group of fatty substances in the blood called
                  triglycerides. High levels of these are also damaging to the
                  heart.
                </p>
                <p className="pos_content_text blue-clrr">
                  The goal is to have a low total cholesterol level, a low level
                  of LDL and a high level of hDL.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "4em" }}>
                  How to check your cholesterol and triglyceride levels?
                </p>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  The blood test to check your cholesterol, LDL cholesterol, HDL
                  cholesterol and triglycerides is called a lipoprotein profile.
                  The test is most accurate when taken after you have fasted for
                  12 hours (e.g. overnight). Speak to your cardiologist before
                  leaving hospital to find out what YOUR cholesterol goal is.
                </p>
              </div>

              <div className="blue-clr">
                <div className="pts_title_container">
                  <p className="pts_title_text">
                    How often should I have my fasting cholesterol re-checked
                    after I go home?
                  </p>
                </div>
                <div className="pts_content_container">
                  <p className="pts_content_text">
                    Every three months until you reach your goal, and yearly
                    after that. Talk to your GP.
                  </p>
                </div>
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "4em" }}>
                  Understanding your lipoprotein Profile
                </p>
              </div>
              <div className="pts_table_container">
                <table className="pts_table">
                  <thead className="pts_table_head">
                    <tr className="pts_table_head_tr pts_th">
                      <th>If you have coronary artery disease or diabetes</th>
                      <th>General Goal</th>
                      <th>Goal for you</th>
                    </tr>
                  </thead>
                  <tbody className="pts_table_body">
                    <tr className="pts_table_body_tr pts_tr">
                      <td>Total Cholesterol</td>
                      <td> {`<`}4.0 </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>LDL Cholesterol</td>
                      <td> {`<`}1.8 </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>HDL Cholesterol</td>
                      <td>
                        {" "}
                        {`>`}1 (men) {`>`}1.2 (women)
                      </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>Triglycerides</td>
                      <td> {`<`}1.7 </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="slider_container">
              <div
                className="pts_title_container"
                style={{ margin: "1em 1em 0em 1em" }}
              >
                <p
                  className="pts_title_text"
                  style={{ paddingTop: "4em", fontSize: "18px" }}
                >
                  The best way to reduce your cholesterol is to eat healthily,
                  exercise daily and take your cholesterol tablets.
                </p>
              </div>
              <div
                className="pts_content_container"
                style={{ margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  Many people ask about new products on the market called plant
                  stanols / sterols (e.g. Benecol®, Flora-Pro-Active ®, and
                  Danacol®). These products, when taken with a healthy diet and
                  regular exercise can reduce cholesterol a little more. The
                  amount that needs to be taken for this effect is one bottle of
                  the yoghurt drinks every day (Benecol®, Flora-Pro-Active ®,
                  and Danacol®) or two to three servings of the spreads, milks
                  or cheeses every day.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div
                className="pts_content_container"
                style={{ paddingTop: "4em", margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  Plant stanols / sterols can be taken with cholesterol tablets
                  but should never be taken instead of them. This is because
                  cholesterol tablets bring benefits other than just reducing
                  cholesterol. Please speak to your dietitian or doctor for
                  further information.
                </p>
              </div>
              <div
                className="pts_content_container blue_box"
                style={{ margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  If your cholesterol is high you should see a dietitian who
                  will give you the advice that is right for you.
                </p>
              </div>
            </div>
          

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "4em" }}>
                  How to check your cholesterol and triglyceride levels?
                </p>

                <div
                  className="pths_head_container"
                  style={{ padding: "2em 2em 0 2em" }}
                >
                  <img
                    src={Fat}
                    alt="healthy_eating"
                    className="pths_image"
                  ></img>
                </div>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  The blood test to check your cholesterol, LDL cholesterol, HDL
                  cholesterol and triglycerides is called a lipoprotein profile.
                  The test is most accurate when taken after you have fasted for
                  12 hours (e.g. overnight). Speak to your cardiologist before
                  leaving hospital to find out what YOUR cholesterol goal is.
                </p>
              </div>
            </div>

            <div className="slider_container" style={{ paddingTop: "1em" }}>
              <div className="blue-clr">
                <div className="pts_title_container">
                  <p className="pts_title_text">
                    How often should I have my fasting cholesterol re-checked
                    after I go home?
                  </p>
                </div>
                <div className="pts_content_container">
                  <p className="pts_content_text">
                    Every three months until you reach your goal, and yearly
                    after that. Talk to your GP.
                  </p>
                </div>
              </div>

              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "1em" }}>
                  Understanding your lipoprotein Profile
                </p>
              </div>
              <div className="pts_table_container">
                <table className="pts_table">
                  <thead className="pts_table_head">
                    <tr className="pts_table_head_tr pts_th">
                      <th>If you have coronary artery disease or diabetes</th>
                      <th>General Goal</th>
                      <th>Goal for you</th>
                    </tr>
                  </thead>
                  <tbody className="pts_table_body">
                    <tr className="pts_table_body_tr pts_tr">
                      <td>Total Cholesterol</td>
                      <td> {`<`}4.0 </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>LDL Cholesterol</td>
                      <td> {`<`}1.8 </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>HDL Cholesterol</td>
                      <td>
                        {" "}
                        {`>`}1 (men) {`>`}1.2 (women)
                      </td>
                      <td></td>
                    </tr>
                    <tr className="pts_table_body_tr pts_tr">
                      <td>Triglycerides</td>
                      <td> {`<`}1.7 </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="slider_container" style={{position:'relative'}}>
              <div
                className="pts_title_container"
                style={{ margin: "1em 1em 0em 1em" }}
              >
                <p
                  className="pts_title_text"
                  style={{ paddingTop: "4em", fontSize: "18px" }}
                >
                  The best way to reduce your cholesterol is to eat healthily,
                  exercise daily and take your cholesterol tablets.
                </p>
              </div>
              <div
                className="pts_content_container"
                style={{ margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  Many people ask about new products on the market called plant
                  stanols / sterols (e.g. Benecol®, Flora-Pro-Active ®, and
                  Danacol®). These products, when taken with a healthy diet and
                  regular exercise can reduce cholesterol a little more. The
                  amount that needs to be taken for this effect is one bottle of
                  the yoghurt drinks every day (Benecol®, Flora-Pro-Active ®,
                  and Danacol®) or two to three servings of the spreads, milks
                  or cheeses every day.
                </p>
              </div>

              <div
                className="pts_content_container"
                style={{ paddingTop: "1em", margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  Plant stanols / sterols can be taken with cholesterol tablets
                  but should never be taken instead of them. This is because
                  cholesterol tablets bring benefits other than just reducing
                  cholesterol. Please speak to your dietitian or doctor for
                  further information.
                </p>
              </div>
              <div
                className="pts_content_container blue_box"
                style={{ margin: "0.5em 1em 0.5em 1em" }}
              >
                <p className="pts_content_text">
                  If your cholesterol is high you should see a dietitian who
                  will give you the advice that is right for you.
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

            {/* <div className="slider_container">
          <div
            className="pts_content_container"
            style={{ paddingTop: "4em", margin: "0.5em 1em 0.5em 1em" }}
          >
            <p className="pts_content_text">
              Plant stanols / sterols can be taken with cholesterol tablets but
              should never be taken instead of them. This is because cholesterol
              tablets bring benefits other than just reducing cholesterol.
              Please speak to your dietitian or doctor for further information.
            </p>
          </div>
          <div
            className="pts_content_container blue_box"
            style={{ margin: "0.5em 1em 0.5em 1em" }}
          >
            <p className="pts_content_text">
              If your cholesterol is high you should see a dietitian who will
              give you the advice that is right for you.
            </p>
          </div>
        </div> */}
          </>
        )}
      </Container>
    </div>
  );
};

export default HighCholesterol;
