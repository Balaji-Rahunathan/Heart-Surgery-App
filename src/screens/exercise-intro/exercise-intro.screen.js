import React from 'react';
import './exercise-intro.screen.scss';
import ExerciseImg from '../../images/work_place.svg'
import { getNodeText } from '@testing-library/react';

export default class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    next = () => {
        this.props.history.push('/neck');
    }

    render() {
        return(
            <React.Fragment>
                <div className="exercise_container">
                    <div className="exercise_content">
                        <div className="exercise_head">
                            <h1>Exercises After Cardiac Surgery</h1>
                            <div className="head_text">The Corono arteries of the heart are the left corona artery, right corona artery and circumflex aertery. The Corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</div>
                        </div>
                        <div className="exercise_body">
                            <img src={ExerciseImg} alt="exercise_img" className="exercise_img"></img>
                        </div>
                        <div className="exercise_footer">
                            <div className="see_more_btn" onClick={() =>this.next()}>See More</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}