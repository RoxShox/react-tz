import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<ul className="menu">
			<li>
				<Link to="./">Посты</Link>
			</li>
			<li>
				<Link to="./about">Описание</Link>
			</li>
		</ul>
	)
}

export default Navbar
