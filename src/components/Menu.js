import React from 'react'
import { Link } from 'gatsby'

export default function Menu() {
	return (
		<nav
			id='nav'
		>
			<button
				id='nav-toggle'
			>
				<span
					className='screen-reader-text'
					dangerouslySetInnerHTML={{ __html: 'Open Menu' }}
				/>
			</button>

			<ul>
				<li><Link to="/now">Now</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/theme">Themes</Link></li>
				<li><Link to="/project">Projects</Link></li>
			</ul>
		</nav>
	)
}

