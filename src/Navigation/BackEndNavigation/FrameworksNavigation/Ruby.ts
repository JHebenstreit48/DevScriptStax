import { Subpage } from "@/Navigation/NavigationTypes";

const RubyNavigation: Subpage = {
  name: "Ruby",
  subpages: [
    {
      name: "Ruby Notes",
      path: "/ruby",
    },
    {
      name: "Ruby Code Notes",
      path: "/ruby/rubycode",
    },
    {
      name: "Ruby on Rails",
      subpages: [
        {
          name: "Ruby on Rails Notes",
          path: "/ruby/rubyonrails",
        },
        {
          name: "Ruby on Rails Code Notes",
          path: "/ruby/rubyonrails/rubyonrailscode",
        },
      ],
    },
  ],
};

export default RubyNavigation;
