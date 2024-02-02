import React, {Reducer} from 'react';
import {
  CategorizedProducts,
  CategoryType,
  OrderType,
  ServerResponseType,
} from 'src/type';
import {
  addOrder,
  getCategories,
  getOrders,
  getProductsOfTheCategory,
} from './services';

type MockServerContextType = {
  getCategories: () => Promise<ServerResponseType>;
  getProductsOfTheCategory: () => Promise<ServerResponseType>;
  getOrders: () => Promise<ServerResponseType>;
  addOrder: (newOrder: OrderType) => Promise<ServerResponseType>;
};

const MockServerContext = React.createContext<MockServerContextType>({
  getCategories,
  getProductsOfTheCategory,
  getOrders,
  addOrder,
});

const useServerContext = () => {
  const serverContext = React.useContext(MockServerContext);

  if (!!serverContext) {
    return serverContext;
  }

  throw new Error(
    'useServerContext should be used inside MockServerContextProvider',
  );
};

const ServerContextProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <MockServerContext.Provider
      value={{getOrders, addOrder, getCategories, getProductsOfTheCategory}}>
      {children}
    </MockServerContext.Provider>
  );
};

export {ServerContextProvider, useServerContext};
