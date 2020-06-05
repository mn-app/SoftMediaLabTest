import React from 'react';
import './Toggle.scss';

interface ToggleProps {
	value: boolean;
	onLabel?: string;
	offLabel?: string;
	onChange: (v: boolean) => void;
	className?: string;
}

export default function Toggle({ value, onChange, onLabel, offLabel, className }: ToggleProps) {
	return (
		<div className={'toggle-container ' + (value ? ' on ' : ' off ') + (className ? className : '')}>
			<label className='toggle-label-off' onClick={() => onChange(false)}>
				{offLabel}
			</label>
			<div className='toggle-wrapper' onClick={() => onChange(!value)}>
				<div className='toggle-toggle' />
			</div>
			<label className='toggle-label-on' onClick={() => onChange(true)}>
				{onLabel}
			</label>
		</div>
	);
}
