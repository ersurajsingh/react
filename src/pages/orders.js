import { React, useCallback } from "react";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "List-Delete" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/ordersdetails");
  }, [navigate]);

  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start gap-[49px] overflow-hidden bg-whitesmoke-200 px-0 pb-[29px] pt-0 leading-[normal] tracking-[normal] mq725:gap-6">
      <header className="sticky top-0 z-[99] box-border flex max-w-full flex-row items-start justify-between gap-5 self-stretch bg-darkslateblue pb-[9px] pl-[15px] pr-3.5 pt-2.5 text-center font-source-sans-pro text-5xl text-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)]">
        <div className="relative hidden h-[50px] w-[1920px] max-w-full bg-darkslateblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)]" />
        <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
          <h2 className="relative z-[2] m-0 inline-block min-w-[127px] self-stretch font-[inherit] text-inherit font-normal">
            StockMaster
          </h2>
        </div>
        <img
          className="relative z-[2] size-[30px] object-cover"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </header>
      <main className="box-border flex max-w-full flex-row items-start justify-start px-2 py-0">
        <section className="relative flex max-w-full flex-1 flex-row items-start justify-start gap-[49px] text-left font-inter text-3xl text-gray-100 mq725:gap-6">
          <Sidebar />
          <div className="flex max-w-[calc(100%_-_247px)] flex-1 flex-col items-start justify-start gap-[38px] mq1025:max-w-full mq725:gap-[19px]">
            <div className="flex max-w-full flex-col items-start justify-start gap-6 self-stretch">
              <a className="relative inline-block min-w-[76px] font-bold text-[inherit] [text-decoration:none] mq450:text-lg">
                Orders
              </a>
              <div className="flex max-w-full flex-row items-start justify-between gap-5 self-stretch text-mini text-darkgray mq975:flex-wrap">
                <div className="flex w-[350px] max-w-full flex-row items-start justify-start gap-5">
                  <div className="box-border flex h-[50px] flex-1 flex-row items-start justify-start rounded-8xs border border-solid border-silver-100 px-5 py-3.5">
                    <div className="relative box-border hidden h-[50px] w-[280px] rounded-8xs border border-solid border-silver-100" />
                    <a className="relative z-[1] inline-block min-w-[51px] text-[inherit] [text-decoration:none]">
                      Search
                    </a>
                  </div>
                  <div className="relative size-[50px] rounded-8xs bg-cornflowerblue-100">
                    <div className="absolute left-0 top-0 hidden size-full rounded-8xs bg-cornflowerblue-100" />
                    <img
                      className="absolute inset-[30%] z-[1] size-2/5 max-h-full max-w-full overflow-hidden object-contain"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>
                <div className="flex max-w-full flex-row items-start justify-start gap-4">
                  <button className="flex flex-1 cursor-pointer flex-row items-start justify-start gap-[15px] self-stretch rounded-8xs border-[1.5px] border-solid border-darkslateblue bg-transparent py-3.5 pl-[47px] pr-[39px] hover:box-border hover:border-[1.5px] hover:border-solid hover:border-cornflowerblue-200 hover:bg-cornflowerblue-300">
                    <div className="relative box-border hidden h-[50px] w-[171px] rounded-8xs border-[1.5px] border-solid border-darkslateblue" />
                    <img
                      className="relative z-[1] size-[16.8px]"
                      alt=""
                      src="/page1.svg"
                    />
                    <a className="relative z-[1] inline-block min-w-[50px] text-left font-inter text-mini font-semibold text-darkslateblue [text-decoration:none]">
                      Export
                    </a>
                  </button>
                  <button className="flex flex-[0.8902] cursor-pointer flex-row items-start justify-start gap-[11px] rounded-8xs bg-darkslateblue py-4 pl-[51px] pr-[47px] [border:none]">
                    <div className="relative hidden h-[50px] w-[171px] rounded-8xs bg-darkslateblue" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                      <img
                        className="relative z-[1] h-[17px] w-[13px]"
                        alt=""
                        src="/vector-31.svg"
                      />
                    </div>
                    <a className="relative z-[1] inline-block min-w-[49px] text-left font-inter text-mini font-semibold text-white [text-decoration:none]">
                      Action
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="box-border flex h-[813px] flex-col items-start justify-start gap-[23px] self-stretch rounded-3xs bg-white px-0 pb-[23px] pt-8 font-source-sans-pro text-mini"
              data-acc-group
            >
              <div className="relative hidden h-[813px] w-[1625px] rounded-3xs bg-white" />
              <div className="box-border flex h-5 w-[1594px] flex-row items-start justify-center px-5 py-0 text-base text-darkgray">
                <div className="flex h-5 w-[1378px] flex-row items-start justify-start gap-[45px]">
                  <div className="box-border flex h-5 w-[90px] flex-col items-start justify-start py-0 pl-0 pr-5">
                    <div className="relative z-[1] inline-block h-5 w-[59px] shrink-0 font-semibold">
                      Order ID
                    </div>
                  </div>
                  <div className="box-border flex h-5 w-[172px] flex-col items-start justify-start py-0 pl-0 pr-5">
                    <div className="relative z-[1] inline-block h-5 w-[33px] shrink-0 font-semibold">
                      Date
                    </div>
                  </div>
                  <div className="box-border flex h-5 w-[151px] flex-col items-start justify-start py-0 pl-0 pr-5">
                    <div className="relative z-[1] inline-block h-5 w-28 shrink-0 font-semibold">
                      Customer Name
                    </div>
                  </div>
                  <div className="relative z-[1] inline-block h-5 w-[63px] shrink-0 font-semibold">
                    Payment
                  </div>
                  <div className="relative z-[1] inline-block h-5 w-[73px] shrink-0 ml-20 font-semibold">
                    Fulfilment
                  </div>
                  <div className="relative z-[1] inline-block h-5 w-9 shrink-0 font-semibold">
                    Total
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                      <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                        $40
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px] cursor-pointer"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                          onClick={onGroupIconClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div
                  className="z-[1] flex h-[21px] w-[1551px] cursor-pointer flex-row items-start justify-start gap-[100px]"
                  onClick={onGroupContainerClick}
                >
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] h-px w-[1625px] rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-71.svg"
              />
              <div
                className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                  <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                    <input
                      className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                      type="checkbox"
                    />
                    <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                      166265
                    </div>
                  </div>
                  <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                    <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                      29 Nov 22, 11:24 AM
                    </div>
                    <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                      John Appleseed
                    </div>
                    <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-[89px]">
                      <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                          Paid
                        </div>
                      </div>
                      <div className="box-border flex h-[21px] w-[140px] flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                          Unfulfilled
                        </div>
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[31px] shrink-0">
                        $500
                      </div>
                      <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                        <img
                          className="relative z-[1] h-1 w-[18px]"
                          loading="lazy"
                          alt=""
                          src="/group-3542.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="box-border flex h-[21px] cursor-pointer flex-row items-start justify-start py-0 pl-[35px] pr-[39px]"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="flex h-[21px] w-[1551px] flex-row items-start justify-start gap-[100px]">
                    <div className="flex h-[21px] w-[118px] flex-row items-start justify-start gap-[53px]">
                      <input
                        className="relative z-[1] m-0 box-border size-5 rounded-10xs border border-solid border-darkgray"
                        type="checkbox"
                      />
                      <div className="relative z-[1] inline-block h-[21px] w-[46px] shrink-0">
                        166265
                      </div>
                    </div>
                    <div className="flex h-[21px] w-[1229px] flex-row items-start justify-start gap-52">
                      <div className="relative z-[1] inline-block h-[21px] w-[125px] shrink-0">
                        29 Nov 22, 11:24 AM
                      </div>
                      <div className="relative z-[1] inline-block h-[21px] w-[102px] shrink-0">
                        John Appleseed
                      </div>
                      <div className="flex h-[21px] w-[588px] flex-row items-start justify-start gap-24">
                        <div className="box-border flex h-[21px] w-[126px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[29px] shrink-0">
                            Paid
                          </div>
                        </div>
                        <div className="box-border flex h-[21px] w-[133px] flex-col items-start justify-start py-0 pl-0 pr-5">
                          <div className="relative z-[1] inline-block h-[21px] w-[67px] shrink-0">
                            Unfulfilled
                          </div>
                        </div>
                        <div className="relative z-[1] inline-block h-[21px] w-6 shrink-0">
                          $40
                        </div>
                        <div className="box-border flex h-[13px] w-[18px] flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                          <img
                            className="relative z-[1] h-1 w-[18px] cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/group-3542.svg"
                            onClick={onGroupIconClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden text-transparent" />
                </div>
                <div
                  className="accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr] grid cursor-default grid-rows-[0fr] flex-row items-start justify-start py-0 pl-[35px] pr-[39px] duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]"
                  data-acc-content
                >
                  <div className="overflow-hidden duration-[150ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] [transition-property:all]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute left-[208px] top-[-98px] !m-0 h-[1098px] w-px rounded-12xs"
            loading="lazy"
            alt=""
            src="/vector-18.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default Orders;
