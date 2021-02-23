import React from 'react'
import Calender from '../../components/calender/calender.component';
import { calenderContents } from "../../helpers/content";
import HTMLFlipBook from "react-pageflip";
import Container from '../../common_component/container/container.component'

const ResumingHome = () => {
    return (
        <Container>
            <HTMLFlipBook width={window.screen.width} height={window.screen.height} usePortrait maxShadowOpacity={0.5} >
                {
                    calenderContents.map((data, index) => (
                        <div key={index} >
                            <Calender {...data} />
                        </div>
                    ))
                }
            </HTMLFlipBook>
        </Container>
    )
}

export default ResumingHome
