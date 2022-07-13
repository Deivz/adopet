import './home.css';
import logo from "../../images/Logo.svg";
import ilustracao from "../../images/ilustracao1.png";
import BotaoLink from '../../components/BotaoLink';

export default function Home() {
   return (
      <section className="secao__conteudo figura__lateral--direita">
         <div className='home__conteudo'>
            <img src={logo} alt="Logomarca da Adopet" className="logo" />
            <h2 className="home__titulo">Boas-vindas!</h2>
            <p className="home__texto--mobile">Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
            <p className="home__texto">Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
            <BotaoLink rota={'login'} texto={'Já tenho conta'} />
            <BotaoLink rota={'cadastro'} texto={'Quero me cadastrar'} />
         </div>
         <img src={ilustracao} alt="Desenho de um cão e um gato" className="ilustracao" />
      </section>
   );
}