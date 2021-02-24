import React, { Component } from 'react'
import Container from '../../common_component/container/container.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import Slides from '../../components/slides/slides.component';
import Accordian from "../../components/accordian/accordian.component"
import './returning_home.screen.scss';
import { returnHomeContent, ReturningHomeContent } from '../../helpers/content'
import { Swiper, SwiperSlide } from 'swiper/react';
import Group from '../../components/group/group.component';
import ReturningHomeIndex from './returning_home_index.screen';
console.log(returnHomeContent)

const ReturningHome = (props) => {

  const next = () => {
    props.history.push('/preparing_for_surgery');
  }

  return (
    <div className="returning_home_screen">

      {/* <Accordian /> */}

      <Container>
        <div>
          <Swiper height={window.screen.height} direction="vertical" spaceBetween={10}>
            <SwiperSlide>
              <ReturningHomeIndex />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[8]} />
            </SwiperSlide>
            <SwiperSlide>
              <Group {...returnHomeContent[9]} />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>

  )
}

export default ReturningHome;