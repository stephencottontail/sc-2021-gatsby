import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';

export default function Now( { data } ) {
	const { title, content, modified } = data.wpPage

	return (
		<Layout>
			<Helmet
				title={ title }
				meta={[
					{
						'name': 'description',
							'content': 'A page to tell you what I\'ve been up to'
					},
					{
						'name': 'og:title',
						'content': title
					},
					{
						'name': 'og:description',
						'content': 'A page to tell you what I\'ve been up to'
					},
					{
						'name': 'og:type',
						'content': 'website'
					}
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
						{ title }
						<span>{ modified }</span>
					</h1>
				</header>
				<div
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</article>
		</Layout>
	)
}

export const pageQuery = graphql`
query {
	wpPage( slug: { eq: "now" } ) {
		title
		content
		modified( formatString: "MMMM D YYYY" )
	}
}
`
