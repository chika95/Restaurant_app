import React, { useState, useEffect } from "react";
import menu from "./Data";
import Home from "./Home";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const keys = ["title", "desc"];
  useEffect(() => {
    if (query?.length > 0) {
      const filteredProducts = menu.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
      setProducts(filteredProducts);
    }
  }, [query]);

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="section-center">
        {products?.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4>${price}</h4>
                </header>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
