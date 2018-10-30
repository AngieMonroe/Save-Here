import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import { Fa } from 'mdbreact';


class Notificatio extends  Component {
    render(){
        return (
            <section>
            <NavbarApp />
            <div className="container">
            <table className="table mt-5">
            <tbody>
                <tr>
                <th scope="row"><Fa icon="bell" size="2x"/></th>
                <td><strong>Daniel López Duran</strong> <br/>Ha llegado al colegio!</td>
                </tr>
                <tr>
                <th scope="row"><Fa icon="bell" size="2x"/></th>
                <td>7:32 Inicia recorrido</td>
                </tr>
                <tr>
                <th scope="row"><Fa icon="bell" size="2x"/></th>
                <td>7:31 Daniel ya esta abordo del bus</td>
                </tr>
                <tr>
                <th scope="row"><Fa icon="bell" size="2x"/></th>
                <td>7:30 El bus esta en tu parada</td>
                </tr>
            </tbody>
            </table>
            </div>
            </section>
        )
    }

}

export default Notificatio;