import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "OOP",
      subpages: [
        {
          name: "Classes & Objects",
          path: "/languages/php/advanced/oop/classes-objects"
        },
        {
          name: "Inheritance & Traits",
          path: "/languages/php/advanced/oop/inheritance-traits"
        }
      ]
    },
    {
      name: "Namespaces & Autoloading",
      subpages: [
        {
          name: "Namespaces",
          path: "/languages/php/advanced/namespaces/namespaces"
        },
        {
          name: "Composer Autoload",
          path: "/languages/php/advanced/namespaces/composer-autoload"
        }
      ]
    },
    {
      name: "Error Handling",
      subpages: [
        {
          name: "Exceptions",
          path: "/languages/php/advanced/error-handling/exceptions"
        },
        {
          name: "Custom Errors",
          path: "/languages/php/advanced/error-handling/custom-errors"
        }
      ]
    },
    {
      name: "Modern Features",
      subpages: [
        {
          name: "Type Declarations",
          path: "/languages/php/advanced/modern/type-declarations"
        },
        {
          name: "Attributes & Enums",
          path: "/languages/php/advanced/modern/attributes-enums"
        }
      ]
    }
  ]
};

export default Advanced;