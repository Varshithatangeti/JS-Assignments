`//4.Write a react component that handles from submission and validators`
import React, { useState } from 'react';
const FormComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      <h1>Form Submission</h1>
      {submitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default FormComponent;
