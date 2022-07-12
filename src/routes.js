import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao/index.jsx';
import Cadastro from './assets/pages/Cadastro/index.jsx';
import Home from './assets/pages/Home/index.jsx';

export default function AppRouter() {
   return (
      <main className='conteudo'>
         <Router basename='/adopet'>
            <Routes>
               <Route path='/' element={<PaginaPadrao />}>
                  <Route index element={<Home />} />
                  <Route path='cadastro' element={<Cadastro />} />
               </Route>
            </Routes>
         </Router>
      </main>
   )
}