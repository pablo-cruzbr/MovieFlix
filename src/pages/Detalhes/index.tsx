import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import './detalhes.css'
function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
          params: {
            api_key: "8da13dd16afa022057d1239915a47e59",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado.");
          setLoading(false);
        });
    }

    loadFilme();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando detalhes do filme...</h2>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="detalhes-container">
        <h2>Filme não encontrado.</h2>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
        <h1>{filme.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
          alt={filme.title}
        />
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <h4>Avaliação: {filme.vote_average} / 10</h4>

        <div className="area-buttons">
          <button>Salvar</button>
          <button>
            <a href="#">Trailer</a>
          </button>
        </div>
    </div>
  );
}

export default Detalhes;