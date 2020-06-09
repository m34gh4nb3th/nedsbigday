import React from 'react';
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import FooterCredits from './Components/FooterCredits';
import Header from './Components/Header';
import HomePage from './Components/Home/HomePage';
import RSVP from './Components/Pages/RSVP';
import Travel from './Components/Pages/Travel';
import ActivitiesPage from './Components/Activities/ActivitiesPage';
import Trivia from './Components/Pages/Trivia';
import Registry from './Components/Pages/Registry';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

const App = () => (
  <Layout style={{ backgroundColor: 'white' }}>
    <Content style={{ minHeight: '1000px'}}>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rsvp">
            <RSVP />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/activities">
            <ActivitiesPage />
          </Route>
          <Route path="/trivia">
            <Trivia />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
        </Switch>
      </Router>
    </Content>
    <Footer style={{ backgroundColor: 'white' }}> <FooterCredits/> </Footer>
  </Layout>
);

export default App;