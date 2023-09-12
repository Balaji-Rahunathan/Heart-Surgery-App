import React,{useState} from 'react'
import Div100vh from 'react-div-100vh'
import PropTypes from 'prop-types'
import Container from '../../common_component/container/container.component';
import { useSetState } from '../../helpers/constants';
import Timeline from '../../components/timeline/timeline.component';
import { TheDayOfSurgeryTitles, TheDayOfSurgeryContents, TheDayOfSurgery } from '../../helpers/content';
import MenuButton from '../../common_component/menu_button/menu_button.component'
import Sidebar from '../../components/sidebar/sidebar.component'
import './preparing_for_your_surgery.scss'

const Preparing_for_your_surgery = (props) => {
    const [state, setState] = useSetState({})
    const [toggle, settoggle] = useState(false)

    console.log(TheDayOfSurgery)
    const test = () => {
    }
    const handleMenuButtonClick = (data) => {
        settoggle(data)
    }
    return (
        <Container style={{ backgroundColor: "" }}>
            <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
            {/* <MenuButton
                background="#008DFB"
                type="open"
                onClick={handleMenuButtonClick}
                style={{ position: 'absolute', left: '0px', top: '0',zIndex:'20' }}
            /> */}
            <div className="pfys_head">
                Preparing for Your surgery
            </div>

            <Timeline titles={TheDayOfSurgeryTitles} content={TheDayOfSurgeryContents} data={TheDayOfSurgery} {...props} />
        </Container>
    )
}

Preparing_for_your_surgery.propTypes = {

}

export default Preparing_for_your_surgery

