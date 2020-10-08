import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
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
						{ cur.technologies && <span><b>Technologies</b>{ cur.technologies }</span> }
						{ cur.inspiration && <span><b>Inspiration</b>{ cur.inspiration }</span> }
					</p>
				</header>
				<div
					dangerouslySetInnerHTML={{ __html: cur.content }}
				/>
			</article>
			<Pagination prev={ prev } next={ next } />
		</Layout>
	)
}

export const query = graphql`
query($slug: String!, $next: String, $prev: String) {
	cur: wpProject( slug: { eq: $slug } ) {
		title
		codepen
		technologies
		inspiration
		content
		excerpt
		slug
		date( formatString: "MMMM D YYYY" )
		featuredImage {
			node {
				srcSet
				sourceUrl
			}
		}
	}

	prev: wpProject( slug: { eq: $prev } ) {
		title
		slug
	}

	next: wpProject( slug: { eq: $next } ) {
		title
		slug
	}
}
`
