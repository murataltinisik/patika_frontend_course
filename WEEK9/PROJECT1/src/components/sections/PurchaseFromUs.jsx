// Assets
import PURCHASE1_IMG from "@/assets/images/purchase1.jpg";
import PURCHASE2_IMG from "@/assets/images/purchase2.jpg";
import PURCHASE3_IMG from "@/assets/images/purchase3.jpg";
import PURCHASE4_IMG from "@/assets/images/purchase4.jpg";

// Components
import Title from "../display/section/Title";
import PurchaseCard from "../display/cards/PurchaseCard";

const PurchaseFromUs = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center mt-10 w-full md:w-[70%] mx-auto p-10">
      {/* TITLE */}
      <Title
        title={"Purchase From Us"}
        align="center"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
        }
      />

      {/* CARD */}
      <div class="flex justify-center items-center flex-wrap w-full mt-10">
        <div class="w-full md:w-[50%] lg:w-[20%] p-2">
          <PurchaseCard
            oldPrice={89.99}
            newPrice={59.99}
            imgSrc={PURCHASE1_IMG}
            title={`Kettlebell / <span class="font-bold">5kg</span>`}
          />
        </div>

        <div class="w-full md:w-[50%] lg:w-[20%] p-2">
          <PurchaseCard
            oldPrice={89.99}
            newPrice={59.99}
            imgSrc={PURCHASE2_IMG}
            title={`Kettlebell / <span class="font-bold">5kg</span>`}
          />
        </div>

        <div class="w-full md:w-[50%] lg:w-[20%] p-2">
          <PurchaseCard
            oldPrice={89.99}
            newPrice={59.99}
            imgSrc={PURCHASE3_IMG}
            title={`Kettlebell / <span class="font-bold">5kg</span>`}
          />
        </div>

        <div class="w-full md:w-[50%] lg:w-[20%] p-2">
          <PurchaseCard
            oldPrice={89.99}
            newPrice={59.99}
            imgSrc={PURCHASE4_IMG}
            title={`Kettlebell / <span class="font-bold">5kg</span>`}
          />
        </div>
      </div>
    </section>
  );
};

export default PurchaseFromUs;
