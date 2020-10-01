import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import classnames from 'classnames';
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
			<header
				className={ classnames( 'page-header', 'archive-header' ) }
			>
				<h1
					className={ classnames( 'page-title', 'archive-title' ) }
				>
					Projects
				</h1>
			</header>
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
								</Link>
								<p>
									<span><b>Date</b>{ node.date }</span>
									<span><b>Technologies</b>{ node.technologies }</span>
									<span><b>Inspiration</b>{ node.inspiration }</span>
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
