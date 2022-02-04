import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Row from "./Row";


export default class List extends Component {

    componentDidMount() {
        
        // fetch(`http://localhost:8080/actividades/listar`,{
        //     method: 'GET', // or 'PUT'
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        // })
        // .then(response => console.log(response))

        // fetch('http://localhost:8080/actividades/listar', { mode: 'no-cors'})
        // .then(blob => blob.json())
        // .then(data => {
        //     console.table(data);
        //     return data;
        // })
        // .catch(e => {
        //     console.log(e);
        //     return e;
        // });
        /*
        fetch('http://localhost:8080/actividades/listar', {
        headers:{'Content-Type': 'application/json'},
        mode: 'no-cors'})
        .then((response)=>{ 
            console.log(response.text);
            console.log(response);
            if(!response.ok){
                throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then((data) => {
            // setfetchedData(data);
            // console.log(data)
        })
        .catch(err=>{
            // console.log(err)
        });*/

    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <Row></Row>
                    </div>
                </div>
            </>
        );
    }
}