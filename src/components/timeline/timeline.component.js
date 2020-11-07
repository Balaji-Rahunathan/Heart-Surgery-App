import React from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import { useSetState } from '../../helpers/constants';
import ThedayofSurgery from '../../assets/images/The_Day_of_Surgery/Group_778.svg';
import ReactScrollWheelHandler from "../../../node_modules/react-scroll-wheel-handler";

const sample = [
    {value: 1, sub: "Test subject"},
    {value: 2, sub: "Test subject"},
    {value: 3, sub: "Test subject"},
    {value: 4, sub: "Test subject"},
    {value: 5, sub: "Test subject"}
]

const Timeline = (props) => {
    const [state, setState] = useSetState({currentIndex: 0})


    const nextIndex = () => {
        console.log("next");
    };
     
    const prevIndex = () => {
        console.log("previous");
    };


    return (
        <div className="time_line_container">
            <div className="time_line_content">
                <div className="sub_topic_container">
                    <div className="sub_topic_content">
                        <div className="topics">
                            {props.data.data.map((sub,index) => (
                                <div className="topic" style={state.currentIndex==index?{marginLeft: '-5px'} : null} key={index}>
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
                            
                            <div className="sub_head">
                                <div className="head_text">{props.data.data[0].content[0].subtitle}</div>
                                <div className="head_desciption">{props.data.data[0].content[0].description}</div>
                            </div>
                            <div className="img_container">
                                <img alt="day_of_img" src={ThedayofSurgery}></img>
                            </div>
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

