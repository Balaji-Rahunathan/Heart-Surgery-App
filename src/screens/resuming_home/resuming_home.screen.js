import React from 'react'
import Calender from '../../components/calender/calender.component';
import { calenderData } from "../../helpers/calender";
import HTMLFlipBook from "react-pageflip";

const ResumingHome = () => {
    return (
        <div>
            <HTMLFlipBook width={window.screen.width} height={window.screen.height} usePortrait maxShadowOpacity={0.5} >
                {
                    calenderData.map((data,index) => (
                        <div style={{height:'100vh'}} key={index} >
                            <Calender {...data} />
                        </div>
                    ))
                }
            </HTMLFlipBook>
        </div>
    )
}

export default ResumingHome
