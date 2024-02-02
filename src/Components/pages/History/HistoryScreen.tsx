import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import React from 'react';
import HistoryRow from './HistoryRow';
import {OrderType, ScreenStateType} from 'src/type';
import {moderateScale} from 'react-native-size-matters';
import {useServerContext} from 'src/mockServer/ServerContext';
import ITypography from '@components/common/Typography';

export default function HistoryScreen() {
  const [state, setState] = React.useState<ScreenStateType<OrderType>>({
    data: [],
    isLoading: true,
  });
  const [isRefreshing, setRefreshing] = React.useState(false);
  const {getOrders} = useServerContext();
  let interval = React.useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    getOrdersData();

    interval.current = setInterval(() => {
      setRefreshing(true);
      getOrdersData();
    }, 5000);

    return () => {
      if (!!interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  const getOrdersData = async () => {
    try {
      const res = await getOrders();
      if (res.status === 200) {
        setState({
          isLoading: false,
          data: res.data as OrderType[],
        });
      } else {
        throw new Error('some error has happened');
      }
    } catch (e) {
      ToastAndroid.show('something went wrong', ToastAndroid.LONG);
      setState({
        ...state,
        isLoading: false,
      });
    }
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {state.isLoading && (
        <View style={styles.wrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!state.isLoading && (
        <FlatList
          data={state.data}
          contentContainerStyle={{padding: moderateScale(16)}}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={getOrdersData}
            />
          }
          keyExtractor={(order, index) => order.id}
          renderItem={({item}) => (
            <HistoryRow key={item.id + item.status} order={item} />
          )}
          ListEmptyComponent={() => <ITypography>No order found</ITypography>}
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
    height: moderateScale(60),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
