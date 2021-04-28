import React, { useEffect, useState } from "react";
import Container from "../../common_component/container/container.component";
import Stage from "../../components/stage/stage.component";
import "./home_walking.screen.scss";
import SampleImage from "../../assets/images/exercise_target_for_life/Group 2.svg";
import { homeWalking } from "../../helpers/content";
import NextButton from "../../common_component/next_button/next_button.component";

const HomeWalking = (props) => {
  const [showNextButton, setshowNextButton] = useState(false);
  const [showPrevButton, setshowPrevButton] = useState(true);
  const [load, setLoad] = useState(false);
  const next = () => {
    props.history.push("/returning_home/exercise_target_for_life");
  };
  useEffect(() => {
    var timerId;
    let el = document.querySelector(".vertical_scroller");
    console.log(el);
    setTimeout(() => {
      el.addEventListener("scroll", () => {
        var elwinScroll = el.scrollLeft;
        var elheight = el.scrollWidth - el.clientWidth;
        var elscrolled = (elwinScroll / elheight) * 100;
        // console.log(elwinScroll, elheight, elscrolled)
        document.getElementById("myBar").style.width = elscrolled + "%";
        if (elscrolled > 94) {
          if (timerId) {
            return;
          }
          timerId = setTimeout(function () {
            setshowNextButton(true);
            timerId = undefined;
          }, 500);
        } else if (elscrolled < 5) {
          if (timerId) {
            return;
          }
          timerId = setTimeout(function () {
            setshowPrevButton(true);
            timerId = undefined;
          }, 500);
        } else {
          if (timerId) {
            return;
          }
          timerId = setTimeout(function () {
            setshowNextButton(false);
            setshowPrevButton(false);
            timerId = undefined;
          }, 500);
        }
      });
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <div className="home_walking_container">
      <div className="home_walking_scroll_bar">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
        <div className="stage_status_conatiner">
          <div className="stage_from">Stage 1</div>
          <div className="stage_to">Stage 12</div>
        </div>
      </div>
      <div className="home_walking_content">
        <Container
          className="container x mandatory-scroll-snapping vertical_scroller"
          id="vertical_scroller"
          dir="ltr"
        >
          {homeWalking.map((data) => (
            <Stage
              stage={data.stage}
              description={data.description}
              src={data.src}
              feel={data.feel}
            />
          ))}
        </Container>

        {showPrevButton && (
          <NextButton
            prev
            onClick={() => props.history.push("/returning_home/home_walking_programme")}
            style={{
              position: "fixed",
              top: "auto",
              bottom: "20px",
              left: "10px",
              right: "auto",
            }}
          />
        )}

        {showNextButton && (
          <NextButton
            onClick={next}
            style={{
              position: "fixed",
              top: "auto",
              bottom: "20px",
              left: "auto",
              right: "10px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HomeWalking;
