import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Home( { data } ) {
	return (
		<Layout>
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
									<p>{ node.date }</p>
								</Link>
							</header>
							<div
								dangerouslySetInnerHTML={{ __html: node.excerpt }}
							/>
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
			}
		}
	}
}
`

