import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Form from "./Form";
import List from "./List";

M.AutoInit();

export default class PrimaryCard extends Component {

	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, {});
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m8">
					<div className="card-panel ">
						<Form></Form>
						<List></List>
					</div>
				</div>
			</div>
		);
	}
}