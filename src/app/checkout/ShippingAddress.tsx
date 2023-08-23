import { useState } from "react";
import AddressInfo from "./AddressInfo";
import { ShippingInfo } from "@prisma/client";

export default function ShippingAddress({
  address,
  setAddress,
}: {
  address: ShippingInfo;
  setAddress: (arg0: ShippingInfo) => void;
}) {
  const [showBilling, setShowBilling] = useState(false);

  return (
    <div className="billing-info mb-5">
      <div className="section-title border-bottom pb-3 mb-3">
        <h3 className="d-inline align-bottom fs-20 fw-bold">
          Billing Information
        </h3>
      </div>
      <a
        onClick={() => setShowBilling(true)}
        className="info p-5 d-block rounded bg-light fs-20"
        data-bs-toggle="modal"
        data-bs-target="#billingModal"
        style={{ cursor: "pointer" }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
        Add New Address
      </a>
      <AddressInfo
        show={showBilling}
        setShow={setShowBilling}
        from="BILLING"
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
}
