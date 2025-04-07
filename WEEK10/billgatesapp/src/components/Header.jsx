// CONTEXT
import { useTotalPrice } from "../context/TotalPriceContext";

const Header = () => {
  const { totalPrice } = useTotalPrice();

  return (
    <div className="bg-gradient-to-br gap-1 from-green-500 to-blue-500 h-[120px] flex justify-center items-center text-white text-3xl">
      <b>
        {Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(100000000000000 - totalPrice)}
      </b>
    </div>
  );
};

export default Header;
