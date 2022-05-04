import react, { useRef, useEffect } from "react";
import "./style.css";

export default function ProgressBar(props) {
  const ref = useRef(null);
  const { step, totalStep } = props;

  useEffect(() => {
    if (ref && ref.current) {
      let width = (step/totalStep) * 100 ;
      ref.current.style.width = width+'%';
    }
  }, [step]);

  return (
    <div className="progressWrapper">
      <div className="progressLine">
        <span className="lineFiller" ref={ref}></span>
      </div>
      <div className="steps">
        <div className="step">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
      </div>
    </div>
  );
}
