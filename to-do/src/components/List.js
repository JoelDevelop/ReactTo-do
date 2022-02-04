import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Row from "./Row";


export default function List() {

    const [todos,setTodos] = useState([]);
    const url= "http://localhost:8080/actividades/listar";

    const fecthList = async () => {
        const response = await fetch(url)
        // console.log(response.status);
        const responseJson = await response.json()
        setTodos(responseJson)
        //console.log(responseJson,"response")
    }

    useEffect(() => {
        fecthList();
    }, []);
    
    return (
        <div className="row">
            <div className="col s12 m12">
                {
                    todos.map((todo,index)=>{
                        // console.log("Intento",todo);
                        return <Row props={todo} key={index}></Row>;
                    })
                }
            </div>
        </div>
    );
}

