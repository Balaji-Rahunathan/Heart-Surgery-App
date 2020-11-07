import React from 'react';
import PropTypes from 'prop-types';
import './timeline.component.scss';
import ThedayofSurgery from '../../assets/images/The  Day of Surgery/Group 778.svg';

const sample = [
    {value: 1, sub: "Test subject"},
    {value: 2, sub: "Test subject"},
    {value: 3, sub: "Test subject"},
    {value: 4, sub: "Test subject"},
    {value: 5, sub: "Test subject"}
]

const Timeline = (props) => {
    const myRef = React.createRef();

    const onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    }


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
                    <div className="sub_content" onScroll={() => onScroll()}>
                        <div className="sub_head">
                            <div className="head_text">The Day of Surgery</div>
                            <div className="head_desciption">We will ask you to use a special shower get that cleans your skin and removes germs.</div>
                        </div>
                        <div className="img_container">
                            <img alt="day_of_img" src={ThedayofSurgery}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Timeline.propTypes = {

}

export default Timeline;

