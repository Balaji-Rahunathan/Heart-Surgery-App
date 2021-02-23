import React, { Component } from 'react'
import Container from '../../common_component/container/container.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import Slides from '../../components/slides/slides.component';
import Accordian from "../../components/accordian/accordian.component"
import './returning_home.screen.scss';
import {ReturningHomeContent} from '../../helpers/content'

const ReturningHome = (props) => {

  const next = () => {
    props.history.push('/preparing_for_surgery');
  }

  return (
      // <Accordian/>
      <Slides data={ReturningHomeContent}/>
  )
}

export default ReturningHome;