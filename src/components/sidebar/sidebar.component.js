import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "./sidebar.component.scss";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import { useLocation } from "react-router-dom";

const Sidebar = ({ toggle, onClick, history }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  return (
    <div className="sidebar_container">
      <div className="sidebar_menu" style={{ height: "100%" }}>
        <ProSidebar
          toggled={toggle}
          width={window.screen.width / 1.5}
          collapsedWidth={50}
          breakPoint="sm md"
          onToggle={() => onClick(false)}
        >
          <MenuButton
            background="white"
            iconColor="#00A1FB"
            type="close"
            onClick={() => onClick(false)}
            style={{ position: 'absolute', zIndex: '10' }}
          />
          <Menu style={{ textAlign: "left", marginTop: '4em' }}>
            <MenuItem
              onClick={() => history.push("/about_your_heart")}
              className="menu_item"
            >
              About your heart
            </MenuItem>

            <MenuItem
              onClick={() => history.push("/preparing_for_surgery_home")}
              className="menu_item"
            >
              Preparing for your surgery
            </MenuItem>

            <MenuItem
              onClick={() => history.push("/exercise")}
              className="menu_item"
            >
              After Surgery - Excersises
            </MenuItem>

            {/* Returning Home */}
            <SubMenu
              title="Returning Home"
              className={`submenu_item ${path.includes("returning_home") && "active"
                }`}
              defaultOpen={path.includes("returning_home")}
            >
              <MenuItem
                onClick={() => history.push("/returning_home")}
                className="menu_item"
              >
                Resuming home activities after surgery
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/returning_home/resuming_home")}
                className="menu_item"
              >
                Getting back to normal
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/returning_home/home_exercise_after_surgery")
                }
                className="menu_item"
              >
                Home Exercise After Surgery
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/returning_home/exercise_target_for_life")
                }
                className="menu_item"
              >
                Exercise target for life
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/returning_home/for_you_and_your_partner")
                }
                className="menu_item"
              >
                For you and your partner
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/returning_home/relaxation_techniques")
                }
                className="menu_item"
              >
                Relaxation techniques
              </MenuItem>
            </SubMenu>

            {/* Looking forward to a healthier future */}
            <SubMenu
              title="Looking forward to a healthier future"
              className={`submenu_item ${path.includes("looking_forward_healthier_future") && "active"
                }`}
              defaultOpen={path.includes("looking_forward_healthier_future")}
            >
              <MenuItem
                onClick={() =>
                  history.push("/looking_forward_healthier_future")
                }
                className="menu_item"
              >
                Managing your Risk Factors
              </MenuItem>

              <MenuItem
                onClick={() =>
                  history.push("/looking_forward_healthier_future/smoking")
                }
                className="menu_item"
              >
                Smoking
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push(
                    "/looking_forward_healthier_future/high_cholesterol"
                  )
                }
                className="menu_item"
              >
                High Cholesterol
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push(
                    "/looking_forward_healthier_future/being_overweight"
                  )
                }
                className="menu_item"
              >
                Being Overweight
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push(
                    "/looking_forward_healthier_future/healthy_eating_for_a_healthy_heart"
                  )
                }
                className="menu_item"
              >
                Healthy eating for a healthy heart
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/looking_forward_healthier_future/alcohol")
                }
                className="menu_item"
              >
                Alcohol
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push(
                    "/looking_forward_healthier_future/physical_inactivity"
                  )
                }
                className="menu_item"
              >
                Physical Inactivity
              </MenuItem>
            </SubMenu>

            {/* <MenuItem
              onClick={() => history.push("/looking_forward_healthier_future")}
              className="menu_item"
            >
              Looking forward healthier future
            </MenuItem> */}

            <MenuItem
              onClick={() => history.push("/medications_for_your_heart")}
              className="menu_item"
            >
              Medications For Your Heart
            </MenuItem>

            {/* <MenuItem onClick={() => history.push("/")} className="menu_item">
              Risk factor profile
            </MenuItem> */}

            <MenuItem
              onClick={() => history.push("/useful_addressess")}
              className="menu_item"
            >
              Useful Addresses
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
