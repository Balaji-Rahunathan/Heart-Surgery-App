import React, { useState, useEffect } from 'react'
import Container from '../../common_component/container/container.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import MenuButton from '../../common_component/menu_button/menu_button.component'
import SmokingImage from '../../assets/images/looking_forward_healthier_future/Group 2.svg'
import RememberD4 from '../../assets/images/looking_forward_healthier_future/Group 3.svg'
import CigaretteImage from '../../assets/images/looking_forward_healthier_future/Group 8.svg'
import './page_one.screen.scss'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NextButton from '../../common_component/next_button/next_button.component';
import Second from "../../assets/images/update/smoke.svg"
import Third from "../../assets/images/update/smoketwo.svg"

const PageOne = (props) => {

    const [toggle, settoggle] = useState(false)
    const [showNextButton, setshowNextButton] = useState(false)

    const next = () => {
        props.history.push('/page_two');
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
            console.log(elwinScroll, elheight, elscrolled)
            document.getElementById("myBar").style.width = elscrolled + "%";
            if (elscrolled > 92) {
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
                }, 500)
            }
        })

    }, [])

    return (
        <div className="page_one_screen">
            <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />

            <Container className="swiper_container">
                <MenuButton
                    background="#008DFB"
                    type="open"
                    onClick={handleMenuButtonClick}
                />
                <div class="header">
                    <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_title_container">
                        <p className="pos_title_text">Smoking</p>
                    </div>
                    <div className="pos_image_container">
                        <img src={SmokingImage} alt="smoking_image" className="pos_image_smoking"></img>
                    </div>
                    <div className="pos_message_container">
                        <p className="poss_message_text">
                            Quitting smoking completely is vital.
                            it’s never too late, but the sooner the
                            better.
                        </p>
                    </div>
                    <div className="pos_sub_title_container" style={{ margin: "0em 1em 0em 1em" }}>
                        <p className="pos_sub_title_text" style={{ padding: '1em' }}>
                            The dangers of smoking:
                        </p>
                    </div>
                    <div className="pos_points_container">
                        <p className="pos_pionts_text">
                            1. Smoking speeds up the development
                            of plaque in the body’s arteries by
                            damaging the lining, causing fats to stick
                            easily.
                        </p>
                    </div>

                </div>

                <div className="slider_container">
                    <div className="pos_sub_title_container">
                        <p className="pos_sub_title_text">
                            The dangers of smoking:
                        </p>
                    </div>

                    <div className="pos_points_container">
                        <p className="pos_pionts_text">
                            2. Smoking leads to an increased risk of
                            male impotence and coronary artery
                            disease. The longer and heavier one
                            smokes, the higher the risk for both.
                        </p>
                        <p className="pos_pionts_text">
                            3. Smokers are three times more likely to
                            have a heart attack, than non-smokers.
                        </p>

                        <p className="pos_pionts_text">
                            4. Smokers are almost three times more
                            likely to die during a heart attack, than
                            non-smokers.
                        </p>

                        <p className="pos_pionts_text">
                            5. Smoking makes the blood more prone
                            to clotting in the coronary arteries, and
                            elsewhere. This increases your risk of
                            stroke and heart attack.
                        </p>

                        <p className="pos_pionts_text">
                            6. A smoker’s heart has to work harder by
                            pumping faster, just to deliver the same
                            amount of oxygen all over the body. This
                            is not good for your heart long term.
                        </p>
                    </div>

                    <div className="pos_points_bottom_container">
                        <p className="pos_points_bottom_text">
                            Fight the cravings
                        </p>
                    </div>

                    <div className="pos_points_container" >
                        <p className="pos_pionts_text">
                            Cravings can occur very often during the
                            first few days after stopping. They usually
                            last 3 to 5 minutes and then start to wear
                            off.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_remember_title_container">
                        <p className="pos_remember_title_text">Remember the 4 D’s:</p>
                    </div>
                    <div className="pos_image_container">
                        <img src={RememberD4} alt="remeberd4" className="pos_image"></img>
                    </div>

                    <div className="pos_points_container">
                        <p className="pos_pionts_text">
                            1. <span className="pos_bold_d">D</span>elay at least 3 minutes and the urge will pass.
                        </p>
                        <p className="pos_pionts_text">
                            2. <span className="pos_bold_d">D</span>istract yourself - move away from the situation.
                        </p>
                        <p className="pos_pionts_text">
                            3. <span className="pos_bold_d">D</span>eep breathe – slowly and deeply.
                        </p>
                        <p className="pos_pionts_text">
                            4. <span className="pos_bold_d">D</span>rink a glass of water or fruit juice.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_sub_title_container">
                        <p className="pos_sub_title_text">Benefits of quitting:</p>
                    </div>
                    <div className="pos_image_container">
                        <img src={CigaretteImage} alt="cigarette_image" className="pos_image"></img>
                    </div>
                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 20 minutes</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Blood pressure and pulse rate return to
                            normal. Circulation improves in hands and
                            feet, making them warmer.
                        </p>
                    </div>
                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 8 hours</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Oxygen levels in the blood return to
                            normal. Chances of a heart attack start to
                            fall.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                <div className="pos_image_container" style={{ paddingTop: "4em" }}>
                        <img src={Second} alt="cigarette_image" className="pos_image"></img>
                    </div>
                    <div className="pos_time_period_container" >
                        <p className="pos_time_period_text" >After 24 hours</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Carbon monoxide is eliminated from the
                            body. The lungs start to clear out mucous
                            and other debris.
                        </p>
                    </div>
                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 48 hours</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Nicotine is no longer detectable in the
                            body. The ability to taste and smell is
                            improved.
                        </p>
                    </div>
                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 72 hours</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Breathing becomes easier as the
                            bronchial tubes relax. Energy levels
                            increase. 2em 1em 0
                        </p>
                    </div>
                </div>

                <div className="slider_container">

                <div className="pos_image_container" style={{ paddingTop: "4em" }}>
                        <img src={Third} alt="cigarette_image" className="pos_image"></img>
                    </div>

                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 2 - 12 weeks</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Circulation improves throughout the
                            body, making walking easier.
                        </p>
                    </div>

                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 3 - 9 months</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Breathing problems such as cough,
                            shortness of breath, and wheeze
                            decrease. Overall, lung function improves
                            by 5 to 10%.
                        </p>
                    </div>
                    <div className="pos_time_period_container">
                        <p className="pos_time_period_text">After 10 years</p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            The benefits continue over the years and
                            after 10 years the risk of having a heart
                            attack reduces to that of a non-
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_sub_title_container">
                        <div className="pos_sub_title_text">
                            Nicotine Replacement Therapy (NRT)
                        </div>
                    </div>

                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            If you are quitting smoking, the more
                            support you have the more likely you are
                            to succeed. NRT (patches, gum, inhaler,
                            lozenges, microtabs and oral spray) can
                            help smokers stop by reducing
                            withdrawal symptoms and cravings. It is
                            not a magic cure but it will support you in
                            your decision to stop smoking. NRT
                            usually provides nicotine in a way which is
                            slower and less satisfying, but safer and
                            less addictive than cigarettes.
                        </p>
                        <p className="pos_content_text blue-clro" style={{ paddingTop: "2em" }}>
                            NRT is available to medical card holders,
                            and without prescription for everyone,
                            from your pharmacist. For further
                            information and advice talk to your
                            doctor, GP or pharmacist. Medications to
                            help you stop smoking (Varenicline and
                            Bupropion) are available on prescription
                            from your doctor.
                        </p>
                    </div>

                    <div className="pos_sub_title_container">
                        <div className="pos_sub_title_text">
                            Passive smoking
                        </div>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Remember second hand smoke is harmful
                            too. Avoid smoky atmospheres.
                            Encourage family members and friends
                            who smoke to stop.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_sub_title_container" style={{ paddingTop:'4em', marginBottom: '0' }}>
                        <div className="pos_sub_title_text">
                            Smoking Cessation Services
                        </div>
                    </div>
                    <div className="pos_bold_text_container" style={{ textAlign: "left" }}>
                        <p className="pos_bold_text">
                            A free smoking cessation service is
                            available for those who would like to
                            quit. For one to one or group support:
                        </p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text"><FiberManualRecordIcon className="pos_points_icon" /> Call 1 800 201 203, free text QUIT to 50100, or see www.quit.ie</p>
                        <p className="pos_content_text"><FiberManualRecordIcon className="pos_points_icon" /> For Local smoking Cessation services Call (021) 492 1641, or see www.quit.ie</p>
                        <p className="pos_content_text"><FiberManualRecordIcon className="pos_points_icon" /> smoking Resource Officer Cork University hospital (087) 121 9633</p>
                    </div>

                    
                </div>

                <div className="slider_container">
                <div className="pos_sub_title_container" style={{paddingTop:'4em', marginTop: "0em", marginBottom: "0em" }}>
                        <div className="pos_sub_title_text">
                            High cholesterol
                        </div>
                    </div>
                    <div className="pos_bold_text_container" style={{ textAlign: "left" }}>
                        <p className="pos_bold_text">
                            What is Cholesterol?
                        </p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Cholesterol is a fatty substance found in
                            the blood. A certain amount of cholesterol
                            is important for a healthy body, however
                            too much can increase our risk of heart
                            disease. Cholesterol is mainly made in the
                            body by the liver. Eating foods high in
                            saturated fat increases the amount of
                            cholesterol the liver makes, and can
                            increase blood cholesterol levels. Some
                            foods also contain cholesterol itself (e.g.
                            eggs, shellfish, liver and kidneys) but
                            these do not affect blood cholesterol as
                            much as saturated fats.
                            High levels of cholesterol in the blood can
                            also be inherited from your parents.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pos_bold_text_container" style={{ textAlign: "left", marginTop: '1em' }}>
                        <p className="pos_bold_text" style={{ paddingTop: '5em' }}>
                            There are two types of
                            lipoproteins in the blood:
                        </p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            Low density lipoproteins (LDL – or bad
                            cholesterol). LDL helps to build up plaque
                            in the body’s arteries. High levels can
                            increase your risk of heart disease.
                        </p>
                        <p className="pos_content_text">
                            High density lipoproteins (HDL – or
                            good cholesterol). HDL helps to remove
                            cholesterol, and slows down the build up
                            of plaque in the body’s arteries. Higher
                            levels protect against heart disease.
                        </p>
                    </div>
                    <div className="pos_bold_text_container" style={{ textAlign: "left" }}>
                        <p className="pos_bold_text">
                            What are Triglycerides?
                        </p>
                    </div>
                    <div className="pos_content_container">
                        <p className="pos_content_text">
                            There is also a group of fatty substances
                            in the blood called triglycerides. High
                            levels of these are also damaging to the
                            heart.
                        </p>
                        <p className="pos_content_text blue-clrr">
                            The goal is to have a low total cholesterol
                            level, a low level of LDL and a high level
                            of hDL.
                        </p>
                    </div>
                </div>
                {
                    showNextButton && <NextButton onClick={next} style={{ position: 'fixed', top: 'auto', bottom: '20px', left: 'auto', right: '20px' }} />
                }
            </Container>
        </div>
    )
}

export default PageOne

