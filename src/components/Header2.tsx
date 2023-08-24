"use client";

import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import '../app/css/header2.css'
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

function AppNavbar() {
    const pathname = usePathname();

    const [show, setShow] = useState(false);
    const showDropdown = (e: any) => {
        setShow(!show);
    }
    const hideDropdown = (e: any) => {
        setShow(false);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top navbar-2" id="navbar">
            <Container className="container" fluid>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <picture className="ms-3">
                            <img
                                src="https://transcomdigital.com/_next/image?url=%2Ficons%2Ftranscom_logo.svg&w=1500&q=100"
                                alt=""
                            />
                        </picture>
                    </div>
                    <div>
                        <Link href="" className="header2-icon1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="header2-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                                />
                            </svg>
                        </Link>
                        <Link href="" className="header2-icon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="header2-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <Navbar.Collapse id="navbarScroll nav2">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ minHeight: "100vh" }}
                        navbarScroll
                    >
                        <Link href="">
                            <NavDropdown id="header2-dropdown" className="header2-border header2-dropdown" title="Products"
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <h6 className="header2-dropdown-item">
                                    TV
                                </h6>
                            </NavDropdown>
                        </Link>

                        <Link href="">
                            <h6
                                className={
                                    pathname == ""
                                        ? "navigation-link navigation-link-active header2-dropdown header2-dropdown2 header2-border"
                                        : "navigation-link navigation-link-inactive header2-dropdown header2-dropdown2 header2-border"
                                }
                            >
                                Products
                            </h6>
                        </Link>
                        <Link href="">
                            <h6
                                className={
                                    pathname == ""
                                        ? "navigation-link navigation-link-active header2-dropdown header2-dropdown2 header2-border"
                                        : "navigation-link navigation-link-inactive header2-dropdown header2-dropdown2 header2-border"
                                }
                            >
                                Products
                            </h6>
                        </Link>
                        <Link href="">
                            <h6
                                className={
                                    pathname == ""
                                        ? "navigation-link navigation-link-active header2-dropdown header2-dropdown2 header2-border"
                                        : "navigation-link navigation-link-inactive header2-dropdown header2-dropdown2 header2-border"
                                }
                            >
                                Products
                            </h6>
                        </Link>
                        <Link href="" className="header2-border"></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
