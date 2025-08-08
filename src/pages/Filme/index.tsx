import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./filme.css";

interface Filmes{
 id: string;
 title: string;
 overview: string;
 poster_path: string;
 vote_average: string;
}

function Filme() {
  const [filmes, setFilmes] = useState<Filmes[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "8da13dd16afa022057d1239915a47e59",
          language: "pt-BR",
          page: 1
        }
      });
     
      console.log(response.data.results.slice(0, 14));
      
      setFilmes(response.data.results.slice(0,15));
    }
    
    loadFilmes();
    setLoading(false)
  }, []);

  if(loading) {
    return(
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img 
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
  alt={filme.title}/>
              <Link to={`/detalhes/${filme.id}`}>Detalhes</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Filme;