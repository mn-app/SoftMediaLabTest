import React from 'react';
import { WageType } from './Wage';
import Radio from '../Components/Radio';
import Info from '../Components/Info';
import './WageTypeInput.scss';

interface WageTypeInputProps {
	type: WageType;
	onChange: (t: WageType) => void;
	className?: string;
}

const TYPE_LABELS = [
	{ label: 'Оклад за месяц' },
	{ label: 'МРОТ', info: 'МРОТ - минимальный размер опллаты труда. Разный для разных регионов.' },
	{ label: 'Оплата за день' },
	{ label: 'Оплата за час' }
];

function WageTypeInput({ type, onChange, className }: WageTypeInputProps) {
	return (
		<div className={'wage-type-input-container ' + (className ? className : '')}>
			{TYPE_LABELS.map((l, idx) => (
				<div className='wage-type-input-item'>
					<Radio selected={type === idx} label={l.label} onSelect={() => onChange(idx)} />
					{l.info && <Info>{l.info}</Info>}
				</div>
			))}
		</div>
	);
}

export default WageTypeInput;
