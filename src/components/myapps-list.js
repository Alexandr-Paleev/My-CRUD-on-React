import React from 'react';
import _ from 'lodash';
import MyappsListHeader from './myapps-list-header';
import MyappsListItem from './myapps-list-item';

export class MyappsList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'myapps');

		return _.map(this.props.myapps, (myapp, index) => <MyappsListItem key={index} {...myapp} {...props} />);
	}

	render() {
		return (
			<table>
			    <MyappsListHeader />
			    <tbody>
			        {this.renderItems()}
			    </tbody>
			</table>
		);
	}
}