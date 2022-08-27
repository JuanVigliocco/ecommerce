import NavBar from '../Nav/NavBar';
import estilos from './header.module.css';
import logo from '../../assets/img/logo2.jpg'
import bandera2 from '../../assets/img/bandera2.png'
import CartWidget from '../Nav/CartWidget'
import Button from '../Button/Button';
const Header = () => {
    return (
        <header className={estilos.header}>
			<div className={estilos.barraSuperior}>
            <img src={bandera2} className={estilos.imgLogo} alt='golf premium'></img>
			<img src={logo} className={estilos.imgLogo} alt='golf premium'></img>
            <CartWidget />
			</div>
            <NavBar/>
            <div className={estilos.button}>
            <Button value='Sign In' variant='primary'/>
            <Button value='Log Out' variant='secondary'/>
            </div>
        </header>
    );
};

export default Header