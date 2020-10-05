import React from 'react';
import './checkout-form.css';

function Product(props) {
  return (
    <div className="Product-Container">
      <div className="Product-Top">
        <p className="Product-Name">
          {props.productName}
        </p>
        <p className="Product-Price">
          {props.productPrice}
        </p>
      </div>
      <p className="Brief-Description">
        {props.briefDescription}
      </p>
   </div>
  );
}

export default Product
