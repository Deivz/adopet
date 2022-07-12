import './paginaPadrao.css';
import {Outlet, useLocation} from 'react-router-dom';
import logo from "../../images/logo_branca.svg";
import home from "../../images/Casa.svg";
import mensagens from "../../images/Mensagens.svg";
import {Link} from 'react-router-dom';

export default function PaginaPadrao() {

   (function mudarCorDeFundo(){
      if (window.location.pathname === '/adopet/' || window.location.pathname === '/'){
         document.getElementById('root').classList.remove('bg__branco');
         document.getElementById('root').classList.add('bg__azul');
      }else{
         document.getElementById('root').classList.remove('bg__azul');
         document.getElementById('root').classList.add('bg__branco');
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
         <div className={useLocation().pathname !== '' ? 'container__padrao' : ''}>
            <Outlet />
         </div>
         <footer className='rodape'>
            <div className="rodape__container">2022 - Desenvolvido por Alura.</div>
        </footer>
      </>
   );
}