import registrationModel from './RegistrationFormModel';
const {
  formField: {
	institutionName,
	memberShipCategory,
	registrationNumber,
	contactPerson,
	designation,
	telephoneContact,
	email,
	emailAddress,
	soleProprietorShip,
	partnership,
	parish,
	village,
	limitedCompany,
	licenseNumber,
	registered,
	ownerNIN,
	ownerName,
	otherOwnershipType,
	regNumber,
	mixed,
	single,
	boarding,
	day,
	subCounty,
	district,
	contact,
	website,
	enrollment,
	teachingStaffFemale,
	teachingStaffMale,
  },	
} = registrationModel;

export default {
    	[institutionName.name]:'',
		[memberShipCategory.name]:'',
		[registrationNumber.name]:'',
		[contactPerson.name]:'',
		[designation.name]:'',
		[telephoneContact.name]:'',
		[email.name]:'',
		[emailAddress.name]:'',
		[soleProprietorShip.name]:'',
		[partnership.name]:'',
		[parish.name]:'',
		[village.name]:'',
		[limitedCompany.name]:'',
		[licenseNumber.name]:'',
		[registered.name]:'',
		[ownerNIN.name]:'',
		[ownerName.name]:'',
		[otherOwnershipType.name]:'',
		[regNumber.name]:'',
		[mixed.name]:'',
		[single.name]:'',
		[boarding.name]:'',
		[day.name]:'',
		[subCounty.name]:'',
		[district.name]:'',
		[contact.name]:'',
		[website.name]:'',
		[enrollment.name]:'',
		[teachingStaffFemale.name]:'',
		[teachingStaffMale.name]:'',
};
