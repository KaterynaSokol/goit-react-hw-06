import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .matches(phoneRegExp, "The phone number must match the format 'xxx-xx-xx'")
    .required("Required!")
    .typeError("Enter phone-number!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid(5);
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          <span>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
        </label>

        <ErrorMessage
          className={css.inputErrorMsg}
          name="name"
          component="span"
        />

        <label className={css.label} htmlFor={numberFieldId}>
          <span>Number</span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
          />
        </label>

        <ErrorMessage
          className={css.errorText}
          name="number"
          component="span"
        />

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
