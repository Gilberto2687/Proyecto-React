import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App(){
  return(
    <>
      
      <Header />
      <ItemListContainer greeting="¡Gracias por Elegirnos!" />
      <Main />
      <Footer />
      
    </>
 
  )
}

export default App;