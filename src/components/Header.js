import React from 'react'
import Menu from './Menu'
import { Link } from 'gatsby'

export default function Header( props ) {
	return (
		<header>
			<div
				className='wrap'
			>
				{ ! props.home &&
				<Link
					to="/"
					className="home-link"
				>
					Steve
				</Link>
				}
				<Menu />
			</div>
		</header>
	)
}
