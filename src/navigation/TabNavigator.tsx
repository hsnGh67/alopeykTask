import HistoryScreen from '@components/pages/History/HistoryScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PurchasStack from './PurchasStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="PurchaseTab" component={PurchasStack} />
      <Tab.Screen name="HistoryTab" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
