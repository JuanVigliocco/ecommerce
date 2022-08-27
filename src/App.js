import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';
import { Item } from './components/Card/Item';



const App = () => {

  const saludos= 'bienvenidos';

  const saludar= () =>{
    console.log("hola");
  }




 

  return (
    <>
      <Header />
      <ItemListContainer/>
      <Main     
        test="PreviApp" 
        fecha={23} 
        alumno={{ nombre: 'Juan'}}
        saludos={saludos}
        saludar={saludar} 
        item={Item}
      />
      <Footer />
    </>
  )
};

export default App;
