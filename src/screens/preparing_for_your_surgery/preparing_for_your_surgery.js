import React from 'react'
import Div100vh from 'react-div-100vh'
import PropTypes from 'prop-types'
import Container from '../../common_component/container/container.component';
import { useSetState } from '../../helpers/constants';
import Timeline from '../../components/timeline/timeline.component';


const Preparing_for_your_surgery = (props) => {
    const [state, setState] = useSetState({})

    const test = () => {
    }
    return (
        <Container style={{backgroundColor: ""}}>
            <Timeline />
        </Container>
    )
}

Preparing_for_your_surgery.propTypes = {

}

export default Preparing_for_your_surgery

