import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao/index.jsx';
import Cadastro from './assets/pages/Cadastro/index.jsx';
import Home from './assets/pages/Home/index.jsx';
import Inicio from './assets/pages/Inicio/index.jsx';
import Login from './assets/pages/Login/index.jsx';
import Mensagem from './assets/pages/Mensagem/index.jsx';
import Perfil from './assets/pages/Perfil/index.jsx';

export default function AppRouter() {
   return (
      <main className='pagina'>
         <Router basename='/adopet'>
            <Routes>
               <Route path='/' element={<PaginaPadrao />}>
                  <Route index element={<Inicio />} />
                  <Route path='cadastro' element={<Cadastro />} />
                  <Route path='login' element={<Login />} />
                  <Route path='home' element={<Home />} />
                  <Route path='mensagem' element={<Mensagem />} />
                  <Route path='perfil' element={<Perfil />} />
               </Route>
            </Routes>
         </Router>
      </main>
   )
}