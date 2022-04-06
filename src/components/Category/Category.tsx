import React, { useState } from "react";
import classes from "./Category.module.scss";
import { useGetAllCategoriesQuery } from "../../services/categoryAPI";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setCategoryId } from "../../redux/reducers/productsSlice";

const Category = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector((state) => state.products);
  const { data: categoryList } = useGetAllCategoriesQuery({});
  const [active, setActive] = useState<number>(categoryId);

  const getCategoryId = (id: number) => {
    dispatch(setCategoryId(id));
    setActive(id);
  };

  return (
    <div className={classes.category}>
      <span className={classes.category__title}>
        Категории товаров
        <span className={classes.category__setup}>Настройки</span>
      </span>

      <div className={classes.category__tabs}>
        {categoryList &&
          categoryList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => getCategoryId(cat.id)}
              className={`${classes.category__tab} ${
                active === cat.id ? classes.active : ""
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
