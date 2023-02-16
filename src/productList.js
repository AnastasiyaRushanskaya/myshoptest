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
import loafers from './images/loafers.jpeg';
import slingbacks from './images/slingbacks.jpeg';
import trainers from './images/trainers.jpeg';
import miniskirt from './images/miniskirt.jpeg';
import jacket from './images/jacket.jpeg';
import shopper from './images/shopper.jpeg';
import belt from './images/belt.jpeg';

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
  {
    id: nanoid(15),
    name: 'Chunky loafers',
    cost: '€34.99',
    src: loafers,
    inFavorites: false,
    category: ['Shoes', 'BestSellers'],
  },
  {
    id: nanoid(15),
    name: 'Textured-weave jacket',
    cost: '€69.99',
    src: jacket,
    inFavorites: false,
    category: ['New Arrivals', 'Blazers'],
  },
  {
    id: nanoid(15),
    name: 'Slingbacks',
    cost: '€239.99',
    src: slingbacks,
    inFavorites: false,
    category: ['New Arrivals', 'Shoes'],
  },
  {
    id: nanoid(15),
    name: 'Mini skirt',
    cost: '€19.99',
    src: miniskirt,
    inFavorites: false,
    category: ['Skirts', 'BestSellers'],
  },
  {
    id: nanoid(15),
    name: 'Trainers',
    cost: '€29.99',
    src: trainers,
    inFavorites: false,
    category: ['Shoes', 'BestSellers'],
  },
  {
    id: nanoid(15),
    name: 'Jute-blend shopper',
    cost: '€39.99',
    src: shopper,
    inFavorites: false,
    category: ['Accessories', 'Trending now'],
  },
  {
    id: nanoid(15),
    name: 'Leather belt',
    cost: '€19.99',
    src: belt,
    inFavorites: false,
    category: ['Accessories', 'BestSellers'],
  },
];

export default productArray;
