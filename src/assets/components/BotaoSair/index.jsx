import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './botaoSair.css';

export default function BotaoSair(){

    const { logout } = useContext(AuthContext);

    function handleLogout(){
        logout();
    }

    return(
        <button className='botao__sair' onClick={handleLogout}>Sair</button>
    );
}