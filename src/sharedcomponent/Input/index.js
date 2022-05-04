import styles from './style.module.css';

export default function Input(props){


    return (
        <div className={styles.form_group}>
            {props.label && (<label htmlFor={props.label}>{props.label} {props.optional && <span className={styles.optional}>(optional)</span>} </label>)}
            <input type={props.type} id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}