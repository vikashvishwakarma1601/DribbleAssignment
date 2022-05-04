import styles from "./style.module.css";

export default function URLInput(props) {
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
      <div className={styles.input_wrapper}>
        <input
          placeholder={props.disabledText}
          disabled={true}
        />
        <input
          type={props.type}
          id={props.label}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
