import React from 'react';

export default function Tags( { src } ) {
	let tags = [];

	src.nodes.map( node => {
		return tags.push( node.name );
	} );

	return (
		<span><b>Tags</b>{ tags.join( ', ' ) }</span>
	);
}
