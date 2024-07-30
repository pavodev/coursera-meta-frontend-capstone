import React from "react";
import ActionHeading from "./ActionHeading";
import Card from "./Card";

import "./Highlights.scss";

import GreekSalad from "../assets/img/greek-salad.jpg";
import Bruschetta from "../assets/img/bruschetta.jpg";
import LemonDessert from "../assets/img/lemon-dessert.jpg";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="highlights__container section">
        <ActionHeading title="This Weeks specials!" actionLabel="ONLINE MENU" />
        <div className="highlights__specials">
          <Card
            imageSrc={GreekSalad}
            title="Greek Salad"
            body="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheeese, garnished with crunchy garlic and rosemary croutons."
            price="$12.99"
          />
          <Card
            imageSrc={Bruschetta}
            title="Bruschetta"
            body="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            price="$7.99"
          />
          <Card
            imageSrc={LemonDessert}
            title="Lemon Dessert"
            body="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            price="$5.00"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
