import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import { Item } from './components/Card/Item';
import { BrowserRouter } from 'react-router-dom';



const App = () => {

  const saludos= 'bienvenidos';

  const saludar= () =>{
    console.log("hola");
  }




 

  return (
    <BrowserRouter>
      <Header />
      <Main     
        test="PreviApp" 
        fecha={23} 
        alumno={{ nombre: 'Juan'}}
        saludos={saludos}
        saludar={saludar} 
        item={Item}
      />
      <Footer />
    </BrowserRouter>
  )
};

export default App;
