import React, { useState } from 'react';
import './Info.scss';

interface IProps {
	children?: React.ReactNode;
}

export default function Info({ children }: IProps) {
	const [opened, setOpened] = useState(false);
	return (
		<div className='info-container'>
			<div className='info-icon' onClick={() => setOpened(!opened)}>
				{opened ? 'ⓧ' : 'ⓘ'}
			</div>

			<div className={'info-popup ' + (opened ? 'opened' : '')}>
				<div className='info-popup-tail' />
				<div className='info-popup-content'>{children}</div>
			</div>
		</div>
	);
}
