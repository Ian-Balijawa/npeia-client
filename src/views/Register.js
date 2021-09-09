import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@material-ui/core';
import './styles.css';

export default function Register() {
	const history = useHistory();
	// const { firebase } = useContext(FirebaseContext);

	//MEMBERSHIP DETAILS
	const [institutionName, setInstitutionName] = useState('');
	const [memberShipCategory, setMemberShipCategory] = useState('');
	const [contactPerson, setContactPerson] = useState('');
	const [registrationNumber, setRegistrationNumber] = useState('');
	const [designation, setDesignation] = useState('');
	const [telephoneContact, setTelephoneContact] = useState('');
	const [email, setEmail] = useState('');

	const [error, setError] = useState(null);

	//OWNERSHIP DETAILS PART
	const [ownerShipType, setOwnershipType] = useState('');
	const [otherOwnershipType, setOtherOwnershipType] = useState('');
	const [ownerName, setOwnerName] = useState('');
	const [ownerPersonalContact, setOwnerPersonalContact] = useState('');
	const [ownerNIN, setOwnerNIN] = useState('');
	const [licensed, setLicensed] = useState('');
	const [licenseNumber, setLicenseNumber] = useState('');
	const [registered, setRegistered] = useState('');
	const [regNumber, setRegNumber] = useState('');
	const [schoolCategory, setSchoolCategory] = useState('mixed');
	const [dayBoarding, setDayBoarding] = useState('');

	const isInvalid = () => {
		return institutionName === '' ||
			memberShipCategory === '' ||
			contactPerson === '' ||
			registrationNumber === '' ||
			designation === '' ||
			telephoneContact === '' ||
			email === '' ||
			error === ''
			? true
			: false;
	};

	const handleSignup = event => {
		event.preventDefault();
		// return firebase
		// 	.auth()
		// 	.createUserWithEmailAndPassword(emailAddress, password)
		// 	.then(result =>
		// 		result.user
		// 			.updateProfile({
		// 				displayName: firstName,
		// 				photoURL: Math.floor(Math.random() * 5) + 1,
		// 			})
		// 			.then(() => {
		// 				history.push(ROUTES.DASHBOARD);
		// 			})
		// 	)
		// 	.catch(error => {
		// 		setFirstName('');
		// 		setEmailAddress('');
		// 		setPassword('');
		// 		setError(error.message);
		// 	});
	};

	return (
		<>
			<Form>
				<Form.Title>Register School</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}

				<Form.Base onSubmit={handleSignup} method='POST'>
					<Form.Input
						placeholder='Institution Name'
						value={institutionName}
						onChange={({ target }) =>
							setInstitutionName(target.value)
						}
					/>
					<Form.Input
						placeholder='Membership Category'
						value={memberShipCategory}
						onChange={({ target }) =>
							setMemberShipCategory(target.value)
						}
					/>
					<Form.Input
						type='text'
						value={contactPerson}
						placeholder='Contact Person'
						onChange={({ target }) =>
							setContactPerson(target.value)
						}
					/>
					<Form.Break />
					<FormLabel style={{ textAlign: 'center', color: 'white' }}>
						OwnershipType
					</FormLabel>
					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						value={ownerShipType}
						onChange={({ target }) =>
							setOwnershipType(target.value)
						}
					>
						<FormControlLabel
							value='soleProprietorship'
							control={<Radio />}
							label='Sole Proprietorship'
						/>
						<FormControlLabel
							value='partnership'
							control={<Radio />}
							label='Partnership'
						/>
						<FormControlLabel
							value='limitedCompany'
							control={<Radio />}
							label='Limited Company'
						/>
						<Form.Input
							type='text'
							value={otherOwnershipType}
							placeholder='Other type, please specify'
							onChange={({ target }) =>
								setOtherOwnershipType(target.value)
							}
						/>
					</RadioGroup>
					<Form.Break />
					<Form.Input
						type='text'
						value={ownerName}
						placeholder='Owner Name'
						onChange={({ target }) => setOwnerName(target.value)}
					/>
					<Form.Input
						type='text'
						value={ownerPersonalContact}
						placeholder='Personal Contact'
						onChange={({ target }) =>
							setOwnerPersonalContact(target.value)
						}
					/>
					<Form.Input
						type='text'
						value={ownerNIN}
						placeholder="Owner's NIN"
						onChange={({ target }) => setOwnerNIN(target.value)}
					/>

					<FormGroup
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<FormControlLabel
							control={<Checkbox />}
							label='Licensed'
							value={licensed}
							onChange={() => setLicensed(licensed => !licensed)}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label='Registered'
							value={registered}
							onChange={() =>
								setRegistered(registered => !registered)
							}
						/>
					</FormGroup>
					<Form.Input
						type='text'
						value={licenseNumber}
						placeholder='License Number'
						onChange={({ target }) =>
							setLicenseNumber(target.value)
						}
					/>
					<Form.Input
						type='text'
						value={regNumber}
						placeholder='Registration Number'
						onChange={({ target }) => setRegNumber(target.value)}
					/>

					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						value={schoolCategory}
						onChange={({ target }) =>
							setSchoolCategory(target.value)
						}
					>
						<FormControlLabel
							value='mixed'
							control={<Radio />}
							label='Mixed'
						/>
						<FormControlLabel
							value='boys'
							control={<Radio />}
							label='Boys'
						/>
						<FormControlLabel
							value='girls'
							control={<Radio />}
							label='Girls'
						/>
					</RadioGroup>

					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						value={dayBoarding}
						onChange={({ target }) => setDayBoarding(target.value)}
					>
						<FormControlLabel
							value='day'
							control={<Radio />}
							label='Day'
						/>
						<FormControlLabel
							value='boarding'
							control={<Radio />}
							label='Boarding'
						/>
						<FormControlLabel
							value='both'
							control={<Radio />}
							label='Day and Boarding'
						/>
					</RadioGroup>

					<Form.Submit
						disabled={isInvalid()}
						type='submit'
						onClick={handleSignup}
						data-testid='sign-up'
					>
						<Link to={ROUTES.DASHBOARD}>REGISTER</Link>
					</Form.Submit>
				</Form.Base>

				<Form.Text>
					Already a Registered?{' '}
					<Form.Link to={ROUTES.SIGNIN}>See Membership.</Form.Link>
				</Form.Text>
				<Form.TextSmall>
					This page is protected by Google reCAPTCHA to ensure you're
					not a bot.
				</Form.TextSmall>
			</Form>
		</>
	);
}
