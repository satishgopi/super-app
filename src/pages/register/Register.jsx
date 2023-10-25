import React, { useState } from "react";
import "../register/register.css";
import signupBg from "../../assets/img/signup-bg.png";
import FormInputs from "./FormInputs";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    userName: "",
    email: "",
    mobile: "",
  });
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const navigate = useNavigate();

  const inputs = [
    {
      id: "1",
      name: "firstName",
      type: "text",
      placeholder: "first Name",
      errorMessage: "Field is required",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "2",
      name: "userName",
      type: "text",
      placeholder: "userName",
      errorMessage: "Field is required",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "3",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Field is required",
      required: true,
    },
    {
      id: "4",
      name: "mobile",
      type: "number",
      placeholder: "mobile",
      errorMessage: "Field is required",
      required: true,
    },
  ];

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError(!e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      checkboxChecked &&
      Object.values(inputValues).every((value) => value.trim() !== "");

    if (isFormValid) {
      // Form is valid, save the data to local storage
      localStorage.setItem("formData", JSON.stringify(inputValues));

      // Navigate to the home page
      navigate("/category");
    } else {
      console.log("Form submission failed");
    }
  };
  return (
    <>
      <div className="register-box">
        <div className="left">
          <img src={signupBg} alt="" />
        </div>
        <div className="signup-wrapper">
          <h1>Super app</h1>
          <p>Create your new account</p>
          <form onSubmit={handleFormSubmit}>
            {inputs.map((input) => (
              <FormInputs
                key={input.id}
                {...input}
                value={inputValues[input.name]}
                onChange={handleInputChange}
              />
            ))}
            <div className="term-check-box">
              <div className="term-flex">
                <input
                  className="term-check-input"
                  type="checkbox"
                  checked={checkboxChecked}
                  onChange={handleCheckboxChange}
                  required
                />
                <span>Share my registration data with Superapp</span>
              </div>
              {checkboxError ? (
                <h4 className="error-msg">
                  Check this box if you want to proceed
                </h4>
              ) : (
                <></>
              )}
            </div>

            <button type="submit">SIGN UP</button>
            <div className="privacy-text">
              <p>
                By clicking on Sign up. you agree to Superapp
                <span style={{ display: "inline" }}>
                  {" "}
                  Terms and Conditions of Use
                </span>
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp
                <span style={{ display: "inline" }}> Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
