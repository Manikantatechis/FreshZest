import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer({ price }) {
  const location = useLocation();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const [showFooter, setShowFooter] = useState(true)
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (location.pathname.includes("/cart")) {
      setShowCheckoutButton(false);
      setShowFooter(true)
    }else if(location.pathname.includes("/Shipping")){
      setShowFooter(false)
    } else {
      setShowCheckoutButton(true);
      setShowFooter(true)

    }
  }, [location.pathname]);

  return (
    <footer>
      {key !== null && showFooter &&(
        <div className="subtotal">
          <span>Subtotal: ${price}</span>
          {showCheckoutButton ? (
            <Link to="/cart">
              <button>Check your Cart</button>
            </Link>
          ) : (
            <Link to="/Shipping">
              <button>Checkout</button>
            </Link>
          )}
        </div>
      )}
    </footer>
  );
}
