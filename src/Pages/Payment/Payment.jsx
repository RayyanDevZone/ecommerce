import React from "react";
import "./Payment.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import png1 from "../../Images/pngwing.com (1).png";
import png2 from "../../Images/pngwing.com (2).png";
import png3 from "../../Images/pngwing.com (3).png";
import png4 from "../../Images/pngwing.com (4).png";
import googlePay from "../../Images/gpay.png";
import paytm from "../../Images/paytm.png";
import phonePe from "../../Images/phonepe.png";
const Payment = () => {
  return (
    <div className="payment">
      <div className="inside-payment">
        <div className="head">
          <h1>Select a Payment Method</h1>
        </div>
        <div className="select-card">
          <div className="card-head">
            <h2>CREDIT & DEBIT CARDS </h2>
          </div>
          <div className="add-card">
            <h3>
              Add Card <AiOutlinePlusCircle />
            </h3>
            <div className="card-png">
              <img src={png1} />
              <img src={png2} />
              <img src={png3} />
              <img src={png4} />
            </div>
          </div>
          <div className="card-head">
            <h2>NET BANKING/UPI </h2>
          </div>
          <div className="online-pay">
          <div className="inside-online-pay">
            <label>
              <input type="radio" name="paymentMethod" value="googlePay" />
              Google Pay
              <img src={googlePay} alt="Google Pay" className="png" />
            </label>
            </div>
            <div className="inside-online-pay">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paytm"
                
              />
              Paytm
              <img src={paytm} alt="Paytm" className="png" />
            </label>
            </div>
            <div className="inside-online-pay">

            
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="phonePe"
                
              />
              PhonePe
              <img src={phonePe} alt="PhonePe" className="png" />
            </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
