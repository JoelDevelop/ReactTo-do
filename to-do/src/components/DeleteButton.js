import { Component, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';

import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'


export default function DeleteButton (params) {


    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }, []);

    const id = params.props.id;
    const modalName="modal"+id;
    const refmodalName="#"+modalName;
    // console.log(refmodalName);
    const url = "http://localhost:8080/actividades/eliminar/";

    const deleteActivity = async () => {

        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url+id, settings)
        const responseJson = await response
        console.log("elemento eliminado")
        params.props.onRefresh();
        // console.log(responseJson)
    }

    return (
        <div key={id}>
            <a className="waves-effect waves-light btn modal-trigger" href={refmodalName}>
                <Icon style={{margin:"5px 0px"}} path={mdiDelete} size={1} color="white"/>
            </a>
            <div id={modalName} className="modal">
                <div className="modal-content">
                    <h4>Confirmación</h4>
                    <p>¿ Esta seguro de eliminar la tarea ?</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={deleteActivity} className="modal-close waves-effect waves-green btn-flat">Confirmar</a>
                </div>
            </div>
        </div>
    );
}