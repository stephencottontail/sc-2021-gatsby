import React from "react"
import { Link, graphql } from "gatsby"

export default function Home( { data } ) {
	return (
		<div>
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
		</div>
	)
}


/**
 * `formatString` is created using momentjs tokens
 *
 * @link https://momentjs.com/docs/#/displaying/format/
 */
export const pageQuery = graphql`
query {
	allWpPost(sort: { fields: [date] }) {
		edges {
			node {
				title
				excerpt
				databaseId
				slug
				date(formatString: "Do")
			}
		}
	}
}
`

