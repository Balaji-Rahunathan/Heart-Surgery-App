import React, { useRef, useState } from "react";
import "./timeline.component.scss";
import { useSetState } from "../../helpers/constants";
import SwipeArrow from "../../assets/images/swipe-arrow-blue.svg";
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";
import Carousel, { consts } from "react-elastic-carousel";
import _ from "lodash";
import NextButton from "../../common_component/next_button/next_button.component";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Timeline = (props) => {
  const [state, setState] = useSetState({
    currentIndex: 0,
    currentContentIndex: 0,
    initialActiveIndex: 0,
  });
  const slider = useRef(null);
  const [index, setindex] = useState(0);

  const changeIndex = (direction) => {
    if (direction) {
      slider.current.slideNext();
    } else {
      slider.current.slidePrev();
    }
    setState({ currentContentIndex: slider.current });
  };

  const topicCheck = (index) => {
    let findIndex = _.findIndex(props.content.data, (e) => {
      return e.index == index;
    });
    setState({
      currentIndex: index,
      initialActiveIndex: findIndex,
      currentContentIndex: slider.current,
    });
    slider.current.goTo(findIndex);
  };

  const changeIndexIndex = (data) => {
    setindex(data.index);
    let content = props.content.data[data.index];
    // setState({ currentIndex: content.index });
    if (state.currentIndex !== content.index) {
      slider.current.goTo(data.index);
      setState({
        initialActiveIndex: data.index,
        currentIndex: content.index,
        currentContentIndex: slider.current,
      });
    }
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img className="previous_icon" src={SwipeArrow}></img>
      ) : (
        <img className="next_icon" src={SwipeArrow}></img>
      );
    return (
      <div onClick={onClick} disabled={isEdge} style={{ alignSelf: "center", display:'none' }}>
        {pointer}
      </div>
    );
    // const pointer = type === consts.PREV ? '👈' : '👉'
    //   return (
    //     <button onClick={onClick} disabled={isEdge}>
    //       {pointer}
    //     </button>
    //   )
  };

  const renderPage = ({ pages, activePage, onClick }) => {
    let page = _.filter(props.content.data, { index: state.currentIndex }).map(
      (data) => data.id
    );
    return (
      <div className="pagination">
        {page.map((page) => {
          const isActivePage = activePage === page;
          return isActivePage ? (
            <div className="page_active"></div>
          ) : (
            <div className="page_not_active"></div>
          );
        })}
      </div>
    );
  };

  const next = () => {
    props.history.push("/exercise");
  };

  return (
    <div className="time_line_container">
      <div className="time_line_content">
        <div className="sub_topic_container">
          <div className="sub_topic_content">
            <div className="topics">
              <div className="line"></div>
              {props.titles.titles.map((sub, index) => {
                console.log(state.currentIndex, index);
                if (
                  index === state.currentIndex ||
                  index === state.currentIndex - 1
                ) {
                  return (
                    <div
                      className="topic"
                      style={
                        state.currentIndex == index
                          ? { marginLeft: "-5px" }
                          : null
                      }
                      key={index}
                      onClick={() => topicCheck(index)}
                    >
                      {console.log(state)}
                      <div className="check_box_container">
                        <div
                          className={
                            state.currentIndex == index
                              ? "active animate-bottom"
                              : "topic_check"
                          }
                        ></div>
                      </div>
                      <div className="topic_container">
                        <div
                          className={
                            state.currentIndex == index
                              ? "active_text animate-bottom"
                              : "topic_text"
                          }
                        >
                          {sub}
                        </div>
                        {state.currentIndex == index &&
                        window.innerWidth <= 1050 ? (
                          <div className="sub_content_container">
                            <div className="sub_content">
                              <ReactScrollWheelHandler
                                upHandler={() => changeIndex(false)}
                                downHandler={() => changeIndex(true)}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <Carousel
                                  ref={slider}
                                  initialActiveIndex={state.initialActiveIndex}
                                  // enableMouseSwipe={false}
                                  renderPagination={renderPage}
                                  onChange={(data) => {
                                    changeIndexIndex(data);
                                  }}
                                  className="carousel"
                                  renderArrow={myArrow}
                                >
                                  {props.content.data.map((data, index) => (
                                    <div
                                      className="topic_content animate-bottom"
                                      id="topic"
                                      key={index}
                                    >
                                      <div className="sub_head">
                                        <div className="head_text">
                                          {data.subtitle}
                                        </div>
                                        <div className="head_desciption">
                                          {data.description}
                                          {data.arrDesc &&
                                            data.arrDesc.map((arrItem) => (
                                              <p style={{ paddingLeft: "1em" }}>
                                                <FiberManualRecordIcon
                                                  style={{
                                                    fontSize: "12px",
                                                    paddingRight: "0.5em",
                                                  }}
                                                />
                                                {arrItem}
                                              </p>
                                            ))}
                                        </div>
                                        <div className="head_description_items">
                                          {data.items &&
                                            data.items.map((item) => (
                                              <div className="head_description_item">
                                                {item}
                                              </div>
                                            ))}
                                        </div>
                                      </div>
                                      <div className="img_container">
                                        <img
                                          alt="day_of_img"
                                          src={data.image.default}
                                        ></img>
                                      </div>
                                    </div>
                                  ))}
                                </Carousel>
                              </ReactScrollWheelHandler>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {window.innerWidth > 1050 ? (
          <div
            className="sub_content_container"
            style={
              window.innerWidth <= 1050
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <div className="sub_content">
              <ReactScrollWheelHandler
                upHandler={() => changeIndex(false)}
                downHandler={() => changeIndex(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  outline: "none",
                }}
              >
                <Carousel
                  pagination={false}
                  ref={slider}
                  enableMouseSwipe={false}
                  onChange={(data) => {
                    changeIndexIndex(data);
                  }}
                  className="carousel"
                  // renderArrow={myArrow}
                >
                  {props.content.data.map((data, index) => (
                    <div className="topic_content" id="topic" key={index}>
                      <div className="sub_head">
                        <div className="head_text">{data.subtitle}</div>
                        <div className="head_desciption">
                          {data.description}
                        </div>
                      </div>
                      <div className="img_container">
                        <img alt="day_of_img" src={data.image.default}></img>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </ReactScrollWheelHandler>
            </div>
          </div>
        ) : null}
      </div>
      {index === 29 && (
        <NextButton
          onClick={next}
          style={{
            position: "absolute",
            top: "auto",
            left: "auto",
            bottom: "10px",
            right: "20px",
            zIndex: "20",
          }}
        />
      )}
    </div>
  );
};

Timeline.propTypes = {};

export default Timeline;
