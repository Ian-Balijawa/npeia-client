import { Card } from '../components';

export default function CardContainer(props) {
	const { mixed, dayBoarding, schoolName, selected, imageSRC } = props;
	return (
		<Card>
			<Card.Group>
				<Card.CheckIcon checked={selected}></Card.CheckIcon>
				<Card.CheckIcon checked={!selected}></Card.CheckIcon>
			</Card.Group>

			<Card.Image src={imageSRC} alt='school logo' />
			<Card.Text>{schoolName}</Card.Text>
			<Card.Group>
				<Card.TextSmall>{mixed ? 'Mixed' : 'Single'}</Card.TextSmall>
				<Card.TextSmall>
					{dayBoarding.toLowerCase() === 'day'
						? 'Day'
						: dayBoarding.toLowerCase() === 'boarding'
						? 'Boarding'
						: 'Day and Boarding'}
				</Card.TextSmall>
			</Card.Group>
		</Card>
	);
}
