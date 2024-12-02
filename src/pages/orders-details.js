import { React, useCallback } from "react";
import SideMenu from "../components/side-menu";
import { useNavigate } from "react-router-dom";

const OrdersDetails = () => {
  const navigate = useNavigate();

  const onDetailsIconClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start gap-64 overflow-hidden bg-whitesmoke-200 px-0 pb-[53px] pt-0 text-left font-inter text-mini leading-[normal] tracking-[normal] text-gray-100 mq975:gap-32 mq700:gap-16">
      <section className="flex max-w-full flex-col items-start justify-start gap-[49px] self-stretch text-left font-source-sans-pro text-3xl text-gray-100 mq700:gap-6">
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
        <div className="box-border flex w-[1888px] max-w-full flex-row items-start justify-start px-2 py-0">
          <div className="flex max-w-full flex-1 flex-row items-start justify-start gap-4">
            <div className="relative box-border flex w-[231px] flex-col items-start justify-start gap-5 py-0 pl-0 pr-[33px]">
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
              <SideMenu />
              <img
                className="absolute bottom-[-527px] right-[22px] !m-0 h-[1098px] w-px rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-18.svg"
              />
            </div>
            <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[7px] mq700:min-w-full">
              <div className="flex flex-row items-start justify-start px-1 pb-[17px] pt-0">
                <div className="flex flex-row items-start justify-start gap-3">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-2.5">
                    <img
                      className="relative h-2.5 w-[11px] cursor-pointer"
                      loading="lazy"
                      alt=""
                      src="/vector-80.svg"
                      onClick={onDetailsIconClick}
                    />
                  </div>
                  <a className="relative font-bold text-[inherit] [text-decoration:none] mq450:text-lg">
                    Order Details
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start px-1.5 py-0 text-xl text-gray-200">
                <div className="flex flex-row items-start justify-start gap-4">
                  <div className="relative inline-block min-w-[53px] font-semibold mq450:text-base">
                    #1234
                  </div>
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px] text-mini">
                    <div className="relative">14 Jan 2023, 5:34 PM</div>
                  </div>
                </div>
              </div>
              <div className="box-border flex max-w-full flex-col items-start justify-start gap-4 self-stretch rounded-md bg-white px-0 pb-7 pt-[11px] text-base text-limegreen">
                <div className="relative hidden h-[477px] self-stretch rounded-md bg-white" />
                <div className="flex flex-row items-start justify-start px-5 py-0">
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="relative z-[1] size-9 shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/check-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[9px]">
                      <div className="relative z-[1] inline-block min-w-[58px] font-semibold">
                        Fulfilled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start px-[26px] py-0 text-gray-200">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative z-[1] inline-block min-w-[124px] font-semibold">
                      FedEX Tracking ID
                    </div>
                    <div className="relative z-[1] text-sm text-gray-300">
                      1234567
                    </div>
                  </div>
                </div>
                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-[3px] pt-0">
                  <img
                    className="relative z-[1] max-h-full max-w-full flex-1 overflow-hidden rounded-12xs"
                    loading="lazy"
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[26px] pr-[35px] text-right text-mini text-black">
                  <div className="flex max-w-full flex-1 flex-row items-start justify-start gap-px mq950:flex-wrap">
                    <div className="box-border flex w-[58px] flex-col items-start justify-start py-0 pl-0 pr-5 text-left">
                      <div className="relative z-[1] inline-block min-w-[13px]">
                        1.
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[17px]">
                      <img
                        className="relative z-[1] size-20 object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-2514@2x.png"
                      />
                    </div>
                    <div className="box-border flex min-w-[227px] max-w-full flex-1 flex-col items-start justify-start gap-[3.5px] py-0 pl-0 pr-5 text-left text-sm">
                      <div className="relative z-[1] inline-block w-[205px] text-mini font-semibold">
                        Nike Running Shoes
                      </div>
                      <div className="relative z-[1] inline-block min-w-[40px] text-gray-300">
                        8/Blue
                      </div>
                      <div className="relative z-[1] text-darkgray">
                        14 Jan 2023
                      </div>
                    </div>
                    <div className="flex w-[122px] flex-col items-start justify-start">
                      <div className="relative z-[1] inline-block w-[74px]">
                        $40.00
                      </div>
                    </div>
                    <div className="relative z-[1] inline-block w-5 shrink-0">
                      X
                    </div>
                    <div className="flex w-[272px] flex-row items-start justify-between gap-5">
                      <div className="flex w-[73px] flex-col items-end justify-start gap-[95px]">
                        <div className="box-border flex w-[19px] flex-row items-start justify-end py-0 pl-0 pr-px">
                          <div className="relative z-[1] flex-1">1</div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[13px] self-stretch text-darkgray">
                          <div className="relative z-[1] self-stretch">
                            Discount
                          </div>
                          <div className="relative z-[1] self-stretch">
                            Shipping
                          </div>
                          <div className="relative z-[1] self-stretch">Tax</div>
                          <div className="relative z-[1] self-stretch font-semibold text-darkslategray">
                            Total
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[73px] flex-col items-start justify-start gap-[95px]">
                        <div className="relative z-[1] self-stretch">
                          $40.00
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[13px] self-stretch text-darkgray">
                          <div className="relative z-[1] self-stretch">
                            $0.00
                          </div>
                          <div className="relative z-[1] self-stretch">
                            $0.00
                          </div>
                          <div className="relative z-[1] self-stretch">
                            $0.00
                          </div>
                          <div className="relative z-[1] self-stretch font-semibold text-darkslategray">
                            $40.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch pb-2.5 pl-[27px] pr-[26px] pt-0">
                  <img
                    className="relative z-[1] max-h-full max-w-full flex-1 overflow-hidden rounded-12xs"
                    loading="lazy"
                    alt=""
                    src="/vector-81.svg"
                  />
                </div>
                <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch px-[35px] py-0 text-right text-mini text-darkslategray">
                  <div className="flex w-[365px] max-w-full flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="relative z-[1] inline-block w-[167px] shrink-0 font-semibold">
                      Paid by customer
                    </div>
                    <div className="relative z-[1] inline-block w-[74px] shrink-0 font-semibold">
                      $40.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex w-[625px] max-w-full flex-col items-start justify-start px-0 pb-0 pt-[84px] text-base text-gray-200 mq700:box-border mq700:pt-[55px]">
              <div className="flex max-w-full flex-col items-start justify-start gap-4 self-stretch">
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-3.5 self-stretch rounded-md bg-white pb-8 pl-[25px] pr-5 pt-[18px]">
                  <div className="relative hidden h-[104px] w-[625px] max-w-full rounded-md bg-white" />
                  <a className="relative z-[1] inline-block min-w-[41px] font-semibold text-[inherit] [text-decoration:none]">
                    Notes
                  </a>
                  <div className="relative z-[1] inline-block min-w-[109px] text-sm text-darkgray">
                    No notes available
                  </div>
                </div>
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-[13px] self-stretch rounded-md bg-white pb-[29px] pl-0 pr-[3px] pt-5 mq450:box-border mq450:pb-5">
                  <div className="relative hidden h-[446px] self-stretch rounded-md bg-white" />
                  <div className="flex flex-row items-start justify-start pb-1.5 pl-[25px] pr-6 pt-0">
                    <div className="relative z-[1] font-semibold">
                      Customer Information
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start px-[25px] pb-3 pt-0 text-sm">
                    <div className="flex flex-1 flex-row items-end justify-start gap-[21px]">
                      <img
                        className="relative z-[1] size-[79px] rounded-[50%] object-cover"
                        loading="lazy"
                        alt=""
                        src="/ellipse-48@2x.png"
                      />
                      <div className="flex flex-1 flex-col items-start justify-end px-0 pb-[3px] pt-0">
                        <div className="flex flex-col items-start justify-start gap-[3px] self-stretch">
                          <div className="relative z-[1] inline-block min-w-[102px] text-xl font-semibold mq450:text-base">
                            Larina Sage
                          </div>
                          <div className="relative z-[1] inline-block min-w-[85px] text-gray-300">
                            Miami, Florida
                          </div>
                          <div className="relative z-[1] text-darkgray">
                            Customer since 12 Jan 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-[7px] pt-0">
                    <img
                      className="relative z-[1] max-h-full max-w-full flex-1 overflow-hidden rounded-12xs"
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-[25px] pr-6">
                    <div className="relative z-[1] font-semibold">Contact</div>
                  </div>
                  <div className="flex flex-row items-start justify-start px-[25px] pb-[5px] pt-0 text-sm text-gray-300">
                    <div className="flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative z-[1]">larina@gmail.com</div>
                      <div className="relative z-[1] inline-block min-w-[97px]">
                        +1 898-757-8989
                      </div>
                    </div>
                  </div>
                  <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-[7px] pt-0">
                    <img
                      className="relative z-[1] max-h-full max-w-full flex-1 overflow-hidden rounded-12xs"
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start px-[25px] py-0">
                    <div className="flex flex-col items-start justify-start gap-3.5">
                      <div className="relative z-[1] inline-block min-w-[121px] font-semibold">
                        Shipping Address
                      </div>
                      <div className="relative z-[1] text-sm text-gray-300">
                        <p className="[margin-block-end:4px] [margin-block-start:0]">
                          Larina Sage
                        </p>
                        <p className="[margin-block-end:4px] [margin-block-start:0]">
                          89 St Bernard Eve #589
                        </p>
                        <p className="[margin-block-end:4px] [margin-block-start:0]">
                          Miami FL 33101
                        </p>
                        <p className="m-0">United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-start justify-start px-[33px] py-0">
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
            <img
              className="relative size-4"
              loading="lazy"
              alt=""
              src="/group-3366.svg"
            />
          </div>
          <div className="relative inline-block min-w-[50px] font-medium leading-[22px] tracking-[-0.41px]">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetails;
