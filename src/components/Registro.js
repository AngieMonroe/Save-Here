import React, { Component } from 'react';
import firebase from 'firebase';

class Registro extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            registrar:"",
            registrarpwd:""
    };

    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(e){
            const { value, name } = e.target;
           this.setState({
            [name]: value 
          })
        }    
        
    createUser(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.registrar, this.state.registrarpwd)
        .then(() => {
          alert('Cuenta creada exitosa')
          const userName = this.state.email;
          console.log(userName);
        })
            .catch((error) => {
                console.log(error.message);
            })
    }
    

    render(){
        return(
            <section>    
                Jala     
                    <div className="row">
                       <input type="text" className="form-control registry-btn mr-4 ml-4 mt-2 mb-2" placeholder="Nombre" id="registrarName"   name='name'  value={this.state.name} onChange={this.handleChange} /> 
                       <input type="email" className="form-control registry-btn mr-4  mr-4 ml-4 mt-2 mb-2"   placeholder="Correo" id="registrarEmail" name='registrarEmail' value={this.state.registrar} onChange={this.handleChange}/>
                       <input type="password" className="form-control registry-btn mr-4 mr-4 ml-4 mt-2 mb-2"  placeholder="Contraseña" id="registrarPassword" name='registrarPassword' value={this.state.registrarpwd} onChange={this.handleChange}/>            
                    </div>
                    <div >
                     <button type="button" onClick={this.createUser} className="btn btn-dark" id="Registrar">Enviar</button>
                    </div>
            </section>
        )
    }
}

export default (Registro);