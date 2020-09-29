import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Now( { data } ) {
	const { title, content, modified } = data.wpPage

	return [
		<Layout>
			<main>
				<article>
					<header>
						<h1>{ title }</h1>
						<p>{ modified }</p>
					</header>
					<div
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</article>
			</main>
		</Layout>
	]
}

export const pageQuery = graphql`
query {
	wpPage(slug: { eq: "now" }) {
		title
		content
		modified(formatString: "Do")
	}
}
`
