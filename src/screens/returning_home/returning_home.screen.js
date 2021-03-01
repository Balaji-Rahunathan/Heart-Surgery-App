import React, { Component, useState, useEffect } from 'react'
import Container from '../../common_component/container/container.component';
import './returning_home.screen.scss';
import { returnHomeContent, ReturningHomeContent } from '../../helpers/content'
import Group from '../../components/group/group.component';
import ReturningHomeIndex from './returning_home_index.screen';
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import NextButton from '../../common_component/next_button/next_button.component';

const ReturningHome = (props) => {

  const [toggle, settoggle] = useState(false)

  const next = () => {
    props.history.push('/resuming_home');
  }

  const handleMenuButtonClick = (data) => {
    settoggle(data)
  }



  return (
    <div className="returning_home_screen">

      <div>
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container" style={{ height: "100vh" }}>

          <div className="slider_container">
            <MenuButton
              background="white"
              type="open"
              onClick={handleMenuButtonClick}
              style={{ position: 'absolute', left: '0', top: '0' }}
            />

            <ReturningHomeIndex />
          </div>

          <MenuButton
            background="#008DFB"
            type="open"
            onClick={handleMenuButtonClick}
          />

          {
            returnHomeContent.map((data, index) => {
              return (
                <div className="slider_container">
                  {
                    index === returnHomeContent.length - 1 && (<NextButton onClick={next} />)
                  }
                  <Group {...data} />
                </div>
              )
            })
          }
        </Container>
      </div>
    </div>

  )
}

export default ReturningHome;