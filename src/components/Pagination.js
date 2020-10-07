import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import arrow from './svg/arrow.svg';

/**
 * Return single pagination
 *
 * @param {object} prev An object representing the previous post
 * @param {string} prev.slug - The slug of the previous post
 * @param {string} prev.title - The title of the previous post
 * @param {object} next An object representing the next post
 * @param {string} next.slug - The slug of the next post
 * @param {string} next.title - The title of the next post
 */
export default function Pagination( { prev = null, next = null } ) {
	return (
		<div
			className={ classnames( 'pagination', 'single-pagination' ) }
		>
			{ prev && <Link to={ `../${prev.slug}` } rel="prev"><img style={{height: '100px', width: '50px'}} src={arrow} alt='' /><span><b>Previous Post</b>{ prev.title }</span></Link> }
			{ next && <Link to={ `../${next.slug}` } rel="next"><span><b>Next Post</b>{ next.title }</span><img style={{height: '100px', width: '50px'}} src={arrow} alt='' /></Link> }
		</div>
	);
};
