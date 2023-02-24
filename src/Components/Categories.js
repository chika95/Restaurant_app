import React from "react";

function Categories({ categories, filterItems, activeCategory }) {
  return (
    <div>
      {categories.map((category, id) => {
        return (
          <button type="button" key={id} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
