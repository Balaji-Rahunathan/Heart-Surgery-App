import React from 'react';
import Video from '../../video/hand_main.mp4';
import Button from '../../images/Buuton.svg';
import './harm-exercise.scss';


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
                            <h1>Arm Raising</h1>
                            <div className="head_text">The Corono arteries of the heart are the left corona artery, right corona artery and circumflex aertery. The Corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</div>
                        </div>
                        <div className="exercise_body">
                            <div className="video_controls_bar">
                                <input id="seekslider" onChange={(eve) => this.onChange(eve.target.value)} className="slider" type="range" min="0.1" max="2.0" step="0.001" value={this.state.timing} />
                            </div>
                        </div>
                        <div className="video_container">
                            <video id="my_video" height="300" autoplay={true}>
                                <source src={Video} />
                            </video>
                        </div>
                        <div className="exercise_footer">
                            <img src={Button} alt="button" className="next_btn"></img>
                            {/* <div className="see_more_btn" onClick={() =>this.next()}>See More</div> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}