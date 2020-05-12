import React from 'react';
import Logo from './components/Logo/Logo';
import Mockup from './components/Mockup/Mockup';
import Intro from './components/Intro/Intro';
import './App.css';

function App() {
  return (
    <>
			<div className='split left'>
				<div className='hero'>
					<Logo />
					<Mockup />
				</div>
			</div>
			<div className='split right'>
				<Intro />
			</div>
    </>
  );
}

export default App;
