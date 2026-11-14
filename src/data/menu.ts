
import type { Category } from "../types/menu";

// Sandwitch imports 
import vegSandwich from "../assets/vegSandwitch.avif";
import ClubSandwich from '../assets/clubSandwitch.webp';
import CheeseCornSandwich from "../assets/CheeseCornSandwich.webp";
import PotesaraSandwitch from "../assets/PotesaraPotatoSandwich.avif";
import PaneerSandwitch from "../assets/PaneerSandwich.avif";
import ChoclateSandwitch from "../assets/ChocolateSandwich.avif";
import PaneerShawarmaSandwitch from "../assets/PaneerShawarmaSandwich.avif"; 

//golden crunch imports
import saltedFries from "../assets/saltedFries.avif";
import periPeriFries from "../assets/peri-peri-fries.avif";
import cheesyFries from "../assets/CheesyFries.avif";

// burger studio imports
import classicVegBurger from "../assets/ClassicVegBurger.avif";
import vegCheeseBurger from "../assets/VegCheeseBurger.avif";
import mexicanBurger from "../assets/MexicanBurger.avif";
import paneerTikkaBurger from "../assets/PaneerTikkaBurger.webp";
import crispyPaneerTikkiBurger from "../assets/CrispyPaneerTikki Burger.avif";

//fried rice imports
import vegFriedRice from "../assets/VegFriedRice.avif";
import schezwanFriedRice from "../assets/SchezwanFriedRice.avif";
import paneerFriedRice from "../assets/PaneerFriedRice.avif";
import mangolianRice from "../assets/MangolianRice.avif";
import paneerShawarmaRice from "../assets/PaneerShawarmaRice.avif";

//maggie imports
import plainMaggie from "../assets/PlainMaggie.avif";
import vegMaggie from "../assets/VegMaggie.webp";
import vegCheeseMaggie from "../assets/VegCheeseMaggie.jpeg";
import periPeriCheeseMaggie from "../assets/PeriPeriCheeseMaggie.jpeg";
import cheeseCornMaggie from "../assets/CheeseCornMaggie.jpeg";
import kFusionMasalaMaggie from "../assets/K-FusionMasalaMaggie.jpeg";

//pasta imports
import creamyCheesyPasta from "../assets/CreamyCheesyPasta.avif";
import redSaucePasta from "../assets/RedSaucePasta.avif";

//noodles imports
import vegNoodles from "../assets/VegNoodles.avif";
import cornNoodle from "../assets/CornNoodle.avif";
import chilliGarlicNoodle from "../assets/ChilliGarlicNoodle.avif";

//shawarma imports
import paneerShawarma from "../assets/PaneerShawarma.jpg";
import paneerCheeseShawarma from "../assets/PaneerCheeseShawarma.webp";
import onlyPaneerShawarma from "../assets/onlypaneerShawarma.jpeg";
import periPeriPaneerShawarma from "../assets/PeriPeriPaneerShawarma.webp";
import paneerSchezwanShawarma from "../assets/PaneerSchezwanShawarma.webp";
import hotGarlicPaneerShawarma from "../assets/hotGarlicPaneerShawarma.jpeg";
import deathByCheeseShawarma from "../assets/CheeseShawarma.webp";
import paneerShawarmaIsland from "../assets/paneerShawarmaIsland.jpeg";

//harvest & hunt imports
import paneerChilly from "../assets/PaneerChilly.avif";

//sip & shakes imports
import vanillaShake from "../assets/VanillaShake.avif";
import kitKatShake from "../assets/KitKatShake.avif";
import oreoShake from "../assets/OreoShake.avif";
import chocolateShake from "../assets/ChocolateShake.avif";
import coldCoffee from "../assets/ColdCoffee.avif";
import brownieShake from "../assets/BrownieShake.avif";
import coldCoffeeWithIceCream from "../assets/ColdCoffeeWithIceCream.avif";

//bbc mocktail bar imports
import limeWater from "../assets/LimeWater.avif";
import limeSoda from "../assets/LimeSoda.avif";
import mintMojito from "../assets/MintMojito.avif";
import blueLagoon from "../assets/BlueLagoon.webp";
import watermelonWave from "../assets/WatermelonWave.webp";
import raspberryFizz from "../assets/RaspberryFizz.avif";
import chillyMojito from "../assets/ChillyMojito.avif";

//classic brews imports
import regularCoffee from "../assets/RegularCoffee.avif";
import masalaLemonTea from "../assets/MasalaLemonTea.avif";
import milkTea from "../assets/MilkTea.avif";
import espressoSingleShot from "../assets/EspressoSingleShot.avif";
import icedOrangeEspresso from "../assets/IcedOrangeEspresso.avif";
import icedCranberryEspresso from "../assets/IcedCranberryEspresso.avif";
import peachIceTea from "../assets/PeachIceTea.avif";
import lemonIceTea from "../assets/LemonIceTea.avif";
import americanoIceAmericano from "../assets/AmericanoIIceAmericano.avif";
import caffeLatte from "../assets/CaffeLatte.avif";
import cappuccinoIceCappuccino from "../assets/Cappuccino.avif";
import latteIceLatte from "../assets/LemonIceTea.avif";
import caramelLatte from "../assets/CaramelLatte.avif";
import mocha from "../assets/Mocha.avif";
import icedSpanishLatte from "../assets/IcedSpanishLatte.avif"; 

// Homepage hero image
export const heroImage =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=90";

export const categories: Category[] = [
  {
    id: "sandwich-craft",
    name: "Sandwich Craft",
    description: "Freshly made sandwiches",
    image: vegSandwich,
    items: [
      { name: "Veg Sandwich", price: 60, image: vegSandwich},
      { name: "Club Sandwich", price: 60,image: ClubSandwich },
      { name: "Cheese Corn Sandwich", price: 70 , image: CheeseCornSandwich},
      { name: "Potesara (Potato) Sandwich", price: 80, image: PotesaraSandwitch },
      { name: "Paneer Sandwich", price: 80, image: PaneerSandwitch },
      { name: "Chocolate Sandwich", price: 90 , image: ChoclateSandwitch},
      { name: "Paneer Shawarma Sandwich", price: 90, image: PaneerShawarmaSandwitch },
    ],
  },
  {
    id: "golden-crunch",
    name: "Golden Crunch",
    description: "Crispy and golden delights",
    image: saltedFries,
    items: [
      { name: "Salted Fries", price: 60, image: saltedFries},
      { name: "Peri Peri Fries", price: 70, image: periPeriFries },
      { name: "Cheesy Fries", price: 90, image: cheesyFries },
    ],
  },
  {
    id: "burger-studio",
    name: "Burger Studio",
    description: "Bigger bites, bolder flavours",
    image: classicVegBurger,
    items: [
      { name: "Classic Veg Burger", price: 70, image: classicVegBurger },
      { name: "Veg Cheese Burger", price: 80, image: vegCheeseBurger },
      { name: "Mexican Burger", price: 80, image: mexicanBurger },
      { name: "Paneer Tikka Burger", price: 99, image: paneerTikkaBurger },
      { name: "Crispy Paneer Tikki Burger", price: 99, image: crispyPaneerTikkiBurger },
    ],
  },
  {
    id: "rice-junction",
    name: "Rice Junction",
    description: "A bowl full of happiness",
    image: vegFriedRice,
    items: [
      { name: "Veg Fried Rice", price: 139, image: vegFriedRice },
      { name: "Schezwan Fried Rice", price: 149, image: schezwanFriedRice },
      { name: "Paneer Fried Rice", price: 159, image: paneerFriedRice },
      { name: "Mangolian Rice", price: 169, image: mangolianRice },
      { name: "Paneer Shawarma Rice", price: 169, image: paneerShawarmaRice },
    ],
  },
  {
    id: "maggie-mania",
    name: "Maggie Mania",
    description: "Hot, spicy and delicious",
    image: vegMaggie,
    items: [
      { name: "Plain Maggie", price: 60, image: plainMaggie },
      { name: "Veg Maggie", price: 70, image: vegMaggie },
      { name: "Veg Cheese Maggie", price: 80, image: vegCheeseMaggie },
      { name: "Peri Peri Cheese Maggie", price: 80, image: periPeriCheeseMaggie },
      { name: "Cheese Corn Maggie", price: 80, image: cheeseCornMaggie },
      { name: "K-Fusion Masala Maggie", price: 90, image: kFusionMasalaMaggie },
    ],
  },
  {
    id: "pasta-street",
    name: "Pasta Street",
    description: "Creamy cheesy happiness",
    image: creamyCheesyPasta,
    items: [
      { name: "Creamy Cheesy Pasta", price: 119 ,image: creamyCheesyPasta},
      { name: "Red Sauce Pasta", price: 119 ,image: redSaucePasta},
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    description: "Twirl into goodness",
    image: vegNoodles,
    items: [
      { name: "Veg Noodles", price: 110, image: vegNoodles },
      { name: "Corn Noodle", price: 130, image: cornNoodle },
      { name: "Chilli Garlic Noodle", price: 150, image: chilliGarlicNoodle },
    ],
  },
  {
    id: "shawarma-rolls",
    name: "Shawarma Rolls",
    description: "Roll into happiness",
    image: paneerShawarma,
    items: [
      { name: "Paneer Shawarma", price: 99, image: paneerShawarma },
      { name: "Paneer Cheese Shawarma", price: 99, image: paneerCheeseShawarma },
      { name: "Only Paneer Shawarma", price: 99, image: onlyPaneerShawarma },
      { name: "Peri Peri Paneer Shawarma", price: 119, image: periPeriPaneerShawarma },
      { name: "Paneer Schezwan Shawarma", price: 129, image: paneerSchezwanShawarma },
      { name: "Hot Garlic Paneer Shawarma", price: 129, image: hotGarlicPaneerShawarma },
      { name: "Death by Cheese Shawarma", price: 149, image: deathByCheeseShawarma },
      { name: "Paneer Shawarma Island", price: 159, image: paneerShawarmaIsland },
    ],
  },
  {
    id: "harvest-hunt",
    name: "Harvest & Hunt",
    description: "Fresh and flavourful bites",
    image: paneerChilly,
    items: [
      { name: "Paneer Chilly", price: 110, image: paneerChilly },
    ],
  },
  {
    id: "sip-shakes",
    name: "Sip & Shakes",
    description: "Shake up your day",
    image: vanillaShake,
    items: [
      { name: "Vanilla Shake", price: 70, image: vanillaShake },
      { name: "KitKat Shake", price: 80, image: kitKatShake },
      { name: "Oreo Shake", price: 80, image: oreoShake },
      { name: "Chocolate Shake", price: 90, image: chocolateShake },
      { name: "Cold Coffee", price: 90, image: coldCoffee },
      { name: "Brownie Shake", price: 100, image: brownieShake },
      { name: "Cold Coffee with Ice Cream", price: 110, image: coldCoffeeWithIceCream },
    ],
  },
  {
    id: "bbc-mocktail-bar",
    name: "BBC Mocktail Bar",
    description: "Refresh and rejuvenate",
    image: chillyMojito,
    items: [
      { name: "Lime Water (Sweet/Sour)", price: 40 ,image: limeWater},
      { name: "Lime Soda (Sweet/Sour)", price: 50 ,image: limeSoda},
      { name: "Mint Mojito", price: 79 ,image: mintMojito},
      { name: "Blue Lagoon", price: 79 ,image: blueLagoon},
      { name: "Watermelon Wave", price: 89 ,image: watermelonWave},
      { name: "Raspberry Fizz", price: 89 ,image: raspberryFizz},
      { name: "Chilly Mojito", price: 89 ,image: chillyMojito},
    ],
  },
  {
    id: "classic-brews",
    name: "Classic Brews",
    description: "Coffee, tea and everything nice",
    image: caramelLatte,
    items: [
      { name: "Regular Coffee", price: 25 ,image: regularCoffee},
      { name: "Masala Lemon Tea", price: 20 ,image: masalaLemonTea},
      { name: "Milk Tea", price: 50 ,image: milkTea},
      { name: "Espresso Single Shot", price: 60, image: espressoSingleShot},
      { name: "Iced Orange Espresso", price: 80 ,image: icedOrangeEspresso},
      { name: "Iced Cranberry Espresso", price: 80 ,image: icedCranberryEspresso},
      { name: "Peach Ice Tea", price: 80 ,image: peachIceTea},
      { name: "Lemon Ice Tea", price: 80 ,image: lemonIceTea},
      { name: "Americano / Ice Americano", price: 90 ,image: americanoIceAmericano},
      { name: "Caffe Latte", price: 100 ,image: caffeLatte},
      { name: "Cappuccino / Ice Cappuccino", price: 110 ,image: cappuccinoIceCappuccino},
      { name: "Latte / Ice Latte", price: 110 ,image: latteIceLatte},
      { name: "Caramel Latte", price: 110 ,image: caramelLatte},
      { name: "Mocha", price: 120 ,image: mocha},
      { name: "Iced Spanish Latte", price: 120 ,image: icedSpanishLatte},
    ],
  },
];
