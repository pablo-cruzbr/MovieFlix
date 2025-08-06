import '../Header/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // Adicionei a className="header" aqui
    <header> 
      <Link className="logo" to="/">Play Flix</Link>
      <Link className="favoritos" to="/favoritos">Meus Favoritos</Link>
    </header>
  );
}

export default Header;