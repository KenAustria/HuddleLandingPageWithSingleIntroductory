import React from 'react';
import Logo from './components/Logo/Logo';
import Mockup from './components/Mockup/Mockup';
import Intro from './components/Intro/Intro';
import Icons from './components/Icons/Icons';
import './App.css';

function App() {
  return (
    <div className='landing'>
			<div className='left'>
				<div className='content'>
					<Logo />
					<Mockup />
				</div>
			</div>
			<div className='right'>
				<Intro />
				<Icons />
			</div>
    </div>
  );
}

export default App;