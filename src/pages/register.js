import { useState } from 'react';
import './styles.css';
const Register = () => {
	const [institutionName, setInstitutionName] = useState('');
	const [memberShipCategory, setMemberShipCategory] = useState('');
	const [registrationNumber, setRegistrationNumber] = useState('');
	const [contactPerson, setContactPerson] = useState('');
	const [designation, setDesignation] = useState('');
	const [telephoneContact, setTelephoneContact] = useState('');
	const [email, setEmail] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [soleProprietorShip, setSoleProprietorShip] = useState('');
	const [partnership, setPartnership] = useState('');
	const [parish, setParish] = useState('');
	const [village, setVillage] = useState('');
	const [limitedCompany, setLimitedCompany] = useState('');
	const [licenseNumber, setLicenseNumber] = useState('');
	const [registered, setRegistered] = useState('');
	const [ownerName, setOwnerName] = useState('');
	const [ownerNIN, setOwnerNIN] = useState('');
	const [ownerContact, setOwnerContact] = useState('');
	const [otherOwnershipType, setOtherOwnershipType] = useState('');
	const [regNumber, setRegNumber] = useState('');
	const [mixed, setMixed] = useState(true);
	const [boarding, setBoarding] = useState(false);
	const [subCounty, setSubCounty] = useState('');
	const [district, setDistrict] = useState('');
	const [website, setWebsite] = useState('');
	const [enrollment, setEnrollment] = useState('');
	const [teachingStaffFemale, setTeachingStaffFemale] = useState('');
	const [teachingStaffMale, setTeachingStaffMale] = useState('');

	return (
		<div className='container'>
			<form className='membership_details'>
				<p>Membership Details</p>
				<input
					type='text'
					name='institutionName'
					value={institutionName}
					onChange={({ target }) => setInstitutionName(target.value)}
					placeholder='Institution Name'
				/>{' '}
				<br />
				<input
					type='text'
					name='memberShipCategory'
					value={memberShipCategory}
					onChange={({ target }) =>
						setMemberShipCategory(target.value)
					}
					placeholder='Membership Category'
				/>
				<br />
				<input
					type='text'
					name='registrationNumber'
					value={registrationNumber}
					onChange={({ target }) =>
						setRegistrationNumber(target.value)
					}
					placeholder='Registration Number'
				/>{' '}
				<br />
				<input
					type='text'
					name='designation'
					value={designation}
					onChange={({ target }) => setDesignation(target.value)}
					placeholder='Designation at Institution'
				/>
				<br />
				<input
					type='text'
					name='contactPerson'
					value={contactPerson}
					onChange={({ target }) => setContactPerson(target.value)}
					placeholder='Contact Person'
				/>{' '}
				<br />
				<input
					type='text'
					name='telephoneContact'
					value={telephoneContact}
					onChange={({ target }) => setTelephoneContact(target.value)}
					placeholder='Telephone Contact'
				/>{' '}
				<br />
				<input
					type='text'
					name='email'
					value={email}
					onChange={({ target }) => setEmail(target.value)}
					placeholder='Email of Contact Person'
				/>
			</form>{' '}
			<br />
			<form className='form__ownership_type'>
				<p>Ownership Type</p>
				<input
					type='checkbox'
					name='soleProprietorShip'
					id='soleProprietorShip'
					value={soleProprietorShip}
					onChange={({ target }) =>
						setSoleProprietorShip(target.value)
					}
				/>
				<label htmlFor='soleProprietorShip'>Sole proprietorship</label>
				<br />
				<input
					type='checkbox'
					name='partnership'
					id='partnership'
					value={partnership}
					onChange={({ target }) => setPartnership(target.value)}
				/>{' '}
				<label htmlFor='soleProprietorShip'>partnership</label>
				<br />
				<input
					type='checkbox'
					name='limitedCompany'
					id='limitedCompany'
					value={limitedCompany}
					onChange={({ target }) => setLimitedCompany(target.value)}
				/>{' '}
				<label htmlFor='limitedCompany'>Limited Company</label>
				<br />
				<input
					type='text'
					id='otherOwnershipType'
					name='otherOwnershipType'
					value={otherOwnershipType}
					onChange={({ target }) => otherOwnershipType(target.value)}
					placeholder='Other? Please specify here'
				/>
				<p>owner details</p>
				<input
					type='text'
					name='ownerName'
					value={ownerContact}
					onChange={({ target }) => ownerName(target.value)}
					placeholder='Name'
				/>
				<input
					type='text'
					name='ownerName'
					value={ownerName}
					onChange={({ target }) => ownerName(target.value)}
					placeholder='Name'
				/>
				<input
					type='text'
					name='ownerContact'
					value={ownerContact}
					onChange={({ target }) => setOwnerContact(target.value)}
					placeholder='Personal Contact'
				/>
				<input
					type='text'
					name='ownerNIN'
					value={ownerNIN}
					onChange={({ target }) => ownerNIN(target.value)}
					placeholder='National Identification Number'
				/>
			</form>
			<form className='membership_details'>
				<p>Membership Details</p>
				<input
					type='text'
					name='institutionName'
					value={institutionName}
					onChange={({ target }) => setInstitutionName(target.value)}
					placeholder='Institution Name'
				/>{' '}
				<br />
				<input
					type='text'
					name='memberShipCategory'
					value={memberShipCategory}
					onChange={({ target }) =>
						setMemberShipCategory(target.value)
					}
					placeholder='Membership Category'
				/>
				<br />
				<input
					type='text'
					name='registrationNumber'
					value={registrationNumber}
					onChange={({ target }) =>
						setRegistrationNumber(target.value)
					}
					placeholder='Registration Number'
				/>{' '}
				<br />
				<input
					type='text'
					name='designation'
					value={designation}
					onChange={({ target }) => setDesignation(target.value)}
					placeholder='Designation at Institution'
				/>
				<br />
				<input
					type='text'
					name='contactPerson'
					value={contactPerson}
					onChange={({ target }) => setContactPerson(target.value)}
					placeholder='Contact Person'
				/>{' '}
				<br />
				<input
					type='text'
					name='telephoneContact'
					value={telephoneContact}
					onChange={({ target }) => setTelephoneContact(target.value)}
					placeholder='Telephone Contact'
				/>{' '}
				<br />
				<input
					type='text'
					name='email'
					value={email}
					onChange={({ target }) => setEmail(target.value)}
					placeholder='Email of Contact Person'
				/>
			</form>{' '}
		</div>
	);
};

export default Register;
