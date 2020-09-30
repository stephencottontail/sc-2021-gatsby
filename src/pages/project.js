import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default function Project( { data } ) {
	return (
		<Layout>
			<Helmet
				title='Projects'
				meta={[
					{
						'name': 'description',
						'content': 'Various little coding projects I\'ve done'
					},
					{
						'name': 'og:title',
						'content': 'Projects | steve'
					},
					{
						'name': 'og:description',
						'content': 'Various little coding projects I\'ve done'
					},
					{
						'name': 'og:type',
						'content': 'website'
					}
				]}
			/>
			<main>
				{ data.allWpProject.edges.map( ( { node } ) => {
					return (
						<article
							key={ node.databaseId }
							id={ node.databaseId }
						>
							<header>
								<Link to={ `${node.slug}` }>
									<h2>{ node.title }</h2>
									<p>{ node.date }</p>
									<p>{ node.codepen }</p>
									<p>{ node.technologies }</p>
									<p>{ node.inspiration }</p>
								</Link>
							</header>
							<div
								dangerouslySetInnerHTML={{ __html: node.content }}
							/>
						</article>
					)
				} ) }
			</main>
		</Layout>
	)
}

export const pageQuery = graphql`
query {
	allWpProject( sort: { fields: [date] } ) {
		edges {
			node {
				title
				codepen
				technologies
				inspiration
				content
				databaseId
				slug
				date( formatString: "MMMM D YYYY" )
			}
		}
	}
}
`
