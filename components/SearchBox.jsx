import React from "react";
import css from "./SearchBox.scss";
import * as Yup from "yup";
import { Formik } from "formik";

const SearchBox = ({ submitCallback, defaultValue }) => (
  <div className={css.SearchBox}>
    <Formik
      initialValues={{ place: defaultValue || "" }}
      onSubmit={(values, { setSubmitting }) => {
        submitCallback(values.place);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        place: Yup.string().required("Sorry, but you need to fill this out")
      })}
    >
      {formikProps => {
        const {
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = formikProps;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="place">Type your City and press enter</label>
            <input
              id="place"
              type="text"
              value={values.place}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="eg. Sao Paulo, BR"
              autoFocus={true}
              className={errors.place && css.SearchBoxInputError}
            />
            <div className={css.InputFeedback}>{errors.place}</div>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default SearchBox;
