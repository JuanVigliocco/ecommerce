import NavBar from '../Nav/NavBar';
import estilos from './header.module.css';
const Header = () => {
    return (
        <header className={estilos.header}>
            <NavBar/>
        </header>
    );
};

export default Header