import React, { useEffect } from "react";

import { preLoaderAnim } from "../Animation/Animate";

import Loader_v4 from "../lottie/Loader_v4.json";

import Lottie from "lottie-react";

export default function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div
      className="preloader h-screen w-full bg-ash fixed 
     top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center
     text-black-200 overflow-hidden flex-col"
    >
      <div className="text-[40px] text-center">
        Get All Summer Items At <p className="text-darkOrange">Mobuy</p>
      </div>
      <div className="relative loding font-out-fit">
        <Lottie className="w-[230px] h-[230px]" animationData={Loader_v4} />
      </div>
      <div
        className="texts-container flex items-center justify-between
        text-3xl overflow-hidden font-bold opacity-0 mt-[-5px] gap-x-4"
      >
        <span>Shop for summer with ease.</span>
      </div>
    </div>
  );
}
