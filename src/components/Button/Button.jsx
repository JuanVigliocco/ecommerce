import estilos from './button.module.css' 

const Button = ({value, variant}) => {
    //console.log('prop :', prop);
    return (
    <button className={estilos[variant]}> {value} </button> //si le pongo estilo.variant le estaria dando una variable por eso []
)
}

export default Button;