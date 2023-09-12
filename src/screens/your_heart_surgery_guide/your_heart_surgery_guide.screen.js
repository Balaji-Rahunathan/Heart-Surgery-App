import React from 'react'
import Container from '../../common_component/container/container.component'
import './your_heart_surgery_guide.screen.scss'

const YourHeartSurgeryGuide = (props) => {
    return (
        <div className="yhsg_screen">
            <Container className="yhsg_container">
                <div className="yhsg_head_container">
                    <p className="yhsg_head_text">Your Heart Surgery Guide</p>
                </div>
                <div className="yhsg_content_container">
                    <p className="yhsg_content_text">The Corono arteries of the heart are left corona artery, right corona artery and circumflex aertery.</p>
                </div>
                <div className="yhsg_menu_container">
                    <div className="yhsg_menu" onClick={() => props.history.push('/little_about_your_heart')}>
                        <p className="yhsg_menu_text">About your heart</p>
                    </div>
                    <div className="yhsg_menu" onClick={() => props.history.push('/preparing_for_surgery_home')}>
                        <p className="yhsg_menu_text">Preparing for your surgery</p>
                    </div>
                    <div className="yhsg_menu" onClick={() => props.history.push('/exercise')}>
                        <p className="yhsg_menu_text">After Surgery - Excersises</p>
                    </div>

                    <div className="yhsg_menu" onClick={() => props.history.push('/returning_home')}>
                        <p className="yhsg_menu_text">Returning home</p>
                    </div>

                    <div className="yhsg_menu" onClick={() => props.history.push('/looking_forward_healthier_future')}>
                        <p className="yhsg_menu_text">Looking forward healthier future</p>
                    </div>

                    <div className="yhsg_menu" onClick={() => props.history.push('/medications_for_your_heart')}>
                        <p className="yhsg_menu_text">Medications For Your Heart</p>
                    </div>

                    <div className="yhsg_menu" onClick={() => props.history.push('/useful_addressess')}>
                        <p className="yhsg_menu_text">Useful Addresses</p>
                    </div>
                    {/* <div className="yhsg_menu" onClick={() => props.history.push('/Medications')}>
                        <p className="yhsg_menu_text">Medications</p>
                    </div>
                    <div className="yhsg_menu" onClick={() => props.history.push('/myprescription')}>
                        <p className="yhsg_menu_text">My Prescription</p>
                    </div> */}

                    {/* <div className="yhsg_menu" onClick={() => props.history.push('/your_heart_surgery_guide')}>
                        <p className="yhsg_menu_text">Risk factor profile</p>
                    </div> */}

                </div>
            </Container>
        </div>
    )
}

export default YourHeartSurgeryGuide
