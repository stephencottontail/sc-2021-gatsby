import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';

export default function Home( { data } ) {
	const post = data.wpPage;

	return (
		<Layout home>
			<Helmet
				title='Steve'
				titleTemplate='Steve'
				meta={[
					{
						'name': 'description',
							'content': 'Steve is a web designer/developer'
					},
					{
						'name': 'og:title',
						'content': 'Steve'
					},
					{
						'name': 'og:description',
						'content': 'Steve is a web designer/developer'
					},
					{
						'name': 'og:type',
						'content': 'website'
					},
					{
						'name': 'og:image',
						'content': (
							post.featuredImage &&
							post.featuredImage.node.sourceUrl
						)
					}
				]}
			/>
			<article>
				<header
					className={ classnames( 'header', 'home-header' ) }
				>
					<Spacer />
					<h1
						className={ classnames( 'page-title', 'middle' ) }
					>
						Steve
						<span>Web Designer/Developer</span>
						<span>Contributor to the GitHub Arctic Code Vault*</span>
					</h1>
					<p>*No, really. <a href="https://github.com/stephencottontail/">Check for yourself.</a></p>
				</header>
				<div
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</article>
		</Layout>
	)
}

/**
 * for now, it looks like you have to hardcode in the
 * slug if you're using a static front page
 *
 * @link https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/issues/194
 */
export const pageQuery = graphql`
query {
	wpPage( slug: { eq: "front-page" } ) {
		title
		content
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
}
`
