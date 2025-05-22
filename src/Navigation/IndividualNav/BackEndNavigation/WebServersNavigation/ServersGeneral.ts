import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ServersGeneralNavigation: Subpage = {
  name: "General Server Concepts",
  subpages: [
    // ---------- Server Fundamentals Navigation Start ----------
    {
      name: "Server Fundamentals",
      subpages: [
        { name: "Introduction to Servers", path: "/servers/general/intro" },
        { name: "Types of Servers", path: "/servers/general/types" },
        { name: "Web Servers vs Application Servers", path: "/servers/general/web-vs-app" },
        { name: "Client-Server Model", path: "/servers/general/client-server" },
        { name: "Understanding DNS & Hosting", path: "/servers/general/dns-hosting" },
      ],
    },
    // ---------- Server Fundamentals Navigation End ----------

    // ---------- Server Infrastructure & Deployment Navigation Start ----------
    {
      name: "Server Infrastructure & Deployment",
      subpages: [
        { name: "Server Architecture & Components", path: "/servers/infrastructure/architecture" },
        { name: "Setting Up a Web Server", path: "/servers/infrastructure/setup" },
        { name: "Server Operating Systems", path: "/servers/infrastructure/os" },
        { name: "Cloud vs On-Premise Servers", path: "/servers/infrastructure/cloud-vs-onprem" },
        { name: "Virtualization & Containers", path: "/servers/infrastructure/virtualization" },
      ],
    },
    // ---------- Server Infrastructure & Deployment Navigation End ----------

    // ---------- Load Balancing & Scalability Navigation Start ----------
    {
      name: "Load Balancing & Scalability",
      subpages: [
        { name: "Introduction to Load Balancing", path: "/servers/scalability/loadbalancing" },
        { name: "Types of Load Balancers", path: "/servers/scalability/types" },
        { name: "Horizontal vs Vertical Scaling", path: "/servers/scalability/scaling-methods" },
        { name: "High Availability & Fault Tolerance", path: "/servers/scalability/high-availability" },
        { name: "Auto Scaling Strategies", path: "/servers/scalability/auto-scaling" },
      ],
    },
    // ---------- Load Balancing & Scalability Navigation End ----------

    // ---------- Server Security & Monitoring Navigation Start ----------
    {
      name: "Server Security & Monitoring",
      subpages: [
        { name: "Basic Security Best Practices", path: "/servers/security/best-practices" },
        { name: "Firewalls & Network Security", path: "/servers/security/firewalls" },
        { name: "DDoS Protection Strategies", path: "/servers/security/ddos-protection" },
        { name: "Server Monitoring Tools", path: "/servers/security/monitoring" },
        { name: "Automating Server Security", path: "/servers/security/automation" },
      ],
    },
    // ---------- Server Security & Monitoring Navigation End ----------
  ],
};

export default ServersGeneralNavigation;
