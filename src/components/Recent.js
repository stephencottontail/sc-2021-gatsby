import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Recent( { ...props } ) {
	const { fluid } = props;
	const data = useStaticQuery(graphql`
	query {
		allWpPost(limit: 5) {
			edges {
				node {
					slug
					title
				}
			}
		}
	}
	`);

	return (
		<>
			<h2
				className='recent-posts-title'
			>
				Posts
			</h2>
			<div
				className='image-wrapper'
			>
				<div
					className='overlay'
				/>
				<Img
					fluid={ fluid }
					alt='hi'
				/>
			</div>
			<div
				className='entries'
			>
				{ data.allWpPost.edges.map( ( { node }, i ) => {
					return (
						<Link
							to={ `/blog/${node.slug}` }
						>
							{ `0${i}/ ${node.title}` }
						</Link>
					);
				} ) }
			</div>
		</>
	);
}
