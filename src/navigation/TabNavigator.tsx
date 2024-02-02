import HistoryScreen from '@components/pages/History/HistoryScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PurchasStack from './PurchasStack';
import {TabParamList} from 'src/type';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarIconStyle: {display: 'none'}}}>
      <Tab.Screen name="PurchaseTab" component={PurchasStack} />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
}
