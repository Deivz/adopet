import './fotoPerfil.css';
import React from 'react';

export default class FotoPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
    }

    inputFile = <input id='foto__upload' type="file" ref={fileInput => this.refInput = fileInput} onChange={this.props.loadImage} hidden />;

    render() {
        return (
            <>
                {this.props.imageUploaded ?
                    <div className='foto__perfil' style={{ background: `url("${this.props.imageUploaded}") no-repeat center/cover` }} onClick={() => this.refInput.click()}>
                        {this.inputFile}
                    </div>
                    :
                    this.props.imageDefault ?
                        <div className='foto__perfil' style={{ background: `url("${this.props.imageDefault}") no-repeat center/cover` }} onClick={() => this.refInput.click()}>
                            {this.inputFile}
                        </div>
                        :
                        <div className='foto__perfil--semFoto' onClick={() => this.refInput.click()}>
                            {this.inputFile}
                        </div>
                }
            </>
        )
    }
}