import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import ItemListContainer from './components/ItemlistContainer/Item.list.container';
import ItemCount from './components/Counter/ItemCount';




const App = () => {

  const saludos= 'bienvenidos';

  const saludar= () =>{
    console.log("hola");
  }

  const onAdd= () =>{
    console.log(`Ha agregado un nuevo producto a su carrito`);
    alert(`Ha agregado un nuevo producto a su carrito`);
  }



 

  return (
    <>
      <Header />
      <ItemListContainer saludo="Una Previa es una reunión entre amigos para tomar algo antes de irse al boliche o a una fiesta."/>
      <Main     
        test="PreviApp" 
        fecha={23} 
        alumno={{ nombre: 'Juan'}}
        saludos={saludos}
        saludar={saludar} 
      />
      <ItemCount
      stock={10}
      initial={1}
      onAdd={onAdd}     
      />

      <Footer />
    </>
  )
};

export default App;
