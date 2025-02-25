## **Stack Navigation**
---
Stack Navigation is a navigation pattern in **React Navigation** that allows apps to transition between screens by stacking them on top of each other.

### **Key Features of Stack Navigation**
- **Screen transitions follow a "stack" structure** (similar to browser history).
- **Supports gestures for navigating back** (iOS) and back button handling (Android).
- **Each screen is managed in a navigation stack**, allowing users to **push** or **pop** screens dynamically.

---
### **Installing Dependencies**
---
To use Stack Navigation, install the required dependencies:

shell  
npm install @react-navigation/native  
npm install @react-navigation/stack  

Then, install the required peer dependencies:

shell  
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons  

---
### **Setting Up Stack Navigation**
---
To configure **Stack Navigation**, follow these steps:

1. Import the necessary components from React Navigation.
2. Create a **Stack Navigator** using `createStackNavigator`.
3. Define screens within the **Stack Navigator**.

javascript  
import React from "react";  
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";  
import { Button, View, Text } from "react-native";  

const Stack = createStackNavigator();  

function HomeScreen({ navigation }) {  
  return (  
    <View>  
      <Text>Home Screen</Text>  
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />  
    </View>  
  );  
}  

function DetailsScreen() {  
  return (  
    <View>  
      <Text>Details Screen</Text>  
    </View>  
  );  
}  

export default function App() {  
  return (  
    <NavigationContainer>  
      <Stack.Navigator>  
        <Stack.Screen name="Home" component={HomeScreen} />  
        <Stack.Screen name="Details" component={DetailsScreen} />  
      </Stack.Navigator>  
    </NavigationContainer>  
  );  
}  

---
### **Navigating Between Screens**
---
Use the **navigation prop** to switch between screens dynamically.

javascript  
<Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />  

---
### **Passing Parameters Between Screens**
---
To pass parameters between screens:

javascript  
navigation.navigate("Details", { itemId: 42 });  

Retrieve the parameter in the target screen:

javascript  
function DetailsScreen({ route }) {  
  const { itemId } = route.params;  
  return <Text>Item ID: {itemId}</Text>;  
}  

---
### **Customizing Screen Options**
---
Customize screen appearance using `screenOptions`:

javascript  
<Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#6200ee" }, headerTintColor: "#fff" }}>  
  <Stack.Screen name="Home" component={HomeScreen} />  
</Stack.Navigator>  

---
### **Conclusion**
---
- **Stack Navigation allows hierarchical navigation in React Native apps.**  
- **Users can transition between screens dynamically.**  
- **Custom styles and parameters enhance navigation functionality.**  
- **Ensure dependencies are installed for smooth navigation.**  
