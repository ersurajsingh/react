import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "./side-menu";
import PropTypes from "prop-types";

const Sidebar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/employees");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    // Remove token from local storage
    localStorage.removeItem("token");

    // Redirect to login page after logout
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`flex w-[198px] flex-col items-start justify-start gap-5 text-left font-source-sans-pro text-base text-gray-100 mq1025:hidden ${className}`}
    >
      <button className="flex cursor-pointer flex-row items-start justify-start gap-[17.9px] self-stretch rounded-8xs bg-darkslateblue px-[25px] pb-[9px] pt-3 [border:none]">
        <div className="relative hidden h-[41px] w-[198px] rounded-8xs bg-darkslateblue" />
        <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
          <img
            className="relative z-[1] h-[16.8px] w-[18.1px]"
            alt=""
            src="/group-121.svg"
          />
        </div>
        <a className="relative z-[1] inline-block min-w-[47px] text-left font-source-sans-pro text-base text-white [text-decoration:none]">
          Orders
        </a>
      </button>
      <SideMenu onGroupContainerClick={onGroupContainerClick} />
      <div className="flex flex-row items-start justify-start px-[25px] py-0 font-inter text-mini">
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
            <img
              className="relative size-4"
              loading="lazy"
              alt=""
              src="/group-3366.svg"
            />
          </div>
          <div
            className="relative inline-block min-w-[50px] cursor-pointer font-medium leading-[22px] tracking-[-0.41px] text-red-500"
            onClick={onLogoutClick} // Call logout function on click
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string
};

export default Sidebar;
