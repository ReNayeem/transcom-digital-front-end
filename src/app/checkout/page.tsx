"use client";

import { useState } from "react";
import OrderSummary from "../cart/OrderSummary";
import { ShippingInfo } from "@prisma/client";
import ShippingAddress from "./ShippingAddress";

export default function Home() {
  const [shippingAddress, setShippingAddress] = useState<ShippingInfo>();

  return (
    <>
      <section className="cart-area my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title border-bottom pb-3 mb-3">
                <h3 className="d-inline align-bottom fs-20 fw-bold">
                  Checkout Process
                </h3>
              </div>
              <div className="checkout-process mb-5">
                <div className="row justify-content-center align-items-center">
                  <div className="col-6 col-lg-4 text-end d-flex justify-content-end fw-bold">
                    <span className="step-icon text-white fs-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      01. <br />
                      Customer Info
                    </span>
                  </div>
                  <div className="col-lg-1 text-center d-none d-lg-block">
                    <span className="d-block border-top border-2 border-danger"></span>
                  </div>
                  <div className="col-6 col-lg-4 text-end d-flex">
                    <span className="step-icon text-white fs-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      02. <br />
                      Shipping Info
                    </span>
                  </div>
                </div>
              </div>
              <ShippingAddress
                address={shippingAddress as ShippingInfo}
                setAddress={setShippingAddress}
              />
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 fs-10">
                  By clicking the next button, you agree with the{" "}
                  <a href="/" className="text-primary fw-bold">
                    Terms & Conditions.
                  </a>
                </div>
                <div className="col-lg-3 text-center">
                  <a href="/" className="text-red">
                    Back
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    // onClick={handleNext}
                    className="btn bg-red d-block text-white"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
            <OrderSummary subTotal={0} total={0} totalSaving={0} />
          </div>
        </div>
      </section>
    </>
  );
}
