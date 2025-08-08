import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './favoritos.css';


interface Filme {
  id: number;
  title: string;

}

function Favoritos() {
   
    const [filmes, setFilmes] = useState<Filme[]>([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista || '[]'));
    }, []);

    return (
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

            <ul>
                {filmes.length === 0 && <span>Você não tem nenhum filme salvo.</span>}

                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/detalhes/${item.id}`}> Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            
            <Link to="/">Veja todos Filmes!</Link>
        </div>
    );
}

export default Favoritos;