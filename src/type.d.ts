export enum OrderStatusEnum {
  'PENDING' = 'pending',
  'IN_PROCESS' = 'in-process',
  'DELIVERY' = 'delivery',
  'DELIVERED' = 'delivered',
}

export type CategoryType = string;

export type ProductType = {
  id: string;
  name: string;
};

export type CategorizedProducts = {[key: string]: ProductType[]};

export type OrderType = {
  id: string;
  product: ProductType;
  registerDate: Date;
  location: [number, number];
  status: OrderStatusEnum;
};

export type ServerResponseType = {
  status: number;
  data: unknown;
};
