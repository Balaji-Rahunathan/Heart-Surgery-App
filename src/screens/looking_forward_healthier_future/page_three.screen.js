import React, { useState, useEffect } from 'react'
import Container from '../../common_component/container/container.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import MenuButton from '../../common_component/menu_button/menu_button.component'
import HealthyEating from '../../assets/images/looking_forward_healthier_future/Group 6.svg'
import './page_three.screen.scss'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NextButton from '../../common_component/next_button/next_button.component';

const PageThree = (props) => {

    const [toggle, settoggle] = useState(false)
    const [showNextButton, setshowNextButton] = useState(false)

    const next = () => {
        props.history.push('/');
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
        <div className="page_three_screen">
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
                    <div className="pths_head_container">
                        <p className="pths_head_text" style={{paddingRight:'1em'}}>
                            Healthy eating for a
                            healthy heart
                        </p>
                    </div>
                    <div className="pths_image_container">
                        <img src={HealthyEating} alt="healthy_eating" className="pths_image"></img>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            A good diet is essential for your recovery
                            from heart surgery. Healthy food can help
                            your wounds heal, manage your weight,
                            reduce your blood pressure and control
                            your cholesterol. Even if do not have high
                            cholesterol and are not overweight, it is
                            still important for you and your family to
                            eat healthily. Healthy eating not only
                            improves cholesterol or blood pressure
                            but is also essential for your overall
                            mental and physical well-being.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_head_container">
                        <p className="pths_head_text" style={{ paddingLeft: '0.5em' }}>
                            Top tips for healthy eating
                        </p>
                    </div>
                    <div className="pths_title_container">
                        <p className="pths_title_text">
                            Eat more fish
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Fish is a great substitute for red meat, and
                            is our main source of omega 3, which
                            protects your heart. Adults should eat at
                            least two 140g portions of fish per week.
                            At least one of these portions should be
                            oily fish e.g. salmon, mackerel, herring,
                            trout, sardines, kippers and fresh tuna.
                            Some omega 3 is also found in walnuts,
                            pecans, peanuts, almonds, and flaxseed
                            (ground linseed). Omega 3 supplements
                            are not recommended even if you don’t
                            eat fish!
                        </p>
                        <p className="pths_content_text">
                            If you choose to take an omega 3
                            supplement, check that it does not
                            contain any other ingredients. Omega 3
                            supple- ments should not be taken with
                            some medications e.g. warfarin.
                        </p>
                    </div>

                    <div className="pths_title_container">
                        <p className="pths_title_text" style={{ paddingTop: "1em" }}>
                            Eat more fruit and vegetables
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Fruit and vegetables are a good source of
                            vitamins called antioxidants. These
                            vitamins help prevent plaque from
                            building up in the walls of arteries and
                            protect you from further heart problems.
                            Fruit and vegetables are also high in fibre,
                            which can help control cholesterol and
                            blood pressure.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_content_container">
                        <p className="pths_content_text" style={{ paddingTop: '5em' }}>
                            Have a varied diet with at
                            least five portions of fruit and vegetables
                            a day. Frozen are as good as fresh. We
                            don’t recommend
                            taking nutritional supplements instead of
                            eating fruit and vegetables.
                        </p>
                    </div>

                    <div className="pths_title_container">
                        <p className="pths_title_text" style={{ paddingTop: "1em" }}>
                            Eat less fat
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Reducing the amount of fat you eat is
                            important to lose weight. Eating less
                            saturated fat can help to reduce
                            cholesterol and slow plaque build-up in
                            the wall of the blood vessels. Some tips:
                        </p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> High fat foods include cream, full-fat cheese, butter, cakes, pastries, chocolate, crisps, mayonnaise and salad dressings.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Look out for lower fat dairy products i.e. low fat milk, cheese and yoghurts.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Use low fat spreads; if using oils use rapeseed or olive oil.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Trim fat from meat.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Avoid fried or deep fried foods, fast food and take-aways.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Good ways to cook are to grill, casserole, roast, poach, braise, microwave or stir-fry.</p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_title_container">
                        <p className="pths_title_text" style={{ paddingTop: "3em" }}>
                            Eat less sugar
                        </p>
                    </div>
                    <div className="pths_content_container" style={{ marginTop: '0.5em' }}>
                        <p className="pths_content_text">
                            Read the tables to watch out for hidden
                            sugar particularly in foods marketed as
                            “low fat”. Limit unnecessary sugar e.g. in
                            tea, coffee, cereals, sugar coated cereals,
                            biscuits, regular fizzy drinks and confec-
                            tionaries. Sweeteners are a safe substitute
                            but honey is as fattening as sugar!
                        </p>
                    </div>
                    <div className="pths_title_container">
                        <p className="pths_title_text">
                            Eat more fibre
                        </p>
                    </div>
                    <div className="pths_content_container" style={{ marginTop: '0.5em' }}>
                        <p className="pths_content_text">
                            Soluble fibre found in oats, pulses and
                            some fruit and vegetables can help to
                            lower your blood cholesterol level.
                        </p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Choose granary, wholegrain, stoneground wholemeal and rye breads.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Use wholemeal pasta and wholegrain rice.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> High fibre breakfast cereals such as porridge, oat flakes and ‘no added sugar’ muesli are an excellent source of fibre.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Try to include more pulses, peas, beans and lentils in your diet.</p>
                    </div>
                    <div className="pths_title_container">
                        <p className="pths_title_text">
                            Eat less salt
                        </p>
                    </div>
                    <div className="pths_content_container" style={{ marginTop: '0.5em' }}>
                        <p className="pths_content_text">
                            Do not add salt to your food. Replace salt
                            with pepper, herbs and spices. Try to
                            avoid foods that are high in salt like
                            packet soups and bacon.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_head_container">
                        <p className="pths_head_text">
                            Alcohol
                        </p>
                    </div>
                    <div className="pths_title_container">
                        <p className="pths_title_text">
                            Too much alcohol
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            There is some evidence that drinking a
                            small amount of alcohol helps protect
                            your heart. Drinking too much alcohol
                            however, has the opposite effect because
                            it contributes to strokes, high blood
                            pressure, and liver problems. It can also
                            damage your heart muscle, causing heart
                            rhythm problems and heart failure.
                            Alcohol is also very high in calories and
                            can increase blood triglyc- erides, (a type
                            of bad fat) and your weight.
                        </p>
                       <div className="clrylo"> 
                           <p className="pths_content_text" style={{ paddingTop: '1em' }}>if you do not drink if you do drink</p>
                        <p className="pths_content_text">Do not start.</p>
                        <p className="pths_content_text">Keep within the limits.</p>
                        <p className="pths_content_text">Spread your intake over the week.</p>
                        <p className="pths_content_text">Have some alcohol free days.</p>
                        <p className="pths_content_text">How much is too much?</p>
                        <p className="pths_content_text">
                            Men should not exceed 17 standard
                            drinks / units of alcohol per week. Women
                            should not exceed 11 standard drinks /
                            units of alcohol per week.
                        </p>
                        <p className="pths_content_text">avoid binge drinking</p>
                        </div>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_content_container clryloo">
                        <p className="pths_content_text">‘Binge drinking’ is having five or more
                        standard drinks in one sitting for men and
                        four or more standard drinks in one sitting for women.</p>
                        <p className="pths_content_text">How much is a standard drink of alcohol?</p>
                        <p className="pths_content_text">One standard drink / unit is equal to:</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Half a pint of beer (Please note; a pint of beer is two units)</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> 100ml glass of wine</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Single pub measure of spirit / sherry. A home measure may really be a double or treble measure. Use a spirit measure and sugar free mixers.</p>
                    </div>

                    <div className="pths_content_container">
                        <p className="pths_content_text txtto">It is normally safe to take a small
                            amount of alcohol while taking your
                            heart drugs. if you are taking warfarin
                            however, talk to your doctor for advice
                            on drinking alcohol.</p>
                        
                    </div>

                    <div className="pths_head_container">
                        <p className="pths_head_text">
                            Physical inactivity
                        </p>
                    </div>

                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Inactivity is a major risk factor for
                            Coronary Artery Disease. Regular exercise
                            slows the clogging of the body’s arteries.
                            The fact that you have heart disease does
                            not mean that it is too late to start
                            exercising. The opposite is true in fact, as
                            making time for regular physical activity
                            now can reduce your risk of heart and
                            health problems in the future.
                        </p>
                    </div>
                </div>

                <div className="slider_container">
                    <div className="pths_title_container">
                        <p className="pths_title_text" style={{paddingTop:'4em'}}>
                            Why Exercise?
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Exercise and physical activity protects you
                            by:
                        </p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Keeping your body weight healthy.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Keeping your body weight healthy.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Lowering your blood pressure.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Making your blood less likely to clot.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Lowering your stress, depression and anxiety.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Improving your circulation, muscle tone,strength and flexibility.</p>
                        <p className="pths_content_text"><FiberManualRecordIcon style={{ fontSize: '10px' }} /> Improving the way you feel about yourself.</p>
                    </div>

                    <div className="pths_title_container">
                        <p className="pths_title_text" style={{paddingTop:'1em'}}>
                            Family History of Coronary Artery Disease
                        </p>
                    </div>
                    <div className="pths_content_container">
                        <p className="pths_content_text">
                            Heart disease runs in families. Please
                            encourage your family to lead an active,
                            healthy, smoke-free lifestyle.
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

export default PageThree

