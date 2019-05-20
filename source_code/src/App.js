import React, { Component } from 'react';
import NavBar from './components/navBar';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ComparisonsPage from './pages/comparison';
import DashPage from './pages/dash';
import NotesPage from './pages/notes';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartBar, faPencilAlt, faAdjust } from '@fortawesome/free-solid-svg-icons'

const _Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {height: props.height};
    }
  
    componentWillMount(){
      this.setState({height: window.innerHeight + 'px'});
    }
   
   state = {
      expanded: false
  };
  

  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

   render() {
      const { expanded } = this.state;
      return (
          <Route render={({location, history }) => (
            <React.Fragment>
               <SideNav onSelect={
                  (selected) => {
                     const to = '/' + selected;
                     if (location.pathname !== to) {
                        history.push(to);
                     }
                  }
               } onToggle={this.onToggle}>
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                     <NavItem eventKey="home">
                        <NavIcon>
                           <FontAwesomeIcon icon={faHome}/>
                        </NavIcon>
                        <NavText>Home</NavText>
                     </NavItem>

                     <NavItem eventKey="compare">
                        <NavIcon>
                           <FontAwesomeIcon icon={faAdjust}/>
                        </NavIcon>
                        <NavText>Compare</NavText>
                     </NavItem>

                     <NavItem eventKey="notes">
                        <NavIcon>
                           <FontAwesomeIcon icon={faPencilAlt}/>
                        </NavIcon>
                        <NavText>notes</NavText>
                     </NavItem>
                  </SideNav.Nav>
               </SideNav>
               <_Main style={{height:'100vh'}} expanded={expanded}>
                  <Container fluid style={{height:'100%'}}>
                  <Route path="/home" component={props => <DashPage />} />
                  <Route path="/compare" component={props => <ComparisonsPage />} />
                  <Route path="/notes" component={props => <NotesPage />} />

                  </Container>
                  
               </_Main>
            </React.Fragment>
         )}/> 
      );
   }
}

export default App;