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
                            onClick={() => history.push('/about_your_heart')}
                            className="menu_item">About your heart</MenuItem
                        >

                        <MenuItem
                            onClick={() => history.push('/preparing_for_surgery_home')}
                            className="menu_item">Preparing for your surgery</MenuItem
                        >

                        <MenuItem
                            onClick={() => history.push('/exercise')}
                            className="menu_item">After Surgery - Excersises</MenuItem
                        >

                        <MenuItem
                            onClick={() => history.push('/returning_home')}
                            className="menu_item">Returning home</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('/looking_forward_healthier_future')}
                            className="menu_item">Looking forward healthier future</MenuItem
                        >
                        <MenuItem
                            onClick={() => history.push('/')}
                            className="menu_item">Risk factor profile</MenuItem
                        >
                        
                    </Menu>
                </ProSidebar>
            </div>


        </div>
    )
}

export default Sidebar
