import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MergingAndConflictResolution = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/MergingAndHistory/MergingAndConflictResolution'));
const RebaseVsMerge = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/MergingAndHistory/RebaseVsMerge'));
const CherryPickAndRevert = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/MergingAndHistory/CherryPickAndRevert'));

const MergingAndHistory: RouteObject[] = [
  {
    path: '/git/advanced/merging/conflicts',
    element: <MergingAndConflictResolution />,
  },
  {
    path: '/git/advanced/merging/rebase-vs-merge',
    element: <RebaseVsMerge />,
  },
  {
    path: '/git/advanced/history/cherry-revert',
    element: <CherryPickAndRevert />,
  },
];

export default MergingAndHistory;
