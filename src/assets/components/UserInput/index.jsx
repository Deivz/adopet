import './userInput.css';

export default function UserInput({ register, label, type, name, id, placeholder }) {
    return (
        <>
            <label htmlFor={id} className='user__label'>{label}</label>
            <input {...register(`${id}`)} type={type} name={name} id={id} placeholder={placeholder} className='user__input' />
        </>
    );
}