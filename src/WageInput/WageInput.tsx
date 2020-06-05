import React from 'react';
import SumInput from '../Components/SumInput';
import Wage, { WageType } from './Wage';
import WageTypeInput from './WageTypeInput';
import Toggle from '../Components/Toggle';
import WageInfo from './WageInfo';
import './WageInput.scss';

export interface WageInputProps {
	wage: Wage;
	onChange: (wage: Wage) => void;
	label?: string;
}

function WageInput({ wage, onChange, label }: WageInputProps) {
	return (
		<div className='wage-input-container'>
			<label className='wage-input-label'>{label}</label>
			<WageTypeInput type={wage.type} onChange={wageType => onChange(wage.copy({ type: wageType }))} className='wage-input-type' />
			{wage.type === WageType.MROT || (
				<Toggle
					value={!wage.withNDFL}
					onChange={w => onChange(wage.copy({ withNDFL: !w }))}
					onLabel='Без НДФЛ'
					offLabel='Указать с НДФЛ'
					className='wage-input-ndfl'
				/>
			)}
			{wage.type === WageType.MROT || (
				<span className='wage-input-value-container'>
					<SumInput
						value={wage.value}
						onChange={wageValue => onChange(wage.copy({ value: wageValue }))}
						className='wage-input-value'
					/>
					<span className='wage-input-value-descr'>
						₽ {wage.type === WageType.Day ? 'в день' : wage.type === WageType.Hour ? 'в час' : ''}
					</span>
				</span>
			)}

			{wage.type === WageType.Month ? <WageInfo wage={wage} /> : ''}
		</div>
	);
}

export default WageInput;
