import React from 'react';
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FooterCredits from './Components/Common/FooterCredits';
import Header from './Components/Common/Header';
import HomePage from './Components/Home/HomePage';
import RsvpPage from './Components/RSVP/RsvpPage';
import Travel from './Components/Pages/Travel';
import RSVPList from './Components/Pages/RSVPList';
import ActivitiesPage from './Components/Activities/ActivitiesPage';
import TriviaPage from './Components/Trivia/TriviaPage';
import Registry from './Components/Pages/Registry';
import Covid from './Components/Pages/Covid';
import Transportation from './Components/Pages/Transportation'
import { Layout } from 'antd';

const { Footer, Content } = Layout;

console.log(`
  ######     #    ######  ####### #     # ####### #       ####### 
  #     #   # #   #     #    #    #     # #     # #       #       
  #     #  #   #  #     #    #    #     # #     # #       #       
  ######  #     # ######     #    ####### #     # #       #####   
  #     # ####### #   #      #    #     # #     # #       #       
  #     # #     # #    #     #    #     # #     # #       #       
  ######  #     # #     #    #    #     # ####### ####### #######`);
//f7fffb
//faf6f2
const App = () => (
  <Layout style={{ backgroundColor: '#fffdfc' }}>
    <Content style={{ minHeight: '1000px'}}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rsvp">
            <RsvpPage />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/activities">
            <ActivitiesPage />
          </Route>
          <Route path="/trivia">
            <TriviaPage />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/transportation">
            <Transportation />
          </Route>
          <Route path="/topsecret">
            <RSVPList />
          </Route>
        </Switch>
      </Router>
    </Content>
    <Footer style={{ backgroundColor: '#fffdfc' }}> <FooterCredits/> </Footer>
  </Layout>
);

export default App;