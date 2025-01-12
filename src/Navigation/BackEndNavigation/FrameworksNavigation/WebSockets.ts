import { Subpage } from "@/Navigation/NavigationTypes";

const WebSocketsNavigation: Subpage = {
  name: "Web Sockets",
  subpages: [
    {
        name: "WebSockets Notes",
        path: "/websockets"
    },
    {
        name: "WebSockets Code Notes",
        path: "/websockets/websocketscode"
    },
  ],
};

export default WebSocketsNavigation;
