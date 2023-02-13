import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import trenchcoat from './images/trenchcoat.jpeg';
import shirt from './images/shirt.jpeg';
import joggers from './images/joggers.jpeg';
import tshirt from './images/tshirt.jpeg';
import tops from './images/tops.jpeg';
import jumper from './images/jumper.jpeg';
import dress from './images/dress.jpeg';
import gilet from './images/gilet.jpeg';
import cardigan from './images/cardigan.jpeg';

const productArray = [
  {
    id: nanoid(15),
    name: 'Linen-blend shirt',
    cost: '€49.99',
    src: shirt,

    inFavorites: false,
    category: ['Trending now'],
  },
  {
    id: nanoid(15),
    name: 'Straight joggers',
    cost: '€24.99',
    src: joggers,

    inFavorites: false,
    category: ['New Arrivals'],
  },
  {
    id: nanoid(15),
    name: 'Double-breasted trenchcoat',
    cost: '€69.99',
    src: trenchcoat,
    inFavorites: false,
    category: ['Coats'],
  },
  {
    id: nanoid(15),
    name: 'Oversized T-shirt',
    cost: '€21.99',
    src: tshirt,
    inFavorites: false,
    category: ['T-Shirts'],
  },
  {
    id: nanoid(15),
    name: '5-pack strappy tops',
    cost: '€15.99',
    src: tops,
    inFavorites: false,
    category: ['New Arrivals', 'T-Shirts'],
  },
  {
    id: nanoid(15),
    name: 'Boxy jumper',
    cost: '€99.99',
    src: jumper,
    inFavorites: false,
    category: ['New Arrivals'],
  },
  {
    id: nanoid(15),
    name: 'Wrap dress',
    cost: '€109',
    src: dress,
    inFavorites: false,
    category: ['Dresses'],
  },
  {
    id: nanoid(15),
    name: 'Hooded puffer gilet',
    cost: '€119.99',
    src: gilet,
    inFavorites: false,
    category: ['BestSellers'],
  },
  {
    id: nanoid(15),
    name: 'Fine-knit cashmere cardigan',
    cost: '€129.99',
    src: cardigan,
    inFavorites: false,
    category: ['New Arrivals', 'BestSellers'],
  },
];

export default productArray;
