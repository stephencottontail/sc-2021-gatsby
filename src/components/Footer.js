import React from 'react';
import { Link } from 'gatsby';
import logo from './svg/skd-logo-2021.svg';

export default function Footer() {
	return (
		<footer>
			<div
				className='footer-home-link'
			>
				<Link to="/">
					<img src={logo} alt='My logo' style={{height: '256px', width: '256px'}} />
				</Link>
			</div>
			<div
				className='footer-cta'
			>
				<h2
					className='footer-cta-title'
				>
					Let's connect!
				</h2>
				<a href="https://github.com/stephencottontail">GitHub</a>
				<a href="https://twitter.com/s_cottontail24">Twitter</a>
			</div>
			<div
				className='footer-copyright'
			>
				<p>Proudly powered by <a href="https://gatsbyjs.org/">Gatsby</a> + <a href="https://wordpress.org/">WordPress</a></p>
			</div>
		</footer>
	);
};
