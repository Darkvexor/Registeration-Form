import { useState, useEffect } from "react";

export default function Step1({ data, onChange, next }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!data.fullName.trim()) temp.fullName = "Full name is required";
    if (!data.email.includes("@")) temp.email = "Valid email required";
    if (!/^\d{10,15}$/.test(data.phone)) temp.phone = "Phone must be 10-15 digits";
    const age = new Date().getFullYear() - new Date(data.dob).getFullYear();
    if (age < 18 || !data.dob) temp.dob = "Must be 18+";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

useEffect(() => {
  validate();
}, [data]);

  return (
    <div className="form-step">
      <h2>Personal Info</h2>
      <label>Full Name</label>
      <input name="fullName" value={data.fullName} onChange={onChange} />
      {errors.fullName && <p className="error">{errors.fullName}</p>}

      <label>Email</label>
      <input name="email" value={data.email} onChange={onChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Phone</label>
      <input name="phone" value={data.phone} onChange={onChange} />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>Date of Birth</label>
      <input type="date" name="dob" value={data.dob} onChange={onChange} />
      {errors.dob && <p className="error">{errors.dob}</p>}

      <button disabled={Object.keys(errors).length > 0} onClick={next}>
        Next
      </button>
    </div>
  );
}
