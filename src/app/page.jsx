"use client"
import ItemCard from "@/components/ItemCard/ItemCard";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState()
  const [query, setQuery] = useState("")
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  let APIURL = `https://api.jikan.moe/v4/anime?q=${query}&page=${currentPage}&sfw`

  const formPaginationList = (currentPage, lastPage) => {
    const pagesRenderRadius = 10
    const paginationList = []
    //кнопка "в начало". если Первую стр не видно
    if (currentPage - 10 > 1) {
      paginationList.push(1)
    }
    //10 страниц назад, если возможно
    for (let index = Math.max(1, currentPage - pagesRenderRadius); index < currentPage; index++) {
      paginationList.push(index)
    }

    //текущаю страница  
    paginationList.push(currentPage)

    //10 стр вперёд
    for (let index = currentPage + 1; index <= Math.min(currentPage + pagesRenderRadius, lastPage); index++) {
      paginationList.push(index)
    }

     //кнопка "в конец". если Послденюю стр не видно
     if (currentPage + 10 < lastPage) {
      paginationList.push(lastPage)
    }
    return paginationList
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const apiResponse = await fetch(APIURL)
        const items = await apiResponse.json()
        setLastPage(Number(items.pagination.last_visible_page))
        setCards(items.data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData()
  }, [APIURL]);

  return (
    <main className="">
      <div className="container">
        <form
          className="search-bar"
          onSubmit={(e) => { e.preventDefault(); setQuery(document.querySelector(".search-bar--field").value); setCurrentPage(1) }}>
          <label className="search-bar--label" htmlFor="search-field"> Search MyAnimeList API </label>
          <input className="search-bar--field"
            type="text" name="search-field"
            id="search-field"
          />
          <button type="submit" className="search-bar--submit">Search</button>
        </form>

        {error ? <></> :
          isLoading ? <></> :
            <ul className="pagination-list">
              {formPaginationList(currentPage, lastPage).map(pageNumber =>
                <li 
                onClick={() => { setCurrentPage(pageNumber) }}
                className={pageNumber === 1 && currentPage - 10 > 1 ? "pagination-list--start-btn" : 
                pageNumber === lastPage && currentPage + 10 < lastPage ?  "pagination-list--end-btn" :
                "pagination-list--btn"}>
                  <button
                    className={pageNumber === currentPage ? "btn-current-page" : ""}
                  >
                    {pageNumber}
                  </button>
                </li>
              )}
            </ul>
        }

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
