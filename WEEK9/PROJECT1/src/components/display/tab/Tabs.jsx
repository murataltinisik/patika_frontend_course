import React, { useState } from "react";

const Tabs = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-3 md:gap-0 md:flex-row justify-around w-full">
        {items.map(({ title }, i) => (
          <li
            key={i}
            onClick={() => setSelectedTab(i)}
            className={`tab-item text-white text-sm font-bold p-3 px-7 rounded-md cursor-pointer ${
              selectedTab == i
                ? "bg-orange-500 hover:bg-orange-600 shadow-[0_0_10px_orange]"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {title}
          </li>
        ))}
      </ul>

      {items.map(({ content }, i) => (
        <div
          key={i}
          className={`${
            selectedTab == i ? "flex" : "hidden"
          } flex-col md:flex-row justify-between items-center mt-10`}
        >
          <div className="flex flex-col justify-center items-center gap-10 w-full md:w-[35%] text-left">
            {/* PART */}
            <div className="w-full">
              {/* TITLE */}
              <h4 className="font-bold text-gray-600 text-2xl">
                {content.title1}
              </h4>
              {/* TITLE END */}

              {/* DESCRIPTION */}
              <div
                className="text-sm text-gray-500 font-semibold text-justify"
                dangerouslySetInnerHTML={{ __html: content.description1 }}
              ></div>
              {/* DESCRIPTION END */}
            </div>
            {/* PART END */}

            {/* PART */}
            <div className="w-full">
              {/* TITLE */}
              <h4 className="font-bold text-gray-600 text-2xl">
                {content.title2}
              </h4>
              {/* TITLE END */}

              {/* DESCRIPTIONS */}
              <div
                className="flex flex-col justify-center items-start gap-5"
                dangerouslySetInnerHTML={{ __html: content.description2 }}
              ></div>
              {/* DESCRIPTIONS END */}
            </div>
            {/* PART END */}
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-[80%] lg:w-[65%] p-5">
            <img
              src={content.image}
              className="w-full h-full rounded-md shadow-md"
            />
          </div>
          {/* IMAGE END */}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
