import React from 'react';

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
  return (
    <div className="App">
      <Nav height={6} links={links} />
      <Banner height={94}/>
    </div>
  );
}

export default App;
