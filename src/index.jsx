import './styles/themes/flatly/main.scss';
import 'cssFontawesome';
import 'cssAnimateCss';
import './styles/app.scss';

import React from 'react';
import ReactDOM from 'reactDom';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import WideSection from './components/WideSection.jsx';
import MarketingSection from './components/MarketingSection.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="animated bounceInLeft">
          <WideSection />
        </div>
        <br/>
        <MarketingSection />
        <br/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
