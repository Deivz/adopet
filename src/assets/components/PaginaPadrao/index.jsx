import './paginaPadrao.css';
import { Outlet, useLocation } from 'react-router-dom';
import logo from "../../images/logo_branca.svg";
import home from "../../images/Casa.svg";
import mensagens from "../../images/Mensagens.svg";
import { Link } from 'react-router-dom';
import { ImageUploadContext } from '../../../contexts/ImageUploadContext';
import { useContext } from 'react';
import IconePerfil from '../IconePerfil';
import BotaoSair from '../BotaoSair';
import { AuthContext } from '../../../contexts/AuthContext';

export default function PaginaPadrao() {

   const { imageDefault } = useContext(ImageUploadContext);
   const { authenticated } = useContext(AuthContext);

   const { pathname } = useLocation();
   (function mudarCorDeFundo() {
      if (pathname === '/') {
         document.getElementById('root').classList.add('fundo__azul');
         document.getElementById('root').classList.remove('fundo__branco');
      } else {
         document.getElementById('root').classList.add('fundo__branco');
         document.getElementById('root').classList.remove('fundo__azul');
      }
   })();

   return (
      <>
         <header>
            <div className='container cabecalho'>
               <nav className='navegacao'>
                  <ul className='navegacao__lista'>
                     <li className='cabecalho__logo'>
                        <Link to="/">
                           <img src={logo} alt="Logomarca da Adopet" />
                        </Link>
                     </li>
                     <li className='cabecalho__icones'>
                        <Link to={pathname === '/home' ? '/' : 'home'}>
                           <img src={home} alt="Página inicial" />
                        </Link>
                     </li>
                     <li className='cabecalho__icones'>
                        <Link to="contato">
                           <img src={mensagens} alt="Caixa de mensagens" />
                        </Link>
                     </li>
                  </ul>
               </nav>
               {(pathname === '/home' || pathname === '/contato' || pathname === '/perfil') &&
                  <div className='perfil'>
                     <Link to='perfil'>
                        <IconePerfil imageDefault={imageDefault} />
                     </Link>
                     {authenticated && <BotaoSair />}
                  </div>
               }

            </div>
         </header>
         <div className='container feed'>
            <Outlet />
         </div>
         <footer>
            <div className="container rodape">2022 - Desenvolvido por Alura.</div>
         </footer>
      </>
   );
}