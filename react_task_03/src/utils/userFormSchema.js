import * as Yup from 'yup'

const UserSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is reguired"),
  gender: Yup.string().oneOf(["male", "female"]).required("Gender is reguired"),
  telphone: Yup.number().required("Telephone number is required"),
  birthday: Yup.date().required("Birthday is required"),
  address: Yup.string().required("Address is required"),
  stAddress: Yup.string().required("Street Address is required"),
  aprtmnt: Yup.string().required("Apartment is required"),
  city: Yup.string().required("City is reguired"),
  state: Yup.string().required("State is required"),
  zipCde: Yup.string().required("Zip is reguired")..matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code'),
});  
export default UserSchema;