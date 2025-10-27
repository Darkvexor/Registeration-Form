export default function Step4({ data, back, submit, loading, onChange }) {
  return (
    <div className="form-step">
      <h2>Review & Submit</h2>

      <div className="review">
        <h3>Personal Info</h3>
        <p><strong>Full Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>

        <h3>Address Info</h3>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>State:</strong> {data.state}</p>
        <p><strong>Postal Code:</strong> {data.postalCode}</p>
        <p><strong>Country:</strong> {data.country}</p>

        <h3>Employment Info</h3>
        <p><strong>Job Title:</strong> {data.jobTitle}</p>
        <p><strong>Company:</strong> {data.company}</p>
        <p><strong>Experience:</strong> {data.experience} years</p>
        <p><strong>Salary:</strong> {data.salary}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
      </div>

      <label className="terms">
        <input
          type="checkbox"
          name="terms"
          checked={data.terms}
          onChange={onChange}
        />
        I agree to the terms and conditions
      </label>

      <div className="buttons">
        <button onClick={back}>Back</button>
        <button disabled={!data.terms || loading} onClick={submit}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
