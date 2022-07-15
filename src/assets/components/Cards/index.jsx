import './cards.css';
import icone from '../../images/mensagem_responsavel.svg';

export default function Cards({ imagem, nome, idade, porte, perfil, cidade }) {
    return (
        <div className='card'>
            <div className='imagem__pet'>
                <img src={imagem} alt="Foto do pet" />
            </div>
            <div>
                <h3 className='nome__pet'>{nome}</h3>
                <p className='idade__pet'>{idade}</p>
                <p className='porte__pet'>{porte}</p>
                <p className='perfil__pet'>{perfil}</p>
                <p className='cidade__pet'>{cidade}</p>
                <div className='mensagem__responsavel'>
                    <img src={icone} alt="Ícone de mensagem" />
                    <p className='responsavel'>Falar com responsável</p>
                </div>
            </div>
        </div>
    );
}