import './botao.css';
import {Link} from 'react-router-dom';

export default function BotaoLink({texto, rota}){
    return(
        <>
            <Link to={rota} className='botao'>{texto}</Link>
        </>
    );
}