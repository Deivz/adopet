import './login.css';
import logo from '../../images/logo_azul.svg';
import Botao from '../../components/Botao';
import Patas from '../../components/Patas';
import { Link } from 'react-router-dom';
import CadastroInput from '../../components/CadastroInput';
import SenhaInput from '../../components/SenhaInput';

export default function Login() {
   return (
      <>
         <Patas />
         <div className='login__imagem--lateral'>
         </div>
         <section>
            <div className='login__conteudo'>
               <Link to={'/'}><img src={logo} alt="Logomarca da Adopet" className="logo" /></Link>
               <p className="login__conteudo--titulo">Já tem conta? Faça seu login:</p>
            </div>
            <form className="login__formulario">
               <CadastroInput label='Email' type='email' id='email' name='email' placeholder='Insira seu email' />
               <SenhaInput label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />
               <Link to={'login'} className='lembrar__senha'><p className='texto__lembrar'>Esqueci minha senha</p></Link>
               <div className="botao__entrar">
                  <Botao type='submit' value='Entrar' />
               </div>
            </form>
         </section>
      </>
   );
}