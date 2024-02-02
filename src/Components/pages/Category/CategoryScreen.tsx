import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {CategoryType, PurcahseNavigationProp} from '../../../type';
import CategoryRow from './CategoryRow';
import {useServerContext} from '../../../mockServer/ServerContext';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

type StateType = {
  data: CategoryType[];
  isLoading: boolean;
};

export default function CategoryScreen() {
  const {getCategories} = useServerContext();
  const [state, setState] = React.useState<StateType>({
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
    <View>
      {state.isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={state.data}
          contentContainerStyle={{padding: moderateScale(16)}}
          keyExtractor={(cat, index) => cat}
          renderItem={({item}) => (
            <CategoryRow
              category={item}
              onRowPressed={() => onRowPressed(item)}
            />
          )}
        />
      )}
    </View>
  );
}
