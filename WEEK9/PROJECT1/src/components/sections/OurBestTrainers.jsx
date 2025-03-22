// Assets
import TRAINER1_JPG from "@/assets/images/trainer1.jpg";
import TRAINER2_JPG from "@/assets/images/trainer2.jpg";
import TRAINER3_JPG from "@/assets/images/trainer3.jpg";

// Components
import Title from "../display/section/Title";
import TrainerCard from "../display/cards/TrainerCard";

const OurBestTrainers = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-10 p-10 bg-[#F0F8FF]">
      {/* TITLE */}
      <Title
        title={"Our Best Trainers"}
        align="center"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
        }
      />

      {/* CARDS */}
      <div className="flex flex-wrap justify-center items-center mt-10">
        <div className="p-3 w-full md:w-[33.33%] lg:w-[20%]">
          <TrainerCard imgSrc={TRAINER1_JPG} />
        </div>

        <div className="p-3 w-full md:w-[33.33%] lg:w-[20%]">
          <TrainerCard imgSrc={TRAINER2_JPG} />
        </div>

        <div className="p-3 w-full md:w-[33.33%] lg:w-[20%]">
          <TrainerCard imgSrc={TRAINER3_JPG} />
        </div>
      </div>
    </section>
  );
};

export default OurBestTrainers;
