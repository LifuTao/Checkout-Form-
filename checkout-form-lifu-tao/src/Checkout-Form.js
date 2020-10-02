import React from 'react';
import './checkout-form.css';

function CheckoutForm() {
  return (
    <div>
      <form className="Checkout-Form"> 
        <input 
          type="text" 
          id="First-Name"
          placeholder="First Name"
          />
          <input 
          type="text" 
          id="Last-Name"
          placeholder="Last Name"
          />
          <input 
          type="text" 
          id="Username"
          placeholder="Username"
          />
          <input 
          type="email" 
          id="Email"
          placeholder="Email"
          />
          <input 
          type="text" 
          id="Address"
          placeholder="Address"
          />
          <div className="Country-State-Zip">
            <label for="country">Country:</label>
              <select name="cars" id="cars">
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
          </div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Shipping address is the same as my billing address</label><br/>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
          <label for="vehicle2"> Save this information for next time</label><br/>

          <input type="radio" name="payment" value="Credit"/> 
          <label> Credit Card</label>
          <input type="radio" name="payment" value="Debit"/>
          <label> Debit Card</label>
          <input type="radio" name="payment" value="Paypal"/>
          <label> Paypal</label>

          <label> Name on Card></label>
          <input 
          type="text" 
          id="Name-On-Card"
          />
          <label> Name on Card</label>
          <input 
          type="text" 
          id="Name-On-Card"
          />
          <label> Credit Card Number</label>
          <input 
          type="text" 
          id="CreditCard-Number"
          />
          <label> Expiration</label>
          <input 
          type="text" 
          id="Expiration"
          />
           <label>CVV</label>
          <input 
          type="text" 
          id="CVV"
          />

          
      </form>
    </div>
  );
}

export default CheckoutForm
