import css from './ContactForm.module.css'
// бібліотека форми
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useId } from "react";
// бібліотека валідації
import * as Yup from "yup";

function ContactForm({onAdd}) {
  const initialValues = {
  username: "",
  number: ""
  };

    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const handleSubmit = (e) => {
      onAdd({
        id: Date.now(),
        name: e.target.elements.name.value,
        number: e.target.elements.number.value
      });
      console.log(e);
      e.resetForm();
    };
  
  const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.number().required()
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field className={css.field} type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="number" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />
				<button className={css.btn} type="submit">Submit</button>
			</Form>
    </Formik>
  )
}

export default ContactForm
