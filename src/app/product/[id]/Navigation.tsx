"use client";

import SideInfo from "./SideInfo";

interface NavigationProps {
  id: string;
  name: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProductNavigation(props: NavigationProps) {
  return (
    <>
      <section className="product-details-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="product-title fs-18" style={{ fontWeight: "700", fontSize: 24 }}>
                {props.name}
              </h1>
              <ul className="nav nav-pills mt-3 fs-16" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <div
                    className={props.activeTab === "overview" ? "active pill-active" : ""}
                    id="pills-overview-tab"
                    data-bs-toggle="pill"
                    style={{ cursor: "pointer" }}
                    data-bs-target="#pills-overview"
                    role="tab"
                    aria-controls="pills-overview"
                    aria-selected="true"
                    onClick={() => props.setActiveTab("overview")}
                  >
                    Overview
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div
                    className={props.activeTab === "feature" ? "active pill-active" : ""}
                    id="pills-feature-tab"
                    data-bs-toggle="pill"
                    style={{ cursor: "pointer" }}
                    data-bs-target="#pills-feature"
                    role="tab"
                    aria-controls="pills-feature"
                    aria-selected="false"
                    onClick={() => props.setActiveTab("feature")}
                  >
                    Feature
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div
                    className={props.activeTab === "specification" ? "active pill-active" : ""}
                    id="pills-specification-tab"
                    data-bs-toggle="pill"
                    style={{ cursor: "pointer" }}
                    data-bs-target="#pills-specification"
                    role="tab"
                    aria-controls="pills-specification"
                    aria-selected="false"
                    onClick={() => props.setActiveTab("specification")}
                  >
                    Specification
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div
                    className={props.activeTab === "review" ? "active pill-active" : ""}
                    id="pills-review-tab"
                    data-bs-toggle="pill"
                    style={{ cursor: "pointer" }}
                    data-bs-target="#pills-review"
                    role="tab"
                    aria-controls="pills-review"
                    aria-selected="false"
                    onClick={() => props.setActiveTab("review")}
                  >
                    Review
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div
                    className={props.activeTab === "policy" ? "active pill-active" : ""}
                    id="pills-policy-tab"
                    data-bs-toggle="pill"
                    style={{ cursor: "pointer" }}
                    data-bs-target="#pills-policy"
                    role="tab"
                    aria-controls="pills-policy"
                    aria-selected="false"
                    onClick={() => props.setActiveTab("policy")}
                  >
                    Product Policy
                  </div>
                </li>
              </ul>
            </div>
            {/* <SideInfo id={props.id} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
