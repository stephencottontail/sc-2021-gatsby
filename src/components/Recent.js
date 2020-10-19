import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Recent( { ...props } ) {
	const { fluid } = props;
	const data = useStaticQuery(graphql`
	query {
		allWpProject(limit: 5, sort: { fields: [date], order: DESC } ) {
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
		<div
			className='recent-posts'
		>
			<h2
				className='title'
			>
				Recent Projects
			</h2>
			<div
				className='image-wrapper'
			>
				<div
					className='overlay'
				/>
				<Img
					fluid={ fluid }
					alt='Snow-covered tree'
				/>
			</div>
			<div
				className='entries'
			>
				{ data.allWpProject.edges.map( ( { node }, i ) => {
					return (
						<Link
							to={ `/project/${node.slug}` }
						>
							{ `0${i}/ ${node.title}` }
						</Link>
					);
				} ) }
			</div>
		</div>
	);
}
