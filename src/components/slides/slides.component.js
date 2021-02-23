import React, { useRef, useState } from 'react';
import './slides.component.scss';
import { useSetState } from '../../helpers/constants';
import Container from "../../common_component/container/container.component"
import Swiper from "../../components/swiper/swiper.component"
import _ from 'lodash';


const SwiperComponent = (props) => {
  const [state, setState] = useSetState({})
  const slider = useRef(null);

  console.log(props.data.data[0].image)
  return (
    <div>
      <Swiper>
        {props.data.data.map(data => {
          return <div className="slider_container">
            <div className="header_container">
              {data.header}
            </div>
            <div className="image_container">
              <img className="image" src={data.image.default} />
            </div>
            <div className="content_container">
              {data.content}
            </div>
          </div>
        })
        }
      </Swiper>
    </div>


  )
}

SwiperComponent.propTypes = {

}

export default SwiperComponent;

