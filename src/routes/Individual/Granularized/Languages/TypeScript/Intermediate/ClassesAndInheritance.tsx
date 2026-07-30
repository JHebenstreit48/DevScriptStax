import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClassFeaturesAccessModifiers = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/TypeScript/Intermediate/ClassesAndInheritance/ClassFeaturesAndAccessModifiers'
    )
);
const InheritanceExtends = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/TypeScript/Intermediate/ClassesAndInheritance/InheritanceAndExtends'
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