import React from "react";
import Title from "../display/section/Title";
import Tabs from "../display/tab/Tabs";
import SOLO_IMG from "@/assets/images/solo.jpg";
import YOGA_IMG from "@/assets/images/yoga.jpg";
import STRET_IMG from "@/assets/images/stret.webp";
import GROUP_IMG from "@/assets/images/group.webp";

const OurClasses = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mx-auto w-full md:w-[85%] lg:w-[70%] p-10">
      {/* TITLE */}
      <Title
        title={"Our Classes"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
        }
      />

      <br />

      {/* CARDS */}
      <Tabs
        items={[
          {
            title: "Yoga",
            content: {
              image: YOGA_IMG,
              title1: "Why are your yoga?",
              description1:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniiste assumenda officia eveniet quo perferendis a velit, natusexcepturi quae soluta, molestias impedit, veritatis ut dictainventore eaque modi nemo!",
              title2: "When comes yoga your time.",
              description2: (
                <>
                  <p class="text-sm text-gray-500 font-semibold">item 1</p>
                  <p class="text-sm text-gray-500 font-semibold">item 2</p>
                  <p class="text-sm text-gray-500 font-semibold">item 3</p>
                </>
              ),
            },
          },
          {
            title: "Group",
            content: {
              image: GROUP_IMG,
              title1: "Why are your group?",
              description1:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniiste assumenda officia eveniet quo perferendis a velit, natusexcepturi quae soluta, molestias impedit, veritatis ut dictainventore eaque modi nemo!",
              title2: "When comes group your time.",
              description2: (
                <>
                  <p class="text-sm text-gray-500 font-semibold">item 1</p>
                  <p class="text-sm text-gray-500 font-semibold">item 2</p>
                  <p class="text-sm text-gray-500 font-semibold">item 3</p>
                </>
              ),
            },
          },
          {
            title: "Solo",
            content: {
              image: SOLO_IMG,
              title1: "Why are your solo?",
              description1:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniiste assumenda officia eveniet quo perferendis a velit, natusexcepturi quae soluta, molestias impedit, veritatis ut dictainventore eaque modi nemo!",
              title2: "When comes solo your time.",
              description2: (
                <>
                  <p class="text-sm text-gray-500 font-semibold">item 1</p>
                  <p class="text-sm text-gray-500 font-semibold">item 2</p>
                  <p class="text-sm text-gray-500 font-semibold">item 3</p>
                </>
              ),
            },
          },
          {
            title: "Stretching",
            content: {
              image: STRET_IMG,
              title1: "Why are your Stretching?",
              description1:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniiste assumenda officia eveniet quo perferendis a velit, natusexcepturi quae soluta, molestias impedit, veritatis ut dictainventore eaque modi nemo!",
              title2: "When comes Stretching your time.",
              description2: (
                <>
                  <p class="text-sm text-gray-500 font-semibold">item 1</p>
                  <p class="text-sm text-gray-500 font-semibold">item 2</p>
                  <p class="text-sm text-gray-500 font-semibold">item 3</p>
                </>
              ),
            },
          },
        ]}
      />
    </section>
  );
};

export default OurClasses;
