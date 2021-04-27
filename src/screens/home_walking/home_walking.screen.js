import React, { useEffect } from "react";
import Container from "../../common_component/container/container.component";
import Stage from "../../components/stage/stage.component";
import "./home_walking.screen.scss";
import SampleImage from "../../assets/images/exercise_target_for_life/Group 2.svg";
import { homeWalking } from "../../helpers/content";

const HomeWalking = () => {
  useEffect(() => {
    var timerId;
    let el = document.querySelector(".mandatory-scroll-snapping");

    el.addEventListener("scroll", () => {
      var elwinScroll = el.scrollLeft;
      var elheight = el.scrollWidth - el.clientWidth;
      var elscrolled = (elwinScroll / elheight) * 100;
      document.getElementById("myBar").style.width = elscrolled + "%";
      console.log(elscrolled);
    });
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
        <Container className="container x mandatory-scroll-snapping" dir="ltr">
          {homeWalking.map((data) => (
            <Stage
              stage={data.stage}
              description={data.description}
              src={data.src}
              feel={data.feel}
            />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default HomeWalking;
