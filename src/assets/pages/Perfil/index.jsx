import './perfil.css';
import Botao from '../../components/Botao';
import UserInput from '../../components/UserInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CampoErro from '../../components/CampoErro';
import { regExName, regExTelefone } from '../../utils/regexValidation.js';
import FotoPerfil from '../../components/FotoPerfil';
import { useContext, useEffect } from 'react';
import { ImageUploadContext } from '../../../contexts/ImageUploadContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { api } from '../../../services/api';

export default function Perfil() {

    const { handleImageChange, profileImage, imageDefault, imageError } = useContext(ImageUploadContext);
    const { user, setUser } = useContext(AuthContext);

    const validacao = yup.object().shape({
        nome: yup.string().required().min(2).max(50).matches(regExName),
        telefone: yup.string().required().matches(regExTelefone),
        cidade: yup.string().required().min(2).max(50),
        perfil__sobre: yup.string().required().max(300)
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validacao)
    }, []);

    useEffect(() => {
        api.get('/users/' + user.id)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [salvar]);

    function salvar(data) {
        api.patch('/users/' + user.id, {
            "email": data.email,
            "nome": data.nome,
            "senha": data.senha,
            "telefone": data.telefone,
            "cidade": data.cidade,
            "perfil__sobre": data.perfil__sobre,
            "foto__upload": profileImage
        })
            .then(() => {
                alert("Usuário modificado com sucesso!");
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <>
            <div className='perfil__imagem--lateral'>
            </div>
            <section className='secao__perfil'>
                <p className="perfil__texto">Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua perfil.</p>
                <form className="perfil__formulario" onSubmit={handleSubmit(salvar)}>
                    <p className='perfil__titulo'>Perfil</p>
                    <p className='perfil__label'>Foto</p>
                    <div className='formulario__campos'>
                        <FotoPerfil
                            imageDefault={imageDefault}
                            loadImage={handleImageChange}
                            imageUploaded={profileImage}
                        />
                        {imageError && <CampoErro type="imagemInvalida" field="profileImage" />}
                    </div>
                    <p className='editar__foto'>Clique na foto para editar</p>
                    <div className='formulario__campos'>
                        <UserInput
                            register={register}
                            label='Nome'
                            type='text'
                            id='nome'
                            name='nome'
                            placeholder={user.nome}
                        />
                        {errors?.nome?.message && <CampoErro type={errors.nome.type} field="nome" />}
                    </div>
                    <div className='formulario__campos'>
                        <UserInput
                            register={register}
                            label='Telefone'
                            type='tel'
                            id='telefone'
                            name='telefone'
                            placeholder={user.telefone}
                        />
                        {errors?.telefone?.message && <CampoErro type={errors.telefone.type} field="telefone" />}
                    </div>
                    <div className='formulario__campos'>
                        <UserInput
                            register={register}
                            label='Cidade'
                            type='text'
                            id='cidade'
                            name='cidade'
                            placeholder={user.cidade}
                        />
                        {errors?.cidade?.message && <CampoErro type={errors.cidade.type} field="cidade" />}
                    </div>
                    <div className='formulario__campos'>
                        <label htmlFor='perfil__sobre' className='perfil__label'>Sobre</label>
                        <textarea
                            {...register('perfil__sobre')}
                            id='perfil__sobre'
                            className='perfil__sobre'
                            name='perfil__sobre'
                            maxLength={300}
                            placeholder={user.perfil__sobre}
                        />
                        {errors?.perfil__sobre?.message && <CampoErro type={errors.perfil__sobre.type} field="perfil__sobre" />}
                    </div>
                    <div className="botao__perfil">
                        <Botao type='submit' value='Salvar' />
                    </div>
                </form>
            </section>
        </>
    );
}