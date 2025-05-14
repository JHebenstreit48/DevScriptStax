## **Networking & API Calls**
---
React Native provides built-in support for making **API calls** to fetch or send data.

---
### **Making API Calls with fetch**
---
✅ **Example: Fetching Data with useEffect**

javascript
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{data ? data.message : "Loading..."}</Text>
    </View>
  );
}

export default DataFetcher;

---
### **Handling API Errors**
---
- **Always handle network errors** using .catch().
- **Use try/catch with async/await** for better readability.

✅ **Example: Handling Errors in API Calls**

javascript
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <View>
      <Text>{data ? data.message : "Loading..."}</Text>
    </View>
  );
}

export default DataFetcher;

---
### **Using axios for API Calls**
---
**Axios** is an alternative to fetch with built-in error handling.

✅ **Example: Using Axios to Fetch Data**

javascript
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

function AxiosDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.example.com/data")
      .then(response => setData(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <View>
      <Text>{data ? data.message : "Loading..."}</Text>
    </View>
  );
}

export default AxiosDataFetcher;

---
### **Best Practices for API Calls**
---
✅ **Use useEffect to call APIs on component mount.**  
✅ **Store API responses in state to avoid unnecessary re-fetching.**  
✅ **Use error handling techniques (catch(), try/catch).**  
✅ **Consider using axios for improved functionality.**  

---
### **Conclusion**
---
- **APIs allow communication between apps and external servers.**  
- **fetch and axios are common ways to make API calls.**  
- **Always handle errors properly to prevent crashes.**  
