import React, {useState} from 'react'
import './checkout-form.css';
import Product from "./Product.js";
import Address from "./Address.js";

function CheckoutForm() {
  //Logic to hide/show billing address
  const [shippingBillingAddressSame, setShippingBillingAddressSame] = useState(false);
  return (
    <div className="Page-Container">
      <form className="Checkout-Form"> 
        <h1>Shipping Address</h1>
        <Address/>
        <div className="Shipping-Address-Same">
          <input type="checkbox"  
            onClick= {() => setShippingBillingAddressSame(!shippingBillingAddressSame)}/>
          <label> Shipping address is the same as my billing address</label><br/>
        </div>

        {!shippingBillingAddressSame && <Address/>}
        
        <div className="Select-Payment">
          <input type="radio" name="payment" value="Credit"/> 
          <label> Credit Card</label>
        </div>
        <div className="Select-Payment">
          <input type="radio" name="payment" value="Debit"/>
          <label> Debit Card</label>
        </div>
        <div className="Select-Payment">
          <input type="radio" name="payment" value="Paypal"/>
          <label> Paypal</label>
        </div>

          <label> Name on Card</label>
          <input 
          type="text" 
          id="Name-On-Card"
          required
          />
          <label> Credit Card Number</label>
          <input 
          type="text" 
          id="CreditCard-Number"
          required
          />
          <label> Expiration</label>
          <input 
          type="text" 
          id="Expiration"
          required
          />
           <label>CVV</label>
          <input 
          type="text" 
          id="CVV"
          required
          />
          <input type="submit" value="Submit"></input>
      </form>
      <div className="Your-Cart">
        <div className="Cart-Heading">
          <h2>Your Cart</h2>
          <p>3 Items</p>
        </div>
        <div className="Cart-Container">
        <Product
          productName="PS5"
          productPrice="$499.99"
          briefDescription="The Ultimate Gaming Experience"
          />
         <Product
          productName="Canon 24mm Lense"
          productPrice="$129.99"
          briefDescription="Budget Lens for shooting video"
          />
          <Product
          productName="The Power of Broke Book by Daymond John"
          productPrice="$14.99"
          briefDescription="Learn from Shark Tank's Daymond John's journey
           from early beginnings to where he is today. "
          />
        </div>
        <div className="Cart-Total">
            <p>Total (USD)</p>
            <p>$644.97</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm
