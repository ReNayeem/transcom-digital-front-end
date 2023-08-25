"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import HeaderProducts from "./HeaderProducts";
import HeaderSearch from "./HeaderSearch";
import { CartContext } from "@/contexts/useCart";
import '../app/css/header.css'

export default function Header() {
  const toggleMenu = () => { };
  const { cart } = useContext(CartContext);
  const router = useRouter();

  const handleCart = () => {
    if (cart.length !== 0) {
      router.push("/cart");
    } else {
      alert("Add at least one item to cart");
    }
  };

  return (
    <header className="header-area fixed-top">
      <div className="header-top-area py-2 text-capitalize fs-12 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-headset header-icons"
                viewBox="0 0 16 16">
                <path
                  d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <span className="fw-bold">need help?</span>
              <Link href="" className="btn btn-sm btn-danger fs-12 mx-2">
                click here
                <span className="p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </span>
              </Link>
            </div>
            <div className="col-lg-6 text-end">
              <Link href="" className="border-end text-danger">b2b / dealership</Link>
              <Link href="" className="border-end text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6 header-icons">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                store location
              </Link>
              <Link href="" className="text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6 header-icons">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                track order status
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* search */}
        <div className="header-middle-area py-3 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1 d-lg-none">
                <div onClick={toggleMenu} id="open-menu-icon">
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
                <div onClick={toggleMenu} id="close-menu-icon" className="d-none">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </div>
              </div>
              <div className="col-5 col-lg-2">
                <Link href="/" className="header-logo">
                  <picture>
                    <img
                      src="https://transcomdigital.com/_next/image?url=%2Ficons%2Ftranscom_logo.svg&w=1500&q=100"
                      alt=""
                    />
                  </picture>
                </Link>
              </div>
              <HeaderSearch />
              <div className="col-4 offset-2 col-lg-2 offset-lg-0 text-end">
                <div className="row">
                  <Link href="/" className="col">
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
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                      />
                    </svg>
                  </Link>
                  <button
                    style={{
                      border: "none",
                      outline: "none",
                      background: "white",
                    }}
                    onClick={handleCart}
                    className="col"
                  >
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span>{cart.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* navigation */}
        <div className="header-bottom-area py-3 border-bottom fw-bold d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="menu">
                  <HeaderProducts />
                  <li className="d-inline">
                    <Link href={`#best-brands`} className="p-3">
                      Brands
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link href="" className="p-3">
                      Shohoj Kisti
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link href="" className="p-3">
                      Exchange
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link href="" className="p-3">
                      Gift Voucher
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link href="" className="p-3">
                      Campaign
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="actions text-end">
                  <Link href="" className="px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 header-icons"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Wishlist
                  </Link>
                  <Link href="/login" className="px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 header-icons"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
