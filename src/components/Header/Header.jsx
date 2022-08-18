import NavBar from '../Nav/NavBar';
import estilos from './header.module.css';
import logo from '../../assets/img/logopng.png'
import CartWidget from '../Nav/CartWidget'
const Header = () => {
    return (
        <header className={estilos.header}>
			<div className={estilos.barraSuperior}>
				<img src={logo} className={estilos.imgLogo} alt='golf premium'></img>
				<CartWidget />
			</div>
            <NavBar/>
        </header>
    );
};

export default Header