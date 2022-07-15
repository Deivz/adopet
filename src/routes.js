import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao/index.jsx';
import Cadastro from './assets/pages/Cadastro/index.jsx';
import Inicio from './assets/pages/Inicio/index.jsx';

export default function AppRouter() {
   return (
      <main className='pagina'>
         <Router basename='/adopet'>
            <Routes>
               <Route path='/' element={<PaginaPadrao />}>
                  <Route index element={<Inicio />} />
                  <Route path='cadastro' element={<Cadastro />} />
               </Route>
            </Routes>
         </Router>
      </main>
   )
}