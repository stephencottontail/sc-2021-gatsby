import React from 'react';

export default function Categories( { src } ) {
	let categories = [];

	src.nodes.map( node => {
		return categories.push( node.name );
	} );

	return (
		<span><b>Categories</b>{ categories.join( ', ' ) }</span>
	);
}
