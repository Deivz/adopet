import './fotoPerfil.css';
import React from 'react';

export default class FotoPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
    }

    render() {
        return (
            <>
                {this.props.imageUploaded ?
                    <div className='foto__perfil' style={{ background: `url("${this.props.imageUploaded}") no-repeat center/cover` }} onClick={() => this.refInput.click()}>
                        <input
                            id='foto__upload'
                            type="file"
                            ref={fileInput => this.refInput = fileInput}
                            onChange={this.props.loadImage}
                            hidden
                        />
                    </div>
                    :
                    this.props.imageDefault ?
                    <div className='foto__perfil' style={{ background: `url("${this.props.imageDefault}") no-repeat center/cover` }} onClick={() => this.refInput.click()}>
                        <input
                            id='foto__upload'
                            type="file"
                            ref={fileInput => this.refInput = fileInput}
                            onChange={this.props.loadImage}
                            hidden
                        />
                    </div>
                    :
                    <div className='foto__perfil--padrao' onClick={() => this.refInput.click()}>
                        <input
                            id='foto__upload'
                            type="file"
                            ref={fileInput => this.refInput = fileInput}
                            onChange={this.props.loadImage}
                            hidden
                        />
                    </div>             
                }
            </>
        )
    }
}