import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import ItemListContainer from './components/ItemlistContainer/Item.list.container';





const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer saludo="Encontrá Palos en BUKE GOLF! nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online."/>
      <Main     
        test="GOLFCLUB PREMIUM" 
        fecha={17} 
        alumno={{ nombre: 'Juan'}} 
      />
      
      <Footer />
    </>
  )
};

export default App;
