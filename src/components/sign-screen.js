import { React, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios"; // Import axios

const SignScreen = ({ className = "" }) => {
  const navigate = useNavigate();

  // State to hold form values
  const [fullName, setFullName] = useState("");
  const [showroomName, setShowroomName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error messages

  const onCreateAccountClick = useCallback(async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        username: fullName, // Assuming username is the full name
        showroomName,
        email,
        password
      });
      navigate("/orders");
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.message || "Error creating account");
    }
  }, [fullName, showroomName, email, password, navigate]);

  const onAlreadyAMemberClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form
      style={{ width: "486px" }} // Set the width to 486px
      className={`m-0 flex max-w-full flex-col items-start justify-start gap-7 self-stretch rounded-xl bg-white px-[33px] pb-[27px] pt-[38px] [backdrop-filter:blur(45px)] mq700:box-border mq700:pb-5 mq700:pt-[25px] ${className}`}
    >
      <h1 className="relative z-[1] m-0 text-left text-13xl text-gray-200 mq950:text-7xl mq450:text-lgi">
        <span className="font-inter font-normal">Create </span>
        <span className="font-inter font-bold">Account</span>
      </h1>
      {error && (
        <div style={{ color: "red", fontSize: "12px", margin: "1px 0" }}>
          {error}
        </div>
      )}{" "}
      {/* Display error message */}
      <div className="flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
        <div className="relative z-[1] inline-block min-w-[42px] text-left font-inter text-base text-gray-200">
          Full Name
        </div>
        <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
          <input
            className="relative z-[2] inline-block w-full bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
            placeholder="What’s your full name?"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Update state on change
          />
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
        <div className="relative z-[1] inline-block min-w-[42px] text-left font-inter text-base text-gray-200">
          Showroom Name
        </div>
        <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
          <input
            className="relative z-[2] inline-block w-full bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
            placeholder="example.showroom.com"
            type="text"
            value={showroomName}
            onChange={(e) => setShowroomName(e.target.value)} // Update state on change
          />
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
        <div className="relative z-[1] inline-block min-w-[76px] text-left font-inter text-base text-gray-200">
          Email Address
        </div>
        <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
          <input
            className="relative z-[2] inline-block w-full bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
        <div className="relative z-[1] inline-block min-w-[76px] text-left font-inter text-base text-gray-200">
          Password
        </div>
        <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
          <input
            className="relative z-[2] inline-block w-full bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
            placeholder="Enter 8 characters or more"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 self-stretch mq450:gap-6">
        <div className="flex flex-col items-start justify-start gap-[19px] self-stretch">
          <button
            type="button"
            className="relative h-[50px] cursor-pointer self-stretch bg-transparent p-0 [border:none]"
            onClick={onCreateAccountClick} // Call the signup function
          >
            <div className="absolute left-0 top-0 z-[1] size-full cursor-pointer rounded-36xl bg-darkslateblue" />
            <div className="absolute left-[170px] top-[16px] z-[2] inline-block h-[19px] w-[119px] min-w-[119px] text-center font-inter text-base text-white">
              Create Account
            </div>
          </button>
          <div className="flex flex-row items-start justify-start self-stretch py-0 pl-[0px] pr-12 mq450:box-border mq450:px-5">
            <div
              className="relative z-[1] text-center font-inter text-xs"
              style={{ marginLeft: "120px" }}
            >
              <p className="m-0 text-gray-200">By signing up, you agree to</p>
              <p className="m-0">
                <span className="text-gray-200">{"our "}</span>
                <span className="text-darkslateblue">
                  communications and usage terms
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 flex w-full flex-row items-center justify-center py-0">
          <div
            className="relative z-[1] cursor-pointer text-center font-inter text-smi"
            onClick={onAlreadyAMemberClick}
          >
            <span className="text-gray-200">{"Already a member? "}</span>
            <span className="text-darkslateblue">Sign in</span>
          </div>
        </div>
      </div>
    </form>
  );
};

SignScreen.propTypes = {
  className: PropTypes.string
};

export default SignScreen;
