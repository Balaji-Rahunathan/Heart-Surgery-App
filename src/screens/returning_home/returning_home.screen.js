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
  const [showNextButton, setshowNextButton] = useState(false)

  const next = () => {
    props.history.push('/resuming_home');
  }

  const handleMenuButtonClick = (data) => {
    settoggle(data)
  }

  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container")
    el.addEventListener("scroll", () => {
      var elwinScroll = el.scrollTop;
      var elheight = el.scrollHeight - el.clientHeight;
      var elscrolled = (elwinScroll / elheight) * 100;
      console.log(elwinScroll, elheight, elscrolled)
      document.getElementById("myBar").style.width = elscrolled + "%";
      if (elscrolled > 92) {
        if (timerId) {
          return
        }
        timerId = setTimeout(function () {
          setshowNextButton(true)
          timerId = undefined;
        }, 500)
      }
      else {
        if (timerId) {
          return
        }
        timerId = setTimeout(function () {
          setshowNextButton(false)
          timerId = undefined;
        }, 500)
      }
    })

  }, [])



  return (
    <div className="returning_home_screen">

      <div>
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container">

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

          <div class="header">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
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

          {
            showNextButton && <NextButton onClick={next} style={{ position: 'fixed', top: 'auto', bottom: '20px', left: 'auto', right: '20px' }} />
          }
        </Container>
      </div>
    </div>

  )
}

export default ReturningHome;