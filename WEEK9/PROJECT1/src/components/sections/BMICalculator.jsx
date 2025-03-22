// Components
import { useEffect, useState } from "react";
import Title from "../display/section/Title";

// Assets
import BMI_IMAGE from "@/assets/images/bmi-index.jpg";

const BMICalculator = () => {
  const [yourHeight, setYourHeight] = useState(0);
  const [yourWeight, setYourWeight] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    // CALCULATE BMI
    var bmi = (yourWeight / (yourHeight / 100) ** 2).toFixed(2);

    // GET POSITION
    setResult(getBMIPosition(bmi));
  }, [yourWeight, yourHeight]);

  const getBMIPosition = (bmi) => {
    let leftPercent = 0;

    if (bmi < 18.5) {
      // UNDERWEIGHT: 0–18.5 → %0–20
      leftPercent = (bmi / 18.5) * 20;
    } else if (bmi < 25) {
      // NORMAL: 18.5–25 → %20–40
      leftPercent = 20 + ((bmi - 18.5) / (25 - 18.5)) * 20;
    } else if (bmi < 30) {
      // OVERWEIGHT: 25–30 → %40–60
      leftPercent = 40 + ((bmi - 25) / 5) * 20;
    } else if (bmi < 35) {
      // OBESE: 30–35 → %60–80
      leftPercent = 60 + ((bmi - 30) / 5) * 20;
    } else {
      // EXTREMELY OBESE: 35+ → %80–100
      leftPercent = 80 + ((bmi - 35) / 10) * 20;
      if (leftPercent > 98) leftPercent = 98;
    }

    return leftPercent;
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center mt-10 mx-auto w-full lg:w-[70%] p-10">
      {/* TITLE */}
      <div className="w-full md:w-[50%] p-3 ">
        <Title
          title={"BMI Calculator"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos. <br/> <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos ea deserunt, dolorem recusandae qui, doloribus adipisci magni maiores libero officiis quis sapiente. Modi perferendis voluptates eligendi possimus, totam eos."
          }
        />

        {/* CALCULATE */}
        <div className="flex justify-center items-cenger gap-5 mt-5">
          <div className="flex justify-between items-center gap-2 w-full">
            <input
              type="number"
              value={yourHeight}
              placeholder="Your Height"
              className="w-full p-2 border rounded-md"
              onChange={(e) => setYourHeight(e.target.value)}
            />
            <span>cm</span>
          </div>

          <div className="flex justify-center items-center gap-2 w-full">
            <input
              type="number"
              value={yourWeight}
              placeholder="Your Weight"
              className="w-full p-2 border rounded-md"
              onChange={(e) => setYourWeight(e.target.value)}
            />
            <span>kg</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full p-3 relative">
        {/* TITLE */}
        <h5 className="text-center text-md font-bold mb-1">Your BMI</h5>

        {/* IMG */}
        <div className="relative">
          <img src={BMI_IMAGE} className="w-full" />

          <div
            style={{ left: result == 0 ? "50%" : `${result}%` }}
            className="absolute top-full mt-2 left-1/2 z-10 transform -translate-x-1/2 transition-all duration-300"
          >
            🔺
          </div>
        </div>
      </div>
      {/* RIGHT END */}
    </section>
  );
};

export default BMICalculator;
