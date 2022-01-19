import React from 'react';
import isdevice from 'current-device';

import Banner from '../components/Banner';
import Nav from '../components/Nav';

const links = {
  left: [ 'HackATon' ],
  right: [
    'Info',
    'Contact',
    'Register'
  ]
}

const App: React.FC = () => {
  const nav_h = isdevice.mobile() ? 10 : 8;
  const ban_h = 100 - nav_h;

  return (
    <div className="App">
      <Nav height={ nav_h } links={links} />
      <Banner height={ ban_h }/>
      <div style={{height: '150vh'}}></div>
    </div>
  );
}

export default App;
