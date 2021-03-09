import React, { useState, useEffect } from 'react'
import Container from '../../common_component/container/container.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import MenuButton from '../../common_component/menu_button/menu_button.component'
import BeingOverweight from '../../assets/images/looking_forward_healthier_future/Group 4.svg'
import Chart from '../../assets/images/looking_forward_healthier_future/Group 403.svg'
import BodyShape from '../../assets/images/looking_forward_healthier_future/Group 5.svg'
import LoseWeight from '../../assets/images/looking_forward_healthier_future/Group 7.svg'
import './page_two.screen.scss'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NextButton from '../../common_component/next_button/next_button.component';

const PageTwo = (props) => {

    const [toggle, settoggle] = useState(false)
    const [showNextButton, setshowNextButton] = useState(false)

    const next = () => {
        props.history.push('/page_three');
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
                    <div className="pts_title_container">
                        <p className="pts_title_text" style={{ paddingTop: '4em' }}>
                            How to check your cholesterol
                            and triglyceride levels?
                        </p>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            The blood test to check your cholesterol,
                            LDL cholesterol, HDL cholesterol and
                            triglycerides is called a lipoprotein profile.
                            The test is most accurate when taken after
                            you have fasted for 12 hours (e.g.
                            overnight). Speak to your cardiologist
                            before leaving hospital to find out what
                            YOUR cholesterol goal is.
                        </p>
                    </div>

                    <div className="pts_title_container">
                        <p className="pts_title_text">
                            How often should I have my
                            fasting cholesterol re-checked
                            after I go home?
                        </p>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            Every three months until you reach your
                            goal, and yearly after that.
                            Talk to your GP.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container">
                        <p className="pts_title_text" style={{ paddingTop: '4em' }}>
                            Understanding your
                            lipoprotein Profile
                        </p>
                    </div>
                    <div className="pts_table_container">
                        <table className="pts_table">
                            <thead className="pts_table_head">
                                <tr className="pts_table_head_tr">
                                    <th>If you have coronary artery disease or diabetes</th>
                                    <th>General Goal</th>
                                    <th>Goal for you</th>
                                </tr>
                            </thead>
                            <tbody className="pts_table_body">
                                <tr className="pts_table_body_tr">
                                    <td>Total Cholesterol</td>
                                    <td> {`<`}4.0 </td>
                                    <td></td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>LDL Cholesterol</td>
                                    <td> {`<`}1.8 </td>
                                    <td></td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>HDL Cholesterol</td>
                                    <td> {`>`}1 (men) {`>`}1.2 (women)</td>
                                    <td></td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>Triglycerides</td>
                                    <td> {`<`}1.7 </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container" style={{ margin: "1em 1em 0em 1em" }}>
                        <p className="pts_title_text" style={{ paddingTop: '4em', fontSize: "18px" }}>
                            The best way to reduce your cholesterol
                            is to eat healthily, exercise daily and
                            take your cholesterol tablets.
                        </p>
                    </div>
                    <div className="pts_content_container" style={{ margin: "0.5em 1em 0.5em 1em" }}>
                        <p className="pts_content_text">
                            Many people ask about new products on
                            the market called plant stanols / sterols
                            (e.g. Benecol®, Flora-Pro-Active ®, and
                            Danacol®). These products, when taken
                            with a healthy diet and regular exercise
                            can reduce cholesterol a little more. The
                            amount that needs to be taken for this
                            effect is one bottle of the yoghurt drinks
                            every day (Benecol®, Flora-Pro-Active ®,
                            and Danacol®) or two to three servings of
                            the spreads, milks or cheeses every day.
                        </p>
                    </div>
                    <div className="pts_content_container" style={{ margin: "0.5em 1em 0.5em 1em" }}>
                        <p className="pts_content_text">
                            Plant stanols / sterols can be taken with
                            cholesterol tablets but should never be
                            taken instead of them. This is because
                            cholesterol tablets bring benefits other
                            than just reducing cholesterol. Please
                            speak to your dietitian or doctor for
                            further information.
                        </p>
                    </div>
                    <div className="pts_content_container" style={{ margin: "0.5em 1em 0.5em 1em" }}>
                        <p className="pts_content_text">
                            If your cholesterol is high you should see
                            a dietitian who will give you the advice
                            that is right for you.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_head_container">
                        <p className="pts_head_text">
                            Being overweight
                        </p>
                    </div>
                    <div className="pts_image_container">
                        <img src={BeingOverweight} alt="body_shape" className="pts_image"></img>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            To find out if you are overweight ask
                            yourself two questions.
                        </p>
                        <p className="pts_content_text">
                            where is most of the fat on my body
                            stored?
                        </p>
                        <p className="pts_content_text">
                            what is my body weight in relation to my
                            height?
                        </p>
                        <p className="pts_content_text">
                            If you carry most of your extra weight
                            around the middle of your body you are
                            called apple shaped or centrally obese
                            (see pictures opposite).
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_content_container">
                        <p className="pts_content_text" style={{ paddingTop: "2em" }}>
                            You have a higher
                            risk of heart problems and diabetes than
                            some- one whose extra weight is mostly
                            on their hips and thighs – pear shaped
                            (see pictures opposite).
                            Your body weight in relation to your
                            height is called your Body mass index or
                            Bmi. Look at the height and weight chart
                            below to work out if you are a healthy
                            weight for your height (your BMI).
                        </p>
                    </div>

                    <div className="pts_image_container">
                        <img src={Chart} alt="body_shape" className="pts_image"></img>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container">
                        <p className="pts_title_text" style={{ paddingTop: '4em' }}>
                            The bad news
                        </p>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            The blood test to check your cholesterol,
                            LDL cholesterol, HDL cholesterol and
                            triglycerides is called a lipoprotein profile.
                            The test is most accurate when taken after
                            you have fasted for 12 hours (e.g.
                            overnight). Speak to your cardiologist
                            before leaving hospital to find out what
                            YOUR cholesterol goal is.
                        </p>
                    </div>

                    <div className="pts_title_container" >
                        <p className="pts_title_text">
                            The good news
                        </p>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            If you are overweight, you can gain
                            important health benefits by losing 5 to
                            10% of your weight. Keeping to a
                            healthier weight for your height will:
                        </p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> decrease your risk of diabetes,</p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> decrease your blood pressure, and</p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> help control your cholesterol level.
                            Weight loss can also reduce the work-
                            load of your heart and help you to look
                            and feel better.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container">
                        <p className="pts_title_text" style={{ paddingTop: '4em' }}>
                            Understanding your BMI
                        </p>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            Please ask a member of your cardiac
                            rehabilitation team to work out your BMI.
                        </p>
                        <p className="pts_content_text" style={{ paddingTop: '1em' }}>My Height:</p>
                        <p className="pts_content_text">My Weight:</p>
                        <p className="pts_content_text">My BMI:</p>
                    </div>
                    <div className="pts_table_container">
                        <table className="pts_table">
                            <thead className="pts_table_head">
                                <tr className="pts_table_head_tr">
                                    <th>BMI</th>
                                    <th>Category</th>
                                    <th>Risk</th>
                                </tr>
                            </thead>
                            <tbody className="pts_table_body">
                                <tr className="pts_table_body_tr">
                                    <td>18.5-25</td>
                                    <td>Normal</td>
                                    <td>None</td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>25-30</td>
                                    <td>Overweight</td>
                                    <td>Increased</td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>30-40</td>
                                    <td>Obese</td>
                                    <td>High</td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td> {`>`} 40</td>
                                    <td>Morbidly Very</td>
                                    <td>High Obese</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text">
                            In general if you have a Bmi of more than
                            25 you should lose weight.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container">
                        <p className="pts_title_text">
                            Understanding your body shape
                        </p>
                    </div>
                    <div className="pts_content_container" style={{ marginBottom: '0.5em' }}>
                        <p className="pts_content_text">
                            Measure yourself around the waist (see
                            diagram)
                            My waist measurement is _______ cms
                            Check your risk of further health problems
                            using the table below.
                        </p>
                    </div>
                    <div className="pts_image_container">
                        <img src={BodyShape} alt="body_shape" className="pts_image" style={{ width: "50%" }}></img>
                    </div>
                    <div className="pts_table_container">
                        <table className="pts_table">
                            <thead className="pts_table_head">
                                <tr className="pts_table_head_tr">
                                    <th>Waist Measurement</th>
                                    <th>Increased risk</th>
                                    <th>High Risk</th>
                                </tr>
                            </thead>
                            <tbody className="pts_table_body">
                                <tr className="pts_table_body_tr">
                                    <td>Men</td>
                                    <td>{`>`}94cm / {`>`}37 inches</td>
                                    <td>{`>`}102cm / 40 inches</td>
                                </tr>
                                <tr className="pts_table_body_tr">
                                    <td>Women</td>
                                    <td> {`>`} 80cm / 31 inches</td>
                                    <td>{`>`}88cm / 35 inches</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pts_title_container">
                        <p className="pts_title_text" style={{ textAlign: "center", fontSize:"20px" }}>
                            How to lose weight
                        </p>
                    </div>
                    <div className="pts_image_container" style={{marginTop:'2em', marginBottom:'2em'}}>
                        <img src={LoseWeight} alt="body_shape" className="pts_image"></img>
                    </div>
                    <div className="pts_content_container">
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Losing weight is not easy, but you CAN
                            do it! Be positive but realistic about the
                            amount of weight you expect to lose.
                            There is no quick fix.
                        </p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Eat a healthy diet, see page 34.</p>
                    </div>
                </div>

                <div className="slider_container" >
                    <div className="pts_content_container">
                        <p className="pts_content_text" style={{paddingTop:"5em"}}><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Follow the walking programme on page
                            22. It is healthier to lose weight by diet
                            and exercise rather than by diet alone.
                        </p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> If you have given up smoking, well
                            done. Try to maintain your weight as you
                            may be at an increased risk of gaining
                            weight when you quit.
                        </p>
                        <p className="pts_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Watch your food portion sizes (for
                            example a portion of meat is the size of a
                            pack of cards).
                        </p>
                    </div>
                </div>

                {
                    showNextButton && <NextButton onClick={next} style={{ position: 'fixed', top: 'auto', bottom: '20px', left: 'auto', right: '20px' }} />
                }
            </Container>
        </div >
    )
}

export default PageTwo

