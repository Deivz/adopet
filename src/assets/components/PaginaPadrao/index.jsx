import './paginaPadrao.css';
import {Outlet, useLocation} from 'react-router-dom';
import logo from "../../images/logo_branca.svg";
import home from "../../images/Casa.svg";
import mensagens from "../../images/Mensagens.svg";
import {Link} from 'react-router-dom';

export default function PaginaPadrao() {

   const {pathname} = useLocation();
   (function mudarCorDeFundo(){
      if(pathname === '/'){
         document.getElementById('root').classList.add('fundo__azul');
         document.getElementById('root').classList.remove('fundo__branco');
      }else{
         document.getElementById('root').classList.add('fundo__branco');
         document.getElementById('root').classList.remove('fundo__azul');
      }
   })();

   return (
      <>
         <header className="cabecalho">
            <Link to="/">
               <img src={logo} alt="Logomarca da Adopet" className="cabecalho__logo" />
            </Link>
            <Link to="/">
               <img src={home} alt="Página inicial" className="cabecalho__icones" />
            </Link>
            <Link to="mensagens">
               <img src={mensagens} alt="Caixa de mensagens" className="cabecalho__icones" />
            </Link>
         </header>
         <div className={pathname === '/' ? 'container__padrao container__home' : 'container__padrao'}>
            <Outlet />
         </div>
         <footer className='rodape'>
            <div className="rodape__container">2022 - Desenvolvido por Alura.</div>
        </footer>
      </>
   );
}