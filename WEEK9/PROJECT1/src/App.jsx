import QuickStats from "./components/display/cards/QuickStats";
import Footer from "./components/global/footer/Footer";
import Header from "./components/global/header/Header";
import BMICalculator from "./components/sections/BMICalculator";
import ContactUs from "./components/sections/ContactUs";
import OurBestTrainers from "./components/sections/OurBestTrainers";
import OurClasses from "./components/sections/OurClasses";
import PurchaseFromUs from "./components/sections/PurchaseFromUs";
import ReviewClient from "./components/sections/ReviewClient";

function App() {
  return (
    <main>
      {/* TOP:start */}
      <div className="bg-[#F2F8FE] w-full overflow-hidden">
        {/* HEADER:start */}
        <Header
          title={"Group <br /> Practice <br /> With Trainer"}
          description={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente earum, nisi suscipit asperiores inventore ab corrupti magnam! Doloremque reprehenderit commodi delectus odit dolores."
          }
        />
        {/* HEADER:end */}

        {/* QUICK CARD */}
        <div className="w-full md:w-[70%] mx-auto p-5 flex flex-wrap justify-center items-center [&>*]:w-full [&>*]:md:w-[50%] [&>*]:lg:w-[25%]">
          <QuickStats title={"Course"} count={123} />
          <QuickStats title={"Work Out"} count={123} />
          <QuickStats title={"Working Hour"} count={123} />
          <QuickStats title={"Happy Client"} count={123} />
        </div>
      </div>
      {/* TOP:end */}

      {/* OUR CLASSES */}
      <div className="mx-auto">
        {/* Our Classes */}
        <OurClasses />

        {/* BMI Calculator */}
        <BMICalculator />

        {/* Our Best Trainers */}
        <OurBestTrainers />

        {/* Purchase From Us */}
        <PurchaseFromUs />

        {/* Review Client */}
        <ReviewClient />

        {/* Contact US */}
        <ContactUs />
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;
