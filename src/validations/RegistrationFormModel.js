export default {
	formId: 'regForm',
	formField: {
		institutionName: {
			name: 'institutionName',
			label: 'Name of Institution*',
			requiredErrorMsg: 'Name of insitituion is required',
		},
		memberShipCategory: {
			name: 'memberShipCategory',
			label: 'Membership Category *',
			requiredErrorMsg: 'Category is required',
		},
		registrationNumber: {
			name: 'registrationNumber',
			label: 'Membership Registration Number*',
			requiredErrorMsg: 'Registration Number is required',
		},
		contactPerson: {
      name: 'contactPerson',
			label: 'Contact Person',
      requiredErrorMsg: 'Please provide Person to contact',
		},
		designation: {
			name: 'designation',
			label: 'Designation at an applying institution*',
			requiredErrorMsg: 'This is a required field',
		},
		telephoneContact: {
			name: 'telephoneContact',
			label: 'Telephone Contact',
			requiredErrorMsg: 'This contact a required field',
		},

		email: {
			name: 'email',
			label: 'Email of Contact Person',
			requiredErrorMsg: 'This Email contact a required field',
		},

		// part B membership benefits
		// TODO ownershipt type is a header

		soleProprietorShip: {
			name: 'soleProprietorShip',
			label: 'Sole Proprietorship',
			requiredErrorMsg:
				'Please provide the sole proprietorship to continue',
		},
		partnership: {
			name: 'partnership',
			label: 'Partnership',
			requiredErrorMsg: 'Please provide partnership continue',
		},
		limitedCompany: {
			name: 'limitedCompany',
			label: 'Limited Company',
			requiredErrorMsg: 'This is a required field',
		},
		otherOwnershipType: {
			name: 'otherOwnershipType',
			label: 'other? please specify',
			requiredErrorMsg: 'This is a required field',
		},
		ownerName: {
			name: 'ownerName',
			label: 'Full Name',
			requiredErrorMsg: "Please provide Owner's Full Name",
		},
		ownerPersonalContact: {
			name: 'ownerPersonalContact',
			label: 'Personal Contact',
			requiredErrorMsg: "Please provide Owner's personal contact",
		},
		ownerNIN: {
			name: 'ownerNIN',
			label: 'National Identification Number',
			requiredErrorMsg: "Please provide Owner's NIN",
		},
		licensed: {
			name: 'licensed',
			label: 'Licensed',
		},
		licenseNumber: {
			name: 'licenseNumber',
			label: 'license Number',
		},
		registered: {
			name: 'registered',
			label: 'registration number',
		},
		regNumber: {
			name: 'registrationNumber',
			label: 'Registration Number',
		},
		mixedSex: {
			name: 'mixed',
			label: 'Mixed Sex',
		},
		single: {
			name: 'single',
			label: 'Single Sex',
		},
		boarding: {
			name: 'boarding',
			label: 'Boarding',
		},
		day: {
			name: 'day',
			label: 'Day',
		},
		mixed: {
			name: 'mixed',
			label: 'Mixed',
		},

		// institution Address part C

		village: {
			name: 'village',
			label: 'Village (LC.1)',
			requiredErrorMsg: 'This is a required field',
		},
		parish: {
			name: 'parish',
			label: 'Parish',
			requiredErrorMsg: 'This is a required field',
		},
		subCounty: {
			name: 'subCounty',
			label: 'Sub county / municipality /division',
			requiredErrorMsg: 'This is a required field',
		},
		district: {
			name: 'district',
			label: 'District',
			requiredErrorMsg: 'This is a required field',
		},
		contact: {
			name: 'contactAddress',
			label: 'Tel. contact',
			requiredErrorMsg: 'This is a required field',
		},
		emailAddress: {
			name: 'emailAddress',
			label: 'Email',
			requiredErrorMsg: 'This is a required field',
		},
		website: {
			name: 'website',
			label: 'Website',
			requiredErrorMsg: 'This is a required field',
		},
		enrollment: {
			name: 'enrollment',
			label: 'Enrollment',
			requiredErrorMsg: 'This is a required field',
		},
		male:{
		//   name:'male',
		//   label:'Males'
		// },
		// female:{
		//   name:'female',
		//   label:'Females'
		// },				
		teachingStaffMale: {
			name: 'teachingStaffMale',
			label: 'Male',
			requiredErrorMsg: 'This is a required field',
		},
		teachingStaffFemale: {
			name: 'teachingStaffFemale',
			label: 'Female',
			requiredErrorMsg: 'This is a required field',
		},
	},
};
