import { useState, useEffect } from "react";

export default function Step3({ data, onChange, next, back }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!data.jobTitle) temp.jobTitle = "Job title required";
    if (!data.company) temp.company = "Company required";
    if (!data.experience) temp.experience = "Experience required";
    if (!data.skills) temp.skills = "Add at least one skill";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

useEffect(() => {
  validate();
}, [data]);

  return (
    <div className="form-step">
      <h2>Employment Info</h2>
      <label>Job Title</label>
      <input name="jobTitle" value={data.jobTitle} onChange={onChange} />
      {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}

      <label>Company</label>
      <input name="company" value={data.company} onChange={onChange} />
      {errors.company && <p className="error">{errors.company}</p>}

      <label>Experience (Years)</label>
      <input name="experience" value={data.experience} onChange={onChange} />
      {errors.experience && <p className="error">{errors.experience}</p>}

      <label>Salary</label>
      <input name="salary" value={data.salary} onChange={onChange} />

      <label>Skills</label>
      <input name="skills" value={data.skills} onChange={onChange} />
      {errors.skills && <p className="error">{errors.skills}</p>}

      <div className="buttons">
        <button onClick={back}>Back</button>
        <button disabled={Object.keys(errors).length > 0} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
