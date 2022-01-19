import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
	const navigate = useNavigate();
	const addMeetupHandler = (meetupData) => {
		fetch(
			'https://react-meetup-manager-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			navigate('/');
		});
	};

	return (
		<section>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
};

export default NewMeetupPage;
