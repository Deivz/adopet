import './fotoPerfil.css';
import React from 'react';

export default class FotoPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
    }

    state = {
        profileImage: null,
        error: false
    }

    handleImageChange = event => {
        const tiposPermitidos = ["image/png", "image/jpeg", "image/jpg"];
        const imagem = event.target.files[0];
        if (imagem && tiposPermitidos.includes(imagem.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ profileImage: reader.result });
            };
            reader.readAsDataURL(imagem);
        } else {
            this.setState({ error: true });
        }
    }

    render() {
        return (
            <>
                {this.state.profileImage ?
                    <div className='foto__perfil' style={{ background: `url("${this.state.profileImage}") no-repeat center/cover`}} onClick={() => this.refInput.click()}>
                        <input
                            type="file"
                            ref={fileInput => this.refInput = fileInput}
                            onChange={this.handleImageChange}
                            hidden
                        />
                    </div>
                    :
                    <div className='foto__perfil--padrao' onClick={() => this.refInput.click()}>
                        <input
                            type="file"
                            ref={fileInput => this.refInput = fileInput}
                            onChange={this.handleImageChange}
                            hidden
                        />
                    </div>
                }

            </>

        )
    }
}