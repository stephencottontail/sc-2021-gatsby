import React from 'react'
import { Link, graphql } from 'gatsby'
import classnames from 'classnames';
import Layout from '../components/Layout'
import Categories from '../components/Categories';
import Tags from '../components/Tags';

export default function Blog( { data } ) {
	return (
		<Layout>
			<header
				className={ classnames( 'page-header', 'archive-header' ) }
			>
				<h1
					className={ classnames( 'page-title', 'archive-title' ) }
				>
					Blog
				</h1>
			</header>
			<main>
				{ data.allWpPost.edges.map( ( { node } ) => {
					return (
						<article
							key={ node.databaseId }
							id={ node.databaseId }
						>
							<header>
								<Link to={ `blog/${node.slug}` }>
									<h2>{ node.title }</h2>
								</Link>
								<p>
									<span><b>Date</b>{ node.date }</span>
									{ node.categories && <Categories src={ node.categories } /> }
									{ node.tags && <Tags src={ node.tags } /> }
								</p>
							</header>
						</article>
					)
				} ) }
			</main>
		</Layout>
	)
}

/**
 * `formatString` is created using momentjs tokens
 *
 * @link https://momentjs.com/docs/#/displaying/format/
 */
export const pageQuery = graphql`
query {
	allWpPost( sort: { fields: [date] } ) {
		edges {
			node {
				title
				excerpt
				databaseId
				slug
				date( formatString: "MMMM D YYYY" )
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
			}
		}
	}
}
`

