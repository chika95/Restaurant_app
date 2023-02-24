import React, { useState } from "react";
import "../App.css";
import Categories from "./Categories";
import menu from "./Data";

function Menu() {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(menu);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (activeCategory === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    console.log(newItems);
    setMenuItems(newItems);
  };
  return (
    <div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <div className="section-center">
        {menuItems.map((item) => {
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
}

export default Menu;
