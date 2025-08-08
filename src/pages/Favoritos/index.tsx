import { Link } from "react-router-dom";
import './favoritos.css';

function Favoritos(){
    return(
        <div className="not-found">
            <h1>Favoritos</h1>
          
            <Link to="/">Veja todos Filmes!</Link>
        </div>
    )
}

export default Favoritos;
