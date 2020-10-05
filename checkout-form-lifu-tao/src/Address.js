import React from 'react';
import './checkout-form.css';

function Address(props) {
  return (
    <div className="Address-Inputs">
      <input
        type="text"
        id="First-Name"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        id="Last-Name"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        id="Username"
        placeholder="Username"
        required
      />
      <input
        type="email"
        id="Email"
        placeholder="Email"
        required
      />
      <input
        type="text"
        id="Address"
        placeholder="Address"
        required
      />
      <div className="Country-State-Zip">
        <label for="country">Country</label>
        <select name="cars" id="cars" required>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </div>
    </div>
  );
}

export default Address
