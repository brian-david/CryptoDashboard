import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import BarGraph from '../components/BarGraph';

export default class DashPage extends React.Component {
   constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
         activeTab: '1',
      };
   }

   toggle(tab) {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   }
   
   render() {
      return (
         <div>
            <h1>Dashboard</h1>
            <Nav tabs>
               <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                     Pie Chart
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                     Line Graph
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                     Bar Graph
                  </NavLink>
               </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
               <TabPane tabId="1">
                  <Row>
                     <Col sm="12">
                       <PieChart />
                     </Col>
                  </Row>
               </TabPane>
               <TabPane tabId="2">
                  <Row>
                     <Col sm="6">
                        <LineChart />
                     </Col>
                  </Row>
               </TabPane>
               <TabPane tabId="3">
                  <Row>
                     <Col sm="6">
                        <BarGraph />
                     </Col>
                  </Row>
               </TabPane>
            </TabContent>
         </div>
      );
   }
}

