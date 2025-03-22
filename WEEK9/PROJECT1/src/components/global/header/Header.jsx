import PropTypes from "prop-types";

// Components
import Logo from "../../display/logo/Logo";

// Menu Items
import items from "./items";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = ({ title, description }) => {
  // States
  const [isOpenRightMenu, setIsOpenRightMenu] = useState(false);

  return (
    <header className="bg-[url('./assets/images/hero-man.jpg')] h-[70vh] bg-cover overflow-hidden">
      <div
        className={`fixed top-0 p-5 ${
          isOpenRightMenu ? "right-0" : "right-[-300px]"
        } h-[100vh] w-[300px] bg-white shadow-lg transition-all duration-300`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpenRightMenu(false)}
        >
          <XMarkIcon className="w-4" />
        </button>

        {/* MENU */}
        <ul className="mt-10">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="w-full block p-2 hover:bg-gray-50">
                {item.title}
              </a>
            </li>
          ))}

          <li>
            <button className="px-2 py-1 w-full mt-5 text-white rounded-md bg-orange-500 hover:bg-orange-600">
              Join Us
            </button>
          </li>
        </ul>
        {/* MENU END */}
      </div>

      <div className="w-[70%] mx-auto">
        <div className="w-full flex justify-between items-center">
          {/* LOGO */}
          <Logo size={220} />
          {/* LOGO END */}

          <div className="flex justify-between items-center gap-5">
            {/* NAV */}
            <nav className="hidden lg:block">
              <ul className="[&>*]:text-white flex gap-5 items-center">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="w-full block p-2 hover:bg-gray-50"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}

                <li>
                  <button className="px-2 py-1 text-white rounded-md bg-orange-500 hover:bg-orange-600">
                    Join Us
                  </button>
                </li>
              </ul>
            </nav>
            {/* NAV END */}

            {/* DRAWER MENU (RESPONSIVE MENU) */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpenRightMenu(true)}
            >
              <Bars3Icon className="w-7 text-white" />
            </button>
            {/* DRAWER MENU END */}
          </div>
        </div>

        {/* SECTION */}
        <div className="pt-10">
          {/* TAG */}
          <span className="bg-blue-600 text-white p-2 px-4 rounded-md shadow-sm font-semibold text-xs">
            POWERFULL
          </span>
          {/* TAG END */}

          {/* SUBTITLE */}
          <h2
            className="text-3xl md:text-5xl lg:text-8xl text-white py-5 font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          {/* SUBTITLE END */}

          {/* DESCRIPTION */}
          <p className="text-md md:text-xl lg:text-2xl font-medium text-justify w-[90%] text-white">
            {description}
          </p>
          {/* DESCRIPTION END */}

          {/* ACTIONS */}
          <div className="mt-5 flex gap-7">
            <button className="font-bold p-2 rounded-md px-5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300">
              Sign Up
            </button>

            <button className="font-bold p-2 rounded-md px-5 text-white border transition-colors duration-300">
              Details
            </button>
          </div>
          {/* ACTIONS END */}
        </div>
        {/* SECTION END */}
      </div>
    </header>
  );
};

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
