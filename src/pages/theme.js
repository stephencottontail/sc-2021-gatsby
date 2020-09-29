import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/Header'

export default function Theme( { data } ) {
	return [
		<Header />,
		<div>
			{ data.allWpThemePost.edges.map( ( { node } ) => {
				return (
					<article
						key={ node.databaseId }
						id={ node.databaseId }
					>
						<header>
							<Link to={ `${node.slug}` }>
								<h2>{ node.title }</h2>
								<p>{ node.date }</p>
							</Link>
						</header>
						<div
							dangerouslySetInnerHTML={{ __html: node.content }}
						/>
					</article>
				)
			} ) }
		</div>
	]
}

export const pageQuery = graphql`
query {
	allWpThemePost(sort: { fields: [date] }) {
		edges {
			node {
				title
				content
				databaseId
				slug
				date(formatString: "Do")
			}
		}
	}
}
`
