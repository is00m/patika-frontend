import { useMemo, useState } from "react";
import SectionTitle from "../SectionTitle";
import bmiIndexImg from "../../assets/images/bmi-index.jpg";

function BmiSection() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = useMemo(() => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (!heightValue || !weightValue) {
      return null;
    }

    return weightValue / ((heightValue / 100) ** 2);
  }, [height, weight]);

  const bmiDisplay = bmi ? bmi.toFixed(1) : "0.0";
  const pointerLeft = bmi ? getPointerLeft(bmi) : "50%";

  return (
    <section className="bmi-section" id="bmi">
      <div className="container bmi-grid">
        <div>
          <SectionTitle
            title="BMI Calculator"
            text="Enter your height and weight to see your Body Mass Index. The arrow below highlights your current range on the chart."
            align="left"
          />
          <BmiForm
            height={height}
            weight={weight}
            onHeightChange={setHeight}
            onWeightChange={setWeight}
          />
        </div>
        <BmiChart value={bmiDisplay} pointerLeft={pointerLeft} />
      </div>
    </section>
  );
}

function getPointerLeft(bmi) {
  const min = 15;
  const max = 40;
  const percent = Math.min(Math.max((bmi - min) / (max - min), 0), 1);
  const adjusted = 5 + percent * 90;
  return `${adjusted}%`;
}

function BmiForm({ height, weight, onHeightChange, onWeightChange }) {
  return (
    <div className="bmi-form">
      <BmiField label="Your Height" unit="cm">
        <input
          id="heightInput"
          type="number"
          min="120"
          max="240"
          placeholder="Your Height"
          value={height}
          onChange={(event) => onHeightChange(event.target.value)}
        />
      </BmiField>
      <BmiField label="Your Weight" unit="kg">
        <input
          id="weightInput"
          type="number"
          min="30"
          max="200"
          placeholder="Your Weight"
          value={weight}
          onChange={(event) => onWeightChange(event.target.value)}
        />
      </BmiField>
    </div>
  );
}

function BmiField({ label, unit, children }) {
  return (
    <label className="bmi-field">
      <span>{label}</span>
      <BmiInput unit={unit}>{children}</BmiInput>
    </label>
  );
}

function BmiInput({ unit, children }) {
  return (
    <div className="bmi-input">
      {children}
      <span className="bmi-unit">{unit}</span>
    </div>
  );
}

function BmiChart({ value, pointerLeft }) {
  return (
    <div className="bmi-chart">
      <BmiOutput value={value} />
      <BmiImage pointerLeft={pointerLeft} />
    </div>
  );
}

function BmiOutput({ value }) {
  return (
    <div className="bmi-output">
      <p>Your BMI</p>
      <h3 id="bmiValue">{value}</h3>
    </div>
  );
}

function BmiImage({ pointerLeft }) {
  return (
    <div className="bmi-image">
      <img src={bmiIndexImg} alt="BMI chart" />
      <span className="bmi-pointer" id="bmiPointer" style={{ left: pointerLeft }} />
    </div>
  );
}

export default BmiSection;
