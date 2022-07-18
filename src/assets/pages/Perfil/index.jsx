import Botao from '../../components/Botao';
import UserInput from '../../components/UserInput';
import './perfil.css';
// import foto__perfil from '../../images/ellipse.svg';

export default function Perfil(){
    return(
        <>
            <div className='perfil__imagem--lateral'>
            </div>
            <section className='secao__perfil'>
                <p className="perfil__texto">Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua perfil.</p>
                <form className="perfil__formulario">
                    <p className='perfil__titulo'>Perfil</p>
                    <p className='perfil__label'>Foto</p>
                    <div className='foto__perfil'>
                        {/* <img src={foto__perfil} alt="Foto de perfil do usuário" /> */}
                    </div>
                    <p className='editar__foto'>Clique na foto para editar</p>
                    <UserInput label='Nome' type='text' id='nome' name='nome' />
                    <UserInput label='Telefone' type='tel' id='telefone' name='telefone' />
                    <UserInput label='Cidade' type='text' id='cidade' name='cidade' />
                    <label for='perfil__sobre' className='perfil__label'>Sobre</label>
                    <textarea id='perfil__sobre' className='perfil__sobre' name='perfil__sobre' placeholder='Escreva sua perfil' />
                    <div className="botao__perfil">
                        <Botao type='submit' value='Salvar' />
                    </div>
                </form>
            </section>
        </>
    );
}