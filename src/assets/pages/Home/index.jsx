import Cards from '../../components/Cards';
import './home.css';
import dunga from '../../images/dunga.svg';
import felicia from '../../images/felicia.svg';
import sirius from '../../images/sirius.svg';
import fiona from '../../images/fiona.svg';
import sid from '../../images/sid.svg';

export default function Home() {

    return (
        <section>
            <h2 className='home__titulo'>Olá! Veja os amigos disponíveis para adoção!</h2>
            <Cards
                imagem={dunga}
                nome={'Dunga'}
                idade={'2 anos'}
                porte={'Porte pequeno'}
                perfil={'Calmo e educado'}
                cidade={'Rio de Janeiro (RJ)'}
            />
            <Cards
                imagem={felicia}
                nome={'Felicia'}
                idade={'3 meses'}
                porte={'Porte pequeno'}
                perfil={'Ativa e carinhosa'}
                cidade={'Nova Iguaçu (RJ)'}
            />
            <Cards
                imagem={sirius}
                nome={'Sirius'}
                idade={'6 meses'}
                porte={'Porte grande'}
                perfil={'Ativo e educado'}
                cidade={'Duque de Caxias (RJ)'}
            />
            <Cards
                imagem={fiona}
                nome={'Fiona'}
                idade={'3 anos'}
                porte={'Porte pequeno'}
                perfil={'Calma e carinhosa'}
                cidade={'São Gonçalo (RJ)'}
            />
            <Cards
                imagem={sid}
                nome={'Sid'}
                idade={'8 meses'}
                porte={'Porte médio/grande'}
                perfil={'Brincalhão e amável'}
                cidade={'Rio de Janeiro (RJ)'}
            />
        </section>
    );
}