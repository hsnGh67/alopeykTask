import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

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

export type LocationType = [number, number];

export type OrderType = {
  id: string;
  product: ProductType;
  registerDate: number;
  location: LocationType;
  status: OrderStatusEnum;
};

export type ServerResponseType = {
  status: number;
  data: unknown;
};

export type ScreenStateType<T> = {
  data: T[];
  isLoading: boolean;
};

export type PurcahseStackNavigatorParamList = {
  Category: undefined;
  Products: {category: string};
};

export type PurcahseNavigationProp = NativeStackScreenProps<
  PurcahseStackNavigatorParamList,
  Category,
  Products
>;

export type TabParamList = {
  PurchaseTab: NavigatorScreenParams<PurcahseStackNavigatorParamList>;
  HistoryTab: undefined;
};
