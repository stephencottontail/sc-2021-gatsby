import React from 'react';

export default function Spacer() {
	/**
	 * the header is a Cover element with the top bar visually
	 * acting as the top element, but since those parts are
	 * absolutely positioned, we use this spacing element to
	 * provide the top element instead
	 */
	return (
		<div
			style={{ height: '32px' }}
		/>
	);
}
