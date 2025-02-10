import { Subpage } from "@/Navigation/NavigationTypes";

const ReactNativeNavigation: Subpage = {
  name: "React Native",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Introduction", path: "/react/native/introduction" }, // What is React Native? Use cases & benefits
        { name: "Setup & Installation", path: "/react/native/setup" }, // Installing React Native CLI & Expo
        { name: "Project Structure", path: "/react/native/project-structure" }, // Organizing files & folders
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Components & Styling", path: "/react/native/components-styling" }, // Core components & StyleSheet API
        { name: "Props & State", path: "/react/native/props-state" }, // Managing component state & passing props
        { name: "Event Handling", path: "/react/native/event-handling" }, // Handling touch gestures & user input
      ],
    },
    {
      name: "Navigation & Routing",
      subpages: [
        { name: "React Navigation Basics", path: "/react/native/navigation-basics" }, // Stack, Tab, Drawer navigation
        { name: "Navigation Params", path: "/react/native/navigation-params" }, // Passing data between screens
        { name: "Deep Linking", path: "/react/native/deep-linking" }, // Handling deep links & universal links
      ],
    },
    {
      name: "Working with Native Features",
      subpages: [
        { name: "Accessing Device APIs", path: "/react/native/device-apis" }, // Camera, GPS, Sensors, etc.
        { name: "Handling Permissions", path: "/react/native/permissions" }, // Managing iOS & Android permissions
        { name: "Using Native Modules", path: "/react/native/native-modules" }, // Writing custom modules in Swift/Kotlin
      ],
    },
    {
      name: "State Management & Data Handling",
      subpages: [
        { name: "Managing State", path: "/react/native/state-management" }, // Redux, Zustand, Context API
        { name: "Networking & API Calls", path: "/react/native/networking" }, // Fetching data from APIs
        { name: "Local Storage & Databases", path: "/react/native/local-storage" }, // AsyncStorage, SQLite, Realm DB
      ],
    },
    {
      name: "Performance & Optimization",
      subpages: [
        { name: "Optimizing Performance", path: "/react/native/performance" }, // Avoiding re-renders, using FlatList
        { name: "Handling Large Lists", path: "/react/native/large-lists" }, // Virtualization & infinite scrolling
        { name: "Animations & Gestures", path: "/react/native/animations-gestures" }, // React Native Reanimated, Gesture Handler
      ],
    },
    {
      name: "Building & Deployment",
      subpages: [
        { name: "Debugging & Testing", path: "/react/native/debugging-testing" }, // Debugging tools & Jest testing
        { name: "Building for iOS & Android", path: "/react/native/building-ios-android" }, // Generating APKs & iOS builds
        { name: "Publishing Apps", path: "/react/native/publishing" }, // Play Store, App Store submission process
      ],
    },
  ],
};

export default ReactNativeNavigation;
