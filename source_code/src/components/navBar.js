import React, { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartBar, faPencilAlt, faAdjust } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

class NavBar extends React.Component {
   render(){
      return(
         <SideNav>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
               <NavItem eventKey="home">
                  <NavIcon>
                     <FontAwesomeIcon icon={faHome}/>
                  </NavIcon>
                  <NavText>Home</NavText>
               </NavItem>

               <NavItem eventKey="compare">
                  <Link to="/comparison">comparison</Link>
                  <NavIcon>
                     <FontAwesomeIcon icon={faAdjust}/>
                  </NavIcon>
                  <NavText>Compare</NavText>
               </NavItem>

               <NavItem eventKey="notes">
                  <NavIcon>
                     <FontAwesomeIcon icon={faPencilAlt}/>
                  </NavIcon>
                  <NavText>Charts</NavText>
               </NavItem>

            </SideNav.Nav>
         </SideNav>
      );
   }
}

export default NavBar;