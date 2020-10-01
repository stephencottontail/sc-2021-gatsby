import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import classnames from 'classnames';
import Layout from '../components/Layout'
import Categories from '../components/Categories';

export default function Theme( { data } ) {
	return (
		<Layout>
			<Helmet
				title='Themes'
				meta={[
					{
						'name': 'description',
						'content': 'WordPress themes I\'ve created'
					},
					{
						'name': 'og:title',
						'content': 'Themes | steve'
					},
					{
						'name': 'og:description',
						'content': 'WordPress themes I\'ve created'
					},
					{
						'name': 'og:type',
						'content': 'website'
					}
				]}
			/>
			<header
				className={ classnames( 'page-header', 'archive-header' ) }
			>
				<h1
					className={ classnames( 'page-title', 'archive-title' ) }
				>
					Themes
				</h1>
			</header>
			<main>
				{ data.allWpThemePost.edges.map( ( { node } ) => {
					return (
						<article
							key={ node.databaseId }
							id={ node.databaseId }
						>
							<header>
								<Link to={ `${node.slug}` }>
									<h2>{ node.title }</h2>
								</Link>
								<p>
									<span><b>Date</b>{ node.date }</span>
									{ node.categories && <Categories src={ node.categories } /> }
								</p>
							</header>
						</article>
					)
				} ) }
			</main>
		</Layout>
	)
}

export const pageQuery = graphql`
query {
	allWpThemePost( sort: { fields: [date] } ) {
		edges {
			node {
				title
				content
				databaseId
				slug
				date( formatString: "MMMM D YYYY" )
				categories {
					nodes {
						name
					}
				}
			}
		}
	}
}
`
