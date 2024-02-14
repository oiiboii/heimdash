import React from "react";
import "./style.css";

export const ModalReportEmpty = () => {
  return (
    <div className="modal-report-empty">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <div className="div">
              <div className="div">
                <div className="text-and-supporting">
                  <p className="text">
                    <span className="text-wrapper">New Incident Report</span>
                  </p>
                  <p className="supporting-text">
                    <span className="span">Quickly create a new incident report</span>
                  </p>
                </div>
              </div>
              <div className="button-close-x">
                <img className="x-close" alt="X close" src="/img/x-close-1.png" />
              </div>
            </div>
            <img className="divider" alt="Divider" src="/img/divider-8.png" />
          </div>
          <div className="content">
            <div className="form">
              <div className="row">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Date of Incident</span>
                </p>
                <div className="input-field">
                  <div className="input-with-label">
                    <div className="input">
                      <div className="div-wrapper">
                        <p className="p">
                          <span className="text-wrapper-3">11/1/2024</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-2">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Time of Incident</span>
                </p>
                <div className="input-field">
                  <div className="input-with-label">
                    <div className="input-2">
                      <div className="add-on">
                        <p className="text-2">
                          <span className="text-wrapper-4">12:35</span>
                        </p>
                      </div>
                      <div className="text-input">
                        <p className="text-3">
                          <span className="text-wrapper-3">AM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-3">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Location</span>
                </p>
                <div className="input-field">
                  <div className="input-with-label">
                    <div className="input">
                      <div className="div-wrapper">
                        <p className="p">
                          <span className="text-wrapper-3">West wing</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-4">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Incident Type</span>
                </p>
                <div className="input-field">
                  <div className="input-with-label">
                    <div className="input">
                      <div className="div-wrapper">
                        <p className="p">
                          <span className="text-wrapper-3">Forklift collision with inventory</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-5">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Severity</span>
                </p>
                <div className="input-field">
                  <div className="input-with-label">
                    <div className="input">
                      <div className="div-wrapper">
                        <p className="p">
                          <span className="text-wrapper-3">Low</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-6">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Involved Parties</span>
                </p>
                <div className="content-wrapper">
                  <div className="div-wrapper">
                    <p className="p">
                      <span className="text-wrapper-3">John Doe</span>
                    </p>
                  </div>
                </div>
              </div>
              <img className="img" alt="Divider" src="/img/divider-9.png" />
              <div className="row-7">
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Incident Description</span>
                </p>
                <div className="textarea-input-field">
                  <div className="input-wrapper">
                    <div className="input-3">
                      <p className="text-4">
                        <span className="text-wrapper-3">
                          Employee was driving forklift. <br />
                          Forklift collided with inventory. <br />
                          No damages. No injuries.
                          <br />
                          N/A
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="hint-text">
                    <span className="span">
                      briefly describe: 1. employee&#39;s activity; 2. incident description; 3. injury/illness; 4.
                      injury cause.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <img className="divider-wrap" alt="Divider wrap" src="/img/divider-wrap-3.png" />
            <div className="content-2">
              <button className="buttons-button">
                <div className="text-padding">
                  <p className="text-5">
                    <span className="text-wrapper-5">Cancel</span>
                  </p>
                </div>
              </button>
              <div className="text-padding-wrapper">
                <div className="text-padding-2">
                  <p className="text-6">
                    <span className="text-wrapper-6">Save Changes</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
