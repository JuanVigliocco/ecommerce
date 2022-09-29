import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={estilos.navigator}>
			<ul className={estilos.menu}>
				<li>
					<Link to="/">
						INICIO
					</Link>
				</li>
				<li>
				<Link to="/category/bebidas">
						BEBIDAS
					</Link>
				</li>
				<li>
				<Link to="/category/promos">
						PROMOS
					</Link>
				</li>
				<li>
				<Link to="/category/kiosco">
						KIOSCO
					</Link>
				</li>
				<li>
				<Link to="/category/energizantes">
						ENERGIZANTES
				</Link>
				</li>
				<li>
				<Link to="/category/gaseosas">
						GASEOSAS
				</Link>
				</li>
			</ul>
	</nav>
	)
}

export default NavBar;