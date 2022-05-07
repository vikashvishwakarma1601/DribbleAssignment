import { useRef, useEffect } from "react";
import styles from "./style.module.css";

export default function ProgressBar(props) {
  const ref = useRef(null);
  const counterWrapperRef = useRef(null);
  const { step, totalCounter } = props;

  useEffect(() => {
    if (ref && ref.current) {
      let counters = counterWrapperRef.current.children;
      let width = (step / totalCounter) * 100;
      ref.current.style.width = width + "%";
      if (counters) counters[step - 1].classList.add(styles.active);
    }
  }, [step]);

  const renderCounter = () => {
    let noOfCounter = Array(totalCounter).fill(0);
    return noOfCounter.map((_, counterValue) => (
      <span>{counterValue + 1}</span>
    ));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <span className={styles.lineFiller} ref={ref}></span>
      </div>
      <div className={styles.counterWrapper} ref={counterWrapperRef}>
        {renderCounter()}
      </div>
    </div>
  );
}
