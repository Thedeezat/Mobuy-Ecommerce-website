import React from "react";

export default function TabItem({
  icon,
  product,
  id,
  activeTab,
  setActiveTab,
}) {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <div
      onClick={handleClick}
      className={`sm:w-7 sm:h-7 md:w-7.1 md:h-7.1 md:rounded-3xl 2xl:w-[110px] 2xl:h-[110px]
        w-[74px] h-[15px] bg-transparent rounded-2xl text-sm
        border cursor-pointer border-stone-400 ${
          activeTab === id ? "border-darkYellow" : ""
        }
        flex flex-col text-center justify-center items-center
        px-2 py-5 text-black-200 hover:border-darkYellow`}
    >
      {" "}
      {icon}
      <h4 className="md:text-sm 2xl:text-base text-xs"> {product} </h4>
    </div>
  );
}
