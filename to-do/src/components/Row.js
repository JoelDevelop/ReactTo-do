import { Component, useEffect, useRef, useState } from "react";
// import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import DeleteButton from "./DeleteButton";

import Icon from '@mdi/react'
import { mdiFileEdit, mdiStretchToPageOutline } from '@mdi/js'

export default function Row (param) {

    M.AutoInit();

    const props = param.props.todo;
    const [detalle,setDetalle] = useState(props.detalle);
    const [id,setId] = useState(props.id);
    const [checked,setChecked] = useState((props.estado>0));
    const [editDetails,setEditDetails] = useState(false);
    const [count,setCount] = useState(0);

    const url = "http://localhost:8080/actividades/actualizar";
    
    const inputProps = (checked)?{"checked":"checked"}:{"style":{}};

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.autocomplete');
            var instances = M.Autocomplete.init(elems, {});
          });

          //Set valores
          //setDetalle(param.props.detalle)

        // const props = param.props;
    }, []);

    useEffect(() => {
        setId(param.props.todo.id)
        setDetalle(param.props.todo.detalle)
        setChecked((param.props.todo.estado>0))
    }, [param]);

    const updateChecked = async () => {

        const settings = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "id":id,
                "detalle":detalle,
                "estado":(checked)?1:0
            })
        };

        const response = await fetch(url, settings)
        const responseJson = await response
    }

    useEffect(() => {
        //Actualizar base de datos  
        if(count!=0){
            updateChecked();
        }else{
            setCount(1);
        }
    }, [checked]);

    const onClickEdit = () => {
        if(editDetails){
            updateChecked();
        }
        setEditDetails(!editDetails)
    }
    
    return (
    <>
        <div className="row" > 
            <div className="col s12 m12">
                <div className="card-panel teal lighten-3">
                    <div className="row">
                        <div className="col m7 s6">
                            <p>
                                <label>
                                    <input key={id} type="checkbox" {...inputProps} onChange={e=>setChecked(!checked)} />
                                    <span className="white-text" hidden={editDetails}>{detalle}</span>
                                </label>
                                <input type="text" onChange={e=>setDetalle(e.target.value)} value={detalle} hidden={!editDetails}/>
                            </p>
                        </div>
                        <div className="col m3 s3"><button className="waves-effect waves-light btn" style={{margin:"0px 5px"}} onClick={onClickEdit}><Icon style={{margin:"5px 0px"}} path={mdiFileEdit} size={1} color="white"/></button></div>
                        <div className="col m2 s3"><DeleteButton props={{id:id, onRefresh:param.props.onRefresh}}></DeleteButton></div>
                    </div> 
                </div>
            </div>
        </div>
    </>
    );

}