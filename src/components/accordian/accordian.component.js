import React, { useRef, useState, useEffect } from 'react';
import './accordian.component.scss';
import { useSetState } from '../../helpers/constants';
import Container from "../../common_component/container/container.component"
import _ from 'lodash';
import nightimg from "../../assets/images/Night_before_Surgery/Group_779.svg"


const Accordian = (props) => {
  const [state, setState] = useSetState({})
  const slider = useRef(null);

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, [])

  return (
    <div className="accordian_wrapper">     
      <div className="content_container">
        <div className="table_container">
          <div className="table_header">Borg Scale</div>
          <div className="table_row scale-0">
            <div className="scale scale-0">
              0
            </div>
            <div className="accordian_container scale-0">
              <div class="accordion scale-0">No Excertion</div>
              <div class="panel scale-0">No exertion is how you feel when you’re sitting or lying down.</div>
            </div>
          </div>

          <div className="table_row scale-1">
            <div className="scale scale-1">
              1
            </div>
            <div className="accordian_container scale-1">
              <div class="accordion scale-1">Very Light</div>
              <div class="panel scale-1">Very Light is how you feel while
              walking around the house in no particular hurry.</div>
            </div>
          </div>

          <div className="table_row scale-2-3">
            <div className="scale scale-2-3">
              2-3
            </div>
            <div className="accordian_container scale-2-3">
              <div class="accordion scale-2-3">Light</div>
              <div class="panel scale-2-3">Light is how you feel when you are strolling leisurely</div>
            </div>
          </div>

          <div className="table_row scale-4-6">
            <div className="scale scale-4-6">
              4-6
            </div>
            <div className="accordian_container scale-4-6">
              <div class="accordion scale-4-6">Somewhat hard</div>
              <div class="panel scale-4-6">Somewhat hard should make you
              feel slightly warm. You have no
              angina or palpitations though you
              feel your heart is beating faster or
              harder than when you are sitting.
              You are comfortable and can keep
              going for another 10-15 minutes.
              This is the recommended intensity
              for the main part of exercise, as it
              brings the best benefits at the lowest risk.</div>
            </div>
          </div>

          <div className="table_row scale-7-8">
            <div className="scale scale-7-8">
              7-8
            </div>
            <div className="accordian_container scale-7-8">
              <div class="accordion scale-7-8">Hard (Heavy)</div>
              <div class="panel scale-7-8">Hard (Heavy) means you might
              feel too hot. You find it hard to
              talk and can’t keep going for
              much longer. exercising this hard
              is of no benefit to you, and if taken to extreme can cause harm.</div>
            </div>
          </div>

          <div className="table_row scale-9">
            <div className="scale scale-9">
              9
            </div>
            <div className="accordian_container scale-9">
              <div class="accordion scale-9">Very Hard and Extremely Hard</div>
              <div class="panel scale-9">Not recommended. Can be harmful!</div>
            </div>
          </div>

          <div className="table_row scale-10">
            <div className="scale scale-10">
              10
            </div>
            <div className="accordian_container scale-10">
              <div class="accordion scale-10">Maximal exertion</div>
              <div class="panel scale-10">Not recommended. Can be harmful!</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

Accordian.propTypes = {

}

export default Accordian;

