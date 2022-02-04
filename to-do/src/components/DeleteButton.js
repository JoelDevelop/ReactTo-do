import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';

import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'


export default class DeleteButton extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    render() {
        return (
            <>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
                    <Icon style={{margin:"5px 0px"}} path={mdiDelete} size={1} color="white"/></a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Confirmación</h4>
                        <p>¿ Esta seguro de eliminar la tarea ?</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Confirmar</a>
                    </div>
                </div>
            </>
        );
    }
}