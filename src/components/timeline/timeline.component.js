import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import { useSetState } from '../../helpers/constants';
import ThedayofSurgery from '../../assets/images/The_Day_of_Surgery/Group_778.svg';
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";
import Carousel from "react-elastic-carousel";

const Timeline = (props) => {
    const [state, setState] = useSetState({currentIndex: 0, currentContentIndex: 0})
    const slider = useRef(null);

    const changeIndex = (direction) => {
        console.log("sliderr", slider.current);
        if(direction) {
            if((props.data.data.length - 1 == state.currentIndex) && (props.data.data[state.currentIndex].content.length - 1 == state.currentContentIndex)) {
                setState({currentIndex: 0});
                slider.current.goTo(0);
            } else {
                if(props.data.data[state.currentIndex].content.length - 1 == state.currentContentIndex) {
                    setState({currentIndex: state.currentIndex + 1})
                    slider.current.goTo(0);
                } else {
                    slider.current.slideNext();
                }
            }
        } else {
            if(state.currentIndex == 0 && state.currentContentIndex == 0) {

            } else {
                if(state.currentContentIndex == 0) {
                    setState({currentIndex: state.currentIndex - 1})
                    slider.current.goTo(props.data.data[state.currentIndex].content.length - 1);
                } else {
                    slider.current.slidePrev();
                }
            }
        }
    }

    const topicCheck = (index) => {
        setState({contentIndex: 0, currentIndex: index});
        slider.current.goTo(0);
    }


    return (
        <div className="time_line_container">
            <div className="time_line_content">
                <div className="sub_topic_container">
                    <div className="sub_topic_content">
                        <div className="topics">
                            {props.data.data.map((sub,index) => (
                                <div className="topic" style={state.currentIndex==index?{marginLeft: '-5px'} : null} key={index} onClick={() => topicCheck(index)}>
                                    <div className={state.currentIndex==index?"active": "topic_check"}></div>
                                    <div className={state.currentIndex==index?"active_text":"topic_text"}>{sub.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sub_content_container">
                    <div className="sub_content">
                        <ReactScrollWheelHandler
                            upHandler={()=> changeIndex(false)}
                            downHandler={() =>changeIndex(true)}
                            style={{
                                width: "100%",
                                height: "100%",
                                outline: "none",
                            }}
                            >
                                
                            <Carousel pagination={false} showArrows={false} ref={slider} onChange={(data) =>{ console.log("data",data); setState({currentContentIndex: data.index})}} className="carousel">
                                {props.data.data[state.currentIndex].content.map((data, index) => (
                                    <div className="topic_content_left" id="topic" key={index}>
                                        <div className="sub_head">
                                            <div className="head_text">{data.subtitle}</div>
                                            <div className="head_desciption">{data.description}</div>
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
            </div>
        </div>
    )
}

Timeline.propTypes = {

}

export default Timeline;

