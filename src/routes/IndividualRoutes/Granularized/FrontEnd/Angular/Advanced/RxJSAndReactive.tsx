import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ObservableBasics = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/RxJSAndReactive/ObservableBasics')
);

const rxJSAndReactive: RouteObject[] = [
  {
    path: '/angular/advanced/rxjs/observables',
    element: <ObservableBasics />,
  },
];

export default rxJSAndReactive;