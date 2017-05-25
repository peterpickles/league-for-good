import axios from 'axios';
import {  CREATE_LEAGUE, SELECT_LEAGUE } from './types';
import { rootURL } from '../../globals';

//Post createLeague form to the server
//Send the response object to a reducer that will append it to a list of user's leagues
//Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch){
		axios.post(`${rootURL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type:CREATE_LEAGUE, payload: data});
			})
			.then(()=> redirectCallback());
	};
}

export function addStaffMember(body){
	console.log(body);
}

export function selectLeague(league){
	return {type:SELECT_LEAGUE, payload:league};
}
