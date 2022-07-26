import './login.css';
import logo from '../../images/logo_azul.svg';
import Botao from '../../components/Botao';
import Patas from '../../components/Patas';
import { Link, useNavigate } from 'react-router-dom';
import CadastroInput from '../../components/CadastroInput';
import SenhaInput from '../../components/SenhaInput';
import { useForm } from 'react-hook-form';
import CampoErro from '../../components/CampoErro';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';

export default function Login() {

   const {authenticated, logar, user, validUser, validPassword} = useContext(AuthContext);
   
   const { register, handleSubmit } = useForm();

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
         <form className="login__formulario" onSubmit={handleSubmit(logar)}>
            <div className='formulario__campos'>
               <CadastroInput register={register} label='Email' type='email' id='email' name='email' placeholder='Insira seu email' />
               {!validUser && <CampoErro type='invalid' field="email" />}
            </div>
            <div className='formulario__campos'>
               <SenhaInput register={register} label='Senha' id='senha' name='senha' placeholder='Insira sua senha' />
               {!validPassword && <CampoErro type='invalid' field="senha" />}
            </div>
            <Link to={'/login'} className='lembrar__senha'><p className='texto__lembrar'>Esqueci minha senha</p></Link>
            <div className="botao__entrar">
               <Botao type='submit' value='Entrar' />
            </div>
         </form>
      </section>
   </>
);
}