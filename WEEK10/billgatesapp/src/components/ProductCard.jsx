import React from "react";

const ProductCard = ({ item, onClickBuy, onClickSell }) => {
  return (
    <div className="border w-full rounded-md shadow bg-white">
      {/* IMG */}
      <img src={item.img} alt="" className="w-full h-[300px]" />

      <div className="flex flex-col gap-2 justify-center items-center p-5">
        {/* TITLE */}
        <b>{item.title}</b>

        {/* PRICE */}
        <b className="text-xl text-green-600">
          {Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </b>
      </div>

      {/* ACTIONS */}
      <div className="p-5 border-t border-gray-100 [&>*]:w-full flex gap-3">
        <button
          onClick={() => onClickSell(item)}
          className="bg-gray-50 text-black p-3 rounded-md shadow-sm hover:bg-gray-100 active:bg-gray-200"
        >
          Sell
        </button>
        <button
          onClick={() => onClickBuy(item)}
          className="bg-green-50 text-green-600 p-3 rounded-md shadow-sm hover:bg-green-100 active:bg-green-200"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
