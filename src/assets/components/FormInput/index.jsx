import './formInput.css';

export default function FormInput({ label, type, name, id, placeholder }) {
    return (
        <>
            <label for={id} className='label'>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} className='input' required />
        </>
    );
}