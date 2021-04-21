import React from 'react'
import './group.component.scss'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Container from '../../common_component/container/container.component';

const Group = (props) => {
    const { title, image, content, style, title2, content2 } = props
    return (
        <div className="group_container" style={style}>
            <div className="group_title">
                <h2 className="group_title_text">{title}</h2>
            </div>
            <div className="group_image_container">
                {
                    image && <img className="group_image" src={image.default} alt={title} ></img>
                }

            </div>
            <div className="group_content">
                {
                    content.map((text, index) => {
                        if (index === 0) {
                            return (
                                <div className="group_content_text">
                                    {text}
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="group_content_text">
                                    <FiberManualRecordIcon style={{ paddingTop: "0.5em" }} /> {text}
                                </div>
                            )
                        }
                    })
                }
            </div>
            {
                title2 && (
                    <>
                        <div className="group_title" style={{marginTop:"1em"}}>
                            <h2 className="group_title_text">{title2}</h2>
                        </div>
                        <div className="group_content">
                            <div className="group_content_text">
                                {content2}
                            </div>

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Group
