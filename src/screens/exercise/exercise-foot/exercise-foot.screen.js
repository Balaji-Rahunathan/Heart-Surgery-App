import React from 'react';
import Video from '../../../assets/video/1.mp4';
import Button from '../../../assets/images/Buuton.svg';
import SwipeBlack from '../../../assets/images/swipe-arrow.svg';
import ReactPlayer from 'react-player';
import '../exercise-neck/exercise-neck.scss';
import Sidebar from '../../../components/sidebar/sidebar.component'
import MenuButton from '../../../common_component/menu_button/menu_button.component'


export default class ExerciseFoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timing: '0.1',
            vid: "",
            seekslider: "",
            swipeClass: "swipe_icon",
            swipePrev: "swipe_icon_hidden",
            toggle: false
        }
    }

    componentDidMount() {
    }

    onChange = (value) => {
        console.log(value);
        if (value > 0.3 && value < 0.6) {
            this.setState({ swipeClass: "swipe_icon_hidden", swipePrev: "swipe_icon_hidden" })
        }
        if (value >= 0.6) {
            this.setState({ swipeClass: "swipe_icon_hidden", swipePrev: "swipe_icon_prev" })
        }
        if (value <= 0.3) {
            this.setState({ swipeClass: "swipe_icon", swipePrev: "swipe_icon_hidden" })
        }
        this.setState({ timing: value })
        this.player.seekTo(value)
    }

    ref = player => {
        this.player = player
    }

    next = () => {
        this.props.history.push('/upper_body');
    }

    handleMenuButtonClick = (data) => {
        this.setState({ toggle: data })
    }

    render() {
        return (
            <React.Fragment>
                <div className="exercise_one_container">
                    <Sidebar {...this.props} toggle={this.state.toggle} onClick={this.handleMenuButtonClick} />
                    <div className="exercise_content">
                        <MenuButton
                            background="#008dfb"
                            type="open"
                            onClick={this.handleMenuButtonClick}
                            style={{ position: 'absolute', left: '0', top: '0' }}
                        />
                        <div className="exercise_head">
                            <h1>Side Bending</h1>
                            <div className="head_text">
                                <p>SStarting position: Stand up straight and tall, feet
slightly apart, arms loose by your side.</p>
                                <p className="spc">a) Slowly bend to the left allowing your arm to slide
down your leg.</p>
                                <p className="spc">b) Repeat to the right side.</p>
                                <p className="spc">Repeat 2 to 3 times.</p>
                                <p className="spc">Note: Try to make this a pure movement to the
side. Imagine you are trying to slide between 2
panes of glass so that you don’t lean forward or
backwards.</p>
                                </div>
                                </div>
                        <div className="video_container" style={{width:'70%'}}>
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
                            <div className={this.state.swipeClass}><div className="swipe_text">Swipe</div><img src={SwipeBlack} alt="swipe_black" className="swipe_img"></img></div>
                            <div className={this.state.swipePrev}><img src={SwipeBlack} className="swipe_translate swipe_img" alt="swipe_black"></img><div className="swipe_text">Swipe</div></div>
                        </div>
                        <div className="exercise_footer" onClick={() => this.next()} >
                            <img src={Button} alt="button" className="next_btn"></img>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}