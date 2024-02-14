import React from "react";
import "./style.css";

export const ModalReportEmptyScreen = () => {
  return (
    <div className="modal-report-empty-screen">
      <div className="modal-report-empty-2">
        <div className="modal-3">
          <div className="modal-header-3">
            <div className="div-7">
              <div className="div-7">
                <div className="text-and-supporting-11">
                  <p className="text-56">
                    <span className="text-wrapper-59">New Incident Report</span>
                  </p>
                  <p className="supporting-text-9">
                    <span className="text-wrapper-60">Quickly create a new incident report</span>
                  </p>
                </div>
              </div>
              <div className="button-close-x-2">
                <img className="x-close-3" alt="X close" src="/img/x-close-1.png" />
              </div>
            </div>
            <img className="divider-7" alt="Divider" src="/img/divider-8.png" />
          </div>
          <div className="form-wrapper">
            <div className="form-4">
              <div className="row-13">
                <p className="text-57">
                  <span className="text-wrapper-61">Date of Incident</span>
                </p>
                <div className="input-field-7">
                  <div className="input-with-label-7">
                    <div className="input-10">
                      <div className="content-18">
                        <p className="text-58">
                          <span className="text-wrapper-62">mm/dd/yyyy</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-14">
                <p className="text-57">
                  <span className="text-wrapper-61">Time of Incident</span>
                </p>
                <div className="input-field-7">
                  <div className="input-with-label-7">
                    <div className="input-11">
                      <div className="add-on-2">
                        <p className="text-59">
                          <span className="text-wrapper-63">hh:mm</span>
                        </p>
                      </div>
                      <div className="text-input-2">
                        <p className="text-60">
                          <span className="text-wrapper-62">am/pm</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-15">
                <p className="text-57">
                  <span className="text-wrapper-61">Location</span>
                </p>
                <div className="input-field-7">
                  <div className="input-with-label-7">
                    <div className="input-10">
                      <div className="content-18">
                        <p className="text-58">
                          <span className="text-wrapper-62">select for location</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-16">
                <p className="text-57">
                  <span className="text-wrapper-61">Incident Type</span>
                </p>
                <div className="input-field-7">
                  <div className="input-with-label-7">
                    <div className="input-10">
                      <div className="content-18">
                        <p className="text-58">
                          <span className="text-wrapper-62">e.g. forklift collision with inventory</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-17">
                <p className="text-57">
                  <span className="text-wrapper-61">Severity</span>
                </p>
                <div className="input-field-7">
                  <div className="input-with-label-7">
                    <div className="input-10">
                      <div className="content-18">
                        <p className="text-58">
                          <span className="text-wrapper-62">select low/medium/high</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-18">
                <p className="text-57">
                  <span className="text-wrapper-61">Involved Parties</span>
                </p>
                <div className="input-12">
                  <div className="content-18">
                    <p className="text-58">
                      <input className="span-3" placeholder="search employee" type="text" />
                    </p>
                  </div>
                </div>
              </div>
              <img className="divider-8" alt="Divider" src="/img/divider-9.png" />
              <div className="row-19">
                <p className="text-57">
                  <span className="text-wrapper-61">Incident Description</span>
                </p>
                <div className="textarea-input-field-3">
                  <div className="input-with-label-8">
                    <div className="input-13">
                      <p className="text-61">
                        <span className="text-wrapper-62">describe the incident</span>
                      </p>
                    </div>
                  </div>
                  <p className="hint-text-2">
                    <span className="text-wrapper-60">
                      briefly describe: 1. employee&#39;s activity; 2. incident description; 3. injury/illness; 4.
                      injury cause.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-actions-3">
            <img className="divider-wrap-3" alt="Divider wrap" src="/img/divider-wrap-3.png" />
            <div className="content-19">
              <button className="buttons-button-9">
                <div className="text-padding-16">
                  <p className="text-62">
                    <span className="text-wrapper-64">Cancel</span>
                  </p>
                </div>
              </button>
              <div className="buttons-button-10">
                <div className="text-padding-17">
                  <p className="text-63">
                    <span className="text-wrapper-65">Add Incident</span>
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
