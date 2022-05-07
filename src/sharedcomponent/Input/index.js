import { useCallback } from "react";
import styles from "./style.module.css";

export default function Input(props) {
  const { value, setValue } = props;

  const handleInput = useCallback((event) => {
    setValue(event.target.value);
  });

  return (
    <div className={styles.form_group}>
      {props.label && (
        <label htmlFor={props.label}>
          {props.label}{" "}
          {props.optional && (
            <span className={styles.optional}>(optional)</span>
          )}{" "}
        </label>
      )}
      <input
        type={props.type}
        id={props.label}
        placeholder={props.placeholder}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
}
