import React, { useState } from 'react';
import './App.css';
import WageInput from './WageInput/WageInput';
import Wage from './WageInput/Wage';

function App() {
	const [wage, setWageData] = useState(new Wage());
	return (
		<div className='App'>
			<WageInput wage={wage} onChange={w => setWageData(w)} label='Сумма' />
		</div>
	);
}

export default App;
