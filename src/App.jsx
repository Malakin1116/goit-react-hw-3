import { Formik, Form, Field } from 'formik';


export default function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) =>{
        console.log(values);
        actions.resetForm();
      }}
    >
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" type="text" />
          </div>
          <div>
            <label>Number:</label>
            <Field name="number" type="text" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
    </Formik>
  );
}
