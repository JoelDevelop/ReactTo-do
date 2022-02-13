import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Form from "./Form";
import List from "./List";

M.AutoInit();

export default function PrimaryCard () {

	const [refreshFlag,setRefreshFlag] = useState(false);
	
	useEffect(()=>{
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, {});
		});
	})

	
	const refreshList = () => {
		console.log("actualizando lista");
		setRefreshFlag(!refreshFlag);
	}

	return (
		<div className="row">
			<div className="col s12 m8">
				<div className="card-panel ">
					<Form props={refreshList} ></Form>
					<List props={refreshFlag} onRefresh={refreshList}></List>
				</div>
			</div>
		</div>
	);

}