import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import { useSetState } from '../../helpers/constants';
import ThedayofSurgery from '../../assets/images/The_Day_of_Surgery/Group_778.svg';
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";
import Carousel from "react-elastic-carousel";

const sample = [
    {value: 1, sub: "Test subject"},
    {value: 2, sub: "Test subject"},
    {value: 3, sub: "Test subject"},
    {value: 4, sub: "Test subject"},
    {value: 5, sub: "Test subject"}
]

const Timeline = (props) => {
    const [state, setState] = useSetState({currentIndex: 0, contentIndex: 0})
    const [slideClass, setClass] = useState("topic_content_right");
    const slider = useRef(null);


    const nextIndex = () => {
        if(props.data.data.length - 1 == state.currentIndex) {
            if(props.data.data[state.currentIndex].content.length - 1 == state.contentIndex) {
                setState({contentIndex: state.contentIndex, currentIndex: state.currentIndex})
            } else {
                setClass("topic_content_right");
                setState({contentIndex: state.contentIndex + 1})
                slider.current.slideNext();
            }
        } else {
            setClass("topic_content_right");
            if(props.data.data[state.currentIndex].content.length - 1 === state.contentIndex) {
                let count = state.currentIndex + 1
                setState({contentIndex: 0, currentIndex: count})
            } else {
                let count = state.contentIndex + 1
                setState({contentIndex: count})
                slider.current.slideNext();
            }
        }
    };
     
    const prevIndex = () => {
        // let rightSlide = document.getElementById('topic');
        // rightSlide.classList.add('topic_content_left');
        // rightSlide.classList.remove('topic_content_right');
        if(state.currentIndex == 0) {
            if(state.contentIndex !== 0) {
                setClass("topic_content_left");
                setState({contentIndex: state.contentIndex - 1});
                slider.current.slidePrev();
            } else {
                setState({contentIndex: 0});
            }
        } else {
            setClass("topic_content_left");
            if(props.data.data[state.currentIndex].content.length - 1 == state.contentIndex) {
                setState({contentIndex: state.contentIndex - 1})
                slider.current.slidePrev();
            } else if(state.contentIndex == 0 && state.currentIndex !== 0) {
                setState({contentIndex: props.data.data[state.currentIndex - 1].content.length - 1, currentIndex: state.currentIndex - 1})
            } else {
                setState({contentIndex:  state.contentIndex - 1})
                slider.current.slidePrev();
            }
        }
    };

    const topicCheck = (index) => {
        setState({contentIndex: 0, currentIndex: index});
        slider.current.goTo(0);
    }


    return (
        <div className="time_line_container">
            <div className="time_line_content">
                {console.log(console.log(state))}
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
                            upHandler={prevIndex}
                            downHandler={nextIndex}
                            style={{
                                width: "100%",
                                height: "100vh",
                                outline: "none",
                            }}
                            >
                                {/* <div className="sub_head">
                                    <div className="head_text">{props.data.data[state.currentIndex].content[state.contentIndex].subtitle?props.data.data[state.currentIndex].content[state.contentIndex].subtitle : ""}</div>
                                    <div className="head_desciption">{props.data.data[state.currentIndex].content[state.contentIndex].description}</div>
                                </div>
                                <div className="img_container">
                                    <img alt="day_of_img" src={props.data.data[state.currentIndex].content[state.contentIndex].image.default}></img>
                                </div> */}
                            <Carousel pagination={false} showArrows={true} showArrows={false} ref={slider}>
                                {props.data.data[state.currentIndex].content.map((data, index) => (
                                    index==state.contentIndex?
                                        <div className={slideClass} id="topic" key={index}>
                                            <div className="sub_head">
                                                <div className="head_text">{data.subtitle}</div>
                                                <div className="head_desciption">{data.description}</div>
                                            </div>
                                            <div className="img_container">
                                                <img alt="day_of_img" src={data.image.default}></img>
                                            </div>
                                        </div>
                                    : null
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

