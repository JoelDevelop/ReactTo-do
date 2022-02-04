import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
// simport 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import Form from "./Form";
import List from "./List";
import { mdiAccountSupervisorOutline } from "@mdi/js";

M.AutoInit();

export default class PrimaryCard extends Component {

	constructor(props){
		super(props);
		this.state={
			'refresh':0
		}
	}

	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, {});
		});
	}

	refreshList(){
		const nextCount = this.state.refresh++;
		this.setState({
			refresh:nextCount
		});
	}
	render() {
		return (
			<div className="row">
				<div className="col s12 m8">
					<div className="card-panel ">
						<Form props={this.refreshList}></Form>
						<List props={this.state.refresh}></List>
					</div>
				</div>
			</div>
		);
	}
}