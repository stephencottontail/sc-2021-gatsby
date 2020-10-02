import React from 'react';
import { Link } from 'gatsby';
import logo from './svg/skd-logo-2021.svg';

export default function Footer() {
	return (
		<footer>
			<div>
				<Link to="/">
					<img src={logo} alt='My logo' style={{height: '256px', width: '256px'}} />
				</Link>
			</div>
			<div>
				<h2>Let's connect!</h2>
				<a href="https://github.com/stephencottontail">GitHub</a>
				<a href="https://twitter.com/s_cottontail24">Twitter</a>
			</div>
			<div>
				<p>Proudly powered by <a href="https://gatsbyjs.org/">Gatsby</a> + <a href="https://wordpress.org/">WordPress</a></p>
			</div>
		</footer>
	);
};
