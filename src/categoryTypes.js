import productArray from './productArray';

export const allProducts = productArray.filter((product) =>
  product.category.includes('All products')
);
export const newArrivals = productArray.filter((product) =>
  product.category.includes('New Arrivals')
);
export const trendingnow = productArray.filter((product) =>
  product.category.includes('Trending now')
);
export const bestSellers = productArray.filter((product) =>
  product.category.includes('BestSellers')
);
export const dresses = productArray.filter((product) =>
  product.category.includes('Dresses')
);
export const skirts = productArray.filter((product) =>
  product.category.includes('Skirts')
);
export const tShirts = productArray.filter((product) =>
  product.category.includes('T-Shirts')
);
export const blazers = productArray.filter((product) =>
  product.category.includes('Blazers')
);
export const coats = productArray.filter((product) =>
  product.category.includes('Coats')
);
export const shoes = productArray.filter((product) =>
  product.category.includes('Shoes')
);
export const accessories = productArray.filter((product) =>
  product.category.includes('Accessories')
);
