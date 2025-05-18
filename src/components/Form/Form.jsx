import { Fragment } from "react";
import styles from "./Form.module.css";

export default function Form({ fields, className = "" }) {
  return (
    <form className={`${styles.form} ${className}`}>
      {fields.map(({ fieldName, fieldTitle, fieldValue, fieldOnChange }) => (
        <Fragment key={fieldName}>
          <label htmlFor={fieldName} className={styles.label}>
            {fieldTitle}
          </label>
          <input
            type="text"
            id={fieldName}
            value={fieldValue}
            onChange={(e) => fieldOnChange(e.target.value)}
            className={styles.input}
          />
        </Fragment>
      ))}
    </form>
  );
}
