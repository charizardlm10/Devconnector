const Validator = require("validator");
const isEmpty = require("./is_empty");

function checkEmptyString(data) {
  return isEmpty(data) ? "" : data;
}

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.password = checkEmptyString(data.password);
  data.email = checkEmptyString(data.email);

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
