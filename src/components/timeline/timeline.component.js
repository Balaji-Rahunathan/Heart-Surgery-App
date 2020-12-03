import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import { useSetState } from '../../helpers/constants';
import ThedayofSurgery from '../../assets/images/The_Day_of_Surgery/Group_778.svg';
import SwipeArrow from '../../assets/images/swipe-arrow-blue.svg'
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";
import Carousel, { consts } from "react-elastic-carousel";
import _ from 'lodash';

const Timeline = (props) => {
    const [state, setState] = useSetState({ currentIndex: 0, currentContentIndex: 0, initialActiveIndex: 0 })
    const slider = useRef(null);

    const changeIndex = (direction) => {
        if (direction) {
            slider.current.slideNext();
        } else {
            slider.current.slidePrev();
        }
    }

    const topicCheck = (index) => {
        console.log("index", index);
        let findIndex = _.findIndex(props.content.data, (e) => {
            return e.index == index;
        });
        console.log("findIndex", findIndex);
        setState({ currentIndex: index, initialActiveIndex: findIndex });
        slider.current.goTo(findIndex);
        
    }

    const changeIndexIndex = (data) => {
        console.log(data.index)
        let content = props.content.data[data.index];
        // setState({ currentIndex: content.index });
        if(state.currentIndex !== content.index) {
            slider.current.goTo(data.index)
            setState({initialActiveIndex: data.index, currentIndex: content.index});
        }
    }

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img className="previous_icon" src={SwipeArrow}></img> : <img className="next_icon" src={SwipeArrow}></img>
        return (
            <div onClick={onClick} disabled={isEdge} style={{ alignSelf: 'center' }}>{pointer}</div>
        )
    }


    return (
        <div className="time_line_container">
            {console.log(state.initialActiveIndex)}
            <div className="time_line_content">
                <div className="sub_topic_container">
                    <div className="sub_topic_content">
                        <div className="topics">
                            <div className="line"></div>
                            {props.titles.titles.map((sub, index) => (
                                <div className="topic" style={state.currentIndex == index ? { marginLeft: '-5px' } : null} key={index} onClick={() => topicCheck(index)}>
                                    <div className="check_box_container">
                                        <div className={state.currentIndex == index ? "active" : "topic_check"}></div>
                                    </div>
                                    <div className="topic_container">
                                        <div className={state.currentIndex == index ? "active_text" : "topic_text"}>{sub}</div>
                                        {state.currentIndex == index && window.innerWidth <= 1050?
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

                                                        <Carousel pagination={false} ref={slider} initialActiveIndex={state.initialActiveIndex} enableMouseSwipe={false} onChange={(data) => { changeIndexIndex(data) }} className="carousel" renderArrow={myArrow}>
                                                            {props.content.data.map((data, index) => (
                                                                <div className="topic_content" id="topic" key={index}>
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
                                        : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {window.innerWidth > 1050 ?
                <div className="sub_content_container" style={window.innerWidth <= 1050? {display: 'none'}: {display: 'flex'}}>
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
                                
                            <Carousel pagination={false} ref={slider} enableMouseSwipe={false} onChange={(data) =>{ changeIndexIndex(data)}} className="carousel" renderArrow={myArrow}>
                                {props.content.data.map((data, index) => (
                                    <div className="topic_content" id="topic" key={index}>
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
                </div> : null }
            </div>
        </div>
    )
}

Timeline.propTypes = {

}

export default Timeline;

