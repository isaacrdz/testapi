const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = data.fieldofstudy = !isEmpty(data.fieldofstudy)
    ? data.fieldofstudy
    : "";

  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is requried";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is requried";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of Study field is requried";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From field is requried";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
