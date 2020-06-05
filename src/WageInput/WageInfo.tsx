import React from 'react';
import Wage, { NDFL } from './Wage';
import './WageInfo.scss';
import { formatSum } from '../utils';

interface WageInfoProps {
	wage: Wage;
}

export default function WageInfo({ wage }: WageInfoProps) {
	return (
		<div className='wage-info-container'>
			<SumInfo sum={wage.getEmployeeSum()} label='сотрудник будет получать на руки' />
			<SumInfo sum={wage.getNDFLSum()} label={'НДФЛ, ' + NDFL * 100 + '% от оклада'} />
			<SumInfo sum={wage.getExpenses()} label='за сотрудника в месяц' />
		</div>
	);
}

interface SumInfoProps {
	sum: number;
	label: string;
}
function SumInfo({ sum, label }: SumInfoProps) {
	return (
		<div className='sum-info-container'>
			<span className='sum-info-sum'>{formatSum(Math.round(sum))} ₽</span>
			<span className='sum-info-label'>{label}</span>
		</div>
	);
}
