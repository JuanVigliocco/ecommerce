import estilos from './footer.module.css';
import whatsapp from '../../assets/img/whatsapp2.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'


const Footer = () => {
    return (
    <div className="footer-distributed">
    <footer id={estilos.footer}>
    <div className={estilos.footcol1}>
    <h4 className={estilos.h4}>¿Qué es PreviApp?</h4>
    <p className={estilos.footcol}>Una solución para las reuniones entre amigos para tomar algo antes de irse al boliche o a una fiesta</p>
    </div>





    <div className={estilos.footcol4}>
        <h4>REDES SOCIALES</h4>
        <a href="http://www.whatsapp.com"><img src={whatsapp} className={estilos.redes}  alt='whatsapp'></img></a>
        <a href="http://www.instagram.com"><img src={instagram} className={estilos.redes} alt='instagram'></img></a>
        <a href="http://www.facebook.com"><img src={facebook} className={estilos.redes} alt='facebook'></img></a>
    </div>
    

<div className={estilos.copyright}>
        <h1> ©PrevApp. Todos los derechos reservados. 2022</h1>
</div>
</footer>

</div>
    );
};

export default Footer;