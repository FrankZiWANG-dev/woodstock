import React from 'react';
import './assets/css/App.css';
import Nav from './assets/components/nav';
import About from './assets/components/about';
import Team from './assets/components/team';
import Contact from './assets/components/contact';
import Footer from './assets/components/footer';

const App = () => {
 
  return [<Nav/>,
  <About/>,
  <Team/>,
  <Contact/>,
  <Footer/>]
}

export default App;
