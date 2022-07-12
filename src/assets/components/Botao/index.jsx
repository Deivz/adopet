import '../BotaoLink/botao.css';

export default function Botao({type, value}){
    return(
        <input className='botao' type={type} value={value} />
    );
}