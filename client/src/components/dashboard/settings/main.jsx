import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { addStaffMember, openSnackbar } from '../../../actions/index';
import { containerCSS, formCSS, formButtonCSS, titleCSS, formRequiredCSS } from '../dashboardCSS';


const AddStaffForm = props => {	
		const {handleSubmit} = props;
		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>Grant login access to a staff member</h1>
				<h6 style={formRequiredCSS}>Requires a Gmail Account</h6>
				<form 
					onSubmit={ handleSubmit }
					style={formCSS}
				>
					<Field
						name="email" 
						component={TextField}
						hintText="Enter A Gmail Account"
						floatingLabelText="User's Gmail Account"
						fullWidth={true}
					/>									
					<RaisedButton
						label="Grant Access"
						primary={true}
						type="submit"
						style={formButtonCSS}
					/>
				</form>
			</div>
		);
	}



export default reduxForm({
	form: 'AddStaffForm',
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar,
})( AddStaffForm );


