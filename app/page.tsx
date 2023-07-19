'use client'
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', name);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
