import React, { Component, useState } from 'react'
import Container from '../../common_component/container/container.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import Slides from '../../components/slides/slides.component';
import Accordian from "../../components/accordian/accordian.component"
import './returning_home.screen.scss';
import { returnHomeContent, ReturningHomeContent } from '../../helpers/content'
import { Swiper, SwiperSlide } from 'swiper/react';
import Group from '../../components/group/group.component';
import ReturningHomeIndex from './returning_home_index.screen';
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'

const ReturningHome = (props) => {

  const [toggle, settoggle] = useState(false)

  const next = () => {
    props.history.push('/preparing_for_surgery');
  }

  const handleMenuButtonClick = (data) => {
    console.log(data)
    settoggle(data)
  }


  return (
    <div className="returning_home_screen">

      <div>
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container"  >
          <MenuButton
            background="#008DFB"
            type="open"
            onClick={handleMenuButtonClick}
          />
          <div className="slider_container">
            <ReturningHomeIndex />
          </div>

          {
            returnHomeContent.map((data, index) => {
              return (
                <div className="slider_container">
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