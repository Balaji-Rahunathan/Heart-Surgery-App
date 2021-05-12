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

const HealthyEatingForHealthyHeart = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);
  const [load, setLoad] = useState(false);

  const next = () => {
    props.history.push("/looking_forward_healthier_future/alcohol");
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

        <div className="slider_container" style={{position: 'relative'}}>
          <div className="pths_head_container">
            <p
              className="pths_head_text"
              style={{
                padding: "0.8em 60px",
                fontWeight: "600",
                fontSize: "20px",
                color: "#00a1fb",
              }}
            >
              Healthy eating for a healthy heart
            </p>
          </div>
          <div className="pths_image_container">
            <img
              src={HealthyEating}
              alt="healthy_eating"
              className="pths_image"
            ></img>
          </div>
          <div className="pths_content_container">
            <p className="pths_content_text">
              A good diet is essential for your recovery from heart surgery.
              Healthy food can help your wounds heal, manage your weight, reduce
              your blood pressure and control your cholesterol. Even if do not
              have high cholesterol and are not overweight, it is still
              important for you and your family to eat healthily. Healthy eating
              not only improves cholesterol or blood pressure but is also
              essential for your overall mental and physical well-being.
            </p>
          </div>

          <NextButton
            prev
            onClick={() =>
              props.history.push(
                "/looking_forward_healthier_future/being_overweight"
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
              <div className="pths_head_container">
                <p className="pths_head_text" style={{ paddingLeft: "0.5em" }}>
                  Top tips for healthy eating
                </p>
              </div>
              <div className="pths_title_container">
                <p className="pths_title_text">Eat more fish</p>
              </div>
              <div className="pths_content_container">
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img src={Fish} alt="healthy_eating" className="pths_image" />
                </div>

                <p className="pths_content_text">
                Fish is a great substitute for red meat, and
is our main source of omega 3, which
protects your heart. Adults should eat at
least two 140g portions of fish per week.
At least one of these portions should be oily
fish e.g. salmon, mackerel, herring, trout,
sardines, kippers and fresh tuna. Some
omega 3 is also found in walnuts, pecans,
peanuts, almonds, and flaxseed (ground
linseed). Omega 3 supplements are not
recommended even if you don’t eat fish!
If you choose to take an omega 3
supplement, check that it does not contain
any other ingredients. Omega 3 supplements should not be taken with some
medications e.g. warfarin.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pths_title_container">
                <p className="pths_title_text" style={{ paddingTop: "3em" }}>
                  Eat more fruit and vegetables
                </p>
              </div>
              <div className="pths_content_container">
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img
                    src={Fruit}
                    alt="healthy_eating"
                    className="pths_image"
                  />
                </div>

                <p className="pths_content_text">
                  Fruit and vegetables are a good source of vitamins called
                  antioxidants. These vitamins help prevent plaque from building
                  up in the walls of arteries and protect you from further heart
                  problems. Fruit and vegetables are also high in fibre, which
                  can help control cholesterol and blood pressure.
                </p>

                <p className="pths_content_text" style={{ paddingTop: "1em" }}>
                  Have a varied diet with at least five portions of fruit and
                  vegetables a day. Frozen are as good as fresh. We don’t
                  recommend taking nutritional supplements instead of eating
                  fruit and vegetables.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pths_title_container">
                <p className="pths_title_text" style={{ paddingTop: "3em" }}>
                  Eat less fat
                </p>
              </div>
              <div className="pths_content_container">
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img
                    src={Fat}
                    alt="healthy_eating"
                    className="pths_image"
                    style={{ width: "70%" }}
                  />
                </div>

                <p className="pths_content_text">
                  Reducing the amount of fat you eat is important to lose
                  weight. Eating less saturated fat can help to reduce
                  cholesterol and slow plaque build-up in the wall of the blood
                  vessels. Some tips:
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> High
                  fat foods include cream, full-fat cheese, butter, cakes,
                  pastries, chocolate, crisps, mayonnaise and salad dressings.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Look
                  out for lower fat dairy products i.e. low fat milk, cheese and
                  yoghurts.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Use low
                  fat spreads; if using oils use rapeseed or olive oil.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Trim
                  fat from meat.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Avoid
                  fried or deep fried foods, fast food and take-aways.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Good
                  ways to cook are to grill, casserole, roast, poach, braise,
                  microwave or stir-fry.
                </p>
              </div>
            </div>

            <div className="slider_container">
              <div className="pths_title_container">
                <p className="pths_title_text" style={{ paddingTop: "3em" }}>
                  Eat less sugar
                </p>
              </div>
              <div
                className="pths_content_container"
                style={{ marginTop: "0.5em" }}
              >
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img
                    src={Sugar}
                    alt="healthy_eating"
                    className="pths_image"
                  />
                </div>

                <p className="pths_content_text">
                Read the tables to watch out for hidden
sugar particularly in foods marketed as
“low fat”. Limit unnecessary sugar e.g. in
tea, coffee, cereals, sugar coated cereals,
biscuits, regular fizzy drinks and confectionaries. Sweeteners are a safe substitute
but honey is as fattening as sugar!
                </p>
              </div>
            </div>
            <div className="slider_container" style={{ paddingTop: "2em" }}>
              <div className="pths_title_container">
                <p className="pths_title_text">Eat more fibre</p>
              </div>
              <div
                className="pths_content_container"
                style={{ marginTop: "1em" }}
              >
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img
                    src={Fiber}
                    alt="healthy_eating"
                    className="pths_image"
                  />
                </div>

                <p className="pths_content_text">
                  Soluble fibre found in oats, pulses and some fruit and
                  vegetables can help to lower your blood cholesterol level.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Choose
                  granary, wholegrain, stoneground wholemeal and rye breads.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Use
                  wholemeal pasta and wholegrain rice.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> High
                  fibre breakfast cereals such as porridge, oat flakes and ‘no
                  added sugar’ muesli are an excellent source of fibre.
                </p>
                <p className="pths_content_text">
                  <FiberManualRecordIcon style={{ fontSize: "10px" }} /> Try to
                  include more pulses, peas, beans and lentils in your diet.
                </p>
              </div>
            </div>
            <div className="slider_container" style={{ paddingTop: "2em", position: 'relative' }}>
              <div className="pths_title_container">
                <p className="pths_title_text">Eat less salt</p>
              </div>
              <div
                className="pths_content_container"
                style={{ marginTop: "0.5em" }}
              >
                <div
                  className="pths_head_container"
                  style={{ padding: "0em 4em 1em 4em" }}
                >
                  <img src={Salt} alt="healthy_eating" className="pths_image" />
                </div>

                <p className="pths_content_text">
                  Do not add salt to your food. Replace salt with pepper, herbs
                  and spices. Try to avoid foods that are high in salt like
                  packet soups and bacon.
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

export default HealthyEatingForHealthyHeart;
