import React from 'react'
import mockup from '../../images/illustration-mockups.svg'
import './Mockup.css'

const Mockup = () => {
	return (
		<div className='mockups'>
			<img src={mockup} alt='mockup'/>
		</div>
	)
}

export default Mockup;