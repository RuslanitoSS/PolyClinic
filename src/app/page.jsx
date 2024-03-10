"use client"

import { itemsData } from "@/app/data";
import ItemCard from "@/components/ItemCard/ItemCard";

export default function Home() {
  return (
    <main className="">
      <ul className="items-list">
        {itemsData.map((item) =>
          <li  key={item.index}>
            <ItemCard
              itemName={item.itemName}
              itemImgUrl={item.itemImgUrl}
              AuthorImgUrl={item.AuthorImgUrl}
              AuthorName={item.AuthorName}
              AuthorSubs={item.AuthorSubs}
              favourited={item.favourited}
            />
          </li>
        )}
      </ul>
    </main>
  );
}
