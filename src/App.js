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
      <ItemListContainer saludo="Encontrá Palos en BUKE GOLF! nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online."/>
      <Main     
        test="GOLFCLUB PREMIUM" 
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
