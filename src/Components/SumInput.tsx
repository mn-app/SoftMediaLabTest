import React, { useCallback } from 'react';
import './SumInput.scss';
import { formatSum } from '../utils';

export interface SumInputProps {
	value?: number;
	mask?: string;
	onChange?: (v?: number) => void;
	className?: string;
}

function SumInput({ value, onChange, mask, className }: SumInputProps) {
	const handleChange = useCallback(
		(v: string) => {
			if (v && !v.match(/^[0-9\s]+$/gm)) return;
			const n: number = Number.parseFloat(v.replace(/[^0-9]/g, ''));
			onChange && onChange(n);
		},
		[onChange]
	);

	return (
		<input
			className={'sum-input ' + (className ? className : '')}
			value={value === undefined ? '' : formatSum(value)}
			onInput={e => handleChange((e.target as HTMLInputElement).value)}
		/>
	);
}

export default SumInput;
