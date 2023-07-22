import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="footer justify-content-center align-items-center mt-5">
      <Col sm={3} className="d-flex justify-content-center">
        <span dir="ltr"> © 2023 Epic bnb, Inc.</span>
      </Col>
      <Col sm={2} className="d-flex justify-content-start">
        <span>
          <a
            className="text-decoration-none text-light"
            href="https://github.com/VittoriaBasile/progetto-finale-front-end"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="me-2"
            >
              <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
            contatti
          </a>
        </span>
      </Col>
      <Col sm={2} className="d-flex justify-content-start">
        <span>
          <a
            className="text-decoration-none text-light"
            href="https://github.com/VittoriaBasile/progetto-finale-front-end"
          >
            <svg
              fill="white"
              width="30"
              height="30"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <g>
                <path d="M54.995,27.783C54.877,12.995,42.815,1,28,1C13.112,1,1,13.112,1,28c0,14.815,11.995,26.877,26.783,26.995   C31.335,59.837,37.048,63,43.5,63C54.252,63,63,54.252,63,43.5C63,37.048,59.837,31.335,54.995,27.783z M25.222,50.229   c-2.08-2.07-4.737-5.17-6.824-9.116c1.721-0.429,3.692-0.766,5.909-0.951C24.118,41.249,24,42.36,24,43.5   C24,45.868,24.445,48.128,25.222,50.229z M24.772,38.12c-2.775,0.19-5.204,0.603-7.279,1.143c-1.356-3.02-2.319-6.464-2.465-10.263   H27v4.155C26.039,34.683,25.282,36.348,24.772,38.12z M29,4.105c2.099,1.838,5.86,5.572,8.614,10.78   c-2.388,0.594-5.249,1.016-8.614,1.089V4.105z M27,4.107v11.867c-3.353-0.074-6.21-0.498-8.598-1.094   C21.156,9.674,24.904,5.943,27,4.107z M27,17.974V27H15.027c0.147-3.801,1.11-7.247,2.468-10.269   C20.109,17.412,23.266,17.897,27,17.974z M13.026,27H3.025c0.215-5.427,2.168-10.413,5.317-14.419   c1.228,0.923,3.564,2.394,7.178,3.577C14.138,19.339,13.167,22.97,13.026,27z M13.026,29c0.141,4.031,1.112,7.663,2.495,10.843   c-3.61,1.181-5.95,2.652-7.179,3.575C5.193,39.412,3.24,34.427,3.025,29H13.026z M29,29h1.507c-0.53,0.475-1.032,0.978-1.507,1.507   V29z M33.155,27H29v-9.026c3.737-0.077,6.897-0.563,9.512-1.244c1.019,2.268,1.815,4.775,2.21,7.492   C37.973,24.616,35.411,25.581,33.155,27z M42.715,24.04c-0.403-2.864-1.206-5.5-2.241-7.88c3.616-1.183,5.955-2.655,7.183-3.579   c3.043,3.871,4.97,8.657,5.29,13.873C50.146,24.895,46.927,24,43.5,24C43.235,24,42.978,24.029,42.715,24.04z M46.357,11.051   c-1.133,0.831-3.336,2.186-6.749,3.275C36.963,9.134,33.363,5.331,31,3.186C37.042,3.913,42.427,6.798,46.357,11.051z    M24.996,3.187c-2.364,2.144-5.964,5.945-8.606,11.127c-3.399-1.088-5.604-2.439-6.743-3.267   C13.577,6.797,18.958,3.914,24.996,3.187z M9.646,44.952c1.141-0.83,3.347-2.186,6.741-3.273c2.642,5.185,6.245,8.99,8.61,11.134   C18.958,52.086,13.575,49.203,9.646,44.952z M43.5,61C33.851,61,26,53.149,26,43.5S33.851,26,43.5,26S61,33.851,61,43.5   S53.149,61,43.5,61z" />

                <path d="M52,35H35c-3.86,0-7,3.14-7,7v4c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-1h11v1c0,1.654,1.346,3,3,3h4   c1.654,0,3-1.346,3-3v-4C59,38.14,55.86,35,52,35z M35,47h-4c-0.551,0-1-0.449-1-1v-1h6v1C36,46.551,35.551,47,35,47z M37,43h-1h-6   v-1c0-2.757,2.243-5,5-5h17c2.757,0,5,2.243,5,5v1h-6h-1H37z M56,47h-4c-0.551,0-1-0.449-1-1v-1h6v1C57,46.551,56.551,47,56,47z" />
              </g>
            </svg>
            assistenza
          </a>
        </span>
      </Col>
    </Row>
  );
};

export default Footer;