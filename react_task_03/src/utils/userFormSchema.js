import * as Yup from "yup";

export const personalInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Full Name is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Gender is required"),
  cntryCd: Yup.string()
    .matches(/^\+\d{1,3}$/, "Invalid Country Code")
    .required("Country code is required"),
  telphone: Yup.string()
    .matches(/^\d{7,15}$/, "Invalid Phone Number")
    .required("Telephone number is required"),
  birthday: Yup.date().typeError("Invalid date").nullable().notRequired(),
});

export const addressSchema = Yup.object().shape({
  // address: Yup.string().notRequired(),
  street: Yup.string().required("Street Address is required"),
  apartment: Yup.string().required("Apartment is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCde: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Invalid Zip Code")
    .required("Zip code is required"),
});
