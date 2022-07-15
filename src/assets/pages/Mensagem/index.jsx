import Botao from '../../components/Botao';
import UserInput from '../../components/UserInput';
import './mensagem.css';

export default function Mensagem() {
    return (
        <>
            <div className='mensagem__imagem--lateral'>
            </div>
            <section className='secao__mensagem'>
                <p className="mensagem__titulo">Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:</p>
                <form className="mensagem__formulario">
                    <UserInput label='Nome' type='text' id='nome' name='nome' placeholder='Insira seu nome completo' />
                    <UserInput label='Telefone' type='tel' id='telefone' name='telefone' placeholder='Insira seu telefone e/ou whatsapp' />
                    <UserInput label='Nome do animal' type='text' id='nome__animal' name='nome__animal' placeholder='Por qual animal você se interessou?' />
                    <label for='mensagem__texto' className='mensagem__label'>Mensagem</label>
                    <textarea id='mensagem__texto' className='mensagem__texto' name='mensagem__texto' placeholder='Escreva sua mensagem' />
                    <div className="botao__mensagem">
                        <Botao type='submit' value='Enviar' />
                    </div>
                </form>
            </section>
        </>
    );
}