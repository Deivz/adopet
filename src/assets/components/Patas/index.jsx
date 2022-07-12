import './patas.css';
import pata_um from '../../images/pata_um.svg';
import pata_dois from '../../images/pata_dois.svg';
import pata_tres from '../../images/pata_tres.svg';

export default function Patas(){
    return(
        <div className='patas'>
            <img src={pata_um} alt="Desenho da pata de um animal" className='pata__um' />
            <img src={pata_dois} alt="Desenho da pata de um animal" className='pata__dois' />
            <img src={pata_tres} alt="Desenho da pata de um animal" className='pata__tres' />
        </div>
    );
}