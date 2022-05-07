import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  let ref = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  
  useEffect(() => {
    if (ref && ref.current) {
      let loaderItem = ref.current.children;
      let idx = 0;
      let id = setInterval(() => {
        loaderItem[idx].classList.add(styles.active);

        if (idx > 0) {
          loaderItem[idx - 1].classList.remove(styles.active);
        }
        if (idx == 0) {
          loaderItem[loaderItem.length - 1].classList.remove(styles.active);
        }
        idx < loaderItem.length - 1 ? idx++ : (idx = 0);
      }, 300);
      setIntervalId(id);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.loader} ref={ref}>
      <div className={[styles.box, styles.color_8a2be2].join(" ")}></div>
      <div className={[styles.box, styles.color_2b96e2].join(" ")}></div>
      <div className={[styles.box, styles.color_2be26c].join(" ")}></div>
      <div className={[styles.box, styles.color_e2bb2b].join(" ")}></div>
      <div className={[styles.box, styles.color_546e7a].join(" ")}></div>
    </div>
  );
}
