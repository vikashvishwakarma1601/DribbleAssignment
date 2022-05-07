import { useCallback } from "react";
import styles from "./style.module.css";

export default function (props) {
  const { value, setValue } = props;

  const handleRadio = useCallback((event) => {
    setValue(event.target.value);
  });

  return (
    <div className={styles.form_group}>
      <input id={props.title} type="radio" name={props.name} onChange={handleRadio} value={value}></input>
      <label htmlFor={props.title}>
        {props.icon && <i className={props.icon} aria-hidden="true"></i>}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.desc}>{props.description}</p>
        </div>
      </label>
    </div>
  );
}
