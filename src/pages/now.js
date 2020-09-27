import React from 'react'
import { graphql } from 'gatsby'

export default function Now( { data } ) {
	const { title, content, modified } = data.wpPage

	return (
		<article>
			<header>
				<h1>{ title }</h1>
				<p>{ modified }</p>
			</header>
			<div
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	)
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
