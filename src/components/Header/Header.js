import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from "./logo.png";

function Header(){
    return(
         <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            </Link>
            <nav>
            <button onClick={() => { /* Aquí va la función que se ejecutará al hacer click en el botón */ }}>
                    Home
                </button>
                <button onClick={() => { /* Aquí va la función que se ejecutará al hacer click en el botón */ }}>
                    Nuevo Video
                </button>
            </nav>
         </header>
    )
}

export default Header;