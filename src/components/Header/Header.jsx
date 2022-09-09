import NavBar from '../Nav/NavBar';
import estilos from './header.module.css';
import logo from '../../assets/img/logo2.jpg'
import bandera2 from '../../assets/img/bandera2.png'
import { CartWidget} from '../Cart/CartWidget'


const Header = () => {
    return (
        <header className={estilos.header}>
            

			<div className={estilos.barraSuperior}>
            <img src={bandera2} className={estilos.imgLogo} alt='bandera'></img>
			<img src={logo} className={estilos.imgLogo1} alt='logoapp'></img>
            <CartWidget/>
            </div>
            <NavBar/>
        </header>


    );
};

export default Header