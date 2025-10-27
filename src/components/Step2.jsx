export default function Step2({ data, onChange, next, back }) {
  return (
    <div className="form-step">
      <h2>Address Info</h2>
      <label>Address</label>
      <input name="address" value={data.address} onChange={onChange} />
      <label>City</label>
      <input name="city" value={data.city} onChange={onChange} />
      <label>State</label>
      <input name="state" value={data.state} onChange={onChange} />
      <label>Postal Code</label>
      <input name="postalCode" value={data.postalCode} onChange={onChange} />
      <label>Country</label>
      <input name="country" value={data.country} readOnly />
      <div className="buttons">
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
