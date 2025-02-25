## **Native Features**
---
### **Accessing Device APIs**
---
<span class="emphasis">React Native</span> provides access to various **native device features** through its built-in APIs. This allows developers to integrate hardware capabilities such as the **camera, GPS, and sensors** into their apps.

---
### **Leveraging Native APIs with React Native**
---
React Native allows developers to interact with a device’s **native features**, such as:

- **Camera**: Access the device's camera to capture photos or videos.
- **Location Services**: Use GPS to get the device's location.
- **Other Features**: Access hardware like accelerometers, gyroscopes, and more.

These capabilities are achieved through **bridging JavaScript code with native APIs**, enabling seamless integration of mobile hardware into your application.

---
### **Example: Accessing the Camera**
---
To access the camera in a React Native app, you can use the `react-native-camera` package:

shell  
npm install react-native-camera  

Example usage:

javascript  
import React, { useRef } from "react";  
import { View, Button } from "react-native";  
import { RNCamera } from "react-native-camera";  

function CameraScreen() {  
  const cameraRef = useRef(null);  

  const takePicture = async () => {  
    if (cameraRef.current) {  
      const data = await cameraRef.current.takePictureAsync();  
      console.log(data.uri);  
    }  
  };  

  return (  
    <View>  
      <RNCamera ref={cameraRef} style={{ flex: 1 }} />  
      <Button title="Take Photo" onPress={takePicture} />  
    </View>  
  );  
}  

export default CameraScreen;  

---
### **Using GPS for Location Services**
---
To get a device's **current location**, use the `react-native-geolocation-service` package:

shell  
npm install react-native-geolocation-service  

Example:

javascript  
import React, { useEffect, useState } from "react";  
import { View, Text } from "react-native";  
import Geolocation from "react-native-geolocation-service";  

function LocationTracker() {  
  const [location, setLocation] = useState(null);  

  useEffect(() => {  
    Geolocation.getCurrentPosition(  
      (position) => {  
        setLocation(position.coords);  
      },  
      (error) => console.log(error),  
      { enableHighAccuracy: true }  
    );  
  }, []);  

  return (  
    <View>  
      <Text>Latitude: {location?.latitude}</Text>  
      <Text>Longitude: {location?.longitude}</Text>  
    </View>  
  );  
}  

export default LocationTracker;  

---
### **Conclusion**
---
- React Native provides built-in support for **camera, GPS, and sensors**.
- **Third-party packages** like `react-native-camera` and `react-native-geolocation-service` enhance native API access.
- **Bridging JavaScript and native APIs** allows seamless interaction with mobile hardware.
