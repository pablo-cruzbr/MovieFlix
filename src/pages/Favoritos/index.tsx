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
         <div className="movie-list-container"> {/* Alterado */}
        <h1 className="movie-list-title">Meus Filmes</h1> {/* Alterado */}

        <ul className="movie-list"> {/* Alterado */}
            {filmes.length === 0 && <span className="empty-movie-list-message">Você não tem nenhum filme salvo.</span>} {/* Alterado */}

            {filmes.map((item) => {
                return (
                    <li key={item.id} className="movie-list-item"> {/* Alterado */}
                        <span className="movie-title">{item.title}</span> {/* Alterado */}

                        <div className="movie-actions"> {/* Alterado */}
                            <Link to={`/detalhes/${item.id}`} className="movie-details-link"> Ver detalhes</Link> {/* Alterado */}
                            <button className="movie-delete-button">Excluir</button> {/* Alterado */}
                        </div>
                    </li>
                );
            })}
        </ul>

        <Link to="/" className="view-all-link">Veja todos Filmes!</Link> {/* Alterado */}
    </div>
    );
}

export default Favoritos;