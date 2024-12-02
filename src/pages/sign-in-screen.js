import { React, useEffect } from "react";
import LogScreen from "../components/log-screen";

const SignInScreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cleanup function to re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-[57px] overflow-hidden bg-aliceblue px-[517px] pb-[285px] pt-[10px] text-center font-source-sans-pro text-15xl leading-[normal] tracking-[normal] text-darkslateblue mq975:box-border mq975:px-[358px] mq700:box-border mq700:gap-7 mq700:px-[179px]">
      <div className="flex flex-row items-center justify-center self-stretch py-0">
        <a
          className="relative text-[inherit] mq950:text-8xl mq450:text-xl"
          style={{
            marginLeft: "-1000px",
            fontFamily: "Univers LT Std",
            fontSize: "34px",
            fontWeight: 800,
            lineHeight: "40.8px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none"
          }}
        >
          StockMaster
        </a>
      </div>
      <LogScreen />
    </div>
  );
};

export default SignInScreen;
