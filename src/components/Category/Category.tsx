import React, { useState } from "react";
import classes from "./Category.module.scss";

const categoryList = [
  "Игрушка",
  "Мартышка",
  "Мишка",
  "Подарок",
  "Подарок коллегам",
  "День Рождения Гриши",
];

const Category = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className={classes.category}>
      <span className={classes.category__title}>
        Категории товаров
        <span className={classes.category__setup}>Настройки</span>
      </span>

      <div className={classes.category__tabs}>
        {categoryList.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setActive(index)}
            className={`${classes.category__tab} ${
              active === index ? classes.active : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
