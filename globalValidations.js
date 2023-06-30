const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.search(/^[a-zA-Z ]*$/)) {
    errors.name = "only alphabets are allowed";
  } else if (values.name.length < 3) {
    errors.name = "Minimum 3 characters required";
  } else if (values.name.length > 20) {
    errors.name = "Maximum 20 characters allowed";
  }

  if (!values.schoolName) {
    errors.schoolName = "Required";
  } else if (values.schoolName.search(/^[a-zA-Z ]*$/)) {
    errors.schoolName = "only alphabets are allowed";
  } else if (values.schoolName.length < 3) {
    errors.schoolName = "Minimum 3 characters required";
  } else if (values.schoolName.length > 20) {
    errors.schoolName = "Maximum 20 characters allowed";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i)) {
    errors.email = "Invalid Email";
  }

  if (!values.designation) {
    errors.designation = "Required";
  } else if (values.designation.search(/^[a-zA-Z ]*$/)) {
    errors.designation = "only alphabets are allowed";
  } else if (values.designation.length < 3) {
    errors.designation = "Minimum 3 characters required";
  } else if (values.designation.length > 20) {
    errors.designation = "Maximum 20 characters allowed";
  }

  if (!values.mobileNo) {
    errors.mobileNo = "Required";
  } else if (values.mobileNo < 10) {
    errors.mobileNo = "Not a valid phone number";
  } else if (values.mobileNo.search(/^[0-9]*$/)) {
    errors.mobileNo = "Only Numbers are allowed";
  }

  return errors;
};

export default validate;
