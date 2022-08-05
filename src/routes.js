import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PaginaPadrao from './assets/components/PaginaPadrao/index.jsx';
import Cadastro from './assets/pages/Cadastro/index.jsx';
import Home from './assets/pages/Home/index.jsx';
import Inicio from './assets/pages/Inicio/index.jsx';
import Login from './assets/pages/Login/index.jsx';
import Contato from './assets/pages/Contato/index.jsx';
import Perfil from './assets/pages/Perfil/index.jsx';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext.jsx';
import ImageUploadContextProvider from './contexts/ImageUploadContext.jsx';

export default function AppRouter() {

   function Private({children}){
      const {authenticated, loading} = useContext(AuthContext);

      if(loading){
         return <div className='loading'>Carregando...</div>
      }

      if(!authenticated){
         return <Navigate to='/login' />
      }

      return children;
   }

   return (
      <main className='pagina'>
         <Router>
            <AuthContextProvider>
               <ImageUploadContextProvider>
                  <Routes>
                     <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cadastro' element={<Cadastro />} />
                        <Route path='login' element={<Login />} />
                        <Route path='home' element={<Home />} />
                        <Route path='contato' element={<Contato />} />
                        <Route path='perfil' element={<Private><Perfil /></Private>} />
                     </Route>
                  </Routes>
               </ImageUploadContextProvider>
            </AuthContextProvider>
         </Router>
      </main>
   )
}