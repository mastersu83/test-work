import React, { useState } from "react";
import classes from "./Category.module.scss";
import { useGetAllCategoriesQuery } from "../../services/categoryAPI";
import { useAppDispatch } from "../../hooks/appHooks";
import { setCategoryId } from "../../redux/reducers/categorySlice";

const Category = () => {
  const dispatch = useAppDispatch();
  const { data: categoryList } = useGetAllCategoriesQuery({});
  const [active, setActive] = useState<number>(0);

  const getCategoryId = (id: number, index: number) => {
    dispatch(setCategoryId(id));
    setActive(index);
  };

  return (
    <div className={classes.category}>
      <span className={classes.category__title}>
        Категории товаров
        <span className={classes.category__setup}>Настройки</span>
      </span>

      <div className={classes.category__tabs}>
        {categoryList &&
          categoryList.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => getCategoryId(cat.id, index)}
              className={`${classes.category__tab} ${
                active === index ? classes.active : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Category;
