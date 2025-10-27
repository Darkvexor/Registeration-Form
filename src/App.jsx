import { useState } from "react";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Nigeria",
    jobTitle: "",
    company: "",
    experience: "",
    salary: "",
    skills: "",
    terms: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Registration Successful!");
      console.log(formData);
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <ProgressBar step={step} />
      {step === 1 && (
        <Step1 data={formData} onChange={handleChange} next={nextStep} />
      )}
      {step === 2 && (
        <Step2 data={formData} onChange={handleChange} next={nextStep} back={prevStep} />
      )}
      {step === 3 && (
        <Step3 data={formData} onChange={handleChange} next={nextStep} back={prevStep} />
      )}
      {step === 4 && (
        <Step4
            data={formData}
    onChange={handleChange}
    back={prevStep}
    submit={handleSubmit}
    loading={loading}
        />
      )}
    </div>
  );
}
