import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import UserNav from './Navigation/UserNav';
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
       <UserNav/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
