import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footerweb';
import { Item } from './components/Card/Item';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from './firebaseConfig';
// import { products } from './mock/Product';


// const ref = collection(db,"productos");

// products.map((producto)=>addDoc(ref,producto))


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
            fecha={23} 
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
