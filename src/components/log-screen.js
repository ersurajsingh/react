import { React, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios"; // Import axios

const LogScreen = ({ className = "" }) => {
  const navigate = useNavigate();

  // State to hold form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error messages

  const onSignInShapeClick = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/orders");
    } catch (err) {
      // Handle error (e.g., display error message)
      console.error(err.response.data);
      setError(err.response.data.message || "Error logging in");
    }
  }, [email, password, navigate]);

  const onNewToStockMasterClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <form
      style={{ width: "406px" }}
      className={`m-0 flex max-w-full flex-col items-start justify-start gap-7 self-stretch rounded-xl bg-white px-[43px] pb-[52px] pt-[69px] [backdrop-filter:blur(45px)] mq700:box-border mq700:px-[21px] mq700:pb-[34px] mq700:pt-[45px] ${className}`}
    >
      <h1 className="relative z-[1] m-0 inline-block max-w-full text-left text-13xl text-gray-200 mq950:text-7xl mq450:text-lgi">
        <span className="font-inter font-bold">{"Log in "}</span>
        <span className="font-inter font-normal">to your account</span>
      </h1>
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Display error message */}
      <div className="flex h-[238px] max-w-full flex-col items-start justify-start gap-8 self-stretch mq450:gap-4">
        <div className="flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
          <div className="relative z-[1] inline-block min-w-[42px] text-left font-inter text-base text-gray-200">
            Email
          </div>
          <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
            <input
              className="relative z-[2] inline-block w-[150px] bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </div>
        </div>
        <div className="flex h-[77px] max-w-full flex-col items-start justify-start gap-[7px] self-stretch">
          <div className="relative z-[1] inline-block min-w-[76px] text-left font-inter text-base text-gray-200">
            Password
          </div>
          <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 py-3.5">
            <input
              className="relative z-[2] inline-block w-28 bg-transparent p-0 text-left font-inter text-mini text-silver-100 [border:none] [outline:none]"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-12 self-stretch mq450:gap-6">
        <div className="flex flex-col items-start justify-start gap-[19px] self-stretch">
          <button
            type="button"
            className="relative h-[50px] cursor-pointer self-stretch bg-transparent p-0 [border:none]"
            onClick={onSignInShapeClick} // Call login function on click
          >
            <div className="absolute left-0 top-0 z-[1] size-full cursor-pointer rounded-36xl bg-darkslateblue" />
            <div className="absolute left-[174px] top-[16px] z-[2] inline-block h-[19px] w-[53px] min-w-[53px] text-left font-inter text-base text-white">
              Sign In
            </div>
          </button>
          <div className="flex flex-row items-start justify-start self-stretch py-0 pl-[137px] pr-[134px] mq450:box-border mq450:px-5">
            <div className="relative z-[1] inline-block min-w-[129px] text-left font-inter text-mini text-darkslateblue">
              Forgot Password?
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start self-stretch px-20 py-0 mq450:box-border mq450:px-5">
          <div
            className="relative z-[1] cursor-pointer text-left text-mini"
            onClick={onNewToStockMasterClick}
          >
            <p className="m-0">
              <span className="font-inter text-black">
                {"New to StockMaster? "}
              </span>
              <span className="font-inter font-medium text-darkslateblue">
                Get started
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

LogScreen.propTypes = {
  className: PropTypes.string
};

export default LogScreen;
