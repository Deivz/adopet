import Cards from '../../components/Cards';
import './home.css';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';

export default function Home() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        api.get('/pets').then((response) => {
            setPets(response.data);
        })
    }, []);

    return (
        <section className='secao__home'>
            <h2 className='home__titulo--mobile'>Olá! Veja os amigos disponíveis para adoção!</h2>
            <div className='home__texto'>
                <h2 className='home__titulo'>Olá!</h2>
                <h2 className='home__titulo'>Veja os amigos disponíveis para adoção!</h2>
            </div>
            <div className='home__cards'>
                {pets.map((pet) => {
                    return <Cards
                        key={pet.id}
                        imagem={pet.imagem}
                        nome={pet.nome}
                        idade={pet.idade}
                        porte={pet.porte}
                        perfil={pet.perfil}
                        cidade={pet.local}
                    />
                })}
            </div>
        </section>
    );
}