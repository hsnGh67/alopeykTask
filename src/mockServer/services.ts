import {faker} from '@faker-js/faker';
import {
  CategorizedProducts,
  CategoryType,
  OrderType,
  ProductType,
  ServerResponseType,
} from 'src/type';

const orders: OrderType[] = [];

const categories: CategoryType[] = [
  'category1',
  'category2',
  'category3',
  'category4',
  'category5',
];

const categorizedProducts: CategorizedProducts = {
  category1: [],
  category2: [],
  category3: [],
  category4: [],
  category5: [],
};

const populateCategories = () => {
  categories.map((cat: string) => {
    let products: ProductType[] = [];
    for (let i = 0; i < 5; i++) {
      products.push({
        name: faker.commerce.productName(),
        id: faker.datatype.uuid(),
      });
    }
    categorizedProducts[cat] = products;
  });
};

populateCategories();

export const getCategories = (): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      resolve({status: 200, data: categories});
    }, 1000);
  });

  return promise;
};

export const getProductsOfTheCategory = (): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      resolve({status: 200, data: categorizedProducts});
    }, 1000);
  });

  return promise;
};

export const getOrders = (): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      resolve({status: 200, data: orders});
    }, 1000);
  });

  return promise;
};

export const addOrder = (newOrder: OrderType): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      const order = {...newOrder, id: faker.datatype.uuid()};
      orders.push(order);
      resolve({status: 200, data: order});
    }, 1000);
  });

  return promise;
};
