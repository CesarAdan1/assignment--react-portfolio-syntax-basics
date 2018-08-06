import React from 'react';
//import logo from './logo.svg';
import PortfolioFixed from './Components/PortfolioFixed';
import PortfolioContent from './Components/PortfolioContent';
import ContactInfo from './Components/ContactInfo';



class App extends React.Component{
  render() {
    return (
      <div id="app-container">
        
        <PortfolioFixed />
        <PortfolioContent />
        <ContactInfo />
        
      </div>

    );
  }
}

export default App;
