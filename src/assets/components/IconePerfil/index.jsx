import './iconePerfil.css';

export default function IconePerfil({ imageDefault }) {
    return (
        <>
        {imageDefault ?
            <div className='icone__perfil' style={{ background: `url("${imageDefault}") no-repeat center/cover` }}>
            </div>
            :
            <div className='icone__perfil--semFoto'>
            </div>
        }
        </>
    );
}