import css from './ContactForm.module.css';
// бібліотека форми
import { Formik, Form, Field, ErrorMessage } from 'formik';
// бібліотека валідації
import * as Yup from "yup";

function ContactForm({ onAdd }) {
  const initialValues = {
    username: "",
    number: ""
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    
    onAdd({
      id: Date.now(),
      name: values.username,
      number: values.number
    });

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only numbers allowed")
      .required("Required")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor="username">Username</label>
        <Field className={css.field} type="text" name="username" id="username" />
        <ErrorMessage name="username" component="span" />

        <label htmlFor="number">Number</label>
        <Field className={css.field} type="text" name="number" id="number" />
        <ErrorMessage name="number" component="span" />

        <button className={css.btn} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
