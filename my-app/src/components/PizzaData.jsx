import pizzaTest from "../components/images/testPizza.jpg";
import сheeseAndChicken from "../components/images/cheeseAndChicken.jpg";
import cheeseburgerPizza from "../components/images/cheeseburgerPizza.jpg";
import cheesePizza from "../components/images/cheesePizza.jpg";
import margarita from "../components/images/margarita.jpg";
import prawnPizza from "../components/images/prawnPizza.jpg";
import superCheese from "../components/images/superCheese.avif";
import mushroom from "../components/images/mushroom.jpg";

const pizzaData = [
  {
    id: 1,
    name: "Asian pizza",
    price: 5.25,
    image: pizzaTest,
    popular: 4.7,
    characteristics: ['spicy']
  },
  {
    id: 2,
    name: "Cheease and chiken",
    price: 7.0,
    image: сheeseAndChicken,
    popular: 4.99,
    characteristics: ['meat']
  },
  {
    id: 3,
    name: "Hawaiian",
    price: 6.4,
    image: cheeseburgerPizza,
    popular: 8.93,
    characteristics: ['meat']
  },
  {
    id: 4,
    name: "Cheese Pizza",
    price: 7.1,
    image: cheesePizza,
    popular: 6.99,
   characteristics: ['vegetarian']
  },
  {
    id: 5,
    name: "Margarita",
    price: 7.99,
    image: margarita,
    popular: 6.42,
    characteristics: ['meat']
  },
  {
    id: 6,
    name: "Prawn Pizza",
    price: 4.5,
    image: prawnPizza,
    popular: 4.66,
    characteristics: ['meat']
  },
  {
    id: 7,
    name: "Super cheese",
    price: 5.8,
    image: superCheese,
    popular: 1.31,
    characteristics: ['spicy', 'meat']
  },
  {
    id: 8,
    name: "Mushroom",
    price: 6.3,
    image: mushroom,
    popular: 7.35,
    characteristics: ['vegetarian']
  },
];

export default pizzaData;
