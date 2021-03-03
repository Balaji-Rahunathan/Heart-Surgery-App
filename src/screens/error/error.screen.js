import React from 'react'
import Container from '../../common_component/container/container.component'
import './error.screen.scss'

const YourHeartSurgeryGuide = (props) => {
  return (
    <div className="error_screen">
      <Container className="yhsg_container">
        <div className="yhsg_head_container">
          <p className="yhsg_head_text">Your Heart Surgery Guide</p>
        </div>
        <div className="yhsg_content_container">
          <p className="yhsg_content_text">Best viewed in mobile browsers portrait mode</p>
        </div>
      </Container>
    </div>
  )
}

export default YourHeartSurgeryGuide
