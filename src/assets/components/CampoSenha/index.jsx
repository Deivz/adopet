import './campoSenha.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function CampoSenha({ label, name, id, placeholder }) {
    return (
        <div className='container__senha'>
            <div className='icone__olho'>
                <label for={id} className='label'>{label}</label>
                <input type='password' name={name} id={id} placeholder={placeholder} className='campo__senha' required />
                <FaEyeSlash />
            </div>
        </div>
    );
}