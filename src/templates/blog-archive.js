import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import arrow from '../components/svg/arrow.svg';

export default function( { data, pageContext } ) {
	const { numPostPages, currentPostPage } = pageContext;
	const isFirst = 1 === currentPostPage;
	const isLast = numPostPages === currentPostPage;
	const prevPage = 1 === currentPostPage - 1 ? '/blog' : `/${currentPostPage - 1}`;
	const nextPage = `${currentPostPage + 1}`;

	return (
		<Layout>
			<Helmet
				title={ `Blog Archives > ${currentPostPage}` }
				meta={[
					{
						'name': 'og:title',
						'content': 'Blog Archives'
					},
					{
						'name': 'og:type',
						'content': 'website'
					}
				]}
			/>
			<main>
				<header
					className={ classnames( 'page-header', 'archive-header' ) }
				>
					<h1
						className={ classnames( 'page-title', 'archive-title' ) }
					>
						Blog
					</h1>
				</header>
				{ data.allWpPost.edges.map( ( { node } ) => {
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
									{ node.categories && <Categories src={ node.categories } /> }
									{ node.tags && <Tags src={ node.tags } /> }
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
						<Link to={ nextPage } rel="next"><img style={{height: '100px', width:'50px'}} src={arrow} alt='' /><span><b>Older Posts</b></span></Link>
					) }
				</div>
			</main>
		</Layout>
	);
};

export const query = graphql`
query($limit: Int!, $skip: Int!) {
	allWpPost(
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
				tags {
					nodes{
						name
					}
				}
			}
		}
	}
}
`;
