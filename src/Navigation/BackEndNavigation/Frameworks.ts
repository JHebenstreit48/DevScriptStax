import { Subpage } from "@/Navigation/FrontEndNavigation/NavigationTypes";

const FrameworksNavigation: Subpage = {
  name: "Frameworks",
  subpages: [
    {
      name: "Django",
      subpages: [
        { name: "Django Notes", path: "/django" },
        { name: "Django Code Notes", path: "/django/djangocode" },
      ],
    },
    {
      name: "Express.js",
      subpages: [
        { name: "Express.js Notes", path: "/express" },
        { name: "Express.js Code Notes", path: "/express/expresscode" },
      ],
    },
    {
      name: "Flask",
      subpages: [
        { name: "Flask Notes", path: "/flask" },
        { name: "Flask Code Notes", path: "/flask/flaskcode" },
      ],
    },
    {
      name: "Koa.js",
      subpages: [
        { name: "Koa.js Notes", path: "/koa" },
        { name: "Koa.js Code Notes", path: "/koa/koacode" },
      ],
    },
    {
      name: "MERN",
      subpages: [
        { name: "MERN Notes", path: "/mern" },
        { name: "MERN Code Notes", path: "/mern/merncode" },
      ],
    },
    {
      name: "Node.js",
      subpages: [
        { name: "Node.js Notes", path: "/node" },
        { name: "Node.js Code Notes", path: "/node/nodecode" },
      ],
    },
    {
      name: "Ruby",
      subpages: [
        { name: "Ruby Notes", path: "/ruby" },
        { name: "Ruby Code Notes", path: "/ruby/rubycode" },
        {
          name: "Ruby on Rails",
          subpages: [
            { name: "Ruby on Rails Notes", path: "/ruby/rubyonrails" },
            {
              name: "Ruby on Rails Code Notes",
              path: "/ruby/rubyonrails/rubyonrailscode",
            },
          ],
        },
      ],
    },
    {
      name: "Spring Boot",
      subpages: [
        { name: "Spring Boot Notes", path: "/springboot" },
        { name: "Spring Boot Code Notes", path: "/springboot/springbootcode" },
      ],
    },
    {
      name: "WebSockets",
      subpages: [
        { name: "WebSockets Notes", path: "/websockets" },
        { name: "WebSockets Code Notes", path: "/websockets/websocketscode" },
      ],
    },
  ],
};

export default FrameworksNavigation;
