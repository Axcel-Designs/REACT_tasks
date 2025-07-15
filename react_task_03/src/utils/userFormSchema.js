import * as Yup from "yup";

const userFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Full Name is reguired"),
  cntryCd: Yup.string()
    .matches(/^\+\d{1,3}$/, "Invalid Country Code")
    .required("Required"),
  gender: Yup.string().oneOf(["male", "female"]).required("Gender is reguired"),
  telphone: Yup.string()
    .matches(/^\d{7,15}$/, "Invalid Phone Number")
    .required("Telephone number is required"),
  birthday: Yup.date().nullable().max(new Date(), "Invalid Date"),
  address: Yup.string().required("Address is required"),
  street: Yup.string().required("Street Address is required"),
  apartment: Yup.string().required("Apartment is required"),
  city: Yup.string().required("City is reguired"),
  state: Yup.string().required("State is required"),
  zipCde: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Invalid Zip Code")
    .required("Zip is reguired"),
});
export default userFormSchema;
