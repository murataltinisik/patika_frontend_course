import React from "react";
import Title from "../display/section/Title";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Button from "../form/Button";

const ContactUs = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-10 sm:w-full md:w-[70%] mx-auto p-10">
      {/* TITLE */}
      <Title
        title={"Contact Us"}
        align="center"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
        }
      />

      <div className="w-full flex flex-wrap justify-between items-start mt-10">
        <div className="w-full md:w-[50%] p-2">
          {/* DETAIL:start */}
          <ul className="flex justify-start gap-5 items-center mb-2">
            <li>
              <p className="font-bold">Phone Number</p>
              <span className="text-xs text-gray-500 font-semibold">
                +321 32133 1321 321
              </span>
            </li>

            <li>
              <p className="font-bold">Email Address</p>
              <span className="text-xs text-gray-500 font-semibold">
                demo@demo.com
              </span>
            </li>
          </ul>
          {/* DETAIL:end */}

          {/* FORM:start */}
          <form method="post" className="flex flex-col gap-5">
            {/* YOUR NAME */}
            <Input placeholder={"Your Name"} />

            {/* YOUR EMAIL */}
            <Input type={"email"} placeholder={"Your Email"} />

            {/* YOUR MESSAGE */}
            <Textarea rows={3} placeholder={"Message"} />

            {/* BTN */}
            <Button type={"submit"} text={"Send"} />
          </form>
          {/* FORM:end */}
        </div>

        {/* IFRAME:start */}
        <div className="w-full md:w-[50%] p-2">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/collections/drones/">
              drone quadcopter
            </a>
          </iframe>
        </div>
        {/* IFRAME:end */}
      </div>
    </section>
  );
};

export default ContactUs;
