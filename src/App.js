import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import { Item } from './components/Card/Item';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


const App = () => {

  const saludos= 'bienvenidos';

  const saludar= () =>{
    console.log("hola");
  }






  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
          <Main     
            test="PreviApp" 
            alumno={{ nombre: 'Juan'}}
            saludos={saludos}
            saludar={saludar} 
            item={Item}
          />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;
