/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function PromoCard({ card, coords }) {
  return (
    <div
      className={`absolute z-10 flex max-w-[820px] flex-nowrap justify-between rounded-md bg-white p-2 transition-all`}
      style={{ top: `${coords.top}`, left: `${coords.left}` }}
    >
      <div className="ml-3 mt-4 flex flex-wrap gap-3">
        {card.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-start"
          >
            <h3 className="text-[1.1rem] font-semibold text-type-purple">
              {item.title}
            </h3>
            <p className="max-w-[250px] text-[0.8rem] font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center rounded-md bg-[rgb(243,232,255)] p-3">
        <img src={card.linkCard.img} alt="" className="mb-2 h-20" />
        <div>
          <h3 className="text-[1.1rem] font-semibold">{card.linkCard.title}</h3>
          <p className="max-w-[450px] text-[0.8rem] font-medium">
            {card.linkCard.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
