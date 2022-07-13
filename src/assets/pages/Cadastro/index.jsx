import './cadastro.css';
import logo from '../../images/logo_azul.svg';
import FormInput from '../../components/FormInput';
import Botao from '../../components/Botao';
import Patas from '../../components/Patas';

export default function Cadastro() {
   return (
      <>
         <Patas />
         <section className="secao__cadastro cadastro__figura--direita cadastro__figura--esquerda">
            <img src={logo} alt="Logomarca da Adopet" className="logo" />
            <p className="cadastro__conteudo--titulo">Ainda não tem cadastro?</p>
            <p className="cadastro__conteudo--texto">Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            <form className="formulario">
               <FormInput label='Email' type='email' id='email' name='email' placeholder='Escolha seu melhor email' />
               <FormInput label='Nome' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' />
               <FormInput label='Senha' type='password' id='senha' name='senha' placeholder='Crie uma senha' />
               <FormInput label='Confirma sua senha' type='password' id='senha__confirma' name='senha__confirma' placeholder='Repita a senha criada acima' />
               <Botao type='submit' value='Cadastrar' />
            </form>
         </section>
      </>
   );
}