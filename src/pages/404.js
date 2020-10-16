import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';

export default function FourOhFour( { data } ) {
	return (
		<Layout>
			<Helmet
				title='404'
				meta={[
					{
						'name': 'description',
							'content': 'Oops, there\'s nothing here'
					},
					{
						'name': 'og:title',
						'content': '404'
					},
					{
						'name': 'og:description',
						'content': 'Oops, there\'s nothing here'
					},
					{
						'name': 'og:type',
						'content': 'website'
					},
				]}
			/>
			<article>
				<header
					className={ classnames( 'header', 'page-header' ) }
				>
					<Spacer />
					<h1
						className={ classnames( 'page-title', 'middle' ) }
					>
						404
					</h1>
				</header>
				<div>
					<p>Sorry, but that page doesn't seem to exist. <Link to="/">Head back to the homepage.</Link></p>
				</div>
			</article>
		</Layout>
	);
}
