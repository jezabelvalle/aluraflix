import Header from "components/Header/Header";
import Banner from 'components/Banner/Banner';
import Footer from 'components/Footer/Footer';
import Titulo from "components/Titulo/Titulo";


function Inicio(){
    return(
        <>
           <Header></Header>
           <Banner img="home" color="grey" />
           <Titulo>
              <h1>Tus Videos Favoritos</h1>
           </Titulo> 
           <Footer></Footer>
        </>
    )
}

export default Inicio;