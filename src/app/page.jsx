"use client"
import { itemsData } from "@/app/data";
import ItemCard from "@/components/ItemCard/ItemCard";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState()
  const [query, setQuery] = useState("")
  const [error, setError] = useState(false)
  let apiURL = `https://api.jikan.moe/v4/anime?q=` + query

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const apiResponse = await fetch(apiURL)
        const items = await apiResponse.json()
        setCards(items.data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData()
  }, [apiURL]);

  return (
    <main className="">
      <div className="container">
      <form
        className="search-bar"
        onSubmit={(e) => { e.preventDefault(); setQuery(document.querySelector(".search-bar--field").value) }}>
        <label className="search-bar--label" htmlFor="search-field"> Search MyAnimeList API </label>
        <input className="search-bar--field"
          type="text" name="search-field"
          id="search-field"
        />
        <button type="submit" className="search-bar--submit">Search</button>
      </form>

    
    {error ? <div> sory...</div> :
        isLoading ? <div>Loading...</div> :
          cards.length === 0 ? <div> Noone's here but us chickens! </div> :
            <ul className="items-list">
              {cards.map((item) =>
                <li key={item.mal_id}>
                  <ItemCard
                    itemName={item.title}
                    itemImgUrl={item.images.jpg.image_url}
                    producers={item.producers}
                    studios={item.studios}
                  />
                </li>
              )}
            </ul>
      }
    </div>
      
    </main>
  );
}
