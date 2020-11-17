import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import { useSetState } from '../../helpers/constants';
import ThedayofSurgery from '../../assets/images/The_Day_of_Surgery/Group_778.svg';
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";
import Carousel from "react-elastic-carousel";
import _ from 'lodash';

const Timeline = (props) => {
    const [state, setState] = useSetState({currentIndex: 0, currentContentIndex: 0})
    const slider = useRef(null);

    const changeIndex = (direction) => {
        if(direction) {
            slider.current.slideNext();
        } else {
            slider.current.slidePrev();
        }
    }

    const topicCheck = (index) => {
        let findIndex = _.findIndex(props.content.data, (e) => { 
            return e.index == index; 
        });
        setState({currentIndex: index});
        slider.current.goTo(findIndex);
    }

    const changeIndexIndex = (data) => {
        let content = props.content.data[data.index];
        setState({currentIndex: content.index});
    }


    return (
        <div className="time_line_container">
            {console.log(props)}
            <div className="time_line_content">
                <div className="sub_topic_container">
                    <div className="sub_topic_content">
                        <div className="topics">
                            {props.titles.titles.map((sub,index) => (
                                <div className="topic" style={state.currentIndex==index?{marginLeft: '-5px'} : null} key={index} onClick={() => topicCheck(index)}>
                                    <div className={state.currentIndex==index?"active": "topic_check"}></div>
                                    <div className={state.currentIndex==index?"active_text":"topic_text"}>{sub}</div>
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
                                
                            <Carousel pagination={false} showArrows={false} ref={slider} onChange={(data) =>{ changeIndexIndex(data)}} className="carousel">
                                {props.content.data.map((data, index) => (
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

