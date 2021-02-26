import React,{useState} from 'react'
import Calender from '../../components/calender/calender.component';
import { calenderContents } from "../../helpers/content";
import HTMLFlipBook from "react-pageflip";
import Container from '../../common_component/container/container.component'
import './resuming_home.screen.scss'
import ResumingHomeImage from '../../assets/images/Resuming Home/Group 2.svg'
import ResumingHomeFooter from '../../assets/images/Resuming Home/Group 6.png'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'

const ResumingHome = (props) => {
    const [toggle, settoggle] = useState(false)

    const next = () => {
        props.history.push('/preparing_for_surgery');
    }

    const handleMenuButtonClick = (data) => {
        console.log(data)
        settoggle(data)
    }
    return (
        <div className="resuming_home_screen">
            <div className="resuming_home_conatiner">
                <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
                <Container className="swiper_container">
                    <MenuButton
                        background="#008DFB"
                        type="open"
                        onClick={handleMenuButtonClick}
                    />
                    <div className="slider_container">
                        <div className="resuming_home_title">
                            <p className="resuming_home_title_text">Resuming home activities after surgery</p>
                        </div>
                        <div className="resuming_home_image_container">
                            <img className="resuming_home_image" src={ResumingHomeImage} alt="resuming_home"></img>
                        </div>
                        <div className="resuming_home_content">
                            <p className="resuming_home_content_text">
                                The programme opposite is a sample
                                guide to help you find a balance, as you
                                return to your normal activities at home
                                following heart surgery.
                                </p>
                        </div>
                    </div>

                    <div className="slider_container">
                        <div className="resuming_home_content_container">
                            <div className="resuming_home_content_title">
                                <p className="resuming_home_content_title_text">Prioritise</p>
                            </div>
                            <div className="resuming_home_content">
                                <p className="resuming_home_content_text">
                                    Think about the tasks you do. Are they
                                    important? Can someone else do them?
                                    Can they be done more easily?
                                    </p>
                            </div>
                        </div>
                        <div className="resuming_home_content_container">
                            <div className="resuming_home_content_title">
                                <p className="resuming_home_content_title_text">Plan </p>
                            </div>
                            <div className="resuming_home_content">
                                <p className="resuming_home_content_text">
                                    Plan your day and week, spread out
                                    activities and allow more time for difficult
                                    tasks. Continue to approach new activities
                                    gradually.
                                    </p>
                            </div>
                        </div>
                        <div className="resuming_home_content_container">
                            <div className="resuming_home_content_title">
                                <p className="resuming_home_content_title_text">
                                    Pace yourself
                                    </p>
                            </div>
                            <div className="resuming_home_content">
                                <p className="resuming_home_content_text">
                                    Take a rest every day. Take extra breaks
                                    during activities to gradually increase
                                    your strength and prevent you from
                                    feeling tired or strained. Continue with
                                    your exercises.
                                    </p>
                            </div>
                        </div>

                        <div className="resuming_home_content_container">
                            <div className="resuming_home_content_title">
                                <p className="resuming_home_content_title_text">Positioning</p>
                            </div>
                            <div className="resuming_home_content">
                                <p className="resuming_home_content_text">
                                    Organise your workspace to conserve
                                    energy. Sit where possible, limit bending
                                    and reaching and use equipment such as
                                    long handle aids or trolleys to move
                                    objects.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {
                        calenderContents.map((data, index) => (
                            <div className="slider_container" key={index} >
                                <Calender {...data} />
                            </div>
                        ))
                    }

                </Container>
            </div>
        </div>


    )
}

export default ResumingHome
