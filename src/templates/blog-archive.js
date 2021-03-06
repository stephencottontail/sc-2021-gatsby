import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Layout from '../components/Layout'
import Spacer from '../components/Spacer';
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
			<header
				className={ classnames( 'header', 'page-header', 'archive-header' ) }
			>
				<Spacer />
				<h1
					className={ classnames( 'page-title', 'archive-title', 'middle' ) }
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
							<Link to={ `/blog/${node.slug}` }>
								<h2>{ node.title }</h2>
							</Link>
							<p
								className='entry-meta'
							>
								<span><b>Date</b>{ node.date }</span>
								{ 0 > node.categories.nodes.length && <Categories src={ node.categories } /> }
								{ 0 > node.tags.nodes.length && <Tags src={ node.tags } /> }
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
