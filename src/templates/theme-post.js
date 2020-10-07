import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

export default ( { data } ) => {
	const { cur, prev, next } = data;

	return (
		<Layout>
			<Helmet
				title={ cur.title }
				meta={[
					{
						'name': 'description',
						'content': cur.excerpt
					},
					{
						'name': 'og:title',
						'content': cur.title
					},
					{
						'name': 'og:description',
						'content': cur.excerpt
					},
					{
						'name': 'og:type',
						'content': 'website'
					},
					{
						'name': 'og:image',
						'content': (
							cur.featuredImage &&
							cur.featuredImage.node.sourceUrl
						)
					}
				]}
			/>
			<main>
				<article>
					<header
						className={ classnames( 'header', 'page-header' ) }
					>
						<Spacer />
						<h2
							className={ classnames( 'page-title', 'middle' ) }
						>
							{ cur.title }
						</h2>
						<p
							className='entry-meta'
						>
							<span><b>Date</b>{ cur.date }</span>
							{ cur.categories && <Categories src={ cur.categories } /> }
						</p>
					</header>
					<div
						dangerouslySetInnerHTML={{ __html: cur.content }}
					/>
				</article>
				<Pagination prev={ prev } next={ next } />
			</main>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!, $next: String, $prev: String) {
	cur: wpThemePost( slug: { eq: $slug } ) {
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

	prev: wpThemePost( slug: { eq: $prev } ) {
		title
		slug
	}

	next: wpThemePost( slug: { eq: $next } ) {
		title
		slug
	}
}
`
