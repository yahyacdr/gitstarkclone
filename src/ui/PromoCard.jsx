/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Btn from "./Btn";

export default function PromoCard({ card, coords, handlePromoCard }) {
  console.log(coords);
  return (
    <div
      className={`animate-scaleIn absolute z-10 flex w-[120%] max-w-[800px] origin-top flex-nowrap justify-between gap-x-4 rounded-md bg-white p-2 transition-all`}
      style={{ top: `${coords.top}`, left: `${coords.left}` }}
      onMouseEnter={(e) => handlePromoCard(e, true)}
      onMouseLeave={(e) => handlePromoCard(e, false)}
    >
      <div className="ml-0 mt-0 flex flex-wrap gap-0">
        {card.items.map((item) => (
          <Btn
            key={item.id}
            className="flex flex-col items-start justify-start rounded-md p-3.5 pr-1 transition-all hover:bg-[#f6eeff]"
            type="custom"
            to={item.to}
          >
            <h3 className="text-[1rem] font-semibold text-type-purple">
              {item.title}
            </h3>
            <p className="max-w-[230px] text-[0.7rem] font-medium">
              {item.desc}
            </p>
          </Btn>
        ))}
      </div>
      <Btn
        className={`flex flex-col items-center rounded-md bg-[rgb(243,232,255)] p-3 ${coords.card === "promocard2" && "order-first"}`}
        to={card.linkCard.to}
        type="custom"
      >
        <img
          src={card.linkCard.img}
          alt=""
          className={`${coords.card === "promocard2" ? "h-36 w-full object-cover" : "mb-2 h-20"}`}
        />
        <div>
          <h3 className="text-[1rem] font-semibold">{card.linkCard.title}</h3>
          <p className="max-w-[450px] text-[0.7rem] font-bold text-type-purple underline">
            {card.linkCard.desc}
          </p>
        </div>
      </Btn>
    </div>
  );
}
