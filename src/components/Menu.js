import React, { useState } from 'react';
import { Link } from 'gatsby'
import classnames from 'classnames';

export default function Menu() {
	const [ navOpen, toggleNavOpen ] = useState( false );

	return (
		<nav
			id='nav'
			className={ classnames( navOpen ? 'nav-open' : '' ) }
		>
			<button
				id='nav-toggle'
				onClick={ () => toggleNavOpen( ! navOpen ) }
			>
				<span
					className='screen-reader-text'
					dangerouslySetInnerHTML={{
						__html: navOpen ? 'Close Menu' : 'Open Menu'
					}}
				/>
			</button>
			<ul>
				<li><Link to="/now">Now</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><a href="https://github.com/stephencottontail">GitHub</a></li>
				<li><a href="https://twitter.com/s_cottontail24">Twitter</a></li>
			</ul>
		</nav>
	)
}

