import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './favoritos.css';

interface Filme {
  id: number;
  title: string;
}

function Favoritos() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  function excluirItem(id: number) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
  }

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista || '[]'));
  }, []);

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Meus Filmes</h1>

      {filmes.length === 0 && <span> Você não possui nenhum filme salvo </span>}
      
      <ul className="movie-list">
        {filmes.length === 0 && <span className="empty-movie-list-message">Você não tem nenhum filme salvo.</span>}
        {filmes.map((item) => {
          return (
            <li key={item.id} className="movie-list-item">
              <span className="movie-title">{item.title}</span>
              <div className="movie-actions">
                <Link to={`/detalhes/${item.id}`} className="movie-details-link">Ver detalhes</Link>
                <button className="movie-delete-button" onClick={() => excluirItem(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/" className="view-all-link">Veja todos Filmes!</Link>
    </div>
  );
}

export default Favoritos;