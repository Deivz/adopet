import './campoSenha.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function CampoSenha({ label, name, id, placeholder }) {
    return (
        <>
            <label for={id} className='label'>{label}</label>
            <div className='container__senha'>
                <input type='password' name={name} id={id} placeholder={placeholder} className='campo__senha' required />
                <i className='icone__olho'><FaEyeSlash /></i>
            </div>
        </>
    );
}