import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: "/redux/basics/fundamentals/overview"
        },
        {
          name: "Core Concepts",
          path: "/redux/basics/fundamentals/core-concepts"
        },
        {
          name: "Data Flow",
          path: "/redux/basics/fundamentals/data-flow"
        }
      ]
    },
    {
      name: "React Integration",
      subpages: [
        {
          name: "Provider & Store",
          path: "/redux/basics/react-integration/provider-and-store"
        },
        {
          name: "Hooks (useSelector/useDispatch)",
          path: "/redux/basics/react-integration/hooks"
        },
        {
          name: "connect (legacy)",
          path: "/redux/basics/react-integration/connect-legacy"
        }
      ]
    },
    {
      name: "State & Reducers",
      subpages: [
        {
          name: "Actions & Reducers",
          path: "/redux/basics/state-reducers/actions-and-reducers"
        },
        {
          name: "Immutability Basics",
          path: "/redux/basics/state-reducers/immutability-basics"
        }
      ]
    },
    {
      name: "Store Setup",
      subpages: [
        {
          name: "configureStore",
          path: "/redux/basics/store-setup/configure-store"
        },
        {
          name: "Slices (createSlice)",
          path: "/redux/basics/store-setup/slices"
        }
      ]
    }
  ]
};

export default Basics;