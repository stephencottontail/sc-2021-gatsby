import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout'
import Categories from '../components/Categories';

export default ( { data } ) => {
	const post = data.allWpThemePost.edges[0].node

	return (
		<Layout>
			<Helmet
				title={ post.title }
				meta={[
					{
						'name': 'description',
						'content': post.excerpt
					},
					{
						'name': 'og:title',
						'content': post.title
					},
					{
						'name': 'og:description',
						'content': post.excerpt
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
			<main>
				<article>
					<header>
						<h2>{ post.title }</h2>
						<p>
							<span><b>Date</b>{ post.date }</span>
							{ post.categories && <Categories src={ post.categories } /> }
						</p>
					</header>
					<div
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</main>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
	allWpThemePost( filter: { slug: { eq: $slug } } ) {
		edges {
			node {
				title
				content
				excerpt
				slug
				date( formatString: "MMMM D YYYY" )
				categories {
					nodes {
						name
					}
				}
				featuredImage {
					node {
						srcSet
						sourceUrl
					}
				}
			}
		}
	}
}
`
