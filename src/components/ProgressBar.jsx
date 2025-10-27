export default function ProgressBar({ step }) {
  const percent = ((step - 1) / 3) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      <p>Step {step} of 4</p>
    </div>
  );
}
