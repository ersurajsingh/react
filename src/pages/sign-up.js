import { React, useEffect } from "react";
import SignScreen from "../components/sign-screen";

const SignUp = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-[20px] overflow-hidden bg-aliceblue px-[517px] pb-[285px] pt-[10px] text-center font-source-sans-pro text-15xl leading-[normal] tracking-[normal] text-darkslateblue mq975:box-border mq975:px-[358px] mq700:box-border mq700:gap-7 mq700:px-[179px]">
      <div className="flex flex-row items-center justify-center self-stretch py-0">
        <a
          className="relative text-[inherit] mq950:text-8xl mq450:text-xl"
          style={{
            marginLeft: "-960px",
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
      <div style={{ marginLeft: "-960px" }}>
        {" "}
        {}
        <SignScreen />
      </div>
    </div>
  );
};

export default SignUp;
