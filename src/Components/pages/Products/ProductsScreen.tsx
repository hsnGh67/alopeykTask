import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  LocationType,
  ProductType,
  PurcahseNavigationProp,
  PurcahseStackNavigatorParamList,
  ScreenStateType,
} from 'src/type';
import {useServerContext} from '../../../mockServer/ServerContext';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import ProductRow from './ProductRow';
import Map from './Map';

type PropsType = NativeStackScreenProps<
  PurcahseStackNavigatorParamList,
  'Products'
>;

export default function ProductsScreen({route}: PropsType) {
  const {category} = route.params;
  const {getProductsOfTheCategory, addOrder} = useServerContext();
  const [showMap, setShowMap] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<
    ProductType | undefined
  >(undefined);
  const [location, updateLocation] = React.useState<LocationType | undefined>(
    undefined,
  );
  const [state, setState] = React.useState<ScreenStateType<ProductType>>({
    data: [],
    isLoading: true,
  });
  const navigation = useNavigation<PurcahseNavigationProp>();

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await getProductsOfTheCategory(category);
      if (res.status === 200) {
        setState({
          isLoading: false,
          data: res.data as ProductType[],
        });
      }
    } catch (e) {}
  };

  const onProductPressed = React.useCallback((p: ProductType) => {
    setShowMap(true);
    setSelectedProduct(p);
  }, []);

  const onLocationSelect = React.useCallback((newLocation: LocationType) => {
    updateLocation(newLocation);
  }, []);

  const onLoactionConfirmed = React.useCallback(async () => {
    if (!location || !selectedProduct) return;
    setShowMap(false);
    await addOrder({
      product: selectedProduct,
      location: location,
    });
    navigation.goBack();
    navigation.navigate('HistoryTab');
  }, [location]);

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <View style={styles.wrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <>
          <FlatList
            data={state.data}
            contentContainerStyle={{padding: moderateScale(16)}}
            keyExtractor={(product, index) => product.id}
            renderItem={({item}) => (
              <ProductRow
                product={item}
                key={item.id}
                onProductPressed={onProductPressed}
              />
            )}
          />
          <Map
            show={showMap}
            onRequestClose={() => setShowMap(false)}
            location={location}
            onLocationSelect={onLocationSelect}
            onConfirm={onLoactionConfirmed}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
