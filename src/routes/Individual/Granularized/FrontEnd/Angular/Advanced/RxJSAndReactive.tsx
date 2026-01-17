import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ObservableBasics = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/RxJSAndReactive/ObservableBasics')
);
const SubjectsAndBehavior = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/RxJSAndReactive/SubjectsAndBehavior')
);
const RxJSOperators = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/RxJSAndReactive/RxJSOperators'));

const rxJSAndReactive: RouteObject[] = [
  {
    path: '/angular/advanced/rxjs/observables',
    element: <ObservableBasics />,
  },
  {
    path: '/angular/advanced/rxjs/subjects',
    element: <SubjectsAndBehavior />,
  },
  {
    path: '/angular/advanced/rxjs/operators',
    element: <RxJSOperators />,
  },
];

export default rxJSAndReactive;