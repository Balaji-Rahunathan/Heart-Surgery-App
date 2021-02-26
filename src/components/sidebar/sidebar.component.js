import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import './sidebar.component.scss'
import MenuButton from '../../common_component/menu_button/menu_button.component';

const Sidebar = ({ toggle, onClick, history }) => {

    return (
        <div className="sidebar_container">
            <div className="sidebar_menu" style={{ height: '100%' }}>
                <ProSidebar
                    toggled={toggle}
                    width={window.screen.width / 1.5}
                    collapsedWidth={50}
                    breakPoint="sm md"
                    onToggle={() => onClick(false)}

                >
                    <MenuButton background="white" iconColor="#00A1FB" type="close" onClick={() => onClick(false)} />
                    <Menu style={{ textAlign: "left", }}>
                        <MenuItem
                            onClick={() => history.push('preparing_for_surgery_home')}
                            className="menu_item">Preparing for surgery home</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('preparing_for_surgery')}
                            className="menu_item">Preparing for Surgery</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('resuming_home')}
                            className="menu_item">Resuming Home</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('returning_home')}
                            className="menu_item">Returning Home</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('home_exercise_after_surgery')}
                            className="menu_item">Home Exercise After Surgery</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('exercise_target_for_life')}
                            className="menu_item">Exercise Target for Life</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('for_you_and_your_partner')}
                            className="menu_item">For You and Your Partner</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('managing_your_risk_factors')}
                            className="menu_item">Managing Your Risk Factors</MenuItem
                        >
                    </Menu>
                </ProSidebar>
            </div>


        </div>
    )
}

export default Sidebar
