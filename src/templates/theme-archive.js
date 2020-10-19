import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
import Categories from '../components/Categories';
import arrow from '../components/svg/arrow.svg';

export default function( { data, pageContext } ) {
	const { numThemePages, currentThemePage } = pageContext;
	const isFirst = 1 === currentThemePage;
	const isLast = numThemePages === currentThemePage;
	const prevPage = 1 === currentThemePage - 1 ? '/theme' : `/${currentThemePage - 1}`;
	const nextPage = `${currentThemePage + 1}`;

	return (
		<Layout>
			<Helmet
				title={ `Theme Archives > ${currentThemePage}` }
				meta={[
					{
						'name': 'og:title',
							'content': 'Theme Archives'
					},
					{
						'name': 'og:type',
						'content': 'website'
					}
				]}
			/>
			<header
				className={ classnames( 'header', 'page-header', 'archive-header' ) }
			>
				<Spacer />
				<h1
					className={ classnames( 'page-title', 'archive-title', 'middle' ) }
				>
					Themes
				</h1>
			</header>
			{ data.allWpThemePost.edges.map( ( { node } ) => {
				return (
					<article
						key={ node.databaseId }
						id={ node.databaseId }
					>
						<header>
							<Link to={ `/theme/${node.slug}` }>
								<h2>{ node.title }</h2>
							</Link>
							<p
								className='entry-meta'
							>
								<span><b>Date</b>{ node.date }</span>
								{ 0 > node.categories.nodes.length && <Categories src={ node.categories } /> }
							</p>
						</header>
					</article>
				);
			} ) }
			<div
				className={ classnames( 'pagination', 'archive-pagination' ) }
			>
				{ ! isFirst && (
					<Link to={ prevPage } rel="prev"><img style={{height: '100px', width:'50px'}} src={arrow} alt='' /><span><b>Newer Posts</b></span></Link>
				) }
				{ ! isLast && (
					<Link to={ nextPage } rel="next"><span><b>Older Posts</b></span><img style={{height: '100px', width:'50px'}} src={arrow} alt='' /></Link>
				) }
			</div>
		</Layout>
	);
};

export const query = graphql`
query($limit: Int!, $skip: Int!) {
	allWpThemePost(
		sort: { fields: [date], order: DESC },
		limit: $limit,
		skip: $skip
	) {
		edges {
			node {
				title
				slug
				date(formatString: "MMMM D YYYY")
				categories {
					nodes {
						name
					}
				}
			}
		}
	}
}
`;
