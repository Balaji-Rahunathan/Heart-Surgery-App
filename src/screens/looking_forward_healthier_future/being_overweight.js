import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import BeingOverweightImage from "../../assets/images/looking_forward_healthier_future/Group 4.svg";
import Chart from "../../assets/images/looking_forward_healthier_future/Group 403.svg";
import BodyShape from "../../assets/images/update/body-measure.svg";
import LoseWeight from "../../assets/images/looking_forward_healthier_future/Group 7.svg";
import "./page_two.screen.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NextButton from "../../common_component/next_button/next_button.component";
import { Link } from "react-router-dom";
import BmiCalculator from "../../components/bmi_calculator/bmi_calculator.component";

const BeingOverweight = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push(
      "/looking_forward_healthier_future/healthy_eating_for_a_healthy_heart"
    );
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
    <div className="page_two_screen">
      <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />

      <Container className="swiper_container">
        {/* <MenuButton
          background="#008DFB"
          type="open"
          onClick={handleMenuButtonClick}
        /> */}
        <div class="header">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>

        <div className="slider_container" style={{ position: "relative" }}>
          <div className="pts_head_container">
            <p
              className="pts_head_text"
              style={{
                padding: "0.8em 50px",
                fontWeight: "600",
                fontSize: "24px",
                color: "#00a1fb",
              }}
            >
              Being Overweight
            </p>
          </div>
          <div className="pts_image_container">
            <img
              src={BeingOverweightImage}
              alt="body_shape"
              className="pts_image"
            ></img>
          </div>
          <div className="pts_content_container">
            <p className="pts_content_text lfh">
              To find out if you are overweight ask yourself two questions.
            </p>
            <p className="pts_content_text lfh2">
              Where is most of the fat on my body stored?
            </p>
            <p className="pts_content_text lfh2">
              What is my body weight in relation to my height?
            </p>
            <p className="pts_content_text">
              If you carry most of your extra weight around the middle of your
              body you are called apple shaped or centrally obese (see pictures
              above). You have a higher risk of heart problems and diabetes than
              someone whose extra weight is mostly on their hips and thighs –
              pear shaped (see pictures above).
            </p>
          </div>

          {/* <NextButton
            prev
            onClick={() =>
              props.history.push(
                "/looking_forward_healthier_future/high_cholesterol"
              )
            }
            style={{
              position: "absolute",
              top: "80px",
              bottom: "20px",
              left: "10px",
              right: "auto",
            }}
          /> */}
        </div>

        {load && (
          <>
            <div className="slider_container">
              <div className="pts_content_container">
                <p className="pts_content_text" style={{ paddingTop: "5em" }}>
                  Your body weight in relation to your height is called your
                  Body Mass Index or BMI.
                </p>
                <p className="pts_content_text" style={{ paddingTop: "1em" }}>
                  Look at the height and weight chart below to work out if you
                  are a healthy weight for your height (your BMI).
                </p>
              </div>

              <div
                className="pts_image_container"
                style={{ paddingTop: "2em" }}
              >
                <img
                  src={Chart}
                  alt="body_shape"
                  className="pts_image"
                  style={{ width: "90%" }}
                ></img>
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "4em" }}>
                  The bad news
                </p>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  You may be shocked to learn that you are overweight. Almost
                  60% of all Irish adults are in this category. Even if you are
                  only 7 pounds (3 kg) overweight you have a greater chance of
                  health problems compared to a person who is not overweight.
                  The important thing is to take action.
                </p>
              </div>

              <div className="pts_title_container">
                <p className="pts_title_text">The good news</p>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  If you are overweight, you can gain important health benefits
                  by losing 5 to 10% of your weight. Keeping to a healthier
                  weight for your height will:
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  decrease your risk of diabetes,
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} />{" "}
                  decrease your blood pressure, and
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> help
                  control your cholesterol level. Weight loss can also reduce
                  the work- load of your heart and help you to look and feel
                  better.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text" style={{ paddingTop: "4em" }}>
                  Understanding your BMI
                </p>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  Please ask a member of your cardiac rehabilitation team to
                  work out your BMI.
                </p>
                <BmiCalculator />
              </div>
              <div className="pts_table_container">
                <table className="pts_table">
                  <thead className="pts_table_head">
                    <tr className="pts_table_head_tr">
                      <th>BMI</th>
                      <th>Category</th>
                      <th>Risk</th>
                    </tr>
                  </thead>
                  <tbody className="pts_table_body">
                    <tr
                      className="pts_table_body_tr"
                      style={{ backgroundColor: "#fff26e" }}
                    >
                      <td>18.5-25</td>
                      <td>Normal</td>
                      <td>None</td>
                    </tr>
                    <tr
                      className="pts_table_body_tr"
                      style={{ backgroundColor: "#ffb962" }}
                    >
                      <td>25-30</td>
                      <td>Overweight</td>
                      <td>Increased</td>
                    </tr>
                    <tr
                      className="pts_table_body_tr"
                      style={{ backgroundColor: "#fea35c" }}
                    >
                      <td>30-40</td>
                      <td>Obese</td>
                      <td>High</td>
                    </tr>
                    <tr
                      className="pts_table_body_tr"
                      style={{ backgroundColor: "#fc8957" }}
                    >
                      <td> {`>`} 40</td>
                      <td>Morbidly Very</td>
                      <td>High Obese</td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  In general if you have a BMI of more than 25 you should lose
                  weight.
                </div>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  If you have a B of more than 25 you should lose weight.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p className="pts_title_text">Understanding your body shape</p>
              </div>
              <div
                className="pts_content_container"
                style={{ marginBottom: "0.5em" }}
              >
                <p className="pts_content_text">
                  Measure yourself around the waist (see diagram)
                </p>
                <p className="pts_content_text" style={{ paddingTop: "10px" }}>
                  My waist measurement is{" "}
                  <span>
                    <input name="waist" className="waist_input" />
                  </span>{" "}
                  cms{" "}
                </p>
                <p className="pts_content_text" style={{ paddingTop: "10px" }}>
                  Check your risk of further health problems using the table
                  below.
                </p>
              </div>
              <div className="pts_image_container">
                <img
                  src={BodyShape}
                  alt="body_shape"
                  className="pts_image"
                  style={{ width: "25%" }}
                ></img>
              </div>
              <div className="pts_table_container">
                <table className="pts_table">
                  <thead className="pts_table_head">
                    <tr className="pts_table_head_tr">
                      <th>Waist Measurement</th>
                      <th>Increased risk</th>
                      <th>High Risk</th>
                    </tr>
                  </thead>
                  <tbody className="pts_table_body">
                    <tr className="pts_table_body_tr">
                      <td>Men</td>
                      <td>
                        {`>`}94cm / {`>`}37 inches
                      </td>
                      <td>{`>`}102cm / 40 inches</td>
                    </tr>
                    <tr className="pts_table_body_tr">
                      <td>Women</td>
                      <td> {`>`} 80cm / 31 inches</td>
                      <td>{`>`}88cm / 35 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="pts_content_text"
                style={{ textAlign: "left", padding: "0.5em" }}
              >
                Note: South Asian adults are at high risk if their waist
                measurement is greater than 90cms (35 inches) for men or 80cms
                (31 inches) for women.
              </div>
            </div>

            <div className="slider_container">
              <div className="pts_title_container">
                <p
                  className="pts_title_text"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  How to lose weight
                </p>
              </div>
              <div
                className="pts_image_container"
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <img
                  src={LoseWeight}
                  alt="body_shape"
                  className="pts_image"
                ></img>
              </div>
              <div className="pts_content_container">
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Losing
                  weight is not easy, but you CAN do it! Be positive but
                  realistic about the amount of weight you expect to lose. There
                  is no quick fix.
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Eat a
                  healthy diet,{" "}
                  <Link
                    to="/looking_forward_healthier_future/healthy_eating_for_a_healthy_heart"
                    style={{ textDecoration: "none" }}
                  >
                    Click Here
                  </Link>
                </p>
              </div>
            </div>

            <div className="slider_container" style={{ position: "relative" }}>
              <div className="pts_content_container">
                <p className="pts_content_text" style={{ paddingTop: "5em" }}>
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Follow
                  the walking programme. It is healthier to lose weight by diet
                  and exercise rather than by diet alone.
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> If you
                  have given up smoking, well done. Try to maintain your weight
                  as you may be at an increased risk of gaining weight when you
                  quit.
                </p>
                <p className="pts_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Watch
                  your food portion sizes (for example a portion of meat is the
                  size of a pack of cards).
                </p>
                <p className="blue-clrf">
                  Seek advice from a dietitian to help you lose weight.
                </p>
              </div>

              {/* <NextButton
                onClick={next}
                style={{
                  position: "absolute",
                  top: "auto",
                  bottom: "20px",
                  left: "auto",
                  right: "20px",
                }}
              /> */}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default BeingOverweight;
