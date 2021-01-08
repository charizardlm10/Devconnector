const Validator = require("validator");
const isEmpty = require("./is_empty");

function checkEmptyString(data) {
  return isEmpty(data) ? "" : data;
}

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = checkEmptyString(data.name);
  data.password = checkEmptyString(data.password);
  data.email = checkEmptyString(data.email);
  data.password2 = checkEmptyString(data.password2);

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  } else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password2 field is required";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords should match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
