import calculatePriceAfterDiscount from "@/utils/calculate-price-after-discount";
import countEMI from "@/utils/count-emi";
import { numberSeparator } from "@/utils/number-separator";
import AddToCart from "../../../(components)/AddToCart";
import prisma from "../../../../../../prisma/prisma";
import { Product } from "@prisma/client";

export const revalidate = 30;

const getProductOverview = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      brand: {
        include: {
          category: true,
        },
      },
    },
  });

  return product;
};

export default async function ProductOverview({ id }: { id: string }) {
  const product = await getProductOverview(id);

  return (
    <>
      <section className="product-tab-area">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="product-overview tab-pane fade py-5 show active"
              id="pills-overview"
              role="tabpanel"
              aria-labelledby="pills-overview-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-lg-7">
                  <picture>
                    <img
                      src="https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fe5081a13-0800-467e-ad00-5e09b0304d5d&w=1500&q=100"
                      alt=""
                      width="60%"
                      className="img-fluid"
                    />
                  </picture>
                </div>
                <div className="col-lg-5">
                  <div className="product-core mb-3">
                    <div className="text-muted fs-12 mb-2">Refrigerator</div>
                    <h1 className="product-title fs-20 fw-bold">
                      {product?.name}
                    </h1>
                    <div className="d-flex">
                      <div className="flex-item px-1">
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
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        {product?.brand?.name}
                      </div>
                      <div className="flex-item px-1 border-start text-primary">
                        <a href="/">
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
                              d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                            />
                          </svg>
                          View Bank Offers
                        </a>
                      </div>
                    </div>
                  </div>
                  {product?.stockAvailable ? (
                    <span className="product-status text-red fw-bold">
                      In stock
                    </span>
                  ) : (
                    <span className="product-status text-red fw-bold">
                      Out of stock
                    </span>
                  )}
                  <div className="d-flex align-items-center product-total mb-3">
                    <div className="product-price fw-bold">
                      &#2547;{" "}
                      {numberSeparator(
                        calculatePriceAfterDiscount(
                          product?.price!!,
                          product?.discount!!
                        )
                      )}
                    </div>
                    <div className="product-prev-price text-red fw-bold">
                      <del>&#2547; {numberSeparator(product?.price!)}</del>
                    </div>
                    <div className="total-save-amount">
                      <span className="badge bg-red p-2">
                        Save &#2547; {product?.exchangeOffer}
                      </span>
                    </div>
                    <div className="total-save-percentage text-red fw-bold">
                      {product?.discount}%
                    </div>
                  </div>
                  {product?.emiDuration !== 0 && (
                    <div className="product-on-emi mb-3">
                      <div className="emi-start fs-18 fw-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          style={{ width: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                        EMI From{" "}
                        {countEMI(product?.price!!, product?.emiDuration!!)}{" "}
                        Tk/month
                      </div>
                      <div className="d-flex fw-bold text-primary">
                        <div className="flex-item px-1">
                          <a href="/">Avail Bank EMI</a>
                        </div>
                        <div className="flex-item px-1 border-start">
                          <a href="/">Instant Loan</a>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="product-exchange fs-18 mb-3 fw-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>
                    Get Exchange upto {product?.exchangeOffer}Tk
                    <span>
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
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="product-specifications fw-bold">
                    <div className="text-muted mb-3">
                      <div className="row">
                        <div className="col-4 col-lg-3">Offer Valid:</div>
                        <div className="col-8 col-lg-9">
                          Online Offer (Valid Till: {product?.offerValidityTill}
                          )
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 col-lg-3">SKU:</div>
                        <div className="col-8 col-lg-9">{product?.sku}</div>
                      </div>
                      <div className="row">
                        <div className="col-4 col-lg-3">Model:</div>
                        <div className="col-8 col-lg-9">{product?.model}</div>
                      </div>
                    </div>
                    <ul
                      className="fw-normal mx-3"
                      style={{ listStyleType: "circle" }}
                    >
                      {product?.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-options mt-3 fw-bold">
                    <h3 className="fs-18 fw-bold">Options</h3>
                    <div className="py-3 my-3 border-top border-bottom">
                      <div className="mb-3">
                        <h3 className="fs-15 fw-bold">Exchange your device</h3>
                        {/* TODO: Exchange Device */}
                        <button className="btn border rounded py-4 px-5">
                          Yes
                        </button>
                        <button className="btn border rounded py-4 px-5">
                          No
                        </button>
                      </div>
                      <h3 className="fs-18 fw-bold">Warranty</h3>
                      <div className="border rounded p-4">
                        <div className="row align-items-center justify-content-between">
                          <div className="col">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              style={{ width: "20px" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                              />
                            </svg>
                          </div>
                          <div className="col-8">{product?.warrentyOn}</div>
                          <div className="col text-end">
                            {product?.warrentyType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-delivery fs-16 align-middle">
                      <div className="pd-item mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          style={{ width: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        Home Delivery
                        <br />
                        <a href="/" className="fw-normal text-primary">
                          Enable your location
                        </a>
                      </div>
                      <div className="pd-item mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          style={{ width: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                          />
                        </svg>
                        Store Pickup
                        <br />
                        <a href="/" className="fw-normal text-primary">
                          Enable your location
                        </a>
                      </div>
                      <div className="btn bg-red text-white fw-bold px-5">
                        <AddToCart product={product as Product} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
