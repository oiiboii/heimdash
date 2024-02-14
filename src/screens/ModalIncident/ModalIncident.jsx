import React from "react";
import "./style.css";

export const ModalIncident = () => {
  return (
    <div className="modal-incident">
      <div className="modal-wrapper-4">
        <div className="modal-6">
          <div className="modal-header-6">
            <div className="div-10">
              <div className="div-10">
                <div className="text-and-supporting-14">
                  <p className="text-69">
                    <span className="text-wrapper-73">OSHA 301 Incident Report</span>
                  </p>
                  <p className="supporting-text-12">
                    <span className="text-wrapper-74">Download form for your records</span>
                  </p>
                </div>
              </div>
              <div className="button-close-x-5">
                <img className="x-close-6" alt="X close" src="/img/x-close-1.png" />
              </div>
            </div>
            <img className="divider-13" alt="Divider" src="/img/divider-2.png" />
          </div>
          <div className="element-wrapper">
            <img className="element" alt="Element" src="/img/301-1-1.png" />
          </div>
          <div className="divider-wrap-6">
            <img className="divider-14" alt="Divider" src="/img/divider-2.png" />
            <div className="group-39">
              <div className="buttons-button-14">
                <img className="lightning-2" alt="Lightning" src="/img/lightning-01-2.png" />
                <div className="text-padding-21">
                  <p className="text-70">
                    <span className="text-wrapper-75">Autofill</span>
                  </p>
                </div>
              </div>
              <button className="buttons-button-15">
                <img className="download-3" alt="Download" src="/img/download-01-1.png" />
                <div className="text-padding-22">
                  <p className="text-71">
                    <span className="text-wrapper-76">Download</span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
