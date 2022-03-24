import React from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={classes.card__container}>
      <div className={classes.card__items}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
