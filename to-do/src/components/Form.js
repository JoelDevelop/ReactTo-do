import { Component, useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';


export default function Form (params){

    const [stateButton,setStateButton] = useState("disabled");
    const [valueDescription,setValueDescription] = useState("");
    const url= "http://localhost:8080/actividades/grabar";
    const [count,setCount] = useState(0);

    useEffect(() => {
        var elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, {});
    }, []);
    

    useEffect(() => {
        
        if(valueDescription!=""){
            setStateButton("");
        }else{
            setStateButton("disabled");
        }
        

    }, [valueDescription]);

    const saveActivity = async () => {

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "id":0,
                "detalle":valueDescription,
                "estado":0
            })
        };

        const response = await fetch(url, settings)
        // console.log(response.status);
        const responseJson = await response
        params.props()
        // console.log(responseJson,"grabar");
        //console.log(responseJson,"response")
    }

    const fetchSave = () => {
        saveActivity()
        setValueDescription("")
    }

    const classofButton = "waves-effect waves-light col s12 btn "+stateButton;

    return (
        <div className="row">
            <div className="card-panel col s12 m7">
                <span>
                    <div className="input-field col s12 m8">
                        <input id="description" type="text" className="validate" value={valueDescription} onChange={e=>setValueDescription(e.target.value)}/>
                        <label htmlFor="description">Descripcion</label>
                    </div>
                    <div className="col s12 m4 valign-wrapper">
                        <button className={classofButton} onClick={fetchSave} style={{margin:"17px 0px"}}>Agregar</button>
                    </div>
                </span>
            </div>
        </div>
    );
}