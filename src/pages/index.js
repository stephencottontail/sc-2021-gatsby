import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
import Recent from '../components/Recent';

export default function Index( { data } ) {
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
				<Recent
					fluid={ post.featuredImage.node.localFile.childImageSharp.fluid }
				/>
			</article>
		</Layout>
	);
}

/**
 * it's set up to pull the featured image from the front
 * page. this is admittedly probably not the best way,
 * but it is a way
 */
export const pageQuery = graphql`
query {
	wpPage( slug: { eq: "front-page" } ) {
		title
		content
		featuredImage {
			node {
				sourceUrl
				localFile {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
}
`
