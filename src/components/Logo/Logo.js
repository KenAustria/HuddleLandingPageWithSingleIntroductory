import React from 'react'
import huddleLogo from '../../images/logo.svg'
import './Logo.css'

const Logo = () => {
	return (
		<div className='logo'>
			<img src={huddleLogo} alt='huddlelogo' />
		</div>
	)
}

export default Logo;