import React, { useState } from 'react'
import HeasImage1 from '../../assets/images/Home Exercise/Group 2.svg'
import HeasImage2 from '../../assets/images/Home Exercise/Group 3.svg'
import Accordian from '../../components/accordian/accordian.component';
import BorgScaleImage from '../../assets/images/Home Exercise/Group 5.svg'
import './home_exercise_after_surgery.scss';
import Container from '../../common_component/container/container.component'
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'

const HomExerciseAfterSurgery = (props) => {
    const [toggle, settoggle] = useState(false)
    const next = () => {
        props.history.push('/for_you_and_your_partner');
    }
    const handleMenuButtonClick = (data) => {
        settoggle(data)
    }
    return (
        <div className="heas_screen">
            <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
            <div className="heas_container">
                <Container className="swiper_container">
                    <MenuButton
                        background="#008DFB"
                        type="open"
                        onClick={handleMenuButtonClick}
                    />
                    <div className="heas_wrapper">
                        <div className="heas_body_container">
                            <div className="heas_head_container">
                                <p className="heas_head_text">Home Exercise After Surgery</p>
                            </div>
                            <div className="heas_image_container">
                                <img src={HeasImage1}></img>
                            </div>
                            <div className="heas_content_container">
                                <p className="heas_content_text">
                                    Remember that surgery alone is not
                                    enough to solve the problem of heart
                                    disease. You must continue a lifelong
                                    habit of daily exer- cise to help minimise
                                    the risk of developing further problems in
                                    the future.
                            </p>
                                <p className="heas_content_text">
                                    Walking is the only exercise you should
                                    do until your check up with the surgeon.
                                    You will not be allowed to resume any
                                    other sports until three months after
                                    surgery.
                            </p>
                            </div>

                            <div className="heas_image_container">
                                <img src={HeasImage2}></img>
                            </div>

                            <div className="heas_content_container">
                                <p className="heas_content_text">
                                    People with heart problems are often
                                    unsure about how fast they should walk,
                                    or how hard they can exercise. The Borg
                                    Scale is one way to track how hard you
                                    are working by asking yourself four
                                    questions:
                            </p>
                                <p className="heas_content_text heas_text_padding">
                                    1. Can I feel my angina symptoms (e.g.
                                    chest pain or tightness or shortness of
                                    breath) or palpitations?
                            </p>
                                <p className="heas_content_text">
                                    2. how
                                    height: 100%;sing. You can also use the scale to
                                    judge whether other activities such as
                                    housework, gardening or returning to
                                    work are ok for you or not.
                            </p>

                            </div>

                            <div className="heas_bottom_body_container">
                                <div className="heas_bottom_body_head">
                                    <p className="heas_bottom_body_head_text">
                                        Borg Scale
                                </p>
                                </div>
                                <div className="heas_bottom_body_image">
                                    <img src={BorgScaleImage}></img>
                                </div>
                            </div>

                            <div className="heas_accordian_container">
                                <Accordian />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default HomExerciseAfterSurgery
