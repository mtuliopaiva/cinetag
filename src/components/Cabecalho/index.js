import { Link } from "react-router-dom"
import logo from './logo.png'

//Import do cabecalho especifico do Cabecalho.module.css
import styles from './Cabecalho.module.css'
import CabecalhoLink from "./CabecalhoLink"


function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            {/* Link é especifico para o react-router dom e leva para esse caminho */}
            <Link to={"./"}>
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho