import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Row from "./Row";


export default function List(params) {

    const [todos,setTodos] = useState([]);
    const [numberRefresh,setNumberRefresh] = useState(0);
    const url= "http://localhost:8080/actividades/listar";

    // console.log("mapeando lista", params.props)

    const fecthList = async (numberRefresh) => {
        console.log("Update List")
        const response = await fetch(url)
        // console.log(response.status);
        const responseJson = await response.json()
        setTodos(responseJson)
        setNumberRefresh(numberRefresh++)
    }

    useEffect(() => {
        fecthList(numberRefresh);
    }, [params.props]);
    
    return (
        <div className="row">
            <div className="col s12 m12">
                {
                    todos.map((todo,index)=>{
                        // console.log("Intento",todo);
                        return <Row props={{todo:todo,onRefresh:params.onRefresh}} key={index} ></Row>;
                    }) 
                }
            </div>
        </div>
    );
}

