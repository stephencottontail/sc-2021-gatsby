import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
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
				<article
					key={ cur.databaseId }
					id={ cur.databaseId }
				>
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
							{ 0 > cur.categories.nodes.length && <Categories src={ cur.categories } /> }
							{ 0 > cur.tags.nodes.length && <Tags src={ cur.tags } /> }
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
	cur: wpPost( slug: { eq: $slug } ) {
		title
		content
		excerpt
		slug
		date(formatString: "MMMM D YYYY")
		categories {
			nodes {
				name
			}
		}
		tags {
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

	prev: wpPost( slug: { eq: $prev } ) {
		title
		slug
	}

	next: wpPost( slug: { eq: $next } ) {
		title
		slug
	}
}
`
