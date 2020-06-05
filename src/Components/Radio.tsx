import React from 'react';
import './Radio.scss';

interface RadioProps {
	selected: boolean;
	label: React.ReactNode;
	onSelect: () => void;
}
export default function Radio({ label, selected, onSelect }: RadioProps) {
	return (
		<div className={'radio-container ' + (selected ? 'selected' : '')} onClick={() => onSelect()}>
			<div className='radio-outer'>
				<div className='radio-inner'></div>
			</div>
			<input type='radio' checked={selected} />
			{label}
		</div>
	);
}
