import './cadastroInput.css';

export default function CadastroInput({ register, label, type, name, id, placeholder }) {
    return (
        <>
            <label htmlFor={id} className='label'>{label}</label>
            <input
                {...register(`${id}`)}
                type={type} name={name}
                id={id}
                placeholder={placeholder}
                className='input'
            />
        </>
    );
}