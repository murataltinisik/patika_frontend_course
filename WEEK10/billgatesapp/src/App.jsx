import { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

// FAKERS
import products from "./fakers/products";

// CONTEXT
import { useTotalPrice } from "./context/TotalPriceContext";

const App = () => {
  const { totalPrice, setTotalPrice } = useTotalPrice();
  const [receiptItems, setReceiptItems] = useState([]);

  useEffect(() => {
    // Calculate total price based on receiptItems
    const total = receiptItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);

    // Update context
    setTotalPrice(total);
  }, [receiptItems]);

  //
  const onAdd = (item) => {
    setReceiptItems((prev) => {
      // Check if the item already exists in the receipt
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        // If it exists, increment its amount by 1
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      } else {
        // If it's a new item, add it with an initial amount of 1
        return [
          ...prev,
          { id: item.id, title: item.title, amount: 1, price: item.price },
        ];
      }
    });
  };

  const onSell = (item) => {
    setReceiptItems((prev) => {
      // Find the item in the current receipt
      const existing = prev.find((i) => i.id === item.id);

      // If item doesn't exist, return the current state unchanged
      if (!existing) return prev;

      if (existing.amount > 1) {
        // If the amount is greater than 1, decrement the amount
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount - 1 } : i
        );
      } else {
        // If the amount is 1, remove the item from the receipt
        return prev.filter((i) => i.id !== item.id);
      }
    });
  };

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* PRODUCT CARD */}
      <div className="flex justify-center items-start p-5 [&>*]:w-[20%]">
        {products.map((product) => (
          <div className="p-2 w-full">
            <ProductCard
              item={product}
              onClickSell={onSell}
              onClickBuy={onAdd}
            />
          </div>
        ))}
      </div>

      {/* RECEIPT */}
      <div className="bg-white p-5 rounded-md shadow-sm h-[300px] flex flex-col justify-start items-center">
        {receiptItems.length > 0 ? (
          <>
            {/* TITLE */}
            <h2 className="text-xl text-center mb-3 w-full">Your Receipt</h2>

            {/* LIST */}
            <ul className="flex flex-col gap-1 justify-start items-center w-full">
              {receiptItems.map((item) => (
                <li
                  key={item.id}
                  className="[&>*]:w-[33.33%] [&>*]:!p-0 [&>*]:!m-0 text-xs flex justify-center text-center w-[20%]"
                >
                  <p>{item.title}</p>

                  <p>x{item.amount}</p>
                  <p className="text-green-500">
                    {Intl.NumberFormat("en-EN", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.price * item.amount)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="text-xs font-bold text-gray-600 border-t border-gray-50 w-full pt-5 mt-5 text-center">
              {Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(totalPrice)}
            </div>
          </>
        ) : (
          <div className="bg-red-50 text-red-600 font-bold text-center p-3 px-10 shadow-md rounded-md">
            Herhangi bir veri bulunamadı!
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
