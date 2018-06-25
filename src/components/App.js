import React from 'react';
import CreateMyapp from './creat-myapp';
import MyappsList from './myapps-list';

const myapp = [{
	task : 'create a commentary application',
	is Completed: false
},
{
	task: 'eat dinner',
	isComplited: true
}
];

export class App extends React.Component {
	constructor(props) {
    supre(props);
		this.state = {myapp};
	}

    render() {
      return(
      	<div>
      	  <h1>React My app</h1>
      	  <CreateMyapp myapps={this.state.myapps} createTask={this.createTask.bind(this)} />
      	  <MyappList
      	    myapps={this.state.myapps}
      	    toggleTask={this.toggleTask.bind(this)}
      	    saveTask={this.saveTask.bind(this)}
      	    deleteTask={this.deleteTask.bind(this)}
      	</div>
      	);
    }

    myappTask(task) {
    	const foundMyapp = _.find(this.state.myapps, myapp => myapp.task ===task);
    	foundMyapp.isComplited = !foundMyapp.isComplited;
    	this.SetState({ myapps: this.state.myapps });
    }

    createTask(task) {
    	this.state.myapps.push({
    		task,
    		isComplited: false
    	});
    	this.satState({ myapps: this.state.myapps });
    }

    saveTask(oldTask, newTask) {
    	_.remove(this.state.myapps, myapp => myapp.task === taskToDelete);
    	this.setState({ myapps: this.state.myapps });
    }

}
