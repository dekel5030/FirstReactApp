import { Fragment } from "react";
import "../styles/form.css";

export default function Form({ title, fields }) {
  return (
    <form className="personal-details">
      <h1>{title}</h1>
      {fields.map(({ fieldName, fieldTitle, fieldValue, fieldOnChange }) => (
        <Fragment key={fieldName}>
          <label htmlFor={fieldName}>{fieldTitle}</label>
          <input
            type="text"
            id={fieldName}
            value={fieldValue}
            onChange={(e) => fieldOnChange(e.target.value)}
          />
        </Fragment>
      ))}
    </form>
  );
}
