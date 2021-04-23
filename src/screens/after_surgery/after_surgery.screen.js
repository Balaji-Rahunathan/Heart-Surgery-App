import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import "../returning_home/returning_home.screen.scss";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import Sitting from "../../assets/images/update/sitting.svg";
import Exec from "../../assets/images/update/relax.svg";
import Eat from "../../assets/images/update/eat.svg";
import Leg from "../../assets/images/update/leg.svg";
import Chest from "../../assets/images/update/chest.svg";
import Dress from "../../assets/images/update/dress.svg";


const AfterSurgery = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);

  const next = () => {
    props.history.push("/exercise");
  };

  const handleMenuButtonClick = (data) => {
    settoggle(data);
  };

  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container");
    el.addEventListener("scroll", () => {
      var elwinScroll = el.scrollTop;
      var elheight = el.scrollHeight - el.clientHeight;
      var elscrolled = (elwinScroll / elheight) * 100;
      console.log(elwinScroll, elheight, elscrolled);
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
    <div className="returning_home_screen">
      <div className="resuming_home_conatiner">
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

          <div className="slider_container" style={{}}>
            <div className="resuming_home_title">
              <p
                className="resuming_home_title_text"
                style={{ fontSize: "24px", padding: "20px", color: "#38A2FE" }}
              >
                After surgery
              </p>
              <p
                className="resuming_home_title_text"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: "0 0 20px 0",
                }}
              >
                Activities to help you on the road to recovery
              </p>
            </div>

            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bold" }}
              >
                Deep breathing and coughing
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                During any major surgery, the volume of air in your lungs
                decreases and sputum (phlegm) can collect in your lungs. These
                two things limit the amount of oxygen passing from your lungs to
                your bloodstream, so it is important to work on expanding your
                lungs and clearing the sputum.
              </p>
              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Sitting}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p className="resuming_home_content_text">
                To do this, place your hands on your stomach. Keep your
                shoulders relaxed (see picture above).
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Take a deep breath in through your nose. You should feel your
                stomach rising and falling as you breathe in and out.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Hold each breath for three seconds and then breathe out.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Repeat three times.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                These slow deep breaths fill your lungs with air and help to
                move sputum towards your mouth making it easier to cough. When
                coughing, support your chest by crossing your arms across it or
                by hugging a pillow. It is important to take pain killers at
                least every six to eight hours. They will help you relax and you
                will find the deep breathing and coughing easier.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bold" }}
              >
                Care of the healing chest wound
              </p>
              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Chest}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                It is important to know how to take care of your breastbone to
                help it heal properly. When getting out of bed, roll on to your
                side, swing your legs to the floor and push yourself up with
                your elbows. Try not to use the siderails to pull yourself up.
                If the head of the bed is raised you’ll find it easier to get
                up.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em"}}
          >
            <div className="resuming_home_content" style={{backgroundColor:'#ffe98f', padding:'20px 0', width:'80%', margin:'0 auto', borderRadius:'10px' }}>
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bold", paddingTop: "10px" }}
              >
                Here are some do’s and don’ts:
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px", fontWeight: "bold" }}
              >
                do
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Move slowly.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Avoid overstretching with your arms.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Hug a pillow when coughing.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px", fontWeight: "bold" }}
              >
                don’t
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Move your arms or twist your upper body quickly.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Put too much body weight through your arms.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Open heavy doors (use two hands if you must).
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Lift bags, children etc.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bolder" }}
              >
                Care of the healing leg wound
              </p>

              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Leg}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Your leg wound may be sore and swollen for a few days after the
                surgery. This will improve as you become more active. Wearing
                support stockings will help improve the blood flow in your leg.
                Raising your leg while you are resting will also help reduce
                swelling. You may be surprised to find that your leg wound can
                hurt more than your chest. This is because you have to put
                weight on your legs when you walk and there is often swelling at
                the knee and ankle joints that makes your leg feel tight. Some
                people may need their leg wound dressed and these dressings may
                need to continue at home.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bolder" }}
              >
                Eating and drinking
              </p>

              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Eat}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                After your operation you can eat and drink, but you may find
                that your appetite is poor. This is perfectly normal as you may
                feel sick, be in pain or constipated. If your appetite remains
                poor, please tell your doctor or nurse who will arrange for you
                to see a dietitian. Eating a well balanced diet will increase
                your strength and help healing. Do not go on a diet during this
                period. If you have been advised to lose weight after your
                surgery, you should wait until your wound has fully healed. This
                can take up to six weeks.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bolder" }}
              >
                Washing and dressing
              </p>

              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Dress}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                The nurses will help you wash and dress until you are
                independent. Most people are able to have a shower about five
                days after the operation. The nurse will help you remove any
                dressings covering your wounds. Wash your skin gently and pat it
                dry. Don’t be too surprised if you are very tired after
                showering. It is important to have someone close by in case you
                need help. You may find loose fitting tops more comfortable
                while your breastbone heals. Ladies may find a front fastening
                bra easier to wear.
              </p>

             

              
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
            <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Getting in and out of the bath at home puts pressure on your
                breastbone, similar to heavy lifting. We would advise you not to
                have a bath for three months. Your breastbone may still be
                tender during this time and you may find it difficult and
                painful to support yourself getting in and out of the bath. Use
                the shower instead.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Sleep in a position you feel most comfortable. Avoid lying on
                your back for a long time as it isn’t good for your lungs or
                skin. Try to lie on your side at least part of the time,
                changing your position every few hours. Get in and out of bed
                without using your arms and use a rolling technique. We will
                show you how do do this while you are in the hospital.
              </p>
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >
            <div className="resuming_home_content">
              <p
                className="resuming_home_content_text"
                style={{ fontWeight: "bolder" }}
              >
                Exercise in Hospital
              </p>

              <div
                className="resuming_home_image_container"
                style={{ textAlign: "center" }}
              >
                <img
                  className="resuming_home_image"
                  src={Exec}
                  alt="resuming_home"
                  style={{ maxWidth: "200px", paddingTop: "16px" }}
                ></img>
              </div>

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Exercise is very important in your recovery to full health after
                your operation. However, start slowly and gradually increase
                your activity level. While in hospital the nurses and
                physiotherapy staff will advise you on how far and how often you
                should walk and give you assistance should you need it.
              </p>

          
            </div>
          </div>

          <div
            className="slider_container"
            style={{ display: "block", paddingTop: "4em" }}
          >

<div className="resuming_home_content">
             

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px",fontWeight:'bolder' }}
              >
                The average progression is as follows:
              </p>

              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" ,fontWeight:'bold'}}
              >
                Day 1
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Breathing exercises. Maybe sit out of bed.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" ,fontWeight:'bold'}}
              >
                Day 2
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Sit out of bed. Maybe walk to the bathroom.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" ,fontWeight:'bold'}}
              >
                Day 3 – 5
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Gradually increase your walking in the corridor (as advised).
                Start the range of motion exercises on page 14. These will help
                relieve any stiffness you may experience after your surgery.
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" ,fontWeight:'bold'}}
              >
                Day 5 – 7
              </p>
              <p
                className="resuming_home_content_text"
                style={{ paddingTop: "10px" }}
              >
                Walk up and down the stairs (supervised).
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
        </Container>
      </div>
    </div>
  );
};

export default AfterSurgery;
