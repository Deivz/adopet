import './cadastro.css';
import logo from '../../images/logo_azul.svg';
import Botao from '../../components/Botao';
import Patas from '../../components/Patas';
import { Link } from 'react-router-dom';
import CadastroInput from '../../components/CadastroInput';
import SenhaInput from '../../components/SenhaInput';

export default function Cadastro() {
   return (
      <>
         <Patas />
         <div className='cadastro__imagem--lateral'>
         </div>
         <section>
            <div className='cadastro__conteudo'>
               <Link to={'/'}><img src={logo} alt="Logomarca da Adopet" className="logo" /></Link>
               <p className="cadastro__conteudo--titulo">Ainda não tem cadastro?</p>
               <p className="cadastro__conteudo--texto">Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            </div>
            <form className="formulario">
               <CadastroInput label='Email' type='email' id='email' name='email' placeholder='Escolha seu melhor email' />
               <CadastroInput label='Nome' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' />
               <SenhaInput label='Senha' id='senha' name='senha' placeholder='Crie uma senha' />
               <SenhaInput label='Confirma sua senha' id='senha__confirma' name='senha__confirma' placeholder='Repita a senha criada acima' />
               <div className="botao__mobile">
                  <Botao type='submit' value='Cadastrar' />
               </div>
               <div className="botao__desktop">
                  <Botao type='submit' value='Cadastrar!' />
               </div>
            </form>
         </section>
      </>
   );
}