import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import arrow from '../components/svg/arrow.svg';

export default function( { data, pageContext } ) {
	const { numProjectPages, currentProjectPage } = pageContext;
	const isFirst = 1 === currentProjectPage;
	const isLast = numProjectPages === currentProjectPage;
	const prevPage = 1 === currentProjectPage - 1 ? '/project' : `/${currentProjectPage - 1}`;
	const nextPage = `${currentProjectPage + 1}`;

	return (
		<Layout>
			<Helmet
				title={ `Project Archives > ${currentProjectPage}` }
				meta={[
					{
						'name': 'og:title',
						'content': 'Project Archives'
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
					);
				} ) }
			</main>
			<div
				className={ classnames( 'pagination', 'archive-pagination' ) }
			>
				{ ! isFirst && (
					<Link to={ prevPage } rel="prev"><img style={{height: '100px', width:'50px'}} src={arrow} alt='' /><span><b>Newer Posts</b></span></Link>
				) }
				{ ! isLast && (
					<Link to={ nextPage } rel="next"><img style={{height: '100px', width:'50px'}} src={arrow} alt='' /><span><b>Older Posts</b></span></Link>
				) }
			</div>
		</Layout>
	);
};

export const query = graphql`
query($limit: Int!, $skip: Int!) {
	allWpProject(
		sort: { fields: [date], order: DESC },
		limit: $limit,
		skip: $skip
	) {
		edges {
			node {
				title
				slug
				technologies
				inspiration
				date(formatString: "MMMM D YYYY")
			}
		}
	}
}
`;
