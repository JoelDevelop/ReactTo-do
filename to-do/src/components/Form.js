import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            stateofButton:"disabled",
            valueDescription:""
        };

    }

    componentDidMount(){
        var elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, {});
    }

    activeButton(){
        this.setState({
            stateofButton:""
        })
    }

    disableButton(){
        this.setState({
            stateofButton:"disabled"
        })
    }

    validationDescription(value){
        // this.setState({
        //     valueDescription:value
        // });

        if(value!=""){
            this.setState({
                valueDescription:value
            });
            this.activeButton();
        }else{
            this.disableButton();
        }

        // (value!="")?this.activeButton():this.disableButton();
    }

    handleClick(e,value) {
        console.log(value);
        //console.log(this.state);
        
        const {valueDescription} = this.state;
        const data = { id:1,detalle : valueDescription , estado:0};

        // fetch('http://localhost:8080/actividades/grabar', {
        //     method: 'POST', // or 'PUT'
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'text/plain',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => console.log(response))



        fetch('http://localhost:8080/actividades/grabar', {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors',
            body: data
        })
        .then((response)=>{ 
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
        });

        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
        // this.state.valueDescription
    }

    render(){
        var classofButton = "waves-effect waves-light col s12 btn "+this.state.stateofButton;
        return (
            <div className="row">
                <div className="card-panel col s12 m7">
                    <span>
                        <div className="input-field col s12 m8">
                            <input id="description" type="text" className="validate" onChange={e=>this.validationDescription(e.target.value)}/>
                            <label htmlFor="description">Descripcion</label>
                        </div>
                        <div className="col s12 m4 valign-wrapper">
                            <button className={classofButton} onClick={e=>this.handleClick(e,this.state.valueDescription)} style={{margin:"17px 0px"}}>Agregar</button>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}