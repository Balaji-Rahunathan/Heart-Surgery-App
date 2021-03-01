import React, { useState } from 'react'
import Container from '../../common_component/container/container.component';
import Background from '../../assets/images/preparing_for_your_surgery/home_background.svg';
import BodyImage from '../../assets/images/preparing_for_your_surgery/Group_12.svg';
import Button from '../../assets/images/Buuton.svg';
import './home_surgery.screen.scss';
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'

const HomeSurgery = (props) => {

    const next = () => {
        props.history.push('/preparing_for_surgery');
    }

    const [toggle, settoggle] = useState(false)

    const handleMenuButtonClick = (data) => {
        settoggle(data)
    }

    return (
        <Container style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
            <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
            <div className="home_body">
                <div className="body">
                    <div className="border_line">
                        <div className="body_content">
                            <MenuButton
                                background="white"
                                type="open"
                                onClick={handleMenuButtonClick}
                                style={{ position: 'absolute', left: '0', top: '0' }}
                            />
                            <div className="line"></div>
                            <div className="circle">
                                <div className="check_box"></div>
                            </div>
                            <div className="content">
                                <div className="body_head">Preparing for your surgery</div>
                                <div className="body_text">The corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</div>
                                <div className="exercise_footer" onClick={() => next()} >
                                    <img src={Button} alt="button" className="next_btn"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body_image">
                        <img src={BodyImage} alt="body_img" className="image"></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomeSurgery;