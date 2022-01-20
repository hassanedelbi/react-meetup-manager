import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage =
			'https://image.shutterstock.com/image-vector/meetup-concept-illustration-young-people-600w-571989925.jpg';
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			Description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	};
	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'> Meetup Title</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'> image</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='description' ref={descriptionInputRef}>
						description
					</label>
					<textarea
						id='description'
						rows='5'
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
