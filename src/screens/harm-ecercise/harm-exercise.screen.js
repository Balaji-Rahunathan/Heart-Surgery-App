import React from 'react';
import Video from '../../video/hand_main.mp4';
import Button from '../../images/Buuton.svg';
import ReactPlayer from 'react-player'
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
        this.setState({ timing: value })
        this.player.seekTo(value)
    }

    ref = player => {
        this.player = player
    }
    next = () => {
        this.props.history.push('/intro');
    }
    
    render() {
        return(
            <React.Fragment>
                <div className="exercise_two_container">
                    <div className="exercise_content">
                        <div className="exercise_head">
                            <h1>Arm Raising</h1>
                            <div className="head_text">The Corono arteries of the heart are the left corona artery, right corona artery and circumflex aertery. The Corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</div>
                        </div>

                        <div className="video_container">
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url={Video}
                                ref={this.ref}
                                playbackRate={0.5}
                            />
                        </div>
                        <div className="exercise_body">
                            <div className="video_controls_bar">
                                <input id="seekslider" onChange={(eve) => this.onChange(eve.target.value)} className="slider" type="range" min="0.1" max="0.8" step="0.001" value={this.state.timing} />
                            </div>
                        </div>
                        <div className="exercise_footer">
                            <img  onClick={()=>this.next()} src={Button} alt="button" className="next_btn"></img>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}