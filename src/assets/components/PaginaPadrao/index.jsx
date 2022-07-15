import './paginaPadrao.css';
import { Outlet, useLocation } from 'react-router-dom';
import logo from "../../images/logo_branca.svg";
import home from "../../images/Casa.svg";
import mensagens from "../../images/Mensagens.svg";
import user from "../../images/user.svg";
import { Link } from 'react-router-dom';

export default function PaginaPadrao() {

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
                        <Link to="mensagem">
                           <img src={mensagens} alt="Caixa de mensagens" />
                        </Link>
                     </li>
                  </ul>
               </nav>
               {(pathname === '/home' || pathname === '/mensagem' || pathname === '/perfil') &&
                  <div className='perfil'>
                     <img src={user} alt="Área de acesso ao usuário" className="cabecalho__icones" />
                  </div>
               }
            </div>
         </header>
         <div className= 'container feed'>
            <Outlet />
         </div>
         <footer>
            <div className="container rodape">2022 - Desenvolvido por Alura.</div>
         </footer>
      </>
   );
}