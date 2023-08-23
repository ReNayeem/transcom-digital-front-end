"use client";

import Link from "next/link";
import { useContext } from "react";
import { numberSeparator } from "@/utils/number-separator";
import { CartContext } from "@/contexts/useCart";
import OrderSummary from "@/components/OrderSummary";

export default function Home() {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <>
      <section className="cart-area my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title border-bottom pb-3 mb-3">
                <h3 className="d-inline align-bottom fs-20 fw-bold">
                  Your Cart
                </h3>
              </div>
              {cart.length === 0 && (
                <div className="text-center" style={{ marginTop: "100px" }}>
                  <h1 className="fs-20 fw-bold">Your cart is empty!</h1>
                  <p className="fs-14">Add something to make me happy </p>
                  <Link href="/" className="btn bg-red text-white">
                    Continue Shopping
                  </Link>
                </div>
              )}
              {cart.length !== 0 &&
                cart.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="cart-item d-block border rounded p-4 mb-3"
                      >
                        <div className="row align-items-center">
                          <div className="col-3 col-lg-2">
                            <picture>
                              <img
                                src={item.thumbnail}
                                className="img-fluid"
                                alt="Product Image"
                              />
                            </picture>
                          </div>
                          <div className="col-8 col-lg-6">
                            <div className="text-muted fs-12 mb-2">
                              {/* @ts-ignore */}
                              {item.brand?.category.name}
                            </div>
                            <h1 className="product-title fs-18 fw-bold">
                              {item.name}
                            </h1>

                            <div
                              className="mt-4 text-red fs-12"
                              onClick={() => removeItem(item.id)}
                              style={{ cursor: "pointer" }}
                            >
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
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </span>
                              Remove
                            </div>
                          </div>
                          {/*<div className="col-2 col-lg-1 p-0">*/}
                          {/*  <span className="fs-12 text-muted">Quantity:</span>*/}
                          {/*  <select name="" id="" className="form-control form-select mt-1 py-1">*/}
                          {/*    <option value="1">1</option>*/}
                          {/*    <option value="2">2</option>*/}
                          {/*    <option value="3">3</option>*/}
                          {/*    <option value="4">4</option>*/}
                          {/*    <option value="5">5</option>*/}
                          {/*  </select>*/}
                          {/*</div>*/}
                          <div className="col-6 offset-4 col-lg-3 offset-lg-0 text-end">
                            <span className="fs-12 text-muted">Price:</span>
                            <div className="mt-1">
                              <del className="text-red">
                                &#2547; {numberSeparator(item.salePrice)}
                              </del>
                              <br />
                              <span className="fw-bold fs-20">
                                &#2547; {numberSeparator(item.offerPrice)}
                              </span>
                              <span className="badge bg-red p-2">
                                Save &#2547; {numberSeparator(0)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
}
