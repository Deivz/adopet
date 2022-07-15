import './inicio.css';
import logo from "../../images/Logo.svg";
import ilustracao from "../../images/ilustracao1.png";
import BotaoLink from '../../components/BotaoLink';

export default function Inicio() {
   return (
      <>
         <div className='inicio__imagem--lateral'>
         </div>
         <section>
            <div className='inicio__conteudo'>
               <img src={logo} alt="Logomarca da Adopet" className="logo" />
               <h2 className="inicio__titulo">Boas-vindas!</h2>
               <p className="inicio__texto--mobile">Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
               <p className="inicio__texto">Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
               <BotaoLink rota={'login'} texto={'Já tenho conta'} />
               <BotaoLink rota={'cadastro'} texto={'Quero me cadastrar'} />
            </div>
            <div className='container__ilustracao'>
               <img src={ilustracao} alt="Desenho de um cão e um gato" className="ilustracao" />
            </div>
         </section>
      </>
   );
}