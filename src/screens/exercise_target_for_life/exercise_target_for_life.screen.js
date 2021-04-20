import React, { useState,useEffect } from 'react'
import "./exercise_target_for_life.screen.scss";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CyclingImage from '../../assets/images/exercise_target_for_life/Group 2.svg'
import RememberImage from '../../assets/images/exercise_target_for_life/Group 3.svg'
import Container from '../../common_component/container/container.component'
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import NextButton from '../../common_component/next_button/next_button.component';

const ExerciseTargetForLife = (props) => {
    const [toggle, settoggle] = useState(false)
    const [showNextButton, setshowNextButton] = useState(false)
    const next = () => {
        props.history.push('/returning_home/for_you_and_your_partner');
    }
    const handleMenuButtonClick = (data) => {
        settoggle(data)
    }

    useEffect(() => {
        var timerId;
        let el = document.querySelector(".swiper_container")

        el.addEventListener("scroll", () => {
            var elwinScroll = el.scrollTop;
            var elheight = el.scrollHeight - el.clientHeight;
            var elscrolled = (elwinScroll / elheight) * 100;
            
            if (elscrolled > 90) {
                if (timerId) {
                    return
                }
                timerId = setTimeout(function () {
                    setshowNextButton(true)
                    timerId = undefined;
                }, 500)
            }
            else {
                if (timerId) {
                    return
                }                
                timerId = setTimeout(function () {
                    setshowNextButton(false)
                    timerId = undefined;
                }, 100)
            }
        })

    }, [])

    return (
        <div className="etfl_screen">
            <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
            <div className="etfl_container">
                <Container className="swiper_container">
                    <MenuButton
                        background="#008DFB"
                        type="open"
                        onClick={handleMenuButtonClick}
                    />
                    <div className="etfl_wrapper">
                        <div className="etfl_body_container">
                            <div className="etfl_head_container">
                                <p className="etfl_head_text">Exercise target for life</p>
                            </div>
                            <div className="etfl_image_container">
                                <img className="etfl_image" src={CyclingImage}></img>
                            </div>
                            <div className="eftl_content_container">
                                <p className="eftl_content_text">
                                    Aim to walk, cycle or swim in the
                                    following way, at least 5 times per week.
                            </p>
                                <p className="eftl_content_text"><FiberManualRecordIcon className="points_icon" />15 minutes at a slow pace to start (warm-up).</p>
                                <p className="eftl_content_text"><FiberManualRecordIcon className="points_icon" />30 minutes or more at a brisk pace.</p>
                                <p className="eftl_content_text"><FiberManualRecordIcon className="points_icon" />15 minutes at a slower pace, at the end (cool-down).</p>
                            </div>
                            <div className="etfl_content_card">
                                <p className="eftl_content_text">
                                    Remember to best benefit your heart,
                                    exercise should feel somewhat hard and
                                    make you breathe harder and feel
                                    warmer, but you should always be able to
                                    “ walk and talk.”
                                    If you become so breathless that you
                                    cannot talk, slow down or stop until you
                                    can breathe easily and then continue.
                                </p>
                            </div>
                            <div className="etfl_image_container">
                                <img className="etfl_image" src={RememberImage}></img>
                            </div>
                            <div className="eftl_content_container">
                                <p className="eftl_content_text">
                                    The following is a list of <span>Do’s</span> and <span>Don’ts</span> for exercise:
                            </p>
                            </div>

                            <div className="eftl_doanddont_container">
                                <p className="eftl_doanddont_title_text">Do</p>
                                <p><FiberManualRecordIcon className="points_icon_do" /> Warm up to start</p>
                                <p><FiberManualRecordIcon className="points_icon_do" /> Involve your family and friends</p>
                                <p><FiberManualRecordIcon className="points_icon_do" /> Wear comfortable shoes and clothing</p>
                                <p><FiberManualRecordIcon className="points_icon_do" /> Cool down and stretch to finish</p>
                                <p><FiberManualRecordIcon className="points_icon_do" /> Try a number of activities before choosing
                            one you really enjoy, that you can fit into your life and can keep doing regularly.</p>
                            </div>

                            <div className="eftl_doanddont_container">
                                <p className="eftl_doanddont_title_text">Don't</p>
                                <p><FiberManualRecordIcon className="points_icon_dont" /> Try to do too much too soon</p>
                                <p><FiberManualRecordIcon className="points_icon_dont" /> Exercise within one hour of a meal or long hot bath/shower</p>
                                <p><FiberManualRecordIcon className="points_icon_dont" /> Walk outside if the weather is very windy, hot or cold</p>
                                <p><FiberManualRecordIcon className="points_icon_dont" /> Walk on hills for the first few wee</p>
                            </div>

                            <div className="eftl_content_container">
                                <p className="eftl_content_text">
                                    Depending on the effort you put in,
                                    house- work, gardening, dancing, etc., can
                                    also help make your heart healthy. We can
                                    all find simple ways of doing a little more
                                    ordinary activities each day. Try parking
                                    the car a little further away from work,
                                    taking the stairs instead of the lift or even
                                    getting a dog.
                                </p>
                            </div>

                            {
                                showNextButton && <NextButton onClick={next} style={{ position: 'fixed', top: 'auto', bottom: '20px', left: 'auto', right: '20px' }} />
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ExerciseTargetForLife
