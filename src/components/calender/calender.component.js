import React from 'react'
import CalenderTop from '../../assets/images/Resuming Home/calender-top.png'
import './calender.component.scss'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Calender = (props) => {

    const { title, content, image, index, point, points, contentTop } = props

    return (
        <div className="calender_component">
            <div className="calender_container">
                <div className="calender_wrapper">
                    <div className="calender_top">
                        <img className="calender_top_image" src={CalenderTop} alt="calender-top"></img>
                    </div>
                    <div className="calender_body">
                        <div className="calender_body_title">
                            <p className="calender_body_title_text">
                                {title}
                            </p>
                        </div>
                        <div className="calender_body_image_container">
                            <img className="calender_body_image" src={image.default}></img>
                        </div>

                        <div className="calender_body_content">
                            {
                                contentTop && (<p className="calender_body_content_text">{contentTop}</p>)
                            }

                            {
                                content.map((data, i) => {

                                    if (point === true && index === i) {
                                        return (
                                            <>
                                                <p className="calender_body_content_text" key={i}><FiberManualRecordIcon style={{ paddingTop: "0.5em", fontSize: "18px" }} />{data}</p>

                                                {
                                                    points.map((list, j) => (
                                                        <p className="calender_body_content_text" key={j}>{list}</p>
                                                    ))
                                                }
                                            </>

                                        )

                                    }
                                    else {
                                        return (
                                            <p key={i} className="calender_body_content_text"><FiberManualRecordIcon style={{ paddingTop: "0.5em", fontSize: "18px" }} />{data}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender
