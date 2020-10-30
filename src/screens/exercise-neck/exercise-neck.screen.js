import React from 'react';
import TimeRangeSlider from 'react-time-range-slider';
import ReactSlider from 'react-slider';
import Video from '../../video/frame.mp4';
import './exercise-neck.scss';


export default class ExerciseNeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timing: '0.1',
            vid: "",
            seekslider: ""
        }
    }

    componentDidMount() {
    }

    onChange = (value) => {
        console.log(value);
        let video = document.getElementById('my_video');
        let seeker = document.getElementById('seekslider');
        video.currentTime = value;
        this.setState({timing: value})
    }
    
    render() {
        return(
            <React.Fragment>
                <div className="exercise_one_container">
                    <div className="exercise_content">
                        <div className="exercise_head">
                            <h1>Exercises After Cardiac Surgery</h1>
                            <div className="head_text">The Corono arteries of the heart are the left corona artery, right corona artery and circumflex aertery. The Corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</div>
                        </div>
                        <div className="exercise_body">
                            <div className="video_controls_bar">
                                <input id="seekslider" onChange={(eve) => this.onChange(eve.target.value)} className="slider" type="range" min="0.1" max="2.0" step="0.001" value={this.state.timing} />
                            </div>
                        </div>
                        <div className="video_container">
                            <video id="my_video" width="100%">
                                <source src={Video} />
                            </video>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}