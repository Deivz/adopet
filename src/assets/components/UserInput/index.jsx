import './userInput.css';

export default function UserInput({ label, type, name, id, placeholder }) {
    return (
        <>
            <label for={id} className='user__label'>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} className='user__input' required />
        </>
    );
}