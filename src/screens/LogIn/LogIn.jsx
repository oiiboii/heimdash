import React from "react";
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="log-in-wrapper">
        <div className="div-3">
          <div className="container-wrapper">
            <div className="container">
              <div className="content-7">
                <header className="header">
                  <div className="text-and-supporting-4">
                    <p className="text-23">
                      <span className="text-wrapper-24">Sign In</span>
                    </p>
                    <p className="supporting-text-5">
                      <span className="text-wrapper-25">Please enter your details to log in</span>
                    </p>
                  </div>
                </header>
                <div className="content-8">
                  <div className="form-3">
                    <div className="input-field-5">
                      <div className="input-with-label-5">
                        <p className="label-2">
                          <label className="text-wrapper-26" htmlFor="input-2">
                            Email
                          </label>
                        </p>
                        <div className="input-7">
                          <div className="content-9">
                            <p className="text-24">
                              <input className="span-2" id="input-2" placeholder="Enter your email" type="email" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-6">
                      <div className="input-with-label-5">
                        <p className="label-2">
                          <label className="text-wrapper-26" htmlFor="input-4">
                            Password
                          </label>
                        </p>
                        <div className="input-7">
                          <div className="content-9">
                            <p className="text-24">
                              <input className="span-2" id="input-4" placeholder="••••••••" type="text" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-12">
                    <div className="checkbox">
                      <div className="checkbox-base-wrapper">
                        <div className="checkbox-base" />
                      </div>
                      <div className="text-and-supporting-5">
                        <p className="text-25">
                          <span className="text-wrapper-26">Remember for 30 days</span>
                        </p>
                      </div>
                    </div>
                    <div className="buttons-button-5">
                      <p className="text-26">
                        <span className="text-wrapper-27">Forgot password</span>
                      </p>
                    </div>
                  </div>
                  <div className="actions" />
                </div>
              </div>
            </div>
          </div>
          <img className="group-6" alt="Group" src="/img/group-3064-1.png" />
        </div>
      </div>
    </div>
  );
};
