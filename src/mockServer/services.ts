import {faker} from '@faker-js/faker';
import {
  CategorizedProducts,
  CategoryType,
  OrderStatusEnum,
  OrderType,
  ProductType,
  ServerResponseType,
} from 'src/type.d';

const DELAY_TIME = 1000;

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
        id: Math.floor(Math.random() * 1000000).toString(),
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
    }, DELAY_TIME);
  });

  return promise;
};

export const getProductsOfTheCategory = (
  cat: string,
): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      resolve({status: 200, data: categorizedProducts[cat]});
    }, DELAY_TIME);
  });

  return promise;
};

export const getOrders = (): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      resolve({status: 200, data: orders});
    }, DELAY_TIME);
  });

  return promise;
};

export const addOrder = (
  newOrder: Omit<OrderType, 'id' | 'registerDate' | 'status'>,
): Promise<ServerResponseType> => {
  const promise: Promise<ServerResponseType> = new Promise(resolve => {
    setTimeout(() => {
      const order: OrderType = {
        ...newOrder,
        registerDate: Date.now(),
        status: OrderStatusEnum.PENDING,
        id: Math.floor(Math.random() * 1000000).toString(),
      };
      orders.push(order);
      resolve({status: 200, data: order});
    }, DELAY_TIME);
  });

  return promise;
};
