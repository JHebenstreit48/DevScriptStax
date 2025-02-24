import { Subpage } from "@/Navigation/NavigationTypes";

const RNBuildingAndPerformNavigation: Subpage = {
  name: "Building & Performance",
  subpages: [
    {
      name: "Building & Deployment",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            { name: "Debugging & Testing", path: "/react/native/buildinganddeploy/debuggingtesting" },
            { name: "Building for iOS & Android", path: "/react/native/buildinganddeploy/buildingiosandroid" },
            { name: "Publishing Apps", path: "/react/native/buildinganddeploy/publishingapps" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "CI/CD Integration", path: "/react/native/building/advanced/cicd" },
            { name: "Handling Environment Variables", path: "/react/native/building/advanced/env-variables" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "Build Optimization", path: "/react/native/building/best-practices/optimization" },
            { name: "Deployment Strategies", path: "/react/native/building/best-practices/deployment" }
          ],
        }
      ],
    },
    {
      name: "Performance Optimization",
      subpages: [
        {
          name: "Improving Performance",
          subpages: [
            { name: "Optimizing Performance", path: "/react/native/performanceandoptimization/optimizingperformance" },
            { name: "Handling Large Lists", path: "/react/native/performanceandoptimization/largelists" },
            { name: "Animations & Gestures", path: "/react/native/performanceandoptimization/animationsandgestures" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "Advanced Performance Profiling", path: "/react/native/performanceandoptimization/advanced/profiling" },
            { name: "Memory Management", path: "/react/native/performance/advanced/memory" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "Performance Optimization Best Practices", path: "/react/native/performanceandoptimization/best-practices" },
            { name: "Avoiding Performance Pitfalls", path: "/react/native/performance/best-practices/pitfalls" }
          ],
        }
      ],
    }
  ],
};

export default RNBuildingAndPerformNavigation;
