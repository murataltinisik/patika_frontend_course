import Logo from "../../display/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#355592] text-white p-10 w-full">
      <div className="w-[70%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* LOGO END */}

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          sunt nisi minus aliquid dolorem ullam nostrum, minima aut accusamus
          quis sapiente delectus, eos iusto laborum quo voluptate. Officia, sint
          enim! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          obcaecati unde quidem.
        </p>
        {/* DESCRIPTION END */}

        {/* LINKS */}
        <div className="flex justify-around mt-5">
          <div>
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <ul className="space-y-2 text-white text-base">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-white text-base">
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Supports
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* LINKS END */}
      </div>
    </footer>
  );
};

export default Footer;
