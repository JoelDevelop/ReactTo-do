import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import DeleteButton from "./DeleteButton";

import Icon from '@mdi/react'
import { mdiFileEdit } from '@mdi/js'

export default class Row extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.autocomplete');
                var instances = M.Autocomplete.init(elems, {});
        });
    }

    render(){
        return (
        <>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card-panel teal lighten-3">
                        <div className="row">
                            <div className="col m7 s6"><input type="checkbox" className="checkbox" /><span className="white-text" style={{margin:"0px 5px"}}>Descripción</span></div>
                            <div className="col m3 s3"><button className="waves-effect waves-light btn " style={{margin:"0px 5px"}}><Icon style={{margin:"5px 0px"}} path={mdiFileEdit} size={1} color="white"/></button></div>
                            <div className="col m2 s3"><DeleteButton></DeleteButton></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}