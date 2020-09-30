import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header';
import Footer from './Footer';

export default function Layout( { children } ) {
	return [
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			titleTemplate={ '%s | steve' }
		/>,
		<Header />,
		children,
		<Footer />
	]
}
