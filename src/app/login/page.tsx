"use client";

import { CartContext } from "@/contexts/useCart";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Login() {
  const { cart } = useContext(CartContext);
  const cookiePhone = getCookie("USER-PHONE");
  const [phone, setPhone] = useState(cookiePhone);
  const router = useRouter();

  const handleNext = () => {
    setCookie("USER-PHONE", phone);

    if (cart.length !== 0) {
      router.push("/checkout");
    } else {
      router.push("/");
    }
  };

  return (
    <section className="login-area my-5">
      <div className="container">
        <div className="col-lg-5 mx-auto">
          <div className="section-title">
            <h3 className="fs-20 mb-3">Log In</h3>
            <p className="border-top py-3">
              Welcome back! Enter your mobile phone number to log in to your
              account. If you are a new user, your account will be created.
            </p>
            <div className="form-group mb-3">
              <label htmlFor="" className="form-label d-block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter phone number here..."
                // @ts-ignore
                value={!phone ? "" : phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              onClick={handleNext}
              className="btn bg-red text-white col-12"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
