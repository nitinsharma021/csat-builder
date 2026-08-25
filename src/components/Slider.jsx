function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}) {
  return (
    <div className="slider-field">
      <div className="slider-header">
        <span>{label}</span>

        <span className="slider-value">
          {value}
          {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default Slider;