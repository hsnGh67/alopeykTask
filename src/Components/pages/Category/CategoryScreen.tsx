import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  CategoryType,
  PurcahseNavigationProp,
  ScreenStateType,
} from '../../../type';
import CategoryRow from './CategoryRow';
import {useServerContext} from '../../../mockServer/ServerContext';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function CategoryScreen() {
  const {getCategories} = useServerContext();
  const [state, setState] = React.useState<ScreenStateType<CategoryType>>({
    data: [],
    isLoading: true,
  });
  const navigation = useNavigation<PurcahseNavigationProp>();

  React.useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      const res = await getCategories();
      if (res.status === 200) {
        setState({
          isLoading: false,
          data: res.data as CategoryType[],
        });
      }
    } catch (e) {}
  };

  const onRowPressed = React.useCallback((cat: string) => {
    console.log('cat', cat);
    navigation.navigate('Products', {category: cat});
  }, []);

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <View style={styles.wrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={state.data}
          contentContainerStyle={{padding: moderateScale(16)}}
          keyExtractor={(cat, index) => cat}
          renderItem={({item}) => (
            <CategoryRow
              key={item}
              category={item}
              onRowPressed={() => onRowPressed(item)}
            />
          )}
        />
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
