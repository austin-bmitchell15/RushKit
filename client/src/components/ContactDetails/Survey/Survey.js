import { Modal, Paper, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { updateContact } from '../../../actions/contactActions.js';
import ChipInputAutoSuggest from './ChipInputAutoSuggest/ChipInputAutoSuggest.js';
import useStyles from './styles.js'

const Survey = ({ open, onClose, contact }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
  	const user = JSON.parse(localStorage.getItem('profile'));
	const [surveyInfo, setSurveyInfo] = useState({
		brotherName: '', pnmName: '', fitRating: '', walkedOut: false, interestTags: contact.interestTags, 
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateContact(contact._id, surveyInfo))
	}

	const trials = ["Austin", "Zayyen", "Cole", "John"]

	return (
		<Modal open={open} onClose={onClose}>
			<Paper className={classes.paper}>
				<form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
					<Typography variant="h6">PNM Rush Evaluation for {contact.name} by {user?.result.name}</Typography>
					<ChipInputAutoSuggest data={trials} label="Add Interests, Hobbies, Clubs, etc" onChange={(e) => setSurveyInfo({...surveyInfo, interestTags: e.action.value})}/>
					<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

				</form>
			</Paper>
		</Modal>
	);
};

export default Survey;