import React from "react";
import './intro.screen.scss';
import Circle from '../../../assets/images/Circle.svg';
import Heart from "../../../assets/images/Heart.svg"
import Blockage from "../../../assets/images/Blockage.svg";
import Button from "../../../assets/images/Buuton.svg"
import Div100vh from 'react-div-100vh'


export default class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: false,
            card2: false,
            card3: false,
            para: false,

        }
    }

    onClickBtn = (key) => {
        this.setState({[key]: !this.state[key]});
    }

    nextBtn = () => {
        this.props.history.push('/exercise');
    }

    render() {
        console.log("state", this.state);
        return(
            <React.Fragment>
                <Div100vh>
                <div className="about_your_heart_container text-center mt-5">
                    <h3 className="head-title">What is Coronary Artery bypass?</h3>
                    <div className="image-container">
                        <img src={Circle} alt="" className="bg-img img-fluid" />
                        <img src={Heart} alt="" className="heart img-fluid" />
                        <div className="scene1">
                            <div className="card1">
                                {!this.state.card1?
                                    <div className="card_face red-circle1" onClick={() => this.onClickBtn('card1')}>Click here to Reveal!</div>
                                :null }
                                {this.state.card1?
                                    <div className="card_face blue">Bypass using Saphenous vein</div>
                                : null}
                            </div>
                        </div>
                        <div className="scene2">
                            <div className="card2">
                                {!this.state.card2?
                                    <div className="card_face2 red-circle2" onClick={() => this.onClickBtn('card2')}>Click here to Reveal!</div>
                                :null}
                                {this.state.card2?
                                    <div className="card_face2 blue">Bypass using Internal Mammary Artery</div>
                                : null }
                            </div>
                        </div>
                        <div className="scene3">
                            <div className="card3">
                                {!this.state.card3?
                                    <div className="card_face3 red-circle3" onClick={() => this.onClickBtn('card3')}>Click here to Reveal!</div>
                                :null}
                                {this.state.card3?
                                    <div className="card_face3 blue-circle3">
                                        <img src={Blockage} className="blockage" />
                                        <p className="blockage-text">Blockage</p>
                                    </div>
                                : null}
                            </div>
                        </div>
                        <img src={Button} alt="para_btn"  className="red-circle4" onClick={() => this.nextBtn()}/>
                    </div>
                    {!this.state.para?
                        <a className="btn-para mt-3 text-center" onClick={() => this.onClickBtn('para')}><p className="btn-para-a " >Click Here to Read More</p></a>
                    : null}
                    {this.state.para?
                        <div className="para_text">
                            <span className="btn-text">During your Coronary Artery Bypass Surgery (CABG) the doctor takes a vein from your leg and an artery from your chext wall or arm. These are used to bypass the narrowed area in your coronary arteries (see picture opposite). This improves the oxygen supply to the heart muscle. Your body can still work without the arteries and veins that are used by the surgeon for your bypass. </span>
                        </div>
                    : null}
                </div>
                </Div100vh>
            </React.Fragment>
        )
    }
}