import { Button, Modal } from "react-bootstrap";
import { addShipping } from "./form-action";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { ShippingInfo } from "@prisma/client";

export default function AddressInfo({
  show,
  setShow,
  address,
  setAddress,
}: {
  show: boolean;
  setShow: (arg0: boolean) => void;
  address: ShippingInfo;
  setAddress: (arg0: ShippingInfo) => void;
}) {
  const handleClose = () => setShow(false);
  const [loading, setLoading] = useState(false);

  const handleAddNew = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(false);
    }, 2500);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Billing Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action={addShipping} className="modal-body">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Address Label
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="label"
                  required
                >
                  <option disabled>Select..</option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Division
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="division"
                  required
                >
                  <option disabled>Select..</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Chittagong<">Chittagong</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="sylhtet">sylhtet</option>
                  <option value="Rajshahi">Rajshahi</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="form-label fw-bold">
                District
                <span className="text-black">
                  <sup>*</sup>
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                name="district"
                required
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Thana/Upazilla
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="thana"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Postal Code
                </label>
                <span className="text-black">
                  <sup>*</sup>
                </span>
                <input
                  type="number"
                  placeholder="Type here"
                  name="postal"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Land Mark
                </label>
                <span className="text-black">
                  <sup>*</sup>
                </span>
                <input
                  type=""
                  placeholder="Type here"
                  name="landMark"
                  value={address?.landMark}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Road Number/Number
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="road"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  House Number/Block Number
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="house"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="" className="form-label fw-bold">
                  Flat Number
                </label>
                <span className="text-black">
                  <sup>*</sup>
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  name="flat"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <Button
            style={{
              position: "relative",
              marginLeft: "300px",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
            type="submit"
            variant="primary"
            onClick={handleAddNew}
          >
            {loading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            Add New
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
