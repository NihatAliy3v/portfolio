import * as yup from "yup";

const validations = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string(),
  message: yup.string(),
});
export default validations;
