import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SideMenu = ({ className = "", onGroupContainerClick }) => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const onGroupContainerClick1 = useCallback(() => {
    navigate("/employees");
  }, [navigate]);

  return (
    <div
      className={`flex flex-row items-start justify-start px-6 pb-[413px] pt-0 text-left font-source-sans-pro text-base text-gray-100 mq975:box-border mq975:pb-[268px] mq450:box-border mq450:pb-[174px] ${className}`}
    >
      <div className="flex flex-1 flex-col items-start justify-start gap-[26px]">
        <div className="flex flex-row items-start justify-start self-stretch py-0 pl-px pr-0.5">
          <div className="flex flex-1 flex-col items-start justify-start gap-[26px]">
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-3">
              <div className="flex flex-row items-start justify-start gap-[19.8px]">
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
                  <img
                    className="relative size-[14.2px]"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
                <a className="relative text-[inherit] [text-decoration:none]">
                  Products
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                <img
                  className="relative h-[13px] w-[18px]"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <a className="relative inline-block min-w-[73px] text-[inherit] [text-decoration:none]">
                Customers
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[17.6px]">
          <div className="flex flex-col items-start justify-start gap-[31.4px]">
            <img
              className="relative size-[19.4px]"
              loading="lazy"
              alt=""
              src="/group-9.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 pl-px pr-0.5">
              <img
                className="relative size-[16.8px]"
                loading="lazy"
                alt=""
                src="/group-8.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start px-px py-0">
              <img
                className="relative size-[17px]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <a className="relative inline-block min-w-[61px] text-[inherit] [text-decoration:none]">
              Finances
            </a>
            <a className="relative inline-block min-w-[62px] text-[inherit] [text-decoration:none]">
              Analytics
            </a>
            <a className="relative inline-block min-w-[54px] text-[inherit] [text-decoration:none]">
              Referral
            </a>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start self-stretch py-0 pl-px pr-[7px]">
          <div className="flex flex-1 flex-row items-start justify-start gap-[17.9px]">
            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
              <div className="flex flex-col items-start justify-start gap-[32.4px]">
                <img
                  className="relative h-[14.2px] w-[18.1px]"
                  loading="lazy"
                  alt=""
                  src="/group-7.svg"
                />
                <img
                  className="relative size-[18.1px]"
                  loading="lazy"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className="relative size-[16.8px]"
                  loading="lazy"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start gap-[26px]">
              <a className="relative text-[inherit] [text-decoration:none]">
                Marketing
              </a>
              <a className="relative text-[inherit] [text-decoration:none]">
                Support
              </a>
              <a className="relative inline-block min-w-[56px] text-[inherit] [text-decoration:none]">
                Settings
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
          <div
            className="flex cursor-pointer flex-row items-start justify-start gap-[18px]"
            onClick={onGroupContainerClick}
          >
            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
              <img
                className="relative size-[18px]"
                loading="lazy"
                alt=""
                src="/employee1.svg"
              />
            </div>
            <a className="relative inline-block min-w-[75px] text-[inherit] [text-decoration:none]">
              Employees
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onGroupContainerClick: PropTypes.func
};

export default SideMenu;
