import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApacheNavigation: Subpage = {
  name: "Apache",
  subpages: [
    // ---------- Apache Fundamentals Navigation Start ----------
    {
      name: "Apache Fundamentals",
      subpages: [
        { name: "Introduction to Apache", path: "/servers/apache/intro" },
        { name: "How Apache Works", path: "/servers/apache/how-it-works" },
        { name: "Apache vs Nginx", path: "/servers/apache/apache-vs-nginx" },
        { name: "Common Use Cases for Apache", path: "/servers/apache/use-cases" },
      ],
    },
    // ---------- Apache Fundamentals Navigation End ----------

    // ---------- Apache Configuration Navigation Start ----------
    {
      name: "Apache Configuration",
      subpages: [
        { name: "Basic Apache Configuration", path: "/servers/apache/configuration/basic" },
        { name: "Configuring Virtual Hosts", path: "/servers/apache/configuration/virtualhosts" },
        { name: "Apache .htaccess Guide", path: "/servers/apache/configuration/htaccess" },
        { name: "Performance Optimization", path: "/servers/apache/configuration/performance" },
      ],
    },
    // ---------- Apache Configuration Navigation End ----------

    // ---------- Apache Modules Navigation Start ----------
    {
      name: "Apache Modules",
      subpages: [
        { name: "Introduction to Apache Modules", path: "/servers/apache/modules/intro" },
        { name: "Commonly Used Modules", path: "/servers/apache/modules/common-modules" },
        { name: "Enabling & Disabling Modules", path: "/servers/apache/modules/enable-disable" },
        { name: "Creating Custom Modules", path: "/servers/apache/modules/custom-modules" },
      ],
    },
    // ---------- Apache Modules Navigation End ----------

    // ---------- Apache Security Navigation Start ----------
    {
      name: "Apache Security",
      subpages: [
        { name: "Apache Security Best Practices", path: "/servers/apache/security/best-practices" },
        { name: "Securing Apache with SSL/TLS", path: "/servers/apache/security/ssl-tls" },
        { name: "Preventing DDoS & Brute Force Attacks", path: "/servers/apache/security/ddos-prevention" },
        { name: "ModSecurity & Web Application Firewall", path: "/servers/apache/security/modsecurity" },
      ],
    },
    // ---------- Apache Security Navigation End ----------
  ],
};

export default ApacheNavigation;
