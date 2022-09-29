import NavBar from '../Nav/NavBar';
import estilos from './header.module.css';
import logo from '../../assets/img/previapp2.png'
import bandera2 from '../../assets/img/bandera2.png'
import { CartWidget} from '../Cart/CartWidget'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={estilos.header}>
            

			<div className={estilos.barraSuperior}>
            <Link to="/">
            <img src={bandera2} className={estilos.imgLogo}  alt='bandera'></img>
            </Link>
            <Link to="/">
			<img src={logo} className={estilos.imgLogo1} alt='logoapp'></img>
            </Link>
            <CartWidget/>
            </div>
            <NavBar/>
        </header>


    );
};

export default Header