import * as Yup from "yup";

export const Validation = Yup.object({
  id: Date.now(),
  name: Yup.string().min(3).required("Please fill the box"),
  status: Yup.boolean().required("Please select one"),
  date: Yup.number().required("Add the first activated date"),
  datesOfActive : Yup.number(30)
});
