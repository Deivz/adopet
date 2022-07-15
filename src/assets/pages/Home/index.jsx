import Cards from '../../components/Cards';
import './home.css';
import dunga from '../../images/dunga.svg';
import felicia from '../../images/felicia.svg';
import sirius from '../../images/sirius.svg';
import fiona from '../../images/fiona.svg';
import sid from '../../images/sid.svg';
import yoda from '../../images/yoda.svg';
import lua from '../../images/lua.svg';
import amora from '../../images/amora.svg';
import zelda from '../../images/zelda.svg';

export default function Home() {

    return (
        <section className='secao__home'>
            <h2 className='home__titulo--mobile'>Olá! Veja os amigos disponíveis para adoção!</h2>
            <div className='home__texto'>
                <h2 className='home__titulo'>Olá!</h2>
                <h2 className='home__titulo'>Veja os amigos disponíveis para adoção!</h2>
            </div>
            <div className='home__cards'>
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
                <Cards
                    imagem={yoda}
                    nome={'Yoda'}
                    idade={'1 ano'}
                    porte={'Porte médio'}
                    perfil={'Ativo e carinhoso'}
                    cidade={'Nova Iguaçu(RJ)'}
                />
                <Cards
                    imagem={lua}
                    nome={'Lua'}
                    idade={'6 meses'}
                    porte={'Porte médio'}
                    perfil={'Ativa e carinhosa'}
                    cidade={'Duque de caxias (RJ)'}
                />
                <Cards
                    imagem={amora}
                    nome={'Amora'}
                    idade={'45 dias'}
                    porte={'Porte grande'}
                    perfil={'Ativa e carinhosa'}
                    cidade={'São Gonçalo (RJ)'}
                />
                <Cards
                    imagem={zelda}
                    nome={'Zelda'}
                    idade={'5 meses'}
                    porte={'Porte médio'}
                    perfil={'Ativa e amável'}
                    cidade={'Rio de Janeiro (RJ)'}
                />
            </div>
        </section>
    );
}