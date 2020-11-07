import React from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
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
                            {sample.map(sub => (
                                <div className="topic">
                                    <div className="topic_check"></div>
                                    <div className="topic_text">{sub.sub}</div>
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
                            }}
                            >
                            <div className="sub_head">
                                <div className="head_text">The Day of Surgery</div>
                                <div className="head_desciption">We will ask you to use a special shower get that cleans your skin and removes germs.</div>
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

