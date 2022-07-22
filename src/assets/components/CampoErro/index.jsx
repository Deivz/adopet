import "./campoErro.css";
import errors from "../../utils/errors.json";

export default function CampoErro({type, field}){
    return(
        <>
            <span className='erro'>{errors[field][type]}</span>
        </>
    );
}