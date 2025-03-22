// Assets
import CLIENT1_IMG from "@/assets/images/client1.jpg";
import CLIENT2_IMG from "@/assets/images/client2.jpg";

// Components
import Title from "../display/section/Title";
import ReviewCard from "../display/cards/ReviewCard";

const ReviewClient = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-10 p-10 bg-[#F0F8FF]">
      {/* TITLE */}
      <Title
        title={"Review Client"}
        align="center"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
        }
      />

      {/* CARDS */}
      <div class="flex justify-center flex-wrap items-center mt-10 w-full sm:w-[70%]">
        <ReviewCard
          imgSrc={CLIENT1_IMG}
          fullname={"Diet Expert"}
          comment={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
          }
        />

        <ReviewCard
          imgSrc={CLIENT2_IMG}
          fullname={"Diet Expert"}
          comment={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
          }
        />
      </div>
    </section>
  );
};

export default ReviewClient;
