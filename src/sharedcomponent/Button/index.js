import styles from './style.module.css';

export default function Button(props){
    return (
        <button className={[styles.btn,styles.primary].join(' ')} {...props}>
            {props.text}
        </button>
    )
}