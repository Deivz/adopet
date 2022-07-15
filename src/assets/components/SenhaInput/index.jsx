import './senhaInput.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

export default function SenhaInput({ label, name, id, placeholder }) {
    const [mostrar, setMostrar] = useState(false);

    function mostrarOuEsconderSenha(){
        setMostrar(mostrar ? false : true);
    }

    return (
        <>
            <label for={id} className='label'>{label}</label>
            <div className='container__senha'>
                <input type={mostrar ? 'text' : 'password'} name={name} id={id} placeholder={placeholder} className='campo__senha' required />
                <i onClick={mostrarOuEsconderSenha} className='icone__olho'>{mostrar ? <FaEye /> : <FaEyeSlash />}</i>
            </div>
        </>
    );
}