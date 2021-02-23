import React, { useRef, useState } from 'react';
import './swiper.component.scss';
import { useSetState } from '../../helpers/constants';
import Container from "../../common_component/container/container.component"
import _ from 'lodash';


const SwiperComponent = (props) => {
  const [state, setState] = useSetState({ })
  const slider = useRef(null);


  return (
    <Container className="swiper_container">
        {props.children}
    </Container>
  )
}

SwiperComponent.propTypes = {

}

export default SwiperComponent;

