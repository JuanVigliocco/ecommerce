import estilos from './navbar.module.css';

const NavBar = () => {
	return (
		<nav className={estilos.navigator}>
			<ul className={estilos.menu}>
				<li>
					<a href='www.google.com'>
						INICIO
					</a>
				</li>
				<li>
					<a href='www.google.com'>
						PALOS
					</a>
				</li>
				<li>
					<a href='www.google.com'>
						NOTICIAS
					</a>
				</li>
				<li>
					<a href='www.google.com'>
						CONTACTO
					</a>
				</li>
			</ul>
	</nav>
	)
}

export default NavBar;