import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClassFeaturesAccessModifiers = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/TypeScript/Intermediate/ClassesAndInheritance/FeaturesAndAccessModifiers'
    )
);
const InheritanceExtends = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/TypeScript/Intermediate/ClassesAndInheritance/InheritanceExtends'
    )
);

const ClassesAndInheritance: RouteObject[] = [
  {
    path: '/typescript/intermediate/classes/features',
    element: <ClassFeaturesAccessModifiers />,
  },
  {
    path: '/typescript/intermediate/classes/inheritance',
    element: <InheritanceExtends />,
  },
];

export default ClassesAndInheritance;