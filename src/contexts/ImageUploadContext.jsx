import React, {createContext, useContext} from 'react';
import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const ImageUploadContext = createContext();

export default function ImageUploadContextProvider({children}){

    const {user} = useContext(AuthContext);
    const imageDefault = user.foto__upload;

    const [profileImage, setProfileImage] = useState(null);
    const [imageError, setImageError] = useState(false);

    function handleImageChange(event) {
        const tiposPermitidos = ["image/png", "image/jpeg", "image/jpg"];
        const imagem = event.target.files[0];
        if (imagem && tiposPermitidos.includes(imagem.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                setImageError(false);
            };
            reader.readAsDataURL(imagem);
        } else {
            setImageError(true);
        }
    }

    return(
        <ImageUploadContext.Provider value={{handleImageChange, profileImage, imageDefault, imageError}}>
            {children}
        </ImageUploadContext.Provider>
    );
}