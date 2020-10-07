import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header';
import Footer from './Footer';
import './styles/style.scss';

export default function Layout( { children, ...props } ) {
	const isHome = props.home;

	return [
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			titleTemplate={ '%s | steve' }
		/>,
		<Header
			home={ isHome }
		/>,
		children,
		<Footer />
	]
}
