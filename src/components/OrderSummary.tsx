"use client";

import useCart from "@/contexts/useCart";
import { numberSeparator } from "@/utils/number-separator";

export default function OrderSummary() {
  const deliveryCharge = 0;
  const { cart, subTotal, total, totalSaving } = useCart();

  return (
    <>
      <div className="col-lg-4 mt-5 mt-md-0">
        <div className="section-title border-bottom pb-3 mb-3">
          <h3 className="d-inline align-bottom fs-20 fw-bold">Order Summary</h3>
        </div>
        <div className="cart-summary d-block border rounded p-4 mb-3">
          <ul
            className="border-bottom mb-3"
            style={{ listStyleType: "circle" }}
          >
            {cart.map((item) => {
              return (
                <>
                  <li className="mb-3 d-flex">
                    <div className="col-8">{item.name}</div>
                    <div className="col-1">x1</div>
                    <div className="col-3 fw-bold">
                      &#2547;
                      {numberSeparator(item.offerPrice)}
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="row fs-16 mb-3">
            <div className="col-6">Subtotal:</div>
            <div className="col-6 text-end">
              &#2547;{numberSeparator(subTotal())}
            </div>
          </div>
          <div className="row fs-16 mb-3">
            <div className="col-6">Delivery Charge:</div>
            <div className="col-6 text-end">&#2547;{deliveryCharge}</div>
          </div>
          <div className="row fs-16 mb-3 border-top pt-3 fw-bold">
            <div className="col-6">Total:</div>
            <div className="col-6 text-end">
              &#2547;{numberSeparator(total())}
            </div>
          </div>
          <div className="row fs-16 mb-3 border-top pt-3 fw-bold">
            <div className="col-6 fs-14">Total Saving:</div>
            <div className="col-6 text-end fs-14">
              &#2547;{numberSeparator(totalSaving())}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
