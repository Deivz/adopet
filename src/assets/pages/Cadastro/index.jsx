import './cadastro.css';
import logo from '../../images/logo_azul.svg';
import Botao from '../../components/Botao';
import Patas from '../../components/Patas';
import { Link } from 'react-router-dom';
import CadastroInput from '../../components/CadastroInput';
import SenhaInput from '../../components/SenhaInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { regExName, regExPassword } from '../../utils/regexValidation.js';
import CampoErro from '../../components/CampoErro';

export default function Cadastro() {

   const validacao = yup.object().shape({
      email: yup.string().required().email().max(50),
      nome: yup.string().required().min(2).max(50).matches(regExName),
      senha: yup.string().required().max(15).matches(regExPassword),
      senha__confirma: yup.string().required().oneOf([yup.ref('senha'), null])
   });

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validacao)
   }, []);

   function onSubmit(data) {
      console.log(data);
   }

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
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
               <div className='formulario__campos'>
                  <CadastroInput register={register} label='Email*' type='email' id='email' name='email' placeholder='Escolha seu melhor email' />
                  {errors?.email?.message && <CampoErro type={errors.email.type} field="email" />}
               </div>
               <div className='formulario__campos'>
                  <CadastroInput register={register} label='Nome*' type='text' id='nome' name='nome' placeholder='Digite seu nome completo' />
                  {errors?.nome?.message && <CampoErro type={errors.nome.type} field="nome" />}
               </div>
               <div className='formulario__campos'>
                  <SenhaInput register={register} label='Senha*' id='senha' name='senha' placeholder='Crie uma senha' />
                  {errors?.senha?.message && <CampoErro type={errors.senha.type} field="senha" />}
               </div>
               <div className='formulario__campos'>
                  <SenhaInput register={register} label='Confirma sua senha*' id='senha__confirma' name='senha__confirma' placeholder='Repita a senha criada acima' />
                  {errors?.senha__confirma?.message && <CampoErro type={errors.senha__confirma.type} field="senha__confirma" />}
               </div>
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